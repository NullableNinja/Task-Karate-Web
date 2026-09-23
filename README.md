# Task Karate School — public website

This is the greenfield public marketing site for Task Karate School. It is an Astro static build published at the repository's GitHub Pages URL. The existing `taskkarateschool.com` website and DNS are intentionally outside this repository's deployment.

## Local development

```bash
npm install
npm run dev
```

The local site will be available at the URL Astro prints in the terminal.

## Production build

```bash
npm run build
npm run preview
```

The deployable output is written to `dist/`. The build uses Astro's static output and contains no server, database, authentication, API, check-in, or student-private-data layer.

## Project map

- `src/pages/` — public routes: home, programs and program details, schedule, about, students, news and news stories, newsletter archive, contact, and 404.
- `src/components/` — shared header, footer, geometric pattern, schedule, belt-testing, contact-modal, progress, section intro, program card, and CTA components.
- `src/data/site.ts` — contact details, navigation, Facebook link, portal URL, and the static contact-form delivery configuration.
- `src/data/programs.ts` — program copy and asset mapping.
- `src/data/schedule.ts` — public informational weekly schedule data, including class audience and eligibility notes.
- `src/data/news.ts` — public notes and full story copy; no private student news or publishing backend.
- `src/data/team.ts` — approved Assistant Instructor names; add bios/photos only after the school approves them.
- `src/styles/global.css` — design tokens, layout, responsive behavior, focus styles, and reduced-motion support.
- `public/images/` — selected Task Karate assets reused from historical projects.
- `public/belt-tests/` — the nine historical belt testing sheets, preserved as public static documents.
- `public/newsletters/` — the complete local newsletter PDF archive migrated from the original public site.

## Student Portal configuration

The public site links to the separate portal through `PUBLIC_PORTAL_URL`:

```powershell
$env:PUBLIC_PORTAL_URL = "https://your-real-portal-host/"
npm run build
```

The current default is `https://portal.taskkarateschool.com/` so the boundary is visible in development. Replace it with the real portal hostname before launch.

## Contact form delivery

The public contact page uses FormSubmit so the static GitHub Pages build can deliver lead inquiries without a custom backend. `src/data/site.ts` contains the delivery action and return URL. The inbox owner may need to confirm the delivery address with FormSubmit after the first submission; replace `contactFormAction` with the school’s preferred form provider before launch if needed.

## GitHub Pages deployment

The workflow in `.github/workflows/deploy.yml` builds the Astro site and publishes `dist/` through GitHub Pages whenever `main` changes. The current preview URL is `https://nullableninja.github.io/Task-Karate-Web/`. This repository does not configure, claim, redirect, or modify `taskkarateschool.com`; a future domain migration would require an explicit decision by the school and separate DNS/hosting work.

## Audit notes and source decisions

The live site was treated as the source of truth for public business information: `1501 Saint Andrew Street, La Crosse, WI 54603`, `(608) 781-TASK (8275)`, and `taskkarate@gmail.com`. v3/v4 materials contained a conflicting address/phone pair (`2433 Losey Blvd S` / `(608) 788-3126`), which was intentionally discarded and is not used in this build.

Retained from historical projects: the TASK logo, real dojo/class photographs, the Randy Thomson portrait, the Kids / Teens & Adults / IS3 Eskrima / Sparring program concepts, the public student-resource structure, the complete newsletter archive, and the short dojo principles “Don’t use it the wrong way,” “Be respectful,” and “Do your best.”

Intentionally discarded: Paper-Fu as the dominant visual language, image-based navigation, heavy legacy scripts, demo/admin screens, portal pages, check-in flows, attendance logic, student profiles/social features, and historical contact data. Those student/account capabilities belong in `Task-Karate-Portal`, not this repository. Belt testing and newsletters were restored as static public reference features because the documents are useful school records; neither contains a student account or testing workflow.

The public schedule is static/local by design and includes the belt groups and durations shown on the live site's published Kids schedule (effective September 17, 2025) and Teens/Adults schedule (effective August 1, 2025). Weapons, mat class, testing, and Sparring are represented in the main schedule rather than a generic “Focused Sessions” program. Confirm the final class times with the school before launch, and update `src/data/schedule.ts` when the public schedule is verified.

The schedule is intentionally a program-first public reference rather than a portal surface. Each program has its own v3-inspired framed table, rank groups stay in the left columns, and compact time pills are keyboard-accessible and open a small detail dialog. It only communicates public class availability and fit; check-in, attendance, and private student data remain in the separate portal.

The `/students/` page gathers the exact public rules wording, handbook-style FAQs, belt testing sheets, and the separate portal link. The belt-testing panel reuses the original v3 belt sheets without rewriting their requirements. Each sheet can be previewed, opened as a standalone document, printed, or downloaded as a PDF when the on-demand PDF helper is available; the standalone sheet remains the fallback.

## Remaining human input before launch

1. Confirm the final public schedule and any program age/eligibility details.
2. Replace `PUBLIC_PORTAL_URL` with the real separate portal URL.
3. Decide separately whether the school wants a future domain migration; do not change the existing domain or DNS as part of routine repository deployment.
4. Run Lighthouse against the deployed site and replace/resize assets further if the final hosting pipeline changes image delivery.
