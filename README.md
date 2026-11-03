# SharePoint Intranet Demo

A personal demo project built to learn and practise SharePoint Online intranet concepts
for a Knowledge Management / Intranet Analyst role.

**Important, honest note:** this is a demo / learning project, not a live production
SharePoint tenant and not work done for a client or employer. It models the same
concepts the job asks for, using plain HTML, CSS and JavaScript, so it can be run
locally without a Microsoft 365 tenant.

## What it demonstrates

- **Site pages:** an intranet home page built from reusable sections (hero, news,
  quick links, events) — the same idea as SharePoint page creation with web parts.
- **Lists:** a news / announcements list with title, category, date and owner,
  with add, filter and delete in the browser.
- **Document library:** a library with file name, type, owner, modified date and
  metadata tags, with upload (local, in-browser), search and delete.
- **Metadata tagging:** every list item and document carries tags, so content can
  be filtered by tag — the same idea as SharePoint metadata and content lifecycle.
- **Permissions view:** a read-only table showing who can view / edit each site
  area, modelling basic SharePoint permission groups (Owners, Members, Visitors).
- **Content audit view:** a simple checklist showing which pages are current,
  which need review, and which are out of date.

## How to run it

No build step and no server needed:

1. Open `index.html` in a browser, or serve the folder with any static server.
2. Try the tabs: Home, News List, Documents, Permissions, Audit.
3. Add a news item or a document — changes are kept in your browser only
   (localStorage), they are not sent anywhere.

## Files

- `index.html` — the intranet demo page and layout
- `src/styles.css` — styling
- `src/app.js` — list, library, filtering, metadata and audit logic
- `src/data.json` — sample news, documents and permissions data
- `docs/SPFX-NOTES.md` — notes on how this maps to a real SharePoint Framework
  (SPFx) web part, and what would change on a real tenant

## What would change on a real SharePoint Online tenant

On a real tenant, the same pages would be built with SharePoint Online out-of-the-box
features, the lists/libraries would be real SharePoint lists, permissions would be
set in Site Permissions, and a custom web part would be built with SPFx and deployed
through the App Catalog. This demo does not claim that deployment.

## Author

Amit Kumar — built as a learning project for a SharePoint / Intranet Analyst application.
