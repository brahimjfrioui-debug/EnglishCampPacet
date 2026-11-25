<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.

## What Lovable manages

Rules outside this block are the project's own. Change the pieces below in
Lovable, not by hand. With the [Lovable MCP](https://mcp.lovable.dev)
connected, `send_message` asks Lovable to do it; otherwise ask the user to
use the editor.

- **Database.** Do not add or edit `supabase/migrations/` or `drizzle/`.
  Ask Lovable to change the schema.
- **Generated files.** Do not edit a file whose header says it is automatically
  generated.
- **AI gateway.** Keep model calls on Lovable's gateway, and keep
  `LOVABLE_API_KEY` out of browser code.
- **Connectors.** Lovable provides native connectors. `list_connectors` shows
  which are enabled; `add_connector` only returns the dashboard link. When a
  connector is enabled, calls go through the connector gateway and need
  `LOVABLE_API_KEY`. When Lovable does not provide one, users can bring their
  own key and store it in Secrets.
- **Secrets.** Lovable manages them. Do not put secret values in the repo.
<!-- LOVABLE:END -->
## Project rules
- Editable site content (programs, teachers, gallery, news, FAQs, school copy) lives in `src/content/*.ts` and contact/social settings in `src/config/site.ts`; pages only render it. Why: the school updates content in one place.
- Inquiry forms validate with zod schemas in `src/lib/inquiry.ts` and hand off to WhatsApp (`src/lib/whatsapp.ts`); there is no backend storage or payment flow. Why: informational site with no database in v1.
- Per-page SEO uses `pageHead()` from `src/lib/seo.ts` with canonical URLs on the production domain. Why: consistent metadata for local search.
- Shared header/footer/WhatsApp float are mounted in `src/routes/__root.tsx`. Why: one layout for every page.
