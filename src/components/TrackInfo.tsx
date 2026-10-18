import type { Track } from "../data/tracks";

function TrackLayoutSvg({ trackName }: { trackName: string }) {
  return (
    <svg viewBox="0 0 640 420" role="img" aria-label={`${trackName} layout`} className="track-layout-svg">
      <defs>
        <linearGradient id="trackStroke" x1="0%" x2="100%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#f4d35e" />
          <stop offset="20%" stopColor="#d6a0ff" />
          <stop offset="40%" stopColor="#7fd1ff" />
          <stop offset="60%" stopColor="#67f8c1" />
          <stop offset="80%" stopColor="#ffa9a9" />
          <stop offset="100%" stopColor="#f5d76a" />
        </linearGradient>
      </defs>
      <rect x="0" y="0" width="640" height="420" fill="#05080d" />
      <path
        d="M122 280 C90 220, 110 120, 190 110 S300 130, 290 185 S355 220, 365 175 S430 95, 500 130 S560 225, 505 280 S400 340, 290 315 S175 270, 160 235 S140 320, 122 280Z"
        fill="none"
        stroke="url(#trackStroke)"
        strokeWidth="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M155 256 C210 205, 245 185, 260 210 S300 235, 315 215 S350 155, 415 165 S485 240, 472 272"
        fill="none"
        stroke="rgba(255,255,255,0.78)"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <g fill="#f5f5f5" stroke="#20242c" strokeWidth="2">
        <circle cx="153" cy="253" r="7" />
        <circle cx="230" cy="133" r="7" />
        <circle cx="281" cy="186" r="7" />
        <circle cx="355" cy="175" r="7" />
        <circle cx="462" cy="271" r="7" />
        <circle cx="507" cy="134" r="7" />
      </g>
    </svg>
  );
}

export function TrackInfo({
  track,
  ratings,
  location,
}: {
  track: Track;
  ratings?: { bumps?: number; speed?: number; length?: number; payout?: number };
  location?: string;
}) {
  const layoutScore = [ratings?.bumps ?? 1, ratings?.speed ?? 1, ratings?.length ?? 1, ratings?.payout ?? 1];

  return (
    <section className="track-info">
      <div className="track-info-left">
        <div className="vertical-label">TRACK LAYOUT</div>
        <div className="layout-image-wrap">
          <TrackLayoutSvg trackName={track.name} />
        </div>
      </div>

      <div className="track-info-right">
        <div className="location-panel">Location: {location ?? "Unknown"}</div>
        <div className="rating-bar">
          <span className="rating-label">BUMPS:</span>
          <div className="rating-rail">{Array.from({ length: 5 }).map((_, i) => <span key={i} className={`rating-segment ${i < (layoutScore[0] ?? 0) ? "filled" : ""}`} />)}</div>
        </div>
        <div className="rating-bar">
          <span className="rating-label">SPEED:</span>
          <div className="rating-rail">{Array.from({ length: 5 }).map((_, i) => <span key={i} className={`rating-segment ${i < (layoutScore[1] ?? 0) ? "filled" : ""}`} />)}</div>
        </div>
        <div className="rating-bar">
          <span className="rating-label">LENGTH:</span>
          <div className="rating-rail">{Array.from({ length: 5 }).map((_, i) => <span key={i} className={`rating-segment ${i < (layoutScore[2] ?? 0) ? "filled" : ""}`} />)}</div>
        </div>
        <div className="rating-bar">
          <span className="rating-label">PAYOUT:</span>
          <div className="rating-rail">{Array.from({ length: 5 }).map((_, i) => <span key={i} className={`rating-segment ${i < (layoutScore[3] ?? 0) ? "filled" : ""}`} />)}</div>
        </div>
      </div>
    </section>
  );
}
