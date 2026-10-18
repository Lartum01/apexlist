import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";
import { laps } from "../data/laps";
import { tracks } from "../data/tracks";
import { getGlobalLeaderboard } from "../utils/leaderboard";
import { GlobalPage } from "./GlobalPage";

describe("GlobalPage", () => {
  it("hides zero-point track pills without changing underlying totals or track data", () => {
    const row = getGlobalLeaderboard(laps).find((item) => item.driver === "Lartum");
    expect(row?.totalPoints).toBe(80);
    expect(row?.perTrack).toHaveLength(tracks.length);
    expect(row?.perTrack.find((track) => track.slug === "indy")?.points).toBe(0);

    render(
      <MemoryRouter>
        <GlobalPage />
      </MemoryRouter>
    );

    expect(screen.getByRole("heading", { name: "Lartum — Total: 80.0" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Miami: 80.0" })).toBeInTheDocument();
    expect(screen.queryByRole("link", { name: "Indianapolis: 0.0" })).not.toBeInTheDocument();
  });
});
