import { useMemo } from "react";
import { Link } from "react-router-dom";
import { TrackName } from "../components/TrackName";
import { laps } from "../data/laps";
import { getGlobalLeaderboard } from "../utils/leaderboard";

export function GlobalPage() {
  const rows = useMemo(() => getGlobalLeaderboard(laps), []);

  return (
    <div className="page">
      <h1>Global Leaderboard</h1>
      <p className="lede">
        Total points are the sum of each driver's best score on every track.
      </p>

      {rows.length === 0 ? (
        <div className="empty">No valid laps have been submitted yet.</div>
      ) : (
        <>
          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>Rank</th>
                  <th>Driver</th>
                  <th>Total Points</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => (
                  <tr key={row.driver}>
                    <td className={`rank rank-${row.rank}`}>{row.rank}</td>
                    <td>{row.driver}</td>
                    <td className="points">{row.pointsLabel}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {rows.map((row) => (
            <section className="global-detail" key={`${row.driver}-detail`}>
              <h2>
                {row.driver} — Total: {row.pointsLabel}
              </h2>
              <div className="track-pills">
                {row.perTrack
                  .filter((track) => track.points !== 0)
                  .map((track) => {
                    return (
                      <Link key={track.slug} className="pill" to={`/tracks/${track.slug}`}>
                        <TrackName name={track.name} countryCode={track.countryCode} />
                        : {track.pointsLabel}
                      </Link>
                    );
                  })}
              </div>
            </section>
          ))}
        </>
      )}
    </div>
  );
}
