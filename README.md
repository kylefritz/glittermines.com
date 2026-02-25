# glittermines.com

## Setup

```bash
bun install
```

## Development

```bash
bun dev
```

Starts a local server with HMR at http://localhost:3000.

## Deploy

Hosted on Cloudflare Pages. To deploy:

```bash
bun run deploy
```

This copies static files to `public/` and deploys to the `glittermines-com` Pages project.

Custom domain is configured in the Cloudflare dashboard under Pages > glittermines-com > Custom domains.
