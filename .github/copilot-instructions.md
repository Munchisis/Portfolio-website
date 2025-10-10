The repository is a small Next.js 15-based portfolio site using the App Router, TailwindCSS, and static asset imports.

Key points to help an AI contributor be productive:

- Project entry and build
  - Main scripts: `npm run dev` (starts Next.js dev server with turbopack), `npm run build`, `npm run start`.
  - Config files: `next.config.mjs`, `tailwind.config.mjs`, `postcss.config.mjs`, and `eslint.config.mjs`.

- Architecture / file layout
  - App Router (app/): top-level layouts and pages live in `app/`.
    - `app/layout.js` defines global fonts (Google fonts via `next/font/google`) and the HTML root.
    - `app/page.js` composes the homepage from components in `app/components/`.
  - Components are plain React components (JSX) using client behavior when needed (`'use client'` in `app/page.js`).
  - Static assets are centralized in `assets/assets.js` which imports image files and exports named objects like `assets`, `workData`, `infoList`.

- Conventions & patterns observed (copy these when adding features)
  - Styling: Tailwind utility classes are used everywhere. Keep class names in JSX and prefer existing utility patterns (responsive prefixes like `sm:`, `md:`).
  - Images: Use Next.js `Image` with src values imported from `assets/assets.js` (e.g., `import { assets } from '@/assets/assets'` then `src={assets.profile_img}`). Avoid using string paths unless added to `public/` intentionally.
  - Client components: if a component uses state, refs, or browser-only APIs (e.g., `useRef`, event handlers that manipulate DOM), mark it as a client component by adding `'use client'` at the top of the module. Example: `app/page.js` is a client module.
  - Fonts: Google fonts are configured in `app/layout.js` using `next/font/google`; follow that pattern for new global fonts.

- Integration & external dependencies
  - Next.js 15, React 19. Fonts and images rely on Next's built-in optimizations.
  - Tailwind and PostCSS are configured; keep utility-first CSS changes inside `globals.css` or component-level classNames.

- Files to inspect when changing behavior
  - `app/layout.js` — root layout, fonts, html/body attributes.
  - `app/page.js` — homepage composition; shows `Navbar`, `Header`, `About` components.
  - `app/components/*.jsx` — UI components (Navbar, Header, About) demonstrating client behavior and Tailwind usage.
  - `assets/assets.js` — canonical source of image imports and small data lists (infoList, workData, serviceData).
  - `package.json` — scripts and dependency versions. Note turbopack flags in dev/build scripts.

- Small examples an AI might apply
  - Adding an image to the header: import it into `assets/assets.js`, export via `assets`, then reference `assets.new_image` inside `Header.jsx` using `<Image src={assets.new_image} />`.
  - Adding a new section to the homepage: add a component in `app/components/`, export default, and import it in `app/page.js` (follow `'use client'` only if browser APIs/state are required).

- Developer workflows & debugging tips
  - Run locally: `npm install` then `npm run dev` (zsh/macOS). Watch the terminal for Next.js/Turbopack messages.
  - Linting: `npm run lint` uses `eslint` (project relies on `eslint-config-next`). Fix linting errors using editor integrations or `npx eslint .`.
  - If images fail to load, check `assets/assets.js` imports and whether the file exists in the `assets/` folder. Files in `public/` can be referenced by path (e.g., `/sample-resume.pdf`).

- Project-specific gotchas
  - The project uses imported static image modules (ESM imports) — do not replace these with raw string paths unless intentional. New images should be added to the `assets/` folder and exported through `assets/assets.js` for consistency.
  - Mobile menu in `Navbar.jsx` manipulates `ref.current.style.transform` directly. Keep animations/transforms consistent if you refactor — test on small screens.
  - Fonts use className overrides (`font-Ovo`, `font-ovo`) — check exact casing when reusing utilities.

If something in this summary is unclear or you want more details (build logs, ESLint rules, or to expand instructions into CI steps), tell me which area to expand and I will iterate.
