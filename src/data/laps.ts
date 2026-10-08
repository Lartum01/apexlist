// ADD A LAP:
// Copy the template below, paste it into the laps array, then fill in the fields.
//
// {
//     driver: "Driver Name",
//     track: "slug",
//     car: "car-9",
//     time: "1:23.456",
//     youtube: "https://youtu.be/..."
// }
//
// HOW TO ADD A LAP
// 1. driver  — display name of the driver
// 2. track   — must match a slug from tracks.ts (example: "monaco", "spa")
// 3. car     — must match a car id from cars.ts (example: "car-1")
// 4. time    — M:SS.mmm  (examples: "0:58.342", "1:02.517", "1:23.901")
// 5. youtube — optional. Omit the field or use "" if there is no video
//
// You only need to edit this file to add a result.
// After you push to GitHub, Cloudflare Pages rebuilds the site.

export type Lap = {
  driver: string;
  track: string;
  car: string;
  time: string;
  youtube?: string;
};

export const laps: Lap[] = [
  {
    driver: "TEST1",
    track: "miami",
    car: "f26",
    time: "9:59.999",
    youtube: "https://youtu.be/dQw4w9WgXcQ",
  },
  {
    driver: "TEST2",
    track: "czechia",
    car: "f25",
    time: "9:59.999",
    youtube: "https://youtu.be/dQw4w9WgXcQ",
  }
];
