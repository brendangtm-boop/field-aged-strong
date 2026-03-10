# Memory: index.md
Updated: now

## WorkLifeSoccer Design Memory

### Design System (v3 - Athletic Blue/Orange)
- **Primary**: Athletic blue `209 85% 30%` (#0A4D8C)
- **Accent/Orange**: `25 100% 50%` (#FF6B00), dark: `25 100% 40%`
- **Background**: White `0 0% 100%`
- **Foreground**: Dark gray `215 28% 17%` (#1F2937)
- **Surface**: Light gray `216 33% 97%` (#F5F7FA), warm: `213 20% 95%`
- **Fonts**: Playfair Display (serif headings, -0.025em h1) + DM Sans 15px body
- **Radius**: 0.75rem (2xl cards)
- **Shadows**: xs, card, elevated, hero, glow (orange glow for CTAs)
- **Note**: CSS var names kept from v2 (--gold = orange, --green-light = blue) for backward compat

### Key CSS Classes
- section-band, section-band-alt, section-band-warm
- card-premium (hover effect), card-premium-static (no hover)
- card-glass, image-card + image-card-overlay
- badge-gold (orange), badge-green (blue), badge-white
- chat-bubble-coach, chat-bubble-user, chat-prompt-pill
- progress-bar + progress-bar-fill, stat-number
- hero-gradient, gradient-gold (orange), gradient-green (blue)
- container-content, container-narrow, text-editorial

### Architecture
- 12 pages with SiteLayout (transparent→solid header on scroll)
- RecommendedNext component for cross-page linking
- Shared animation: fadeUp from lib/animations.ts
- Button variants: hero, hero-outline, gold, ghost-dark
- Training programs in src/data/programs.ts (4 structured multi-week programs)
- 80 workouts, 40 recovery routines, 30 articles with full content
