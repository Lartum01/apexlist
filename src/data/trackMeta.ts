export type TrackRatings = {
  bumps?: number;
  speed?: number;
  length?: number;
  payout?: number;
};

const trackMeta: Record<
  string,
  {
    location?: string;
    ratings?: TrackRatings;
  }
> = {
  wynford: {
    location: "Ontario, Canada",
    ratings: { bumps: 2, speed: 5, length: 3, payout: 4 },
  },
  indy: {
    location: "Indiana, USA",
    ratings: { bumps: 1, speed: 5, length: 4, payout: 3 },
  },
  hockenheim: {
    location: "Baden-Württemberg, Germany",
    ratings: { bumps: 3, speed: 4, length: 3, payout: 2 },
  },
  miami: {
    location: "Florida, USA",
    ratings: { bumps: 2, speed: 4, length: 4, payout: 3 },
  },
  silverstone: {
    location: "England, United Kingdom",
    ratings: { bumps: 2, speed: 5, length: 5, payout: 4 },
  },
  monza: {
    location: "Lombardy, Italy",
    ratings: { bumps: 1, speed: 5, length: 3, payout: 4 },
  },
  vegas: {
    location: "Nevada, USA",
    ratings: { bumps: 2, speed: 5, length: 4, payout: 5 },
  },
  qatar: {
    location: "Doha, Qatar",
    ratings: { bumps: 3, speed: 4, length: 5, payout: 4 },
  },
};

export default trackMeta;
