import { useMemo } from "react";
import { Link } from "react-router-dom";
import { laps } from "../data/laps";
import { getGlobalLeaderboard } from "../utils/leaderboard";

export function GlobalPage() {
  const rows = useMemo(() => getGlobalLeaderboard(laps), []);

  return (
    <div className="page global-page">
      <header className="global-heading">
        <span className="heading-mark" aria-hidden="true">
          <i />
          <i />
        </span>
        <div>
          <h1>Leaderboard</h1>
          <p className="lede">
            Total points are the sum of each driver's best score on every track.
          </p>
        </div>
      </header>

      {rows.length === 0 ? (
        <div className="empty">No valid laps have been submitted yet.</div>
      ) : (
        <>
          <ol className="global-leaderboard" aria-label="Leaderboard rankings">
            {rows.map((row) => (
              <li
                className={`leaderboard-row rank-${row.rank}`}
                key={row.driver}
                value={row.rank}
              >
                <div className="leaderboard-rank" aria-label={`Rank ${row.rank}`}>
                  <span className="rank-number">{row.rank}</span>
                </div>
                <div className="driver-avatar" aria-hidden="true">
                  <svg viewBox="0 0 64 64" focusable="false">
                    <circle cx="32" cy="21" r="12" />
                    <path d="M9 57c0-11.6 10.3-19 23-19s23 7.4 23 19v2H9z" />
                  </svg>
                </div>
                <div className="leaderboard-driver">
                  <span className="driver-name" title={row.driver}>{row.driver}</span>
                </div>
                <div className="leaderboard-points">
                  <span className="points-label">Points</span>
                  <span className="points-value">{row.pointsLabel}</span>
                </div>
              </li>
            ))}
          </ol>

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
                        {track.name}: {track.pointsLabel}
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
