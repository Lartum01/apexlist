interface RobloxUser {
  id: number;
  requestedUsername: string;
}

interface RobloxThumbnail {
  targetId: number;
  imageUrl: string;
}

interface RobloxUsersResponse {
  data: RobloxUser[];
}

interface RobloxThumbnailsResponse {
  data: RobloxThumbnail[];
}

interface Env {
  ASSETS: {
    fetch(request: Request): Promise<Response>;
  };
}

function jsonResponse(body: unknown, status = 200): Response {
  return Response.json(body, {
    status,
    headers: {
      "Cache-Control": "public, max-age=3600",
    },
  });
}

function isRobloxUser(value: unknown): value is RobloxUser {
  if (!value || typeof value !== "object") {
    return false;
  }
  const user = value as Partial<RobloxUser>;
  return typeof user.id === "number" && typeof user.requestedUsername === "string";
}

function isRobloxThumbnail(value: unknown): value is RobloxThumbnail {
  if (!value || typeof value !== "object") {
    return false;
  }
  const thumbnail = value as Partial<RobloxThumbnail>;
  return typeof thumbnail.targetId === "number" && typeof thumbnail.imageUrl === "string";
}

async function getRobloxAvatars(usernames: string[]): Promise<Response> {
  const usersResponse = await fetch("https://users.roblox.com/v1/usernames/users", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      usernames,
      excludeBannedUsers: false,
    }),
  });
  if (!usersResponse.ok) {
    console.error("Roblox username lookup failed:", usersResponse.status);
    return jsonResponse({ error: "Roblox username lookup failed" }, 502);
  }

  const usersPayload: unknown = await usersResponse.json();
  if (
    !usersPayload ||
    typeof usersPayload !== "object" ||
    !("data" in usersPayload) ||
    !Array.isArray(usersPayload.data) ||
    !usersPayload.data.every(isRobloxUser)
  ) {
    console.error("Roblox username lookup returned an unexpected response");
    return jsonResponse({ error: "Roblox username lookup returned invalid data" }, 502);
  }

  const users = usersPayload.data as RobloxUsersResponse["data"];
  if (users.length === 0) {
    return jsonResponse({ avatars: [] });
  }

  const ids = users.map((user) => user.id);
  const thumbnailsUrl = new URL(
    "https://thumbnails.roblox.com/v1/users/avatar-headshot"
  );
  thumbnailsUrl.searchParams.set("userIds", ids.join(","));
  thumbnailsUrl.searchParams.set("size", "150x150");
  thumbnailsUrl.searchParams.set("format", "Png");
  thumbnailsUrl.searchParams.set("isCircular", "false");

  const thumbnailsResponse = await fetch(thumbnailsUrl);
  if (!thumbnailsResponse.ok) {
    console.error("Roblox avatar thumbnail lookup failed:", thumbnailsResponse.status);
    return jsonResponse({ error: "Roblox avatar thumbnail lookup failed" }, 502);
  }

  const thumbnailsPayload: unknown = await thumbnailsResponse.json();
  if (
    !thumbnailsPayload ||
    typeof thumbnailsPayload !== "object" ||
    !("data" in thumbnailsPayload) ||
    !Array.isArray(thumbnailsPayload.data) ||
    !thumbnailsPayload.data.every(isRobloxThumbnail)
  ) {
    console.error("Roblox avatar thumbnail lookup returned an unexpected response");
    return jsonResponse({ error: "Roblox avatar lookup returned invalid data" }, 502);
  }

  const thumbnailById = new Map(
    (thumbnailsPayload.data as RobloxThumbnailsResponse["data"]).map((thumbnail) => [
      thumbnail.targetId,
      thumbnail.imageUrl,
    ])
  );

  return jsonResponse({
    avatars: users.map((user) => ({
      username: user.requestedUsername,
      url: thumbnailById.get(user.id) ?? null,
    })),
  });
}

export async function handleRobloxAvatarRequest(request: Request): Promise<Response> {
  if (request.method !== "GET") {
    return jsonResponse({ error: "Method not allowed" }, 405);
  }

  const url = new URL(request.url);
  const submittedUsernames = url.searchParams.getAll("username");
  const usernames = [...new Set(submittedUsernames.map((name) => name.trim()))];
  if (
    usernames.length === 0 ||
    usernames.length > 100 ||
    usernames.some((name) => !/^[A-Za-z0-9_]{3,20}$/.test(name))
  ) {
    return jsonResponse({ error: "Provide 1 to 100 valid Roblox usernames" }, 400);
  }

  try {
    return await getRobloxAvatars(usernames);
  } catch (error) {
    console.error("Roblox avatar request failed:", error);
    return jsonResponse({ error: "Unable to contact Roblox avatar services" }, 502);
  }
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);
    if (url.pathname === "/api/roblox-avatars") {
      return handleRobloxAvatarRequest(request);
    }

    if (url.pathname.startsWith("/api/")) {
      return jsonResponse({ error: "Not found" }, 404);
    }

    return env.ASSETS.fetch(request);
  },
};
