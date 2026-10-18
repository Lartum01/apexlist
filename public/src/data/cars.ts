// CARS
// Rename a car by changing `name` here. Every leaderboard row that uses this id updates automatically.
// Lap submissions use `id` in the `car` field (see laps.ts).

export type Car = {
  id: string;
  name: string;
  multiplier?: number;
};

export const cars: Car[] = [
  { id: "f26", name: "2026", multiplier: 1.0 },
  { id: "f25", name: "2025", multiplier: 1.0 },
  { id: "f24", name: "2024", multiplier: 0.8 },
  { id: "f23", name: "2023", multiplier: 0.8 },
  { id: "f21", name: "2021", multiplier: 1.0 },
  { id: "f16", name: "2016", multiplier: 0.5 },
  { id: "f10", name: "2010", multiplier: 0.5 },
  { id: "f07", name: "2007", multiplier: 0.5 },
  { id: "f03", name: "2003", multiplier: 0.5 },
  { id: "f92", name: "1992", multiplier: 0.2 },
];
