import { describe, expect, it } from "vitest";
import type { Car } from "../data/cars";
import type { Lap } from "../data/laps";
import type { Track } from "../data/tracks";
import {
  getGlobalLeaderboard,
  getValidLaps,
  getWorldRecord,
  lapsForTrack,
  rankTrackLaps,
} from "./leaderboard";

const testTracks: Track[] = [
  { id: 1, name: "Monaco", slug: "monaco", countryCode: "usa" },
  { id: 2, name: "Spa", slug: "spa", countryCode: "usa" },
];

const testCars: Car[] = [
  { id: "car-1", name: "Car 1", multiplier: 1 },
  { id: "car-2", name: "Car 2", multiplier: 0.9 },
];

const testLaps: Lap[] = [
  { driver: "Driver A", track: "monaco", car: "car-1", time: "1:00.000", youtube: "https://youtu.be/abc" },
  { driver: "Driver B", track: "monaco", car: "car-2", time: "1:00.100" },
  { driver: "Driver C", track: "spa", car: "car-1", time: "1:10.000", youtube: "https://youtube.com/watch?v=xyz" },
  { driver: "Driver A", track: "spa", car: "car-1", time: "1:11.000" },
  { driver: "Bad Track", track: "unknown", car: "car-1", time: "1:00.000" },
  { driver: "Bad Car", track: "monaco", car: "car-99", time: "1:00.000" },
  { driver: "Bad Time", track: "monaco", car: "car-1", time: "fast" },
  { driver: "Duplicate A", track: "monaco", car: "car-1", time: "1:00.200" },
  { driver: "Duplicate A", track: "monaco", car: "car-1", time: "1:00.250" },
  { driver: "Duplicate A", track: "monaco", car: "car-2", time: "1:00.050" },
];

describe("leaderboard", () => {
  it("ignores invalid track IDs, car IDs, and times", () => {
    const valid = getValidLaps(testLaps, testTracks, testCars);
    expect(valid.some((lap) => lap.driver.startsWith("Bad"))).toBe(false);
    expect(valid).toHaveLength(7);
  });

  it("uses the fastest valid lap as the world record", () => {
    const monaco = lapsForTrack(getValidLaps(testLaps, testTracks, testCars), "monaco");
    const wr = getWorldRecord(monaco, "car-1");
    expect(wr?.driver).toBe("Driver A");
    expect(wr?.time).toBe("1:00.000");
  });

  it("calculates an independent world record and leaderboard for each car", () => {
    const valid = getValidLaps(testLaps, testTracks, testCars);
    const car1 = rankTrackLaps(valid, "car-1");
    const car2 = rankTrackLaps(valid, "car-2");

    expect(getWorldRecord(valid, "car-1")?.time).toBe("1:00.000");
    expect(getWorldRecord(valid, "car-2")?.time).toBe("1:00.050");
    expect(car1).toHaveLength(5);
    expect(car1.every((row) => row.car === "car-1")).toBe(true);
    expect(car2.map((row) => row.car)).toEqual(["car-2", "car-2"]);
    expect(car2.find((row) => row.driver === "Driver B")?.points).toBeCloseTo(85.5, 5);
    expect(car2.find((row) => row.driver === "Duplicate A")?.points).toBe(90);
  });

  it("keeps a car's points independent when another car's record or multiplier changes", () => {
    const valid = getValidLaps(testLaps, testTracks, testCars);
    const initialCar1 = rankTrackLaps(valid, "car-1").map((row) => row.points);
    const initialCar2 = rankTrackLaps(valid, "car-2").map((row) => row.points);
    const extraLap: Lap = {
      driver: "New Car 1 Record",
      track: "monaco",
      car: "car-1",
      time: "0:59.000",
    };
    const withNewRecord = getValidLaps([...testLaps, extraLap], testTracks, testCars);
    const changedMultiplier = getValidLaps(
      testLaps,
      testTracks,
      testCars.map((car) =>
        car.id === "car-2" ? { ...car, multiplier: 0.5 } : car
      )
    );

    expect(rankTrackLaps(withNewRecord, "car-2").map((row) => row.points)).toEqual(initialCar2);
    expect(rankTrackLaps(changedMultiplier, "car-1").map((row) => row.points)).toEqual(initialCar1);
    expect(rankTrackLaps(changedMultiplier, "car-2").map((row) => row.points)).toEqual([50, 47.5]);
  });

  it("sorts entries from fastest to slowest", () => {
    const monaco = rankTrackLaps(
      lapsForTrack(getValidLaps(testLaps, testTracks, testCars), "monaco"),
      "car-1"
    );
    const times = monaco.map((row) => row.timeMs);
    expect(times).toEqual([...times].sort((a, b) => a - b));
    expect(monaco[0].driver).toBe("Driver A");
    expect(monaco[1].driver).toBe("Duplicate A");
  });

  it("keeps duplicate submissions instead of crashing", () => {
    const monaco = rankTrackLaps(
      lapsForTrack(getValidLaps(testLaps, testTracks, testCars), "monaco"),
      "car-1"
    );
    expect(monaco.filter((row) => row.driver === "Duplicate A")).toHaveLength(2);
  });

  it("returns no record when a track has no submissions", () => {
    expect(getWorldRecord([], "car-1")).toBeNull();
    expect(rankTrackLaps([], "car-1")).toEqual([]);
  });

  it("calculates global scores from each driver's best lap per track", () => {
    const global = getGlobalLeaderboard(testLaps, testTracks, testCars);
    const driverA = global.find((row) => row.driver === "Driver A");
    const driverB = global.find((row) => row.driver === "Driver B");
    const driverC = global.find((row) => row.driver === "Driver C");
    const duplicateA = global.find((row) => row.driver === "Duplicate A");

    expect(driverA?.perTrack.find((t) => t.slug === "monaco")?.points).toBe(100);
    expect(driverA?.perTrack.find((t) => t.slug === "spa")?.points).toBe(0);
    expect(driverB?.totalPoints).toBeCloseTo(85.5, 5);
    expect(driverC?.perTrack.find((t) => t.slug === "monaco")?.points).toBe(0);
    expect(driverC?.perTrack.find((t) => t.slug === "spa")?.points).toBe(100);
    expect(duplicateA?.perTrack.find((t) => t.slug === "monaco")?.points).toBe(170);
    expect(global[0].driver).toBe("Duplicate A");
  });

  it("uses renamed car and track names from data files", () => {
    const renamedTracks: Track[] = [
      { id: 1, name: "Circuit de Monaco", slug: "monaco", countryCode: "usa" },
    ];
    const renamedCars: Car[] = [{ id: "car-1", name: "Red Prototype", multiplier: 1 }];
    const laps: Lap[] = [{ driver: "Alex", track: "monaco", car: "car-1", time: "1:23.456" }];
    const rows = rankTrackLaps(getValidLaps(laps, renamedTracks, renamedCars), "car-1");

    expect(rows[0].carName).toBe("Red Prototype");
    expect(renamedTracks[0].name).toBe("Circuit de Monaco");
  });

  it("keeps valid YouTube links and drops missing ones", () => {
    const monaco = rankTrackLaps(
      lapsForTrack(getValidLaps(testLaps, testTracks, testCars), "monaco"),
      "car-1"
    );
    const withVideo = monaco.find((row) => row.driver === "Driver A");
    const withoutVideo = monaco.find((row) => row.driver === "Duplicate A");
    expect(withVideo?.youtube).toBe("https://youtu.be/abc");
    expect(withoutVideo?.youtube).toBeNull();
  });
});
