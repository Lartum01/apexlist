import { describe, expect, it } from "vitest";
import { formatMs, parseTimeToMs } from "./time";

describe("time parsing", () => {
  it("parses M:SS.mmm into milliseconds", () => {
    expect(parseTimeToMs("0:58.342")).toBe(58342);
    expect(parseTimeToMs("1:02.517")).toBe(62517);
    expect(parseTimeToMs("1:23.901")).toBe(83901);
    expect(parseTimeToMs("1:00.000")).toBe(60000);
  });

  it("rejects invalid times", () => {
    expect(parseTimeToMs("1:60.000")).toBeNull();
    expect(parseTimeToMs("1.23.456")).toBeNull();
    expect(parseTimeToMs("abc")).toBeNull();
    expect(parseTimeToMs("")).toBeNull();
    expect(parseTimeToMs("1:23")).toBeNull();
  });

  it("compares times numerically, not alphabetically", () => {
    const nineMinutes = parseTimeToMs("9:00.000");
    const tenMinutes = parseTimeToMs("10:00.000");
    expect(nineMinutes).not.toBeNull();
    expect(tenMinutes).not.toBeNull();
    expect(nineMinutes as number).toBeLessThan(tenMinutes as number);
    expect("9:00.000" > "10:00.000").toBe(true);
  });

  it("round-trips formatted milliseconds", () => {
    expect(formatMs(58342)).toBe("0:58.342");
    expect(formatMs(62517)).toBe("1:02.517");
  });
});
