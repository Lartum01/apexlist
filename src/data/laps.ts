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
// ###################################################################################################
// ###################################################################################################
//  /$$$$$$$$ /$$   /$$  /$$$$$$  /$$$$$$$$ /$$             /$$      /$$ /$$$$$$$           
// | $$_____/| $$  / $$ /$$__  $$| $$_____/| $$            | $$  /$ | $$| $$__  $$          
// | $$      |  $$/ $$/| $$  \__/| $$      | $$            | $$ /$$$| $$| $$  \ $$  /$$$$$$$
// | $$$$$    \  $$$$/ | $$      | $$$$$   | $$            | $$/$$ $$ $$| $$$$$$$/ /$$_____/
// | $$__/     >$$  $$ | $$      | $$__/   | $$            | $$$$_  $$$$| $$__  $$|  $$$$$$ 
// | $$       /$$/\  $$| $$    $$| $$      | $$            | $$$/ \  $$$| $$  \ $$ \____  $$
// | $$$$$$$$| $$  \ $$|  $$$$$$/| $$$$$$$$| $$$$$$$$      | $$/   \  $$| $$  | $$ /$$$$$$$/
// |________/|__/  |__/ \______/ |________/|________/      |__/     \__/|__/  |__/|_______/ 
// ###################################################################################################
// ###################################################################################################

//   ___   ___ ___   __  
//  |__ \ / _ \__ \ / /  
//     ) | | | | ) / /_  
//    / /| | | |/ / '_ \ 
//   / /_| |_| / /| (_) |
//  |____|\___/____\___/ 
  {
    driver: "Pokonald0",
    track: "indy",
    car: "f26",
    time: "1:11.709",
    youtube: "https://discord.com/channels/547778156958973952/658830680033329152/1538515207859474572",
  },
  {
    driver: "Pokonald0",
    track: "wynford",
    car: "f26",
    time: "1:01.268",
    youtube: "https://discord.com/channels/547778156958973952/658830680033329152/1519638876224749628",
  },
  {
    driver: "Thax1905",
    track: "hockenheim",
    car: "f26",
    time: "1:01.333",
    youtube: "https://discord.com/channels/547778156958973952/658830680033329152/1499765223131975843",
  },
  {
    driver: "Pedro098T",
    track: "turkey",
    car: "f26",
    time: "1:22.599",
    youtube: "https://discord.com/channels/547778156958973952/658830680033329152/1561373302520418424",
  },
  {
    driver: "Pokonald0",
    track: "silverstone",
    car: "f26",
    time: "1:25.042",
    youtube: "https://discord.com/channels/547778156958973952/658830680033329152/1555608932771303535",
  },
  {
    driver: "Thax1905",
    track: "baku",
    car: "f26",
    time: "1:14.544",
    youtube: "https://discord.com/channels/547778156958973952/658830680033329152/1508107233362317372",
  },
  {
    driver: "Thax1905",
    track: "czechia",
    car: "f26",
    time: "1:07.902",
    youtube: "https://discord.com/channels/547778156958973952/658830680033329152/1505552044810043453",
  },
  {
    driver: "Pokonald0",
    track: "winterpark",
    car: "f26",
    time: "1:22.384",
    youtube: "https://discord.com/channels/547778156958973952/658830680033329152/1517162184843595846",
  },
  {
    driver: "WYSYRB",
    track: "mexico",
    car: "f26",
    time: "1:15.103",
    youtube: "https://discord.com/channels/547778156958973952/658830680033329152/1552378440483733607",
  },
  {
    driver: "Pedro098T",
    track: "zandvoort",
    car: "f26",
    time: "1:05.972",
    youtube: "https://discord.com/channels/547778156958973952/658830680033329152/1545890779929509940",
  },
  {
    driver: "Thax1905",
    track: "saitama",
    car: "f26",
    time: "1:08.055",
    youtube: "https://discord.com/channels/547778156958973952/658830680033329152/1533464981356417034",
  },
  {
    driver: "Pokonald0",
    track: "france",
    car: "f26",
    time: "1:06.447",
    youtube: "https://discord.com/channels/547778156958973952/658830680033329152/1517921427490341084",
  },
  {
    driver: "Pokonald0",
    track: "miami",
    car: "f26",
    time: "1:22.154",
    youtube: "https://discord.com/channels/547778156958973952/658830680033329152/1517921427490341084",
  },
  {
    driver: "Pedro098T",
    track: "vegas",
    car: "f26",
    time: "1:24.598",
    youtube: "https://discord.com/channels/547778156958973952/658830680033329152/1551241131487137812",
  },
  {
    driver: "Pokonald0",
    track: "qatar",
    car: "f26",
    time: "1:24.903",
    youtube: "https://discord.com/channels/547778156958973952/658830680033329152/1553834022247989318",
  },
  {
    driver: "Thax1905",
    track: "australia",
    car: "f26",
    time: "1:17.253",
    youtube: "https://discord.com/channels/547778156958973952/658830680033329152/1550789458411134986",
  },
  {
    driver: "Pokonald0",
    track: "monza",
    car: "f26",
    time: "1:20.535",
    youtube: "https://discord.com/channels/547778156958973952/658830680033329152/1533815991597797407",
  },
  {
    driver: "Pokonald0",
    track: "abudhabi",
    car: "f26",
    time: "1:22.494",
    youtube: "https://discord.com/channels/547778156958973952/658830680033329152/1552931190460252190",
  },
  {
    driver: "BrMaster9",
    track: "montreal",
    car: "f26",
    time: "1:12.967",
    youtube: "https://discord.com/channels/547778156958973952/658830680033329152/1553065345302929478",
  },

