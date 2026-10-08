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

        // Adjust extension here if you use .jpg or another format.
        const bgUrl = `/bgimg/${track.slug}.png`;

        return (
          <Link
            key={track.slug}
            className="track-card"
            to={`/tracks/${track.slug}`}
          >
            <div
              className="track-card-image"
              style={{ backgroundImage: `url(${bgUrl})` }}
            >
              <div className="track-card-overlay">
                <div className="track-card-name">
                  <TrackName name={track.name} countryCode={track.countryCode} />
                </div>
              </div>
            </div>
            <div className="track-card-info">
              <div className="meta">
                {carCount ? `${carCount} car${carCount === 1 ? "" : "s"} with laps` : "No laps yet"}
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
