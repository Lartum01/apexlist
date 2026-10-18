import type { WorldRecord } from "../utils/leaderboard";

export function WorldRecordBox({
  record,
  carName,
}: {
  record: WorldRecord | null;
  carName: string;
}) {
  if (!record) {
    return (
      <section className="wr-box">
        <div className="wr-label">{carName} World Record</div>
        <div className="wr-time">—</div>
        <div className="wr-meta">No valid laps submitted yet.</div>
      </section>
    );
  }

  return (
    <section className="wr-box">
      <div className="wr-label">{record.carName} World Record</div>
      <div className="wr-time">{record.time}</div>
      <div className="wr-meta">{record.driver}</div>
    </section>
  );
}
