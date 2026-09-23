# Rendered-site audit: 30 improvements

This audit was completed against the rendered Astro site in the browser at desktop widths, including Home, Programs, Schedule, About, Students, News, and the shared header/footer interactions. The implementation notes below separate improvements made during this pass from the existing foundations that were verified and retained.

Content ownership follow-up: About is now the public story of the school, instructor, and teaching team. Students is the single home for dojo rules, handbook guidance, belt testing, and portal access so those resources do not drift or appear twice.

## Navigation and interaction

1. Added an explicit accessible name to the mobile menu button.
2. Keep the menu button label synchronized between “Open navigation” and “Close navigation.”
3. Close the mobile navigation when a link is selected.
4. Let Escape close the mobile navigation.
5. Return keyboard focus to the menu button after Escape or link selection.
6. Mark the active primary navigation route with `aria-current="page"`.
7. Added a title to the back-to-top control so its purpose is clear on desktop and touch devices.
8. Added visible breadcrumb trails to program detail pages.
9. Added visible breadcrumb trails to individual news pages.
10. Added a visible focus treatment when a visitor tabs to a program card’s image.

## Home and program discovery

11. Made program-card photography clickable, not just the small text link.
12. Corrected the program-card sequence so Sparring is numbered after Eskrima.
13. Converted the home program switcher to a keyboard-operable tab interface.
14. Added arrow-key navigation to the home program tabs.
15. Added Home/End keyboard navigation to the home program tabs.
16. Added roving `tabindex` behavior so keyboard focus stays within the active tab control cleanly.
17. Reduced the oversized non-schedule section rhythm that was creating large dead zones between panels.
18. Reduced the gap between page heroes and their first content panel.
19. Tightened the program directory/card spacing without changing the schedule’s intentional rhythm.
20. Tightened the specialty-program and contact CTA spacing so the bottom of pages does not feel detached.

## Schedule and student-facing information

21. Added a Reset filters control to the public schedule.
22. Hide Reset filters when the schedule is already showing the default view.
23. Added an accessible description to the class-detail dialog.
24. Move focus into the class-detail dialog when a schedule pill is opened.
25. Return focus to the exact schedule pill that opened the class-detail dialog.
26. Preserved rank-first schedule rows and compact time pills while fixing the striped empty-cell treatment.
27. Preserved the belt-progression scroll indicator as a fixed, visual-only strip with no percentage or belt label.
28. Kept belt-testing downloads available from the student-facing belt interface.

## Archive, performance, and maintainability

29. Added newsletter archive search, year jumping, live result counts, and empty-year hiding while retaining the complete historical archive.
30. Added async image decoding to content imagery and documented the rendered audit so future changes can be checked against visible behavior, not only source code.

The site remains a static Astro build. No portal, authentication, check-in, student database, or private student information was introduced.
