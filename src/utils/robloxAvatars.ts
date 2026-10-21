type RobloxAvatarResponse = {
  avatars: {
    username: string;
    url: string | null;
  }[];
};

export async function fetchRobloxAvatars(
  usernames: string[],
  signal?: AbortSignal
): Promise<Record<string, string>> {
  if (usernames.length === 0) {
    return {};
  }

  const query = new URLSearchParams();
  for (const username of usernames) {
    query.append("username", username);
  }

  const response = await fetch(`/api/roblox-avatars?${query.toString()}`, { signal });
  if (!response.ok) {
    throw new Error(`Roblox avatar lookup failed with status ${response.status}`);
  }

  const result = (await response.json()) as RobloxAvatarResponse;
  return Object.fromEntries(
    result.avatars.flatMap(({ username, url }) =>
      url ? [[username.toLowerCase(), url]] : []
    )
  );
}
