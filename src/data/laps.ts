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
    driver: "Lartum",
    track: "miami",
    car: "f23",
    time: "1:22.599",
    youtube: "https://discord.com/channels/547778156958973952/658830680033329152/1461589229435093137",
  },
  {
    driver: "Chuy Junco",
    track: "czechia",
    car: "f25",
    time: "1:06.744",
    youtube: "https://discord.com/channels/547778156958973952/658830680033329152/1546004501981298788",
  },
  {
    driver: "BrMaster9",
    track: "vegas",
    car: "f26",
    time: "1:24.682",
    youtube: "https://medal.tv/games/roblox/clips/nGwJVtF3IVerivqYE?invite=cr-MSx1V00sNzgxNjk0NTIw",
  },
  {
    driver: "BrMaster9",
    track: "zandvoort",
    car: "f26",
    time: "1:06.180",
    youtube: "https://medal.tv/games/roblox/clips/nGwLwg4nk7cd5OwHR?invite=cr-MSwzMjMsNzgxNjk0NTIw",
  },
  {
    driver: "BrMaster9",
    track: "qatar",
    car: "f25",
    time: "1:21.626",
    youtube: "https://medal.tv/games/roblox/clips/nGD0FZ5Prk5Q_V-3L?invite=cr-MSxVQXMsNzgxNjk0NTIw",
  },
  {
    driver: "bearlinee81",
    track: "hockenheim",
    car: "f26",
    time: "1:02.117",
    youtube: "https://medal.tv/games/roblox/clips/nHhupbjZ7cAWCQ7P4?invite=cr-MSxwNEUsNTg1MDA3NDIy",
  },
  {
    driver: "bearlinee81",
    track: "france",
    car: "f26",
    time: "1:07.157",
    youtube: "https://medal.tv/games/roblox/clips/nEpnb2dXT8uKYlmgM?invite=cr-MSw1YWgsNTg1MDA3NDIy",
  },
  {
    driver: "bearlinee81",
    track: "miami",
    car: "f26",
    time: "1:23.287",
    youtube: "https://medal.tv/games/roblox/clips/nHikt9HsXzeaGWzSE?invite=cr-MSxrOGosNTg1MDA3NDIy",
  },
  {
    driver: "bearlinee81",
    track: "australia",
    car: "f26",
    time: "1:18.195",
    youtube: "https://medal.tv/games/roblox/clips/nCj8cRuDJTfqkejl_?invite=cr-MSw1b2YsNTg1MDA3NDIy",
  },
  {
    driver: "TRAINING5659",
    track: "zandvoort",
    car: "f21",
    time: "1:04.249",
    youtube: "https://media.discordapp.net/attachments/658830680033329152/1542108426900082728/image.png?ex=6acd55a3&is=6acc0423&hm=bc7d2c926fcadd0bc2b065fba780c3978d9f924cda92f0c953d8135b2de1b79a&=&format=webp&quality=lossless&width=1536&height=858",
  },
  {
    driver: "TRAINING5659",
    track: "zandvoort",
    car: "f23",
    time: "1:05.763",
    youtube: "https://media.discordapp.net/attachments/658830680033329152/1556572160087162960/image.png?backend=b2&ex=6acd380a&is=6acbe68a&hm=2ad1909bc7b490e139e85e6e13af71b6fb03fdca1060f24e4c1713f63838742a&=&format=webp&quality=lossless&width=640&height=360",
  },
  {
    driver: "TRAINING5659",
    track: "zandvoort",
    car: "f24",
    time: "1:05.372",
    youtube: "https://media.discordapp.net/attachments/658830680033329152/1541461739164667934/image.png?ex=6acd9e5d&is=6acc4cdd&hm=c39788872d24727ff8a2c2632ea69eeacda6f6c7637461ea7a1129f563e35f87&=&format=webp&quality=lossless&width=1536&height=860",
  },
  {
    driver: "TRAINING5659",
    track: "turkey",
    car: "f25",
    time: "1:06.966",
    youtube: "https://media.discordapp.net/attachments/658830680033329152/1556659575334117396/image.png?backend=b2&ex=6acd8974&is=6acc37f4&hm=eca0c7972878e2c30f1feb419dcc6a087ab087793479db59af118e30f44f7709&=&format=webp&quality=lossless&width=1536&height=638",
  }
];
