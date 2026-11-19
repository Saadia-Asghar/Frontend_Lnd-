# CampusMart Design System

A modern, student-centric marketplace design system derived from the clean, tactile aesthetic of Surabhi Khare's *"Student Market Place App"* (Dribbble shot #12834697).

Built for **CampusMart** (React + Vite + Tailwind CSS), this design system prioritizes approachable warmth, high legibility, crisp card hierarchies, and vibrant student-friendly accents.

---

## 1. Color Palette

The palette anchors on a signature vibrant electric royal blue against soft, cool-tinted surfaces. Pure blacks and harsh drop shadows are replaced with deep slate navy and soft, atmospheric tints.

### Primary Color Tokens

| Role | Name | Hex | Tailwind Utility Suggestion | Usage |
| :--- | :--- | :--- | :--- | :--- |
| **Canvas / Background** | Background Canvas | `#F5F7FC` | `bg-[#F5F7FC]` (`bg-slate-50/cool`) | Main app body, page background |
| **Surface / Card** | Pure Surface | `#FFFFFF` | `bg-white` | Product cards, modals, sheets, navigation bars |
| **Surface Secondary** | Inset / Input Surface | `#EEF2F8` | `bg-[#EEF2F8]` | Search bar background, inactive chips, form inputs |
| **Primary Accent** | Electric Royal Blue | `#204EDC` | `bg-[#204EDC]`, `text-[#204EDC]` | Main CTAs, price accents, active icons, focus rings |
| **Accent Dark (Hover)**| Deep Royal | `#173DB5` | `hover:bg-[#173DB5]` | Hover/pressed states for primary buttons |
| **Accent Light (Tint)**| Soft Ice Blue | `#DEE7F9` | `bg-[#DEE7F9]`, `text-[#204EDC]` | Secondary buttons, active chip backgrounds, badges |
| **Text Primary** | Deep Slate Navy | `#212234` | `text-[#212234]` | Headings, card titles, major labels |
| **Text Secondary** | Medium Slate | `#5B6882` | `text-[#5B6882]` | Body text, descriptions, inactive nav labels |
| **Text Muted / Caption**| Pale Slate Blue | `#A1B0D4` | `text-[#A1B0D4]` | Timestamps, placeholders, subtle metadata, icons |
| **Border Subtle** | Soft Divider | `#E4EBF6` | `border-[#E4EBF6]` | Card outlines, dividers, input borders |
| **Border Focus** | Accent Border | `#204EDC` | `border-[#204EDC]` | Focused input border, selected state outline |

### Supporting / Semantic Accents

Used sparingly for item conditions, verification, and marketplace feedback.

| Semantic Role | Hex | Tint Hex | Description & Usage |
| :--- | :--- | :--- | :--- |
| **Verified / Condition (Green)** | `#10B981` | `#E6F8F0` | "Verified Student" badge, "Like New" condition tag |
| **Urgent / Featured (Amber)** | `#F59E0B` | `#FEF3C7` | "Ending Soon", "Popular", "Urgent Sale" |
| **Danger / Alert (Red)** | `#EF4444` | `#FEE2E2` | Errors, out-of-stock items, delete action |

---

## 2. Typography

### Typefaces
- **Primary Font Family:** `Plus Jakarta Sans`, with fallbacks to `Inter`, `-apple-system`, `BlinkMacSystemFont`, `Segoe UI`, `sans-serif`.
- **Personality:** Modern geometric sans-serif with open apertures and friendly round curves, delivering an energetic yet clean student product feel.

### Type Scale

