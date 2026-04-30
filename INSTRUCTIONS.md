# INSTRUCTIONS.md - Blu Collar Web Solutions

## Purpose
This file tracks the project goals, active tasks, and change history.
Update this file whenever a meaningful change is made to the site.

---

## Project Goal
Rebuild the Blu Collar Web Solutions website (exported from Webflow) with
improved content, fixed placeholder copy, and better conversion for
blue-collar contractors who are looking to get online.

## Target Audience
Blue-collar business owners: roofers, plumbers, electricians, HVAC techs,
landscapers, painters, contractors. They are skeptical, budget-conscious,
and do not respond to marketing jargon.

## Site Structure
- Keep page-level `.html` files at the project root unless a migration is approved.
- Keep styles in `css/`, scripts in `js/`, and assets in `images/` + `fonts/`.
- Keep process notes and project decisions in `docs/`.

## Active To-Do List

### Must Fix Before Launch
- [ ] Replace lorem ipsum testimonials with real client quotes
- [ ] Remove all leftover Webflow template content
  - [ ] VR / Matterport / SCORM section on homepage
  - [ ] IPO and stock trading blog article placeholders
  - [ ] Broken feature comparison table on pricing page
- [ ] Add "Everything in [tier], plus..." to Professional and Platinum pricing cards
- [ ] Add custom domain (not webflow.io subdomain)

### High Priority Improvements
- [ ] Add About / founder section to homepage
- [ ] Add phone number and location to header or footer
- [ ] Add FAQ section to pricing page
- [ ] Rewrite hero subheadline in plain contractor language
- [ ] Add pricing anchor callout to homepage ("Starting at $99/mo")
- [ ] Connect website build (one-time fee) to monthly plans on pricing page

### Nice to Have
- [ ] Real testimonials with photos and trade/location
- [ ] Portfolio page with actual client site screenshots
- [ ] Blog with contractor-focused content (SEO)
- [ ] Mobile menu review and cleanup

## Change History Guidelines
For each meaningful update, add an entry with:
1. Date (`YYYY-MM-DD`)
2. Scope (`setup`, `content`, `design`, `seo`, `accessibility`, `bugfix`)
3. Files changed
4. Why the change was made
5. Verification notes

Entry template:

```md
## YYYY-MM-DD - scope
- Files: `path/file.html`, `css/styles.css`
- Why: Short reason for the change.
- Verification: What was checked after the update.
```

## Change Log
## 2026-04-30 - setup
- Files: `.cursorrules`, `INSTRUCTIONS.md`, `README.md`, `.gitignore`
- Why: Established project conventions and setup baseline before content/design edits.
- Verification: Confirmed files created and git repo initialized.

## How to Use This File
- Before asking Cursor to make a change, reference the task from the to-do list.
- After a change is completed and committed, move it to the Change Log.
- Add new tasks to the to-do list as they come up; do not rely on memory.
