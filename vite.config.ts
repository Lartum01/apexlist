import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import { handleRobloxAvatarRequest } from "./worker";

export default defineConfig({
  plugins: [
    react(),
    {
      name: "roblox-avatars-dev-api",
      configureServer(server) {
        server.middlewares.use(async (request, response, next) => {
          const requestUrl = new URL(request.url ?? "/", "http://localhost");
          if (requestUrl.pathname !== "/api/roblox-avatars") {
            next();
            return;
          }

          const apiResponse = await handleRobloxAvatarRequest(
            new Request(requestUrl, { method: request.method })
          );
          response.writeHead(
            apiResponse.status,
            Object.fromEntries(apiResponse.headers.entries())
          );
          response.end(Buffer.from(await apiResponse.arrayBuffer()));
        });
      },
    },
  ],
  test: {
    environment: "jsdom",
    setupFiles: "./src/test/setup.ts",
  },
});
