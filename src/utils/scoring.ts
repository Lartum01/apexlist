// SCORING
// World Record = 100 points.
// Each millisecond slower than the WR loses 0.1 points.
// Points never go below 0.
//
// Change WR_POINTS or POINT_LOSS_PER_MS to adjust the system.

export const WR_POINTS = 100;
export const POINT_LOSS_PER_MS = 0.1;

export function calculatePoints(
  lapMs: number,
  worldRecordMs: number,
  multiplier = 1
): number {
  if (
    !Number.isFinite(lapMs) ||
    !Number.isFinite(worldRecordMs) ||
    !Number.isFinite(multiplier) ||
    lapMs < 0 ||
    worldRecordMs < 0 ||
    multiplier < 0
  ) {
    return 0;
  }

  const differenceMs = lapMs - worldRecordMs;
  const basePoints = WR_POINTS - differenceMs * POINT_LOSS_PER_MS;
  const points = basePoints * multiplier;

  if (!Number.isFinite(points)) {
    return 0;
  }

  return Math.max(0, points);
}

export function formatPoints(points: number): string {
  if (!Number.isFinite(points)) {
    return "0.0";
  }

  return Math.max(0, points).toFixed(1);
}