//   ___   ___ ___  _____ 
//  |__ \ / _ \__ \| ____|
//     ) | | | | ) | |__  
//    / /| | | |/ /|___ \ 
//   / /_| |_| / /_ ___) |
//  |____|\___/____|____/ 
                       
  {
    driver: "Pokonald0",
    track: "indy",
    car: "f25",
    time: "1:08.906",
    youtube: "https://discord.com/channels/547778156958973952/658830680033329152/1541855630472642674",
  },
  {
    driver: "Pokonald0",
    track: "wynford",
    car: "f25",
    time: "0:59.825",
    youtube: "https://discord.com/channels/547778156958973952/658830680033329152/1552915959604576307",
  },
  {
    driver: "Yuushi241",
    track: "hockenheim",
    car: "f25",
    time: "1:00.171",
    youtube: "https://discord.com/channels/547778156958973952/658830680033329152/1527163818579460238",
  },
  {
    driver: "Pokonald0",
    track: "turkey",
    car: "f25",
    time: "1:06.864",
    youtube: "https://discord.com/channels/547778156958973952/658830680033329152/1560927102704812104",
  },
  {
    driver: "Pokonald0",
    track: "silverstone",
    car: "f25",
    time: "1:22.587",
    youtube: "https://discord.com/channels/547778156958973952/658830680033329152/1541855630472642674",
  },
  {
    driver: "Pokonald0",
    track: "baku",
    car: "f25",
    time: "1:12.243",
    youtube: "https://discord.com/channels/547778156958973952/658830680033329152/1548666346902921226",
  },
  {
    driver: "sonicveneno",
    track: "czechia",
    car: "f25",
    time: "1:06.744",
    youtube: "https://discord.com/channels/547778156958973952/658830680033329152/1546004501981298788",
  },
  {
    driver: "WYSYRB",
    track: "winterpark",
    car: "f25",
    time: "1:19.254",
    youtube: "https://discord.com/channels/547778156958973952/658830680033329152/1486021983954145321",
  },
  {
    driver: "DungeonFanatics",
    track: "mexico",
    car: "f25",
    time: "1:13.046",
    youtube: "https://discord.com/channels/547778156958973952/658830680033329152/1490349799851954377",
  },
  {
    driver: "DungeonFanatics",
    track: "zandvoort",
    car: "f25",
    time: "1:03.916",
    youtube: "https://discord.com/channels/547778156958973952/658830680033329152/1502700500246724770",
  },
  {
    driver: "Pokonald0",
    track: "saitama",
    car: "f25",
    time: "1:06.843",
    youtube: "https://discord.com/channels/547778156958973952/658830680033329152/1533464981356417034",
  },
  {
    driver: "Pokonald0",
    track: "france",
    car: "f25",
    time: "1:05.526",
    youtube: "https://discord.com/channels/547778156958973952/658830680033329152/1542983223057850421",
  },
  {
    driver: "Pokonald0",
    track: "miami",
    car: "f25",
    time: "1:20.857",
    youtube: "https://discord.com/channels/547778156958973952/658830680033329152/1541855675003572355",
  },
  {
    driver: "Pokonald0",
    track: "vegas",
    car: "f25",
    time: "1:22.495",
    youtube: "https://discord.com/channels/547778156958973952/658830680033329152/1536060391912902716",
  },
  {
    driver: "Pedro098T",
    track: "qatar",
    car: "f25",
    time: "1:21.468",
    youtube: "https://discord.com/channels/547778156958973952/658830680033329152/1490054757811884145",
  },
  {
    driver: "Yuushi241",
    track: "australia",
    car: "f25",
    time: "1:14.905",
    youtube: "https://discord.com/channels/547778156958973952/658830680033329152/1522115358096359447",
  },
  {
    driver: "Pokonald0",
    track: "monza",
    car: "f25",
    time: "1:18.512",
    youtube: "https://discord.com/channels/547778156958973952/658830680033329152/1533815991597797407",
  },
  {
    driver: "Pokonald0",
    track: "abudhabi",
    car: "f25",
    time: "1:20.071",
    youtube: "https://discord.com/channels/547778156958973952/658830680033329152/1537046275349024769",
  },
  {
    driver: "BrMaster9",
    track: "montreal",
    car: "f25",
    time: "1:10.838",
    youtube: "https://discord.com/channels/547778156958973952/658830680033329152/1543010269553360916",
  },
