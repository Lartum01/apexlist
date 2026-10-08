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

export type Track = {
  id: number;
  name: string;
  slug: string;
  countryCode: CountryCode;
};

export const tracks: Track[] = [
  { id: 1, name: "Indianapolis", slug: "indy", countryCode: "usa" },
  { id: 2, name: "Wynford", slug: "wynford", countryCode: "can" },
  { id: 3, name: "Hockenheim", slug: "hockenheim", countryCode: "ger" },
  { id: 4, name: "Turkey", slug: "turkey", countryCode: "tur" },
  { id: 5, name: "Silverstone", slug: "silverstone", countryCode: "gbr" },
  { id: 6, name: "Baku", slug: "baku", countryCode: "aze" },
  { id: 7, name: "Czechia", slug: "czechia", countryCode: "cze" },
  { id: 8, name: "Winter Park", slug: "winterpark", countryCode: "rus" },
  { id: 9, name: "Mexico", slug: "mexico", countryCode: "mex" },
  { id: 10, name: "Zandvoort", slug: "zandvoort", countryCode: "nld" },
  { id: 11, name: "Saitama", slug: "saitama", countryCode: "jpn" },
  { id: 12, name: "Magny-Cours", slug: "france", countryCode: "fra" },
  { id: 13, name: "Miami", slug: "miami", countryCode: "usa" },
  { id: 14, name: "Vegas", slug: "vegas", countryCode: "usa" },
  { id: 15, name: "Qatar", slug: "qatar", countryCode: "qat" },
  { id: 16, name: "Australia", slug: "australia", countryCode: "aus" },
  { id: 17, name: "Monza", slug: "monza", countryCode: "ita" },
  { id: 18, name: "Abu Dhabi", slug: "abudhabi", countryCode: "are" },
  { id: 19, name: "Montreal", slug: "montreal", countryCode: "can" },
];

export function getCountryName(countryCode: CountryCode): string {
  return (
    new Intl.DisplayNames(["en"], { type: "region" }).of(countryRegions[countryCode]) ??
    countryCode
  );
}

export function getTrackBySlug(slug: string): Track | undefined {
  return tracks.find((track) => track.slug === slug);
}
