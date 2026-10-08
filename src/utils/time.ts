// Lap times are stored as M:SS.mmm strings and compared as milliseconds.
// Never compare the formatted strings alphabetically.

const TIME_PATTERN = /^(\d+):([0-5]\d)\.(\d{3})$/;

export function parseTimeToMs(time: string): number | null {
  if (typeof time !== "string") {
    return null;
  }

  const match = TIME_PATTERN.exec(time.trim());
  if (!match) {
    return null;
  }

  const minutes = Number(match[1]);
  const seconds = Number(match[2]);
  const milliseconds = Number(match[3]);
  const total = minutes * 60_000 + seconds * 1_000 + milliseconds;

  if (!Number.isFinite(total)) {
    return null;
  }

  return total;
}

export function isValidTime(time: string): boolean {
  return parseTimeToMs(time) !== null;
}

export function formatMs(ms: number): string {
  if (!Number.isFinite(ms) || ms < 0) {
    return "—";
  }

  const totalMs = Math.round(ms);
  const minutes = Math.floor(totalMs / 60_000);
  const remaining = totalMs % 60_000;
  const seconds = Math.floor(remaining / 1_000);
  const milliseconds = remaining % 1_000;

  return `${minutes}:${String(seconds).padStart(2, "0")}.${String(milliseconds).padStart(3, "0")}`;
}
