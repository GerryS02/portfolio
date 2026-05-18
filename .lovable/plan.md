## Goal
Add background images to the "Backend Engineering" and "Merit Scholar" cards in the About section, using a full-cover background with dark overlay so text stays readable. The other two cards (GPA, Phi Theta Kappa) remain unchanged.

## Images
- Backend Engineering card: `https://i.postimg.cc/hGxtYNHh/Your-Product-Built-Right.jpg`
- Merit Scholar card: `https://i.postimg.cc/L5sRmW0C/Honor-Roll-Certificate-Named-Signatures.png`

## Changes

### `src/components/portfolio/About.tsx`
1. Extend the `cards` array so the Backend Engineering and Merit Scholar entries include an optional `image` field.
2. In the card rendering loop, conditionally apply a background image when `image` is present:
   - Use `backgroundImage` inline style pointing to the URL.
   - Add a dark gradient overlay (`bg-gradient-to-t from-black/80 via-black/40 to-transparent` or similar) so the white/light text remains legible.
   - Change text colors to white/light variants for image cards (icon, value, label).
3. Cards without an image keep their existing `glass` styling and colors exactly as they are.

## Out of scope
- No changes to card layout, grid, animation, or non-image cards.
- No new dependencies needed.