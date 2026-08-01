# soft_launch

The website for **soft_launch** — a Creative Code Intensive for Artists & Technologists. Live at **[softlaunch.net](https://softlaunch.net)**.

This is a small static website. It's built with [Parcel](https://parceljs.org/) and hosted for free on GitHub Pages. The home page animation uses [p5.js](https://p5js.org/), and email signups are saved to [Supabase](https://supabase.com/).

---

## What's in here

Each page of the site is its own HTML file. The text and photos you'd want to
change live directly in these files — edit them like a document.

| Folder / file | What it is |
|---|---|
| `index.html` | The home page. |
| `upcoming/index.html` | The Upcoming page. |
| `previous/index.html` | The Previous page — one block per past workshop. |
| `about/index.html` | The About page — bios, photo carousel, partners. |
| `src/` | Supporting code — JavaScript, CSS, fonts, and images. |
| `src/app.js` | Interactive bits: email form, photo viewer, carousel, testimonials. Supabase keys live here. |
| `src/css/style.css` | All the styling. |
| `dist/` | The built website that gets published. **Don't edit this by hand** — it's generated. |
| `CNAME` | Tells GitHub Pages to use the `softlaunch.net` domain. Leave it alone. |
| `robots.txt`, `sitemap.xml` | Search engine hints. Add new pages to the sitemap. |
| `SUPABASE_SETUP.md` | Step-by-step guide for the email signup database. |

> **Adding a page?** Copy an existing one, then add it to both the `start` and
> `predeploy` commands in `package.json` and to `sitemap.xml`.

---

## One-time setup

You only need to do this once on your computer.

1. **Install [Node.js](https://nodejs.org/)** (pick the "LTS" version). This gives you the `npm` command used below.
2. **Get the code** and open it in a terminal:
   ```bash
   git clone git@github.com:BL451/softlaunch_net.git
   cd softlaunch_net
   ```
3. **Install the project's tools:**
   ```bash
   npm install
   ```

---

## Working on the site (local preview)

To see the site on your own computer while you make changes:

```bash
npm start
```

This starts a local preview server and prints a web address (usually `http://localhost:1234`). Open it in your browser. As you edit files in `src/`, the page updates automatically.

When you're done previewing, press `Ctrl + C` in the terminal to stop it.

---

## Publishing your changes (deploy)

The site goes live in two steps: saving your changes to GitHub, then deploying.

**1. Save your changes to GitHub:**
```bash
git add -A
git commit -m "Describe what you changed"
git push
```

**2. Deploy to the live site:**
```bash
npm run deploy
```

This rebuilds the site and pushes it to GitHub Pages. Give it a minute or two, then check **[softlaunch.net](https://softlaunch.net)** — your changes should be live.

> The deploy command handles the `dist/` folder and the custom domain automatically. You don't need to touch those yourself.

---

## Email signups (Supabase)

The signup form on the site saves names and emails to a Supabase database (think of it as a simple online spreadsheet you control).

- To **see who has signed up**: log in to [supabase.com](https://supabase.com), open the project, and go to **Table Editor → `email_signups`**. You can export to CSV from there.
- To **set this up from scratch** or change the database connection: follow **[SUPABASE_SETUP.md](./SUPABASE_SETUP.md)**. The connection keys live near the top of `src/app.js`.

---

## Quick reference

```bash
npm install      # one-time: install tools
npm start        # preview the site locally
npm run deploy   # publish changes to softlaunch.net
```

## If something goes wrong

- **`npm: command not found`** → Node.js isn't installed. See "One-time setup" above.
- **Changes aren't showing up live** → Make sure you ran `npm run deploy`, then wait a couple minutes and refresh. GitHub Pages can be slow to update.
- **The signup form says "not configured"** → The Supabase keys in `src/app.js` need to be filled in. See `SUPABASE_SETUP.md`.
