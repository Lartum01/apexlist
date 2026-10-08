import { describe, expect, it } from "vitest";
import { calculatePoints, formatPoints } from "./scoring";
import { parseTimeToMs } from "./time";

function pointsFor(time: string, wr = "1:00.000"): number {
  const lapMs = parseTimeToMs(time);
  const wrMs = parseTimeToMs(wr);
  if (lapMs === null || wrMs === null) {
    throw new Error("bad fixture time");
  }
  return calculatePoints(lapMs, wrMs);
}

describe("scoring", () => {
  it("gives 100 to the world record", () => {
    expect(pointsFor("1:00.000")).toBe(100);
  });

  it("subtracts 0.1 per millisecond", () => {
    expect(pointsFor("1:00.001")).toBeCloseTo(99.9, 5);
    expect(pointsFor("1:00.010")).toBeCloseTo(99, 5);
    expect(pointsFor("1:00.100")).toBeCloseTo(90, 5);
    expect(pointsFor("1:00.500")).toBeCloseTo(50, 5);
  });

  it("never goes below 0", () => {
    expect(pointsFor("1:01.000")).toBe(0);
    expect(pointsFor("1:01.500")).toBe(0);
  });

  it("rejects non-finite inputs", () => {
    expect(calculatePoints(Number.NaN, 1000)).toBe(0);
    expect(calculatePoints(1000, Number.POSITIVE_INFINITY)).toBe(0);
  });

  it("formats one decimal place", () => {
    expect(formatPoints(100)).toBe("100.0");
    expect(formatPoints(99.9)).toBe("99.9");
    expect(formatPoints(75)).toBe("75.0");
    expect(formatPoints(42.5)).toBe("42.5");
    expect(formatPoints(0)).toBe("0.0");
  });
});
