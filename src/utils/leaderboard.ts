import { cars, type Car } from "../data/cars";
import { type Lap } from "../data/laps";
import { tracks, type Track } from "../data/tracks";
import { calculatePoints, formatPoints } from "./scoring";
import { parseTimeToMs } from "./time";

export type ValidLap = {
  driver: string;
  track: string;
  car: string;
  carName: string;
  multiplier: number;
  time: string;
  timeMs: number;
  youtube: string | null;
};

export type RankedLap = ValidLap & {
  rank: number;
  points: number;
  pointsLabel: string;
};

export type WorldRecord = {
  driver: string;
  carId: string;
  carName: string;
  multiplier: number;
  time: string;
  timeMs: number;
};

export type GlobalRow = {
  rank: number;
  driver: string;
  totalPoints: number;
  pointsLabel: string;
  perTrack: { slug: string; name: string; points: number; pointsLabel: string }[];
};

function youtubeOrNull(value: string | undefined): string | null {
  if (!value) {
    return null;
  }

  const trimmed = value.trim();
  if (!trimmed) {
    return null;
  }

  try {
    const url = new URL(trimmed);
    if (url.protocol !== "http:" && url.protocol !== "https:") {
      return null;
    }
    return trimmed;
  } catch {
    return null;
  }
}

export function validateLap(
  lap: Lap,
  trackList: Track[] = tracks,
  carList: Car[] = cars
): ValidLap | null {
  if (!lap || typeof lap.driver !== "string" || lap.driver.trim() === "") {
    return null;
  }

  const track = trackList.find((item) => item.slug === lap.track);
  if (!track) {
    return null;
  }

  const car = carList.find((item) => item.id === lap.car);
  if (!car) {
    return null;
  }

  const timeMs = parseTimeToMs(lap.time);
  if (timeMs === null) {
    return null;
  }

  return {
    driver: lap.driver.trim(),
    track: track.slug,
    car: car.id,
    carName: car.name,
    multiplier: car.multiplier ?? 1,
    time: lap.time.trim(),
    timeMs,
    youtube: youtubeOrNull(lap.youtube),
  };
}

export function getValidLaps(
  allLaps: Lap[],
  trackList: Track[] = tracks,
  carList: Car[] = cars
): ValidLap[] {
  const valid: ValidLap[] = [];

  for (const lap of allLaps) {
    const parsed = validateLap(lap, trackList, carList);
    if (parsed) {
      valid.push(parsed);
    }
  }

  return valid;
}

export function lapsForTrack(validLaps: ValidLap[], slug: string): ValidLap[] {
  return validLaps.filter((lap) => lap.track === slug);
}

export function getWorldRecord(trackLaps: ValidLap[], carId: string): WorldRecord | null {
  const carLaps = trackLaps.filter((lap) => lap.car === carId);
  if (carLaps.length === 0) {
    return null;
  }

  let fastest = carLaps[0];
  for (const lap of carLaps) {
    if (lap.timeMs < fastest.timeMs) {
      fastest = lap;
    }
  }

  return {
    driver: fastest.driver,
    carId: fastest.car,
    carName: fastest.carName,
    multiplier: fastest.multiplier,
    time: fastest.time,
    timeMs: fastest.timeMs,
  };
}

export function rankTrackLaps(trackLaps: ValidLap[], carId: string): RankedLap[] {
  const sorted = trackLaps.filter((lap) => lap.car === carId).sort((a, b) => {
    if (a.timeMs !== b.timeMs) {
      return a.timeMs - b.timeMs;
    }
    return a.driver.localeCompare(b.driver);
  });

  const wr = getWorldRecord(sorted, carId);
  const wrMs = wr?.timeMs ?? 0;

  return sorted.map((lap, index) => {
    const points = wr ? calculatePoints(lap.timeMs, wrMs, lap.multiplier) : 0;
    return {
      ...lap,
      rank: index + 1,
      points,
      pointsLabel: formatPoints(points),
    };
  });
}

export function getGlobalLeaderboard(
  allLaps: Lap[],
  trackList: Track[] = tracks,
  carList: Car[] = cars
): GlobalRow[] {
  const valid = getValidLaps(allLaps, trackList, carList);
  const drivers = new Set(valid.map((lap) => lap.driver));
  const rows: Omit<GlobalRow, "rank">[] = [];

  for (const driver of drivers) {
    let totalPoints = 0;
    const perTrack: GlobalRow["perTrack"] = [];

    for (const track of trackList) {
      const onTrack = lapsForTrack(valid, track.slug);
      let trackPoints = 0;

      for (const car of carList) {
        const wr = getWorldRecord(onTrack, car.id);
        const driverCarLaps = onTrack.filter(
          (lap) => lap.car === car.id && lap.driver === driver
        );
        const best = getWorldRecord(driverCarLaps, car.id);
        const points =
          wr && best ? calculatePoints(best.timeMs, wr.timeMs, best.multiplier) : 0;
        trackPoints += points;
      }

      totalPoints += trackPoints;
      perTrack.push({
        slug: track.slug,
        name: track.name,
        points: trackPoints,
        pointsLabel: formatPoints(trackPoints),
      });
    }

    rows.push({
      driver,
      totalPoints,
      pointsLabel: formatPoints(totalPoints),
      perTrack,
    });
  }

  rows.sort((a, b) => {
    if (a.totalPoints !== b.totalPoints) {
      return b.totalPoints - a.totalPoints;
    }
    return a.driver.localeCompare(b.driver);
  });

  return rows.map((row, index) => ({
    ...row,
    rank: index + 1,
  }));
}
