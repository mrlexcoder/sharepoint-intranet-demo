# How this demo maps to a real SharePoint Online tenant

This note keeps the demo honest: what is modelled here, and what a real
SharePoint implementation would use instead.

| Demo in this repo | Real SharePoint Online equivalent |
|---|---|
| Home page sections | SharePoint site page with Hero, News, Quick Links and Events web parts |
| News list + tag filter | SharePoint News / custom list with managed metadata |
| Document library + search | SharePoint document library with metadata columns, versioning and search |
| Permissions table | Site Permissions: Owners / Members / Visitors groups |
| Content audit list | Content lifecycle: audit, review dates, archive/delete decisions |
| Add news in browser | SharePoint list item creation, with approval if enabled |

## Next step on a real tenant (not done in this demo)

1. Join the Microsoft 365 Developer Program for a free developer tenant, or use
   an employer's tenant — do not use a production tenant for learning.
2. Create a Communication Site, add News and Document Library web parts.
3. Build a simple SPFx web part (TypeScript + React) that reads a SharePoint
   list via PnPjs and renders it — that code would live in a separate
   `spfx-webpart/` folder in a future version of this repo.
4. Set permissions, test with a test user, and run a content audit.

Until step 3 is done, this repo must not be described as "SPFx production
experience" — it is a concepts demo built with HTML/CSS/JavaScript.
