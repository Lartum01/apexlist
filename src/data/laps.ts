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
  },
  {
    driver: "TRAINING5659",
    track: "winterpark",
    car: "f25",
    time: "1:20.877",
    youtube: "https://media.discordapp.net/attachments/1481803534981927163/1559121429977636955/image.png?ex=6acdec7b&is=6acc9afb&hm=11b53c4c5f79cbd0591fa78a3a061b51dd1a2d4ae91cb215f9598169130d8736&=&format=webp&quality=lossless&width=640&height=360",
  },
  {
    driver: "Phobizo",
    track: "france",
    car: "f26",
    time: "1:07.240",
    youtube: "https://discord.com/channels/1558943071394336909/1558943609275941025/1559138209303236678",
  },
  {
    driver: "Phobizo",
    track: "abudhabi",
    car: "f26",
    time: "1:23.800",
    youtube: "https://discord.com/channels/1558943071394336909/1558943609275941025/1559156016988422266",
  },
  {
    driver: "Phobizo",
    track: "indy",
    car: "f16",
    time: "1:16.317",
    youtube: "https://discord.com/channels/1558943071394336909/1558943609275941025/1559937064751866027",
  },
  {
    driver: "Phobizo",
    track: "monza",
    car: "f16",
    time: "1:25.175",
    youtube: "https://discord.com/channels/1558943071394336909/1558943609275941025/1559937240262639717",
  },
  {
    driver: "Phobizo",
    track: "miami",
    car: "f16",
    time: "1:25.819",
    youtube: "https://discord.com/channels/1558943071394336909/1558943609275941025/1559937548976136202",
  },
  {
    driver: "Phobizo",
    track: "vegas",
    car: "f16",
    time: "1:28.013",
    youtube: "https://discord.com/channels/1558943071394336909/1558943609275941025/1559937746871783564",
  },
  {
    driver: "Phobizo",
    track: "vegas",
    car: "f16",
    time: "1:28.013",
    youtube: "https://discord.com/channels/1558943071394336909/1558943609275941025/1559937746871783564",
  },
  {
    driver: "Phobizo",
    track: "qatar",
    car: "f16",
    time: "1:28.207",
    youtube: "https://discord.com/channels/1558943071394336909/1558943609275941025/1559938071682744340",
  },
  {
    driver: "Phobizo",
    track: "australia",
    car: "f16",
    time: "1:21.404",
    youtube: "https://discord.com/channels/1558943071394336909/1558943609275941025/1559938637746020391",
  },
  {
    driver: "Phobizo",
    track: "france",
    car: "f16",
    time: "1:10.236",
    youtube: "https://discord.com/channels/1558943071394336909/1558943609275941025/1559939038213972040",
  },
  {
    driver: "Phobizo",
    track: "saitama",
    car: "f16",
    time: "1:12.075",
    youtube: "https://discord.com/channels/1558943071394336909/1558943609275941025/1559939213133357119",
  },
  {
    driver: "Phobizo",
    track: "zandvoort",
    car: "f16",
    time: "1:08.311",
    youtube: "https://discord.com/channels/1558943071394336909/1558943609275941025/1559939572056592504",
  },
  {
    driver: "Phobizo",
    track: "indy",
    car: "f92",
    time: "56:18.565",
    youtube: "https://discord.com/channels/1558943071394336909/1558943609275941025/1559939732258160771",
  },
  {
    driver: "Phobizo",
    track: "mexico",
    car: "f26",
    time: "1:16.313",
    youtube: "https://discord.com/channels/1558943071394336909/1558943609275941025/1559940331150123148",
  },
  {
    driver: "Phobizo",
    track: "france",
    car: "f24",
    time: "1:06.512",
    youtube: "https://discord.com/channels/1558943071394336909/1558943609275941025/1559940591452684318",
  },
  {
    driver: "Phobizo",
    track: "zandvoort",
    car: "f25",
    time: "1:06.078",
    youtube: "https://discord.com/channels/1558943071394336909/1558943609275941025/1559940781106794589",
  },
  {
    driver: "Phobizo",
    track: "baku",
    car: "f25",
    time: "1:13.537",
    youtube: "https://discord.com/channels/1558943071394336909/1558943609275941025/1559943623452131328",
  },
  {
    driver: "Phobizo",
    track: "winterpark",
    car: "f16",
    time: "1:27.500",
    youtube: "https://discord.com/channels/1558943071394336909/1558943609275941025/1559943985110319228",
  },
  {
    driver: "Phobizo",
    track: "silverstone",
    car: "f16",
    time: "1:29.519",
    youtube: "https://discord.com/channels/1558943071394336909/1558943609275941025/1559944402913337354",
  },
  {
    driver: "Phobizo",
    track: "baku",
    car: "f16",
    time: "1:18.455",
    youtube: "https://discord.com/channels/1558943071394336909/1558943609275941025/1559944654223581204",
  },
  {
    driver: "Phobizo",
    track: "turkey",
    car: "f16",
    time: "1:11.382",
    youtube: "https://discord.com/channels/1558943071394336909/1558943609275941025/1559944906095726742",
  },
  {
    driver: "Phobizo",
    track: "czechia",
    car: "f16",
    time: "1:11.823",
    youtube: "https://discord.com/channels/1558943071394336909/1558943609275941025/1559945182361944114",
  },
  {
    driver: "Phobizo",
    track: "hockenheim",
    car: "f16",
    time: "1:04.812",
    youtube: "https://discord.com/channels/1558943071394336909/1558943609275941025/1559945401648418848",
  },
];
