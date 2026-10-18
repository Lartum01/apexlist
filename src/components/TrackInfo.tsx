import React from "react";
import type { Track } from "../data/tracks";
import { RatingBar } from "./RatingBar";

export function TrackInfo({
  track,
  ratings,
  location,
}: {
  track: Track;
  ratings?: { bumps?: number; speed?: number; length?: number; payout?: number };
  location?: string;
}) {
  const layoutSrc = `/layouts/${track.slug}.webp`;
  return (
    <section className="track-info">
      <div className="track-info-left">
        <div className="vertical-label">TRACK LAYOUT</div>
        <div className="layout-image-wrap">
          <img
            src={layoutSrc}
            alt={`${track.name} layout`}
            onError={(e) => {
              // replace with 1x1 transparent gif so the browser doesn't keep trying to load
              (e.currentTarget as HTMLImageElement).src =
                "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
            }}
          />
        </div>
      </div>

      <div className="track-info-right">
        <div className="location-panel">{location ?? "Location unknown"}</div>
        <RatingBar label="BUMPS:" rating={ratings?.bumps} />
        <RatingBar label="SPEED:" rating={ratings?.speed} />
        <RatingBar label="LENGTH:" rating={ratings?.length} />
        <RatingBar label="PAYOUT:" rating={ratings?.payout} />
      </div>
    </section>
  );
}
