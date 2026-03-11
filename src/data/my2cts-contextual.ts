/** Contextual My2cts snippets for inline callouts across the platform */

export interface ContextualMy2cts {
  context: string;
  title: string;
  quote: string;
  takeaway: string;
  slug?: string; // link to full my2cts entry if exists
}

export const contextualMy2cts: ContextualMy2cts[] = [
  // ── Training ──
  {
    context: "training",
    title: "The 80% Rule Changed My Training",
    quote: "I used to go 100% every session. At 46, that meant I was injured every few months. Now I train at 80% intensity most days and save the full effort for match day. I'm fitter than I've been in years — and I haven't missed a game in eight months.",
    takeaway: "Training at 80% most of the time lets you train more consistently, which beats occasional max efforts."
  },
  {
    context: "training",
    title: "Why I Stopped Skipping Warm-Ups",
    quote: "I pulled my calf jogging to the pitch because I 'didn't have time' to warm up. Now my warm-up is non-negotiable — 10 minutes of dynamic movement before I touch a ball. The irony? I've gained more playing time by spending time warming up than I ever lost to it.",
    takeaway: "A proper warm-up isn't lost time — it's insurance that keeps you on the pitch.",
    slug: "what-stretching-really-means-at-our-age"
  },
  {
    context: "training",
    title: "Short Sessions Beat Long Ones",
    quote: "I used to think a workout under 30 minutes wasn't worth doing. Now some of my best sessions are 15–20 minutes. Focused, intense, and done before my body starts complaining. Consistency beats duration every single time.",
    takeaway: "A focused 15-minute session you actually do is worth more than a 60-minute session you skip."
  },

  // ── Recovery ──
  {
    context: "recovery",
    title: "Sleep Is My Best Recovery Tool",
    quote: "I spent £200 on a massage gun, bought compression boots, and tried every supplement. Then I started going to bed 45 minutes earlier. That single change did more for my recovery than everything else combined. Sleep isn't glamorous, but it's the foundation.",
    takeaway: "Before investing in recovery gadgets, invest in sleep. It's the single most effective recovery tool."
  },
  {
    context: "recovery",
    title: "The 48-Hour Window Is Real",
    quote: "After a match, the first 48 hours determine how the rest of my week goes. If I hydrate, stretch, and sleep well on match night, I'm training again by Tuesday. If I don't, I'm stiff until Thursday. The discipline happens after the final whistle.",
    takeaway: "What you do in the 48 hours after a match matters more than what you do in the 48 hours before.",
    slug: "why-i-foam-roll-at-10pm"
  },
  {
    context: "recovery",
    title: "Active Recovery Changed Everything",
    quote: "I used to think recovery meant doing nothing. Sitting on the sofa, waiting for soreness to pass. Then a physio told me to walk, do light cycling, and stretch on rest days. Moving at low intensity clears soreness faster than sitting still ever did.",
    takeaway: "Active recovery — light movement on rest days — clears soreness faster than complete rest."
  },

  // ── Mindset ──
  {
    context: "mindset",
    title: "I Stopped Apologising for Being Slow",
    quote: "For years I'd say 'sorry' to teammates when I couldn't keep up with a sprint. Then I realised: I was reading the game better than the fast guys. I was in the right position before they'd even started running. Speed matters less when your brain is ahead of the play.",
    takeaway: "Game intelligence compensates for physical decline. Stop apologising for what you've gained.",
    slug: "the-moment-you-stop-comparing"
  },
  {
    context: "mindset",
    title: "The Pre-Match Butterflies Never Left",
    quote: "I'm 49 and I still get nervous before matches. I used to think that was a problem. Now I understand it's my body telling me this still matters. The day I stop feeling butterflies is the day I've stopped caring. And I'm not ready for that.",
    takeaway: "Pre-match nerves aren't anxiety — they're proof you still care about the game."
  },
  {
    context: "mindset",
    title: "Confidence Comes From Preparation",
    quote: "When I prepare well — warm up properly, eat right, sleep enough — I walk onto the pitch feeling confident. When I cut corners, I feel uncertain. Confidence isn't a mindset trick. It's the reward for doing the boring work consistently.",
    takeaway: "Confidence is built in the week before the match, not on match day itself.",
    slug: "redefining-success-after-40"
  },

  // ── Gear ──
  {
    context: "gear",
    title: "My Boots Were Causing My Knee Pain",
    quote: "I wore the same boot model for six years. When they changed the sole plate, I developed knee pain within a month. A podiatrist told me the new design didn't suit my gait. I switched to a comfort-first boot with a wider last, and the pain disappeared in two weeks.",
    takeaway: "Don't assume brand loyalty equals foot loyalty. Your boots should fit your feet, not your nostalgia."
  },
  {
    context: "gear",
    title: "The Foam Roller I Actually Use",
    quote: "I've bought three foam rollers. Two are gathering dust. The one I use is the cheapest — a simple, firm, no-frills roller that lives next to my sofa. Proximity beats quality. The best recovery tool is the one you actually pick up.",
    takeaway: "Keep your recovery tools where you'll actually use them. Convenience drives consistency."
  },
  {
    context: "gear",
    title: "Grip Socks Were a Game-Changer",
    quote: "I laughed when someone suggested grip socks. Then I tried them on a wet artificial pitch. No sliding inside my boots, better balance, more confident in turns. It's a £12 upgrade that genuinely improved how I play. Sometimes small things matter most.",
    takeaway: "Don't overlook small gear upgrades — grip socks, insoles, and compression wear can noticeably improve comfort and performance."
  },

  // ── Dashboard / Tracking ──
  {
    context: "dashboard",
    title: "Tracking Made Me Honest",
    quote: "I thought I was training three times a week. When I started tracking, I realised it was closer to 1.5. The gap between perception and reality was shocking. Now I log everything — not to be obsessive, but to be honest with myself about what I'm actually doing.",
    takeaway: "Track your sessions to close the gap between what you think you're doing and what you're actually doing.",
    slug: "the-quiet-power-of-consistency"
  },
  {
    context: "dashboard",
    title: "Streaks Keep Me Accountable",
    quote: "I'm on a 14-day stretching streak. It's not much, but breaking it would feel worse than doing the stretch. That's the power of streaks — they create a small but meaningful cost to quitting. The longer the streak, the harder it is to stop.",
    takeaway: "Build simple habit streaks. The psychological cost of breaking them becomes your strongest motivator."
  },

  // ── Match ──
  {
    context: "match",
    title: "The 10-Minute Rule After Bad Games",
    quote: "I give myself exactly 10 minutes to be frustrated after a bad game. In the car, on the drive home, I can be angry, disappointed, whatever I need to feel. But when I walk through the front door, the game is over. This boundary protects my family and my mental health.",
    takeaway: "Set a time limit on post-match frustration. Feel it fully, then let it go before it follows you home."
  },
  {
    context: "match",
    title: "I Write Three Things After Every Match",
    quote: "Win or lose, good or bad, I write down three things: one thing I did well, one thing I'd change, and one thing I enjoyed. It takes 60 seconds. Over a season, it builds a picture of growth that stats alone can never capture.",
    takeaway: "A 60-second post-match journal builds self-awareness faster than any coaching session."
  },

  // ── Community ──
  {
    context: "community",
    title: "The Changing Room Is Therapy",
    quote: "Nobody talks about how important the changing room is. Before and after the game, surrounded by people who share this one thing with you — that's where real friendships happen. I've had conversations there I've never had anywhere else. The game is the excuse. The connection is the point.",
    takeaway: "The social bonds formed around the game are as valuable as the game itself. Protect that time.",
    slug: "what-your-teammates-wont-tell-you"
  },
  {
    context: "community",
    title: "Accountability Partners Work",
    quote: "I paired up with another player for a 30-day mobility challenge. Neither of us wanted to be the one who quit. We both completed it. Alone, I would have stopped at day 9. Having someone who's counting on you changes everything.",
    takeaway: "Find an accountability partner. Shared commitment is stronger than solo willpower."
  },

  // ── Programs ──
  {
    context: "programs",
    title: "Following a Plan Changed My Season",
    quote: "I used to train randomly — whatever I felt like, whenever I felt like it. Then I followed a structured 4-week plan for the first time. The difference was immediate. My fitness improved, my confidence grew, and I stopped wasting sessions on exercises that didn't serve my game.",
    takeaway: "Structure beats randomness. A simple 4-week plan will outperform months of unstructured training."
  },

  // ── Articles / Library ──
  {
    context: "articles",
    title: "Reading About Training Made Me Train Better",
    quote: "Understanding the 'why' behind my workouts changed how I approached them. When I learned why hip mobility matters for over-40s players, I stopped skipping it. Knowledge isn't just power — it's motivation.",
    takeaway: "Understanding why you're doing something makes you far more likely to keep doing it."
  },
];

/** Get My2cts entries for a specific page context */
export function getMy2ctsByContext(context: string): ContextualMy2cts[] {
  return contextualMy2cts.filter(m => m.context === context);
}
