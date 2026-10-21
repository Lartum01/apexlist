import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { afterEach, describe, expect, it, vi } from "vitest";
import { laps } from "../data/laps";
import { tracks } from "../data/tracks";
import { getGlobalLeaderboard } from "../utils/leaderboard";
import { GlobalPage } from "./GlobalPage";

afterEach(() => {
  vi.restoreAllMocks();
});

describe("GlobalPage", () => {
  it("renders ranked rows and hides zero-point track pills without changing totals", async () => {
    const rows = getGlobalLeaderboard(laps);
    const row = rows.find((item) =>
      item.perTrack.some((track) => track.points > 0) &&
      item.perTrack.some((track) => track.points === 0)
    );
    expect(row).toBeDefined();
    expect(row?.perTrack).toHaveLength(tracks.length);
    const fetchMock = vi.spyOn(globalThis, "fetch").mockResolvedValue(
      new Response(
        JSON.stringify({
          avatars: [{ username: row!.driver, url: "https://tr.rbxcdn.com/avatar.png" }],
        }),
        { status: 200, headers: { "Content-Type": "application/json" } }
      )
    );

    const { container } = render(
      <MemoryRouter>
        <GlobalPage />
      </MemoryRouter>
    );

    expect(screen.getByRole("list", { name: "Leaderboard rankings" })).toBeInTheDocument();
    expect(container.querySelector(".rank-number")).toHaveTextContent("1");
    expect(container.querySelector(".rank-suffix")).toBeNull();
    expect(screen.getByText(row!.driver, { selector: ".driver-name" })).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: `${row!.driver} — Total: ${row!.pointsLabel}` })
    ).toBeInTheDocument();

    const scoredTrack = row!.perTrack.find((track) => track.points > 0)!;
    const zeroTrack = row!.perTrack.find((track) => track.points === 0)!;
    expect(
      screen.getByRole("link", { name: `${scoredTrack.name}: ${scoredTrack.pointsLabel}` })
    ).toBeInTheDocument();
    expect(
      screen.queryByRole("link", { name: `${zeroTrack.name}: ${zeroTrack.pointsLabel}` })
    ).not.toBeInTheDocument();

    expect(fetchMock).toHaveBeenCalledWith(
      expect.stringContaining(`/api/roblox-avatars?username=${encodeURIComponent(row!.driver)}`),
      expect.objectContaining({ signal: expect.any(AbortSignal) })
    );
    await waitFor(() => {
      expect(container.querySelector(".driver-avatar-image")).toHaveAttribute(
        "src",
        "https://tr.rbxcdn.com/avatar.png"
      );
    });
  });
});
