import type { RankedLap } from "../utils/leaderboard";

export function LeaderboardTable({ rows }: { rows: RankedLap[] }) {
  if (rows.length === 0) {
    return <div className="empty">No valid laps on this track yet.</div>;
  }

  return (
    <div className="table-wrap">
      <table>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Driver</th>
            <th>Car</th>
            <th>Lap Time</th>
            <th>Points</th>
            <th>Video</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={`${row.driver}-${row.car}-${row.time}-${row.rank}`}>
              <td className={`rank rank-${row.rank}`}>{row.rank}</td>
              <td>{row.driver}</td>
              <td>{row.carName}</td>
              <td className="time">{row.time}</td>
              <td className="points">{row.pointsLabel}</td>
              <td>
                {row.youtube ? (
                  <a
                    className="video-link"
                    href={row.youtube}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Video
                  </a>
                ) : (
                  <span className="muted">-</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
