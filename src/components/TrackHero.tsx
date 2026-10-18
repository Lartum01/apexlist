import { useState } from "react";
import type { Track } from "../data/tracks";
import { TrackName } from "./TrackName";

function bannerUrlForTrack(track: Track) {
  return `/bgimg/${track.slug}.png`;
}

export function TrackHero({ track }: { track: Track }) {
  const [hasBg, setHasBg] = useState(true);
  const banner = bannerUrlForTrack(track);

  return (
    <div
      className="track-hero"
      style={{
        backgroundImage: hasBg ? `url(${banner})` : undefined,
        backgroundColor: "#0b1115",
      }}
      onError={() => setHasBg(false)}
    >
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