| Level | Size (px / rem) | Line Height | Weight | Tailwind Equivalent | Role |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Display / Hero** | 32px / `2.0rem` | 40px / `2.5rem` | Bold (700) | `text-3xl font-bold leading-tight` | Landing headers, hero promotions |
| **Heading 1** | 24px / `1.5rem` | 32px / `2.0rem` | Bold (700) | `text-2xl font-bold leading-snug` | Screen titles ("Explore Campus", "My Listings") |
| **Heading 2** | 20px / `1.25rem` | 28px / `1.75rem` | SemiBold (600) | `text-xl font-semibold leading-normal` | Section headers ("Recent Textbooks", "Dorm Essentials") |
| **Heading 3 / Subhead**| 18px / `1.125rem`| 24px / `1.5rem` | SemiBold (600) | `text-lg font-semibold leading-normal` | Product titles in detail view, modal titles |
| **Body Large / Price** | 16px / `1.0rem` | 24px / `1.5rem` | SemiBold (600) | `text-base font-semibold` | Product prices, prominent callouts |
| **Body Regular** | 14px / `0.875rem`| 20px / `1.25rem`| Regular (400) | `text-sm font-normal leading-relaxed` | Product descriptions, seller bios, standard body |
| **Body Medium** | 14px / `0.875rem`| 20px / `1.25rem`| Medium (500) | `text-sm font-medium` | Button labels, interactive list items, form labels |
| **Caption / Small** | 12px / `0.75rem` | 16px / `1.0rem` | Regular (400) | `text-xs font-normal` | Timestamps ("2 hrs ago"), campus location ("North Hall") |
| **Badge / Micro** | 11px / `0.6875rem`| 14px / `0.875rem`| SemiBold (600) | `text-[11px] font-semibold tracking-wide` | Status chips, category tags, pill counters |

---

## 3. Spacing, Corner Radius, and Surface Philosophy

### Spacing Scale
The spacing system uses a **4px baseline grid** to maintain balance across mobile and desktop breakpoints:

- **2xs (4px / `0.25rem`):** Icon-to-text spacing, badge internal padding (`p-1`, `gap-1`)
- **xs (8px / `0.5rem`):** Tight gaps, chip vertical padding, list item compact gaps (`p-2`, `gap-2`)
- **sm (12px / `0.75rem`):** Internal component padding, chip horizontal padding (`p-3`, `gap-3`)
- **md (16px / `1.0rem`):** Default card internal padding, grid gap for mobile feeds (`p-4`, `gap-4`)
- **lg (20px / `1.25rem`):** Desktop card padding, section gap (`p-5`, `gap-5`)
- **xl (24px / `1.5rem`):** Screen edge margins, header spacing (`p-6`, `gap-6`)
- **2xl (32px / `2.0rem`):** Distinct section separation (`py-8`, `gap-8`)
- **3xl (48px / `3.0rem`):** Major page block dividers (`py-12`)

### Corner Radius Scale
The visual language leans heavily into friendly, organic rounded geometry:

- **Small (`rounded-lg` / 8px):** Badges, notification pills, subtle interior elements
- **Medium (`rounded-xl` / 12px):** Buttons, search input fields, dropdown menus, nested product image thumbnails
- **Large (`rounded-2xl` / 16px - 20px):** Product cards, promo banners, filter drawers
- **Extra Large (`rounded-3xl` / 24px):** Bottom sheets, modal dialogues
- **Full (`rounded-full` / 9999px):** Category pill chips, circular icon buttons, status badges, avatars

### Borders vs. Shadows: The Core Philosophy
The Dribbble reference avoids heavy lines and muddy dark drop shadows. Instead, hierarchy is achieved through **tonal surface separation and diffuse ambient shadows**:

1. **Card Depth (Shadow > Border):**
   - Cards sit on the tinted canvas (`#F5F7FC`) with a crisp `#FFFFFF` surface.
   - Use an ambient, diffuse shadow: `box-shadow: 0 4px 20px -2px rgba(33, 34, 52, 0.05)`.
   - Complement the shadow with a hairline border (`1px solid #E4EBF6`) for crisp definition on low-contrast screens.
   - **Never** use harsh, dark, 20%+ opacity black drop shadows.

2. **Interactive Inputs & Toggles:**
   - Inactive inputs rely on soft filled surfaces (`#EEF2F8`) rather than explicit borders.
   - Active/focused states replace the fill with a white background, a crisp `#204EDC` outline (`1.5px`), and a faint blue glow (`0 0 0 3px rgba(32, 78, 220, 0.12)`).

