import { Link } from "react-router-dom";
import { TrackName } from "./TrackName";
import { tracks } from "../data/tracks";
import { laps } from "../data/laps";
import { getValidLaps, lapsForTrack } from "../utils/leaderboard";

const validLaps = getValidLaps(laps);

export function TrackNav() {
  return (
    <div className="track-grid">
      {tracks.map((track) => {
        const carCount = new Set(
          lapsForTrack(validLaps, track.slug).map((lap) => lap.car)
        ).size;
        return (
          <Link key={track.slug} className="track-card" to={`/tracks/${track.slug}`}>
            <div className="name">
              <TrackName name={track.name} countryCode={track.countryCode} />
            </div>
            <div className="meta">
              {carCount ? `${carCount} car${carCount === 1 ? "" : "s"} with laps` : "No laps yet"}
            </div>
          </Link>
        );
      })}
    </div>
  );
}
