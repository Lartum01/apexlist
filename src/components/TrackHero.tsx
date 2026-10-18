import React from "react";
import type { Track } from "../data/tracks";
import { TrackName } from "./TrackName";

function bannerUrlForTrack(track: Track) {
  return `/layouts/${track.slug}.webp`;
}

export function TrackHero({ track }: { track: Track }) {
  const banner = bannerUrlForTrack(track);
  return (
    <div className="track-hero" style={{ backgroundImage: `url(${banner})` }}>
      <div className="track-hero-overlay">
        <div className="track-hero-inner">
          <h1 className="track-hero-title">
            <TrackName name={track.name} countryCode={track.countryCode} />
          </h1>
        </div>
      </div>
    </div>
  );
}