3. **Elevation Levels:**
   - **Elevation 0 (Flat):** Canvas background `#F5F7FC`
   - **Elevation 1 (Cards):** `#FFFFFF` + `0 2px 12px -2px rgba(33, 34, 52, 0.04)` + `1px solid #E4EBF6`
   - **Elevation 2 (Hovered Card / Floating Nav):** `#FFFFFF` + `0 8px 24px -4px rgba(33, 34, 52, 0.08)`
   - **Elevation 3 (Modals / Floating Action Buttons):** `#FFFFFF` + `0 16px 36px -6px rgba(33, 34, 52, 0.12)`

---

## 4. Component Styles

### A. Buttons

#### 1. Primary Button
- **Background:** `#204EDC`
- **Text:** `#FFFFFF`, 14px (`text-sm`), SemiBold (`font-semibold`)
- **Padding:** 12px vertical, 20px horizontal (`py-3 px-5`)
- **Radius:** 12px (`rounded-xl`) or Pill (`rounded-full`)
- **Shadow:** `0 4px 14px rgba(32, 78, 220, 0.25)`
- **Hover State:** Background `#173DB5`, shadow expands slightly
- **Active / Pressed:** Scale down (`scale-[0.98]`)

#### 2. Secondary / Tinted Button
- **Background:** `#DEE7F9` (Ice Blue Tint)
- **Text:** `#204EDC`, 14px (`text-sm`), SemiBold (`font-semibold`)
- **Padding:** 12px vertical, 18px horizontal (`py-3 px-4.5`)
- **Radius:** 12px (`rounded-xl`)
- **Shadow:** None (flat)
- **Hover State:** Background `#D0DCF7`

#### 3. Outline / Ghost Button
- **Background:** Transparent (or `#FFFFFF` on colored canvases)
- **Border:** `1px solid #E4EBF6`
- **Text:** `#212234`, 14px (`text-sm`), Medium (`font-medium`)
- **Hover State:** Background `#EEF2F8`, border `#D4DFEF`

#### 4. Icon Action Button (Bookmark / Favorite / Share)
- **Dimensions:** 36px × 36px or 40px × 40px circle (`rounded-full`)
- **Background:** `#FFFFFF` (with soft elevation) or `#EEF2F8`
- **Icon Color:** `#5B6882` (Active/Favorited: `#204EDC` or `#EF4444`)

---

### B. Cards (Product & Marketplace Listings)

- **Container:**
  - Background: `#FFFFFF`
  - Border Radius: 16px (`rounded-2xl`)
  - Border: `1px solid #E4EBF6`
  - Shadow: `0 4px 16px -2px rgba(33, 34, 52, 0.04)`
  - Padding: 12px inside (`p-3`) or 16px (`p-4`)
- **Image Container:**
  - Aspect Ratio: 1:1 (square) or 4:3
  - Border Radius: 12px (`rounded-xl`)
  - Background: `#EEF2F8` placeholder
  - Object Fit: Cover
- **Header / Meta Layer:**
  - Category / Condition Tag floating on image (top left or bottom left)
  - Favorite Heart Button floating top right (`bg-white/90 backdrop-blur-sm rounded-full p-2`)
- **Content Block:**
  - Title: `#212234`, 14px or 15px, SemiBold (`font-semibold`), 1-2 line clamp
  - Campus / Seller Location: `#A1B0D4`, 12px (`text-xs`), with micro map-pin icon
  - Price Tag: `#204EDC`, 16px or 18px, Bold (`font-bold`), prominently placed at bottom left
  - Action / Time: "2h ago" in `#A1B0D4`, 12px at bottom right
- **Interactive State:**
  - Smooth transform hover: `transition-all duration-200 hover:-translate-y-1 hover:shadow-lg hover:border-[#D0DCF0]`

---

### C. Chips & Category Filters