// ###################################################################################################
// ###################################################################################################
//   /$$$$$$  /$$$$$$$$ /$$   /$$ /$$$$$$$$ /$$$$$$$   /$$$$$$ 
//  /$$__  $$|__  $$__/| $$  | $$| $$_____/| $$__  $$ /$$__  $$
// | $$  \ $$   | $$   | $$  | $$| $$      | $$  \ $$| $$  \__/
// | $$  | $$   | $$   | $$$$$$$$| $$$$$   | $$$$$$$/|  $$$$$$ 
// | $$  | $$   | $$   | $$__  $$| $$__/   | $$__  $$ \____  $$
// | $$  | $$   | $$   | $$  | $$| $$      | $$  \ $$ /$$  \ $$
// |  $$$$$$/   | $$   | $$  | $$| $$$$$$$$| $$  | $$|  $$$$$$/
//  \______/    |__/   |__/  |__/|________/|__/  |__/ \______/ 
// ###################################################################################################
// ###################################################################################################
  {
    driver: "BrMaster9",
    track: "vegas",
    car: "f26",
    time: "1:24.682",
    youtube: "https://medal.tv/games/roblox/clips/nGwJVtF3IVerivqYE",
  },
  {
    driver: "BrMaster9",
    track: "zandvoort",
    car: "f26",
    time: "1:06.180",
    youtube: "https://medal.tv/games/roblox/clips/nGwLwg4nk7cd5OwHR",
  },
  {
    driver: "BrMaster9",
    track: "qatar",
    car: "f25",
    time: "1:21.626",
    youtube: "https://medal.tv/games/roblox/clips/nGD0FZ5Prk5Q_V-3L",
  },
  {
    driver: "bearlinee81",
    track: "hockenheim",
    car: "f26",
    time: "1:02.117",
    youtube: "https://medal.tv/games/roblox/clips/nHhupbjZ7cAWCQ7P4",
  },
  {
    driver: "bearlinee81",
    track: "france",
    car: "f26",
    time: "1:07.157",
    youtube: "https://medal.tv/games/roblox/clips/nEpnb2dXT8uKYlmgM",
  },
  {
    driver: "bearlinee81",
    track: "australia",
    car: "f26",
    time: "1:18.195",
    youtube: "https://medal.tv/games/roblox/clips/nCj8cRuDJTfqkejl_",
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
  {
    driver: "bearlinee81",
    track: "abudhabi",
    car: "f26",
    time: "1:23.682",
    youtube: "https://medal.tv/games/roblox/clips/nw9uuM9LFdfFpA7AC",
  },
  {
    driver: "bearlinee81",
    track: "wynford",
    car: "f26",
    time: "1:02.094",
    youtube: "https://medal.tv/games/roblox/clips/nIOQNNcL1LZsgInE7",
  },
  {
    driver: "bearlinee81",
    track: "miami",
    car: "f26",
    time: "1:23.037",
    youtube: "https://medal.tv/games/roblox/clips/nINd6R3s9gDXpFNwJ",
  },
  {
    driver: "bearlinee81",
    track: "vegas",
    car: "f26",
    time: "1:25.438",
    youtube: "https://medal.tv/games/roblox/clips/nHZ6Yn3jfPH2cdlRs",
  },
  {
    driver: "vm0reo",
    track: "vegas",
    car: "f25",
    time: "1:25.438",
    youtube: "https://discord.com/channels/547778156958973952/658830680033329152/1560286011920097461",
  },
  {
    driver: "vm0reo",
    track: "hockenheim",
    car: "f25",
    time: "1:03.245",
    youtube: "https://discord.com/channels/547778156958973952/658830680033329152/1560342908786315465",
  },
  {
    driver: "przemek10_9",
    track: "australia",
    car: "f10",
    time: "1:19.515",
    youtube: "https://discord.com/channels/547778156958973952/658830680033329152/1560391293904101437",
  },
  {
    driver: "przemek10_9",
    track: "wynford",
    car: "f26",
    time: "1:01.864",
    youtube: "https://discord.com/channels/1537180964319399978/1542545545070121010/1560396590596751444",
  },
  {
    driver: "przemek10_9",
    track: "miami",
    car: "f26",
    time: "1:21.928",
    youtube: "https://discord.com/channels/1537180964319399978/1542545545070121010/1560397251438977065",
  },
  {
    driver: "przemek10_9",
    track: "abudhabi",
    car: "f26",
    time: "1:23.131",
    youtube: "https://discord.com/channels/1466323880774729895/1513791062093856768/1553697157293416540",
  },
  {
    driver: "przemek10_9",
    track: "saitama",
    car: "f26",
    time: "1:08.997",
    youtube: "https://discord.com/channels/1466323880774729895/1513791062093856768/1549741531924136027",
  },
  {
    driver: "vm0reo",
    track: "monza",
    car: "f25",
    time: "1:22.389",
    youtube: "https://discord.com/channels/547778156958973952/658830680033329152/1560424014936277122",
  },
  {
    driver: "przemek10_9",
    track: "wynford",
    car: "f92",
    time: "1:18.515",
    youtube: "https://discord.com/channels/547778156958973952/658830680033329152/1546097005703598161",
  },
  {
    driver: "vm0reo",
    track: "montreal",
    car: "f25",
    time: "1:15.163",
    youtube: "https://discord.com/channels/547778156958973952/658830680033329152/1560903390865657876",
  },
  {
    driver: "Skypro098765",
    track: "australia",
    car: "f26",
    time: "1:18.021",
    youtube: "https://discord.com/channels/1360433303814934588/1360434153799160031/1560923409737711676",
  },
  {
    driver: "vm0reo",
    track: "wynford",
    car: "f25",
    time: "1:03.589",
    youtube: "https://discord.com/channels/547778156958973952/658830680033329152/1560935330037633114",
  },
  {
    driver: "vm0reo",
    track: "miami",
    car: "f25",
    time: "1:24.404",
    youtube: "https://discord.com/channels/547778156958973952/658830680033329152/1561386018601574531",
  },
  {
    driver: "vm0reo",
    track: "qatar",
    car: "f25",
    time: "1:24.639",
    youtube: "https://discord.com/channels/547778156958973952/658830680033329152/1561389795647823922",
  },
  {
    driver: "Moose_07070707070707",
    track: "miami",
    car: "f25",
    time: "1:26.522",
    youtube: "https://discord.com/channels/547778156958973952/658830680033329152/1561306192771555438",
  },
  {
    driver: "Moose_07070707070707",
    track: "indy",
    car: "f25",
    time: "1:13.572",
    youtube: "https://discord.com/channels/547778156958973952/658830680033329152/1561308405073973278",
  },
  {
    driver: "Xz_03309",
    track: "turkey",
    car: "f26",
    time: "1:10.105",
    youtube: "https://discord.com/channels/1558943071394336909/1558943071930941492/1561408166179110934",
  },
  {
    driver: "Xz_03309",
    track: "abudhabi",
    car: "f21",
    time: "1:21.615",
    youtube: "https://discord.com/channels/1558943071394336909/1558943609275941025/1561130134768062564",
  },
  {
    driver: "Xz_03309",
    track: "abudhabi",
    car: "f21",
    time: "1:21.615",
    youtube: "https://discord.com/channels/1558943071394336909/1558943609275941025/1561130134768062564",
  },
  {
    driver: "vm0reo",
    track: "indy",
    car: "f25",
    time: "1:11:422",
    youtube: "https://discord.com/channels/547778156958973952/658830680033329152/1561451793370710028",
  },
];
