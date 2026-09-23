# Reference audit

## Source priority

The live site at `taskkarateschool.com` wins conflicts for current public information. It currently exposes the Saint Andrew Street address, the 608-781-TASK phone number, the Gmail address, and the advertised American-style karate, sparring, weapons, and Eskrima offerings.

## Retain

- The TASK mark and restrained cobalt/ink identity cues.
- The real class and student imagery in `images/hero` and `images/spotlight`.
- Randy Thomson's instructor story and long teaching background.
- A simple program hierarchy for Kids, Teens & Adults, Eskrima, and focused sparring/weapons work.
- Short school principles that feel specific to Task Karate.

## Discard or move

- v3/v4 image-based navigation, Paper-Fu as the main design language, and the legacy static-site script layer.
- The stale v4 contact data: `2433 Losey Blvd S` and `(608) 788-3126`.
- Student login, profiles, social feed, check-in, attendance, admin routes, demo data, and database/API concerns. These are portal concerns. Public belt testing reference sheets are retained separately as static documents because they are useful to students without requiring accounts.
- Newsletter/news surfaces until there is a confirmed publishing owner and current content.

The live public schedule is published as two schedule images rather than structured HTML. The implementation transcribed the published belt groups, times, durations, weapons, sparring, Eskrima, mat class, and testing entries into editable data so visitors can filter by program, belt group, or day without relying on an unreadable image or PDF. The UI presents separate v3-inspired program panels with weekday columns, rank labels on the left, belt dots, compact oval time pills, and a click-for-details dialog.

The nine historical v3 belt testing sheets were restored to `public/belt-tests/` without changing their wording. The About page presents them as belt-colored buttons, previews the selected sheet in an accessible dialog, and provides print, standalone-sheet, and on-demand PDF actions.

## Design direction

The restart uses the v3 direction as the primary reference: deep navy carries the hero, navigation, footer, and schedule; gold is the main highlight; cyan handles wayfinding; belt colors drive the progress strip and supporting accents. Low-contrast angular linework, offset frames, compact eyebrow pills, Bebas Neue display type, photography, a back-to-top control, contact dialog, schedule filtering/details, and belt-sheet interactions create a recognizable Task Karate system without recreating the old site architecture. Reduced-motion users receive the same content without motion.
