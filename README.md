# Landing Pages Monorepo

Mini landing page sites, each in their own directory under `sites/`.

## Sites

| Site | Directory | Hosting |
|------|-----------|---------|
| [glittermines.com](https://glittermines.com) | `sites/glittermines.com` | Cloudflare Pages |
| [errrbody.biz](https://errrbody.biz) | `sites/errrbody.biz` | Vercel |
| [lifedvr.com](https://lifedvr.com) | `sites/lifedvr.com` | Cloudflare Pages |

## Setup

Install all site dependencies:

```bash
bun run install:all
```

## Development

Run any site locally:

```bash
bun run dev:glittermines
bun run dev:errrbody
bun run dev:lifedvr
```

## Deploy

Deploy a single site:

```bash
bun run deploy:glittermines
bun run deploy:errrbody
bun run deploy:lifedvr
```

Deploy all sites:

```bash
bun run deploy
```
