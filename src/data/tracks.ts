// TRACKS
// Rename a track by changing `name` here. The home page, nav, and track page update automatically.
// Change `slug` to change the URL: /tracks/<slug>
// Lap submissions use this same slug in the `track` field (see laps.ts).

export type Track = {
  id: number;
  name: string;
  slug: string;
};

export const tracks: Track[] = [
  { id: 1, name: "Indianapolis", slug: "indy" },
  { id: 2, name: "Wynford", slug: "wynford" },
  { id: 3, name: "Hockenheim", slug: "hockenheim" },
  { id: 4, name: "Turkey", slug: "turkey" },
  { id: 5, name: "Silverstone", slug: "silverstone" },
  { id: 6, name: "Baku", slug: "baku" },
  { id: 7, name: "Czechia", slug: "czechia" },
  { id: 8, name: "Winter Park", slug: "winterpark" },
  { id: 9, name: "Mexico", slug: "mexico" },
  { id: 10, name: "Zandvoort", slug: "zandvoort" },
  { id: 11, name: "Saitama", slug: "saitama" },
  { id: 12, name: "Magny-Cours", slug: "france" },
  { id: 13, name: "Miami", slug: "miami" },
  { id: 14, name: "Vegas", slug: "vegas" },
  { id: 15, name: "Qatar", slug: "qatar" },
  { id: 16, name: "Australia", slug: "australia" },
  { id: 17, name: "Monza", slug: "monza" },
  { id: 18, name: "Abu Dhabi", slug: "abudhabi" },
  { id: 19, name: "Montreal", slug: "montreal" },
];

export function getTrackBySlug(slug: string): Track | undefined {
  return tracks.find((track) => track.slug === slug);
}
