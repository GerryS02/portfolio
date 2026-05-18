## Changes

**1. Contact section (`src/components/portfolio/Contact.tsx`)**
- Remove the GitHub / LinkedIn / Resume row from the bottom of the form card (and the divider above it).
- In the left column, insert a new social links row between the subtitle paragraph and the Email/Location cards, containing GitHub, LinkedIn, and Resume as icon+label pills styled to match the existing glass aesthetic.

**2. Logo in nav (`src/components/portfolio/Nav.tsx`)**
- Replace the small black dot next to "Gerry Singh" with a custom "GS" monogram logo inspired by the uploaded reference (two interlocking rounded letterforms in a single stroke weight).
- Generate the logo as a transparent PNG via imagegen using the uploaded reference image as inspiration (interlocking G+S, single uniform stroke, minimal, monochrome so it inherits the foreground color via CSS where possible — otherwise use as-is at small size).
- Save to `src/assets/logo-gs.png` and import it into `Nav.tsx`, rendering at roughly h-6 w-6 in place of the dot.

No other components, layout, or copy will change.