Chips serve as the primary category filter system (e.g. "All", "Textbooks", "Electronics", "Dorm & Living", "Clothing").

- **Inactive / Default Chip:**
  - Background: `#FFFFFF`
  - Border: `1px solid #E4EBF6`
  - Text: `#5B6882`, 13px (`text-[13px]`), Medium (`font-medium`)
  - Radius: Pill (`rounded-full`)
  - Padding: 8px vertical, 16px horizontal (`py-2 px-4`)
  - Hover: Background `#F5F7FC`, border `#D4DFEF`, text `#212234`
- **Active / Selected Chip:**
  - Background: `#204EDC`
  - Border: `1px solid #204EDC`
  - Text: `#FFFFFF`, 13px, SemiBold (`font-semibold`)
  - Shadow: `0 3px 10px rgba(32, 78, 220, 0.22)`
- **Alternative Subtle Active Chip (for dense sub-filters):**
  - Background: `#DEE7F9`
  - Border: `1px solid #DEE7F9`
  - Text: `#204EDC`, SemiBold

---

### D. Badges & Status Tags

Small metadata indicators placed on listings or user profiles.

- **Structure:**
  - Height: 22px – 24px
  - Padding: 3px vertical, 8px horizontal (`py-0.5 px-2.5`)
  - Radius: Pill (`rounded-full`) or Soft Rectangle (`rounded-md`, 6px)
  - Typography: 11px or 12px, SemiBold (`font-semibold`), tracking slightly wide

- **Variants:**
  - **Verified Student:**
    - Background: `#DEE7F9`
    - Text: `#204EDC`
    - Icon: Small shield/check icon in `#204EDC`
  - **Condition: Brand New / Like New:**
    - Background: `#E6F8F0`
    - Text: `#10B981`
  - **Condition: Good / Fair:**
    - Background: `#EEF2F8`
    - Text: `#5B6882`
  - **Urgent / Hot Deal:**
    - Background: `#FEF3C7`
    - Text: `#B45309`

---

## 5. The "Avoid" List (Design Guardrails)

Do **NOT** use the following patterns in CampusMart UI:

1. **Avoid Pure Black (`#000000`) for Text or Icons:**
   - Never use `#000000`. Use Deep Slate Navy (`#212234`) for high contrast, and `#5B6882` for secondary reading. Pure black breaks the soft, polished look.

2. **Avoid Harsh, Dark Drop Shadows:**
   - Avoid generic `shadow-md` or `shadow-xl` with high opacity black (`rgba(0,0,0,0.25)`). Always tint shadows with low-opacity navy/slate (`rgba(33, 34, 52, 0.04 - 0.08)`) with generous blur radii.

3. **Avoid Sharp 90-Degree Corners (`rounded-none`):**
   - No sharp rectangles on buttons, cards, images, or chips. Everything should feel approachable and tactile (minimum `rounded-lg` for micro elements, `rounded-xl` for buttons, `rounded-2xl` for cards).

4. **Avoid High-Contrast Dark 1px Borders:**
   - Avoid `#94A3B8` or `#64748B` line borders on cards. Use soft ice borders (`#E4EBF6`) that gently delineate without visually boxing in content.

5. **Avoid Color Pollution (Too Many Competing Accents):**
   - Do not introduce multiple bright primary colors (e.g. pairing vibrant red, orange, purple, and green CTAs in one view). Keep `#204EDC` as the single hero accent for primary actions and pricing. Other colors (amber, emerald) are reserved strictly for informational status badges.

6. **Avoid Low-Contrast Badge Combinations:**
   - Never put white text on light pastel badges (e.g. white text on `#DEE7F9`). Badges must always pair tinted backgrounds with their saturated dark counterpart (e.g. `#DEE7F9` bg with `#204EDC` text).

7. **Avoid Dense, Bordered Data Tables:**
   - CampusMart is a student marketplace, not an enterprise spreadsheet. Use spacious card grids, clear typography hierarchy, and generous padding rather than cramped table grids with rigid dividers.
