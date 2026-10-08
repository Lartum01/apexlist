import { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { LeaderboardTable } from "../components/LeaderboardTable";
import { TrackNav } from "../components/TrackNav";
import { WorldRecordBox } from "../components/WorldRecordBox";
import { cars } from "../data/cars";
import { laps } from "../data/laps";
import { getTrackBySlug } from "../data/tracks";
import { getValidLaps, getWorldRecord, lapsForTrack, rankTrackLaps } from "../utils/leaderboard";

export function TrackPage() {
  const { slug } = useParams();
  const track = slug ? getTrackBySlug(slug) : undefined;
  const [selectedCarId, setSelectedCarId] = useState(cars[0]?.id ?? "");
  const selectedCar = cars.find((car) => car.id === selectedCarId) ?? cars[0];

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

  return (
    <div className="page">
      <h1>{track.name}</h1>
      <p className="lede">
        Laps are sorted fastest to slowest. Points use this car&apos;s independent World Record.
      </p>
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
      <h2 className="section-title">All tracks</h2>
      <TrackNav />
    </div>
  );
}
