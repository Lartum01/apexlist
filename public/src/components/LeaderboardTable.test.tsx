import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { describe, expect, it } from "vitest";
import { TrackPage } from "../pages/TrackPage";
import { LeaderboardTable } from "./LeaderboardTable";
import type { RankedLap } from "../utils/leaderboard";

function row(partial: Partial<RankedLap>): RankedLap {
  return {
    driver: "Alex",
    track: "monaco",
    car: "car-1",
    carName: "Car 1",
    multiplier: 1,
    time: "1:23.456",
    timeMs: 83456,
    youtube: null,
    rank: 1,
    points: 100,
    pointsLabel: "100.0",
    ...partial,
  };
}

describe("LeaderboardTable", () => {
  it("renders a video link when a YouTube URL exists", () => {
    render(
      <LeaderboardTable
        rows={[row({ youtube: "https://youtu.be/example", driver: "Alex" })]}
      />
    );
    const link = screen.getByRole("link", { name: "Video" });
    expect(link).toHaveAttribute("href", "https://youtu.be/example");
    expect(link).toHaveAttribute("target", "_blank");
  });

  it("does not break when a YouTube URL is missing", () => {
    render(<LeaderboardTable rows={[row({ youtube: null })]} />);
    expect(screen.queryByRole("link", { name: "Video" })).toBeNull();
    expect(screen.getByText("-")).toBeInTheDocument();
  });

  it("shows the renamed car name from the ranked row", () => {
    render(<LeaderboardTable rows={[row({ carName: "Shadow GT" })]} />);
    expect(screen.getByText("Shadow GT")).toBeInTheDocument();
  });

  it("handles an empty leaderboard", () => {
    render(<LeaderboardTable rows={[]} />);
    expect(screen.getByText("No valid laps on this track yet.")).toBeInTheDocument();
  });
});

describe("TrackPage names", () => {
  it("shows the track name from tracks.ts on the page", () => {
    render(
      <MemoryRouter initialEntries={["/tracks/indy"]}>
        <Routes>
          <Route path="/tracks/:slug" element={<TrackPage />} />
        </Routes>
      </MemoryRouter>
    );
    expect(screen.getByRole("heading", { name: "Indianapolis" })).toBeInTheDocument();
  });

  it("filters laps and shows the selected car's world record", () => {
    render(
      <MemoryRouter initialEntries={["/tracks/miami"]}>
        <Routes>
          <Route path="/tracks/:slug" element={<TrackPage />} />
        </Routes>
      </MemoryRouter>
    );

    fireEvent.click(screen.getByRole("button", { name: "2023" }));
    expect(screen.getAllByText("Lartum").length).toBeGreaterThan(0);
    expect(screen.getByText("2023 World Record")).toBeInTheDocument();
    expect(screen.getByText("80.0")).toBeInTheDocument();
    fireEvent.click(screen.getByRole("button", { name: "2026" }));
    expect(screen.queryAllByText("Lartum")).toHaveLength(0);
    expect(screen.getByText("2026 World Record")).toBeInTheDocument();
  });
});
