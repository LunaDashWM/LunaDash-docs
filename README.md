# LunaDash-docs

The website of [LunaDash](https://github.com/LuYishan-4/LunaDash): the desktop's home page,
user guides, the control and plugin API, release notes and the documentation of
[SlintLu](https://github.com/LunaDashWM/SlintLu), the toolkit the LunaDash shell runs on.
It is an [Astro](https://astro.build) static site.

## Develop

```sh
npm ci
npm run dev        # http://localhost:4321/LunaDash-docs/
npm run build      # static site in dist/
```

`SITE_URL` and `BASE_PATH` set where the site is published (default
`https://lunadashwm.github.io` and `/LunaDash-docs`).

## SlintLu documentation

`src/pages/slintlu/` is generated from SlintLu's README and `docs/`:

```sh
python3 scripts/sync-slintlu.py ../SlintLu
```

Edit those pages in the SlintLu repository; the deployment syncs them from SlintLu's `main`
branch before every build.

## Deploy

`.github/workflows/pages.yml` builds the site on every push to `main` (and daily, for new
releases) with the current SlintLu documentation and LunaDash release notes, and publishes it
to GitHub Pages. Enable it once under **Settings → Pages → Source: GitHub Actions**.
