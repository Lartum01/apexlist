import { TrackNav } from "../components/TrackNav";

export function HomePage() {
  return (
    <div className="page">
      <h1>Leaderboard</h1>
      <p className="lede">
        Pick a track to see each car&apos;s ranked laps and independent World Record, or open the
        global leaderboard for combined points across every track and car.
      </p>
      <TrackNav />
    </div>
  );
}
