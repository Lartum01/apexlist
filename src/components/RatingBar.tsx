import React from "react";

export function clampRating(v?: number) {
  const n = Number.isFinite(v as number) ? Math.round(v as number) : 3;
  return Math.min(5, Math.max(1, n));
}

export function RatingBar({ label, rating }: { label: string; rating?: number }) {
  const value = clampRating(rating);
  return (
    <div className="rating-bar">
      <div className="rating-label">{label}</div>
      <div className="rating-rail" aria-hidden>
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className={`rating-segment ${i < value ? "filled" : ""}`} />
        ))}
      </div>
    </div>
  );
}
