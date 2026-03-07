import { serve } from "bun";
import index from "./index.html";

const server = serve({
  routes: {
    "/life_dvr.png": new Response(Bun.file("./life_dvr.png")),
    "/favicon.png": new Response(Bun.file("./favicon.png")),
    "/*": index,
  },
  development: process.env.NODE_ENV !== "production" && {
    hmr: true,
    console: true,
  },
});

console.log(`Server running at ${server.url}`);
