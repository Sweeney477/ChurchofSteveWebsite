## Sanity CMS Setup

This project already has Sanity wiring on the frontend (pages fetch from Sanity via `lib/sanity.ts`) and a Studio in `church-of-steve-cms/`. Follow these steps to edit content for every page that uses Sanity and to add new entries.

### 1) Environment variables (frontend)

Create a `.env.local` at the repo root with:

```
VITE_SANITY_PROJECT_ID=hjme0fev
VITE_SANITY_DATASET=production

# If you use Supabase + AI features elsewhere in the app
VITE_SUPABASE_URL=
VITE_SUPABASE_ANON_KEY=
GEMINI_API_KEY=
```

Deploy environments (e.g., Vercel) need the same `VITE_SANITY_*` vars set in the project settings.

### 2) Install & run the Studio locally

```
cd church-of-steve-cms
npm install
npm run dev     # opens Sanity Studio on http://localhost:3333
```

Log in with your Sanity account when prompted. The Studio is already pointed to project `hjme0fev` / dataset `production`.

### 3) Content types (what you can edit)

- Tenets (`tenet`): title, description, icon, color — shown on Beliefs page.
- Miracles (`miracle`): testimonials with author, role, content, likes, image — used on Testimonials page.
- Shop Items (`shopItem`): name, price, description, image — used on Shop page.
- Events (`event`): title, description, month/date/time/location/cta, image — used on Rituals page.
- Gallery Images (`galleryImage`): image, caption, order — used on Gallery page.

Add, edit, or delete documents of these types in Studio and the site will reflect changes.

### 4) Deploying the Studio (optional)

From `church-of-steve-cms/` you can host a managed Studio on Sanity:

```
npm run deploy
```

Sanity will give you a hosted Studio URL. Use that for non-technical editors.

### 5) Troubleshooting

- If pages show “Loading …” indefinitely, ensure `VITE_SANITY_PROJECT_ID` and `VITE_SANITY_DATASET` are set where the site runs.
- Image-based sections require the `image` field to be populated; otherwise, placeholders appear.
- To extend editing to more pages, add new schema definitions in `/sanity-schemas/` and they will automatically show up in Studio (shared by frontend and Studio).

