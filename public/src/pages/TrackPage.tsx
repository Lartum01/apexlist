import { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { LeaderboardTable } from "../components/LeaderboardTable";
import { TrackName } from "../components/TrackName";
import { WorldRecordBox } from "../components/WorldRecordBox";
import { cars } from "../data/cars";
import { laps } from "../data/laps";
import {
  getTrackBannerUrl,
  getTrackBySlug,
  getTrackLayoutUrl,
  getTrackRatings,
} from "../data/tracks";
import { getValidLaps, getWorldRecord, lapsForTrack, rankTrackLaps } from "../utils/leaderboard";

function RatingBar({ label, value }: { label: string; value: number }) {
  const segments = Array.from({ length: 5 }, (_, index) => index < value);

  return (
    <div className="rating-bar" aria-label={`${label} rating ${value} out of 5`}>
      <div className="rating-label">{label}</div>
      <div className="rating-segments" role="img" aria-hidden="true">
        {segments.map((isFilled, index) => (
          <span
            key={`${label}-${index}`}
            className={`rating-segment${isFilled ? " filled" : ""}`}
          />
        ))}
      </div>
    </div>
  );
}

export function TrackPage() {
  const { slug } = useParams();
  const track = slug ? getTrackBySlug(slug) : undefined;
  const [selectedCarId, setSelectedCarId] = useState(cars[0]?.id ?? "");
  const selectedCar = cars.find((car) => car.id === selectedCarId) ?? cars[0];

  const ratings = track ? getTrackRatings(track) : null;

  const { rows, record } = useMemo(() => {
    if (!track || !selectedCar) {
      return { rows: [], record: null };
    }
    const valid = lapsForTrack(getValidLaps(laps), track.slug);
    return {
      rows: rankTrackLaps(valid, selectedCar.id),
      record: getWorldRecord(valid, selectedCar.id),
    };
  }, [track, selectedCar]);

  if (!track) {
    return (
      <div className="page">
        <h1>Track not found</h1>
        <p className="lede">That URL does not match a slug in src/data/tracks.ts.</p>
        <Link to="/">Back to home</Link>
      </div>
    );
  }

  const bannerUrl = getTrackBannerUrl(track);
  const layoutUrl = getTrackLayoutUrl(track);

  return (
    <div className="page track-page">
      <header
        className="track-hero"
        style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${bannerUrl})` }}
      >
        <div className="track-hero-overlay">
          <h1 className="track-hero-title">
            <TrackName name={track.name} countryCode={track.countryCode} />
          </h1>
        </div>
      </header>

      <section className="track-info-layout">
        <div className="track-layout-panel">
          <div className="track-layout-label">TRACK LAYOUT</div>
          <img
            className="track-layout-image"
            src={layoutUrl}
            alt={`${track.name} layout map`}
            onError={(event) => {
              const target = event.currentTarget;
              target.onerror = null;
              target.src = "/PALL.webp";
            }}
          />
        </div>

        <div className="track-stats-panel">
          <div className="track-location-panel">{track.location || "Track location unavailable"}</div>
          <div className="track-rating-grid">
            {ratings && (
              <>
                <RatingBar label="Bumps" value={ratings.bumps} />
                <RatingBar label="Speed" value={ratings.speed} />
                <RatingBar label="Length" value={ratings.length} />
                <RatingBar label="Payout" value={ratings.payout} />
              </>
            )}
          </div>
        </div>
      </section>

      <div className="car-tabs" role="group" aria-label="Filter leaderboard by car">
        {cars.map((car) => (
          <button
            key={car.id}
            type="button"
            className={`car-tab${car.id === selectedCar?.id ? " active" : ""}`}
            aria-pressed={car.id === selectedCar?.id}
            onClick={() => setSelectedCarId(car.id)}
          >
            {car.name}
          </button>
        ))}
      </div>
      {selectedCar && <WorldRecordBox record={record} carName={selectedCar.name} />}
      <LeaderboardTable rows={rows} />
    </div>
  );
}
