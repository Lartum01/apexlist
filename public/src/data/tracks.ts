// TRACKS
// Rename a track by changing `name` here. The home page, nav, and track page update automatically.
// Change `slug` to change the URL: /tracks/<slug>
// Change `countryCode` to update the flag (lowercase 3-letter code, e.g. "jpn", "ger", "usa").
// Lap submissions use this same slug in the `track` field (see laps.ts).

export const countryRegions = {
  are: "AE",
  aus: "AU",
  aze: "AZ",
  can: "CA",
  cze: "CZ",
  fra: "FR",
  ger: "DE",
  gbr: "GB",
  ita: "IT",
  jpn: "JP",
  mex: "MX",
  nld: "NL",
  qat: "QA",
  rus: "RU",
  tur: "TR",
  usa: "US",
} as const;

export type CountryCode = keyof typeof countryRegions;

export type TrackRatingKey = "bumps" | "speed" | "length" | "payout";

export type TrackRatings = {
  bumps: number;
  speed: number;
  length: number;
  payout: number;
};

export type Track = {
  id: number;
  name: string;
  slug: string;
  countryCode: CountryCode;
  location?: string;
  ratings?: Partial<TrackRatings>;
  bannerImage?: string;
  layoutImage?: string;
};

export const defaultTrackRatings: TrackRatings = {
  bumps: 3,
  speed: 3,
  length: 3,
  payout: 3,
};

export const tracks: Track[] = [
  { id: 1, name: "Indianapolis", slug: "indy", countryCode: "usa", location: "Indianapolis, United States", ratings: { bumps: 3, speed: 5, length: 2, payout: 3 } },
  { id: 2, name: "Wynford", slug: "wynford", countryCode: "can", location: "Ontario, Canada", ratings: { bumps: 4, speed: 2, length: 1, payout: 5 } },
  { id: 3, name: "Hockenheim", slug: "hockenheim", countryCode: "ger", location: "Hockenheim, Germany", ratings: { bumps: 1, speed: 5, length: 1, payout: 5 } },
  { id: 4, name: "Turkey", slug: "turkey", countryCode: "tur", location: "Istanbul, Turkey", ratings: { bumps: 5, speed: 3, length: 2, payout: 3 } },
  { id: 5, name: "Silverstone", slug: "silverstone", countryCode: "gbr", location: "Silverstone, United Kingdom", ratings: { bumps: 4, speed: 4, length: 5, payout: 1 } },
  { id: 6, name: "Baku", slug: "baku", countryCode: "aze", location: "Baku, Azerbaijan", ratings: { bumps: 3, speed: 5, length: 3, payout: 5 } },
  { id: 7, name: "Czechia", slug: "czechia", countryCode: "cze", location: "Brno, Czech Republic", ratings: { bumps: 3, speed: 2, length: 2, payout: 4 } },
  { id: 8, name: "Winter Park", slug: "winterpark", countryCode: "rus", location: "Winter Park, Russia", ratings: { bumps: 1, speed: 4, length: 4, payout: 2 } },
  { id: 9, name: "Mexico", slug: "mexico", countryCode: "mex", location: "Mexico City, Mexico", ratings: { bumps: 1, speed: 5, length: 3, payout: 4 } },
  { id: 10, name: "Zandvoort", slug: "zandvoort", countryCode: "nld", location: "Zandvoort, Netherlands", ratings: { bumps: 5, speed: 3, length: 1, payout: 3 } },
  { id: 11, name: "Saitama", slug: "saitama", countryCode: "jpn", location: "Saitama, Japan", ratings: { bumps: 2, speed: 4, length: 2, payout: 3 } },
  { id: 12, name: "Magny-Cours", slug: "france", countryCode: "fra", location: "Magny-Cours, France", ratings: { bumps: 3, speed: 4, length: 1, payout: 4 } },
  { id: 13, name: "Miami", slug: "miami", countryCode: "usa", location: "Miami, United States", ratings: { bumps: 3, speed: 5, length: 4, payout: 2 } },
  { id: 14, name: "Las Vegas", slug: "vegas", countryCode: "usa", location: "Las Vegas, United States", ratings: { bumps: 1, speed: 5, length: 5, payout: 2 } },
  { id: 15, name: "Qatar", slug: "qatar", countryCode: "qat", location: "Lusail, Qatar", ratings: { bumps: 1, speed: 3, length: 5, payout: 2 } },
  { id: 16, name: "Australia", slug: "australia", countryCode: "aus", location: "Melbourne, Australia", ratings: { bumps: 1, speed: 4, length: 3, payout: 4 } },
  { id: 17, name: "Monza", slug: "monza", countryCode: "ita", location: "Monza, Italy", ratings: { bumps: 3, speed: 5, length: 3, payout: 1 } },
  { id: 18, name: "Abu Dhabi", slug: "abudhabi", countryCode: "are", location: "Abu Dhabi, United Arab Emirates", ratings: { bumps: 2, speed: 4, length: 4, payout: 1 } },
  { id: 19, name: "Montreal", slug: "montreal", countryCode: "can", location: "Montréal, Canada", ratings: { bumps: 2, speed: 4, length: 2, payout: 1 } },
];

export function getCountryName(countryCode: CountryCode): string {
  return (
    new Intl.DisplayNames(["en"], { type: "region" }).of(countryRegions[countryCode]) ??
    countryCode
  );
}

export function validateTrackRating(
  value: number | undefined,
  key: TrackRatingKey
): number {
  const fallback = defaultTrackRatings[key];
  const safeValue = value ?? fallback;

  if (!Number.isInteger(safeValue)) {
    console.warn(`Invalid track rating for ${key}: expected integer 1-5, received ${safeValue}. Using ${fallback}.`);
    return fallback;
  }

  if (safeValue < 1 || safeValue > 5) {
    console.warn(`Invalid track rating for ${key}: ${safeValue} is outside the 1-5 range. Using ${fallback}.`);
    return fallback;
  }

  return safeValue;
}

export function getTrackRatings(track: Track | undefined): TrackRatings {
  if (!track) {
    return { ...defaultTrackRatings };
  }

  return {
    bumps: validateTrackRating(track.ratings?.bumps, "bumps"),
    speed: validateTrackRating(track.ratings?.speed, "speed"),
    length: validateTrackRating(track.ratings?.length, "length"),
    payout: validateTrackRating(track.ratings?.payout, "payout"),
  };
}

export function getTrackBannerUrl(track: Track): string {
  return track.bannerImage || `/bgimg/${track.slug}.png`;
}

export function getTrackLayoutUrl(track: Track): string {
  if (track.layoutImage) {
    return track.layoutImage;
  }

  // Layout assets are WebP files keyed by track slug in public/layouts.
  return `/layouts/${track.slug}.webp`;
}

export function getTrackBySlug(slug: string): Track | undefined {
  return tracks.find((track) => track.slug === slug);
}
