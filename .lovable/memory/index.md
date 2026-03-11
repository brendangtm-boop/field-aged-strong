# Memory: index.md
Updated: now

## WorkLifeSoccer Design Memory

### Design System (v3 - Premium Athletic)
- **Primary**: Athletic blue `209 85% 30%`
- **Accent/Gold**: Performance orange `25 100% 50%`, dark: `25 100% 40%`
- **Background**: White `0 0% 100%`
- **Foreground**: Dark gray `220 20% 14%`
- **Muted-foreground**: `220 12% 40%` (darker for readability)
- **Surface**: `218 25% 96%`, warm: `216 18% 94%`
- **Fonts**: Playfair Display (serif headings) + DM Sans 16px body
- **Radius**: 0.75rem (2xl cards)
- **Progress bar**: gradient from primary to accent (orange)

### Key CSS Classes
- section-band, section-band-alt, section-band-warm (gradient warm)
- card-premium (hover -2px lift), card-premium-static
- badge-gold, badge-green, badge-white
- chat-bubble-coach, chat-bubble-user, chat-prompt-pill (larger)
- progress-bar + progress-bar-fill (7px, blue→orange gradient)
- hero-gradient (stronger overlay), gradient-gold, gradient-green

### Content Models
- TrainingWorkout, RecoveryRoutine, Article (in src/data/types.ts)
- My2ctsEntry: slug, title, date, author, teaser, body[], tags[]
- TrainingProgram (src/data/programs.ts)

### Architecture
- 14+ pages with SiteLayout (transparent→solid header)
- My2cts: /my2cts (list), /my2cts/:slug (detail)
- RecommendedNext component for cross-page linking
- Nav includes My 2cts link, footer includes My 2cts
- 80 workouts, 40 recovery routines, 30 articles, 10 my2cts entries
