Design system, architecture constraints, and key decisions for WorkLifeSoccer.

## Design System (Athletic Blue + Orange)
- **Primary**: Athletic blue `209 85% 30%`
- **Accent/Orange**: `25 100% 50%`, dark: `25 100% 40%`
- **Background**: White `0 0% 100%`
- **Foreground**: Dark `220 20% 14%`
- **Surface**: `218 25% 96%`, warm: `216 18% 94%`
- **Fonts**: Playfair Display (serif headings) + DM Sans 16px body
- **Radius**: 0.75rem, shadows: xs/card/elevated/hero/glow

## Key CSS Classes
- section-band, section-band-alt, section-band-warm
- card-premium (hover), card-premium-static
- badge-gold, badge-green, badge-white
- gradient-green, gradient-gold, hero-gradient
- container-content, container-narrow, text-editorial
- progress-bar + progress-bar-fill, stat-number
- chat-bubble-coach, chat-bubble-user, chat-prompt-pill

## Architecture
- SiteLayout wraps all routes (transparent→solid header on scroll)
- WeeklyPlanCard: central weekly plan component with session logging
- QuickStartPanel: quick-start entry points (20 min, match weekend, sore, returning)
- RecommendedNext: cross-page linking component
- My2ctsCallout: editorial insight callout used across all pages
- Button variants: hero, hero-outline, gold, ghost-dark

## Data Layer (Backend-Ready)
- `src/data/weeklyPlan.ts` — PlannedSession model, default plan, quick starts
- `src/data/workouts.ts` — TrainingWorkout[]
- `src/data/recovery.ts` — RecoveryRoutine[]
- `src/data/articles.ts` — Article[]
- `src/data/my2cts.ts` — My2ctsEntry[]
- `src/data/my2cts-contextual.ts` — ContextualMy2cts[] (inline callouts by context)
- `src/data/programs.ts` — TrainingProgram[]
- `src/data/types.ts` — shared type definitions

## Product Positioning
- "Soccer Longevity System" for players 40+
- Primary question: "What should I do this week to stay in the game?"
- Weekly plan is the core engagement loop
- Match-centered cycle: prepare → train → play → recover → reflect → adjust
