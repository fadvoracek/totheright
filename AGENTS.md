<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Project rules
- Site content (contacts, company data, services, fleet) lives in `src/lib/site.ts`; pages read from it so facts change in one place.
- Contact form validation lives in `src/lib/contact-schema.ts` (shared by UI and tests); submissions insert into the `contact_messages` table, which allows anonymous INSERT only (no public reads).
- Each content section is its own route file with its own head(); shared header/footer are in `__root.tsx`.
- Colors, gradients and brand utilities (eyebrow, lane-line, bg-road-texture) are defined in `src/styles.css`; components use tokens only.
