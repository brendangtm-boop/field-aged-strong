import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { RecommendedNext } from "@/components/RecommendedNext";
import { My2ctsCallout } from "@/components/My2ctsCallout";
import { getMy2ctsByContext } from "@/data/my2cts-contextual";
import { WeeklyPlanCard } from "@/components/WeeklyPlanCard";
import { QuickStartPanel } from "@/components/QuickStartPanel";
import { defaultWeeklyPlan, quickStarts } from "@/data/weeklyPlan";
import {
  Target, Heart, Brain, Shield, RotateCcw, Flame,
  Users, Sparkles, ArrowRight, Star, CheckCircle,
  MessageCircle, Dumbbell, BookOpen, TrendingUp, Play,
  Activity, Compass, ClipboardCheck, MessageSquareText, Calendar
} from "lucide-react";
import heroImg from "@/assets/hero-soccer.jpg";
import recoveryImg from "@/assets/recovery-hero.jpg";
import communityImg from "@/assets/community-hero.jpg";
import mobilityImg from "@/assets/mobility-stretch.jpg";
import gearImg from "@/assets/gear-boots.jpg";
import foamImg from "@/assets/recovery-foam-roller.jpg";
import partnersImg from "@/assets/training-partners.jpg";
import trainingDrillsImg from "@/assets/training-drills.jpg";
import recoveryHomeImg from "@/assets/recovery-home.jpg";
import communityPostgameImg from "@/assets/community-postgame.jpg";
import { fadeUp } from "@/lib/animations";
import { my2ctsEntries } from "@/data/my2cts";

/* ── Data ── */
const longevityPillars = [
  { icon: Dumbbell, title: "Train Smart", desc: "Soccer-specific programs built for adult bodies. Age-appropriate intensity, progressive overload, and injury-aware scheduling.", color: "text-green-light" },
  { icon: Heart, title: "Recover Better", desc: "Post-match protocols, mobility flows, sleep optimization, and load management designed for players over 40.", color: "text-accent" },
  { icon: Shield, title: "Build Strength", desc: "Functional strength that protects joints, supports movement quality, and builds durability for years of play.", color: "text-green-light" },
  { icon: Brain, title: "Develop Mindset", desc: "Confidence building, pre-match focus, emotional recovery, and resilience tools for the aging athlete.", color: "text-accent" },
  { icon: Users, title: "Stay Connected", desc: "Accountability groups, shared goals, match reflection, and a community of players who understand your journey.", color: "text-green-light" },
];

const platformTools = [
  { icon: Dumbbell, title: "Exercise Coach", desc: "AI-powered sessions tailored to your energy, soreness, and schedule.", href: "/exercise-coach", badge: "AI Feature" },
  { icon: Brain, title: "Mindset Coach", desc: "Private coaching for confidence, motivation, and emotional resilience.", href: "/mindset-coach", badge: "AI Feature" },
  { icon: ClipboardCheck, title: "Match Reflection", desc: "Log your performance, process the game, and get supportive feedback.", href: "/match-reflection", badge: "Tool" },
  { icon: Activity, title: "Player Dashboard", desc: "Track training, recovery, habits, and weekly consistency in one place.", href: "/tracker", badge: "Dashboard" },
];

const featuredContent = [
  { image: partnersImg, badge: "Training", title: "How to Train Hard Without Breaking Down After 40", desc: "A progressive approach to intensity that protects while it builds.", link: "/training", readTime: "8 min" },
  { image: foamImg, badge: "Recovery", title: "The 48-Hour Recovery Window After Matches", desc: "What to do in the first hour, the first night, and the morning after.", link: "/recovery", readTime: "6 min" },
  { image: mobilityImg, badge: "Mindset", title: "Confidence Cycles in Adult Athletes", desc: "Why self-belief fluctuates as we age — and how to stabilize it.", link: "/mindset", readTime: "10 min" },
];

const testimonials = [
  { name: "David R.", age: 47, quote: "I was ready to quit. Two months with WorkLifeSoccer's recovery routines and I'm playing twice a week again — pain-free.", role: "Midfielder, Sunday League", initials: "DR" },
  { name: "Sarah K.", age: 43, quote: "The mindset coaching helped me stop comparing myself to who I was at 25. Now I actually enjoy the game again.", role: "Defender, Women's Over-35", initials: "SK" },
  { name: "Marcus T.", age: 52, quote: "The exercise coach gives me a plan in 30 seconds. Quick sessions when I'm busy, full sessions when I have energy. Game-changer.", role: "Goalkeeper, Veterans League", initials: "MT" },
];

const trainingInsight = getMy2ctsByContext("training")[0];
const recoveryInsight = getMy2ctsByContext("recovery")[0];

export default function HomePage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative min-h-[90vh] flex items-center">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Adult soccer player training at golden hour" className="w-full h-full object-cover" />
          <div className="absolute inset-0 hero-gradient" />
        </div>
        <div className="relative container-content py-28 md:py-36 lg:py-44">
          <motion.div initial="hidden" animate="visible" className="max-w-2xl">
            <motion.p variants={fadeUp} custom={0} className="badge-white mb-6">Your Soccer Longevity System</motion.p>
            <motion.h1 variants={fadeUp} custom={1} className="text-4xl sm:text-5xl lg:text-[3.75rem] font-bold text-primary-foreground leading-[1.08] mb-6 text-balance">
              What should I do this week to stay in the game?
            </motion.h1>
            <motion.p variants={fadeUp} custom={2} className="text-base sm:text-lg text-primary-foreground/75 mb-10 max-w-lg leading-relaxed">
              A weekly training system for players 40+ — structured sessions, smart recovery, and real guidance so you can keep playing for years.
            </motion.p>
            <motion.div variants={fadeUp} custom={3} className="flex flex-col sm:flex-row gap-3">
              <Link to="/tracker">
                <Button variant="gold" size="xl" className="shadow-glow w-full sm:w-auto">
                  <Calendar className="h-5 w-5" /> Plan My Week
                </Button>
              </Link>
              <Link to="/training">
                <Button variant="hero-outline" size="xl" className="w-full sm:w-auto">
                  Browse Training
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-primary/40 backdrop-blur-md border-t border-primary-foreground/10">
          <div className="container-content py-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
              {[
                { icon: Calendar, label: "Weekly Plan" },
                { icon: Dumbbell, label: "Smart Training" },
                { icon: Heart, label: "Recovery Science" },
                { icon: TrendingUp, label: "Progress Tracking" },
              ].map(s => (
                <div key={s.label} className="flex items-center justify-center gap-2">
                  <s.icon className="h-4 w-4 text-gold-light" />
                  <p className="text-xs md:text-sm text-primary-foreground/80 font-medium">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Weekly Plan Preview ── */}
      <section className="section-band">
        <div className="container-content">
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
            <div className="lg:col-span-3">
              <div className="flex items-center gap-3 mb-2">
                <span className="badge-gold">Your Week</span>
              </div>
              <h2 className="text-3xl md:text-[2.75rem] font-bold mb-3 text-balance">Train, recover, play — all planned out.</h2>
              <p className="text-editorial mb-8">Every week includes the right mix of training, recovery, mobility, and rest — structured around your match schedule.</p>
              <WeeklyPlanCard plan={defaultWeeklyPlan} compact />
              <div className="mt-6 flex gap-3">
                <Link to="/tracker">
                  <Button variant="default" size="lg">Open Full Dashboard <ArrowRight className="h-4 w-4" /></Button>
                </Link>
              </div>
            </div>
            <div className="lg:col-span-2">
              <QuickStartPanel quickStarts={quickStarts} />
              
              {/* Context recommendation */}
              <div className="mt-6 card-premium-static p-5 bg-green-subtle border-primary/10">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl gradient-green flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="h-4 w-4 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-green-light mb-1">Recommended</p>
                    <p className="text-sm font-semibold mb-0.5">Recovery Mobility Session</p>
                    <p className="text-xs text-muted-foreground">Based on 3 completed training sessions this week, a mobility session will keep you fresh for Saturday's match.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── The Longevity System ── */}
      <section className="section-band-alt">
        <div className="container-content">
          <div className="text-center mb-16 md:mb-20">
            <p className="badge-gold mb-4">The WorkLifeSoccer Longevity System</p>
            <h2 className="text-3xl md:text-[2.75rem] font-bold mb-5 text-balance">Five pillars. One system. Play forever.</h2>
            <p className="text-editorial mx-auto">Everything on this platform maps to a framework designed to keep adult soccer players active, healthy, and competitive for decades.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {longevityPillars.map((p, i) => (
              <motion.div key={p.title} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp}
                className="text-center p-6 rounded-2xl bg-card border border-border/30 shadow-card">
                <div className="w-12 h-12 rounded-2xl gradient-green flex items-center justify-center mx-auto mb-4">
                  <p.icon className="h-5 w-5 text-primary-foreground" />
                </div>
                <h3 className="font-serif text-lg font-bold mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── From the Field — My2cts Insights ── */}
      <section className="section-band-warm">
        <div className="container-content">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-accent/15 flex items-center justify-center">
                  <MessageSquareText className="h-5 w-5 text-accent" />
                </div>
                <span className="badge-gold">From the Field</span>
              </div>
              <h2 className="text-3xl md:text-[2.75rem] font-bold mb-5">Real player insights that shape how we train.</h2>
              <p className="text-editorial mb-8">My 2cts is our editorial voice — short, honest reflections from adult players about training, recovery, injuries, mindset, and the reality of playing past 40.</p>
              <Link to="/my2cts">
                <Button variant="default" size="lg">Read All Insights <ArrowRight className="h-4 w-4" /></Button>
              </Link>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1} variants={fadeUp} className="space-y-4">
              {trainingInsight && (
                <My2ctsCallout title={trainingInsight.title} quote={trainingInsight.quote} takeaway={trainingInsight.takeaway} slug={trainingInsight.slug} />
              )}
              {recoveryInsight && (
                <My2ctsCallout title={recoveryInsight.title} quote={recoveryInsight.quote} takeaway={recoveryInsight.takeaway} slug={recoveryInsight.slug} />
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Featured Platform Tools ── */}
      <section className="section-band">
        <div className="container-content">
          <div className="text-center mb-14">
            <p className="badge-green mb-4">Platform Tools</p>
            <h2 className="text-3xl md:text-[2.75rem] font-bold mb-5">Your digital coaching toolkit</h2>
            <p className="text-editorial mx-auto">Four powerful tools that work together to guide your training, recovery, and mindset — every week.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {platformTools.map((t, i) => (
              <motion.div key={t.title} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp}>
                <Link to={t.href} className="card-premium p-6 block h-full group">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-xl bg-primary/5 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                      <t.icon className="h-5 w-5 text-green-light" />
                    </div>
                    <span className="badge-gold text-[9px]">{t.badge}</span>
                  </div>
                  <h3 className="font-serif text-lg font-semibold mb-2 group-hover:text-green-light transition-colors">{t.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{t.desc}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Exercise Coach Teaser ── */}
      <section className="section-band-alt">
        <div className="container-content">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp}>
              <p className="badge-green mb-4">AI-Powered Feature</p>
              <h2 className="text-3xl md:text-[2.75rem] font-bold mb-5">Your personal Exercise Coach</h2>
              <p className="text-editorial mb-7">Tell it how you're feeling, how much time you have, and what your body needs today. Get a tailored session in seconds.</p>
              <ul className="space-y-3.5 mb-8">
                {["Adapts to your energy level and soreness", "Plans for 15, 30, or 60 minutes", "Soccer-specific conditioning built in", "Safe progression after injury or layoff"].map(t => (
                  <li key={t} className="flex items-start gap-3 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-light flex-shrink-0 mt-0.5" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
              <Link to="/exercise-coach">
                <Button variant="default" size="lg">Try Exercise Coach <ArrowRight className="h-4 w-4" /></Button>
              </Link>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1} variants={fadeUp}>
              <div className="card-premium-static p-5 md:p-6">
                <div className="space-y-4 mb-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full gradient-green flex items-center justify-center flex-shrink-0">
                      <Dumbbell className="h-3.5 w-3.5 text-primary-foreground" />
                    </div>
                    <div className="chat-bubble-coach flex-1">
                      <p className="font-semibold text-foreground text-xs mb-1.5">Exercise Coach</p>
                      <p className="text-muted-foreground">Based on your match yesterday and moderate soreness, I'd suggest a 25-minute recovery session focused on hip mobility and light core work. Want me to build it?</p>
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <div className="chat-bubble-user max-w-[80%]">
                      Yes, and add some hamstring stretches. I felt tightness in the second half.
                    </div>
                  </div>
                </div>
                <div className="flex gap-2 flex-wrap">
                  {["I only have 20 min", "I'm sore after a match", "Build my weekly plan"].map(p => (
                    <span key={p} className="chat-prompt-pill">{p}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Mindset Coach Teaser ── */}
      <section className="section-band">
        <div className="container-content">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1} variants={fadeUp} className="order-2 lg:order-1">
              <div className="card-premium-static p-5 md:p-6">
                <div className="space-y-4 mb-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full gradient-gold flex items-center justify-center flex-shrink-0">
                      <Brain className="h-3.5 w-3.5 text-foreground" />
                    </div>
                    <div className="chat-bubble-coach flex-1">
                      <p className="font-semibold text-foreground text-xs mb-1.5">Mindset Coach</p>
                      <p className="text-muted-foreground">It sounds like you're carrying frustration from that last match. Let's separate what happened from the story you're telling yourself about it.</p>
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <div className="chat-bubble-user max-w-[80%]">
                      I keep making mistakes I wouldn't have made 10 years ago. It's hard not to feel like I'm declining.
                    </div>
                  </div>
                </div>
                <div className="flex gap-2 flex-wrap">
                  {["Reset after a bad game", "Build pre-match focus", "Why am I losing motivation?"].map(p => (
                    <span key={p} className="chat-prompt-pill">{p}</span>
                  ))}
                </div>
              </div>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp} className="order-1 lg:order-2">
              <p className="badge-gold mb-4">Emotionally Intelligent</p>
              <h2 className="text-3xl md:text-[2.75rem] font-bold mb-5">Your personal Mindset Coach</h2>
              <p className="text-editorial mb-7">Process frustration, rebuild confidence, and develop a healthier relationship with performance and aging in sport.</p>
              <ul className="space-y-3.5 mb-8">
                {["Post-game emotional reset tools", "Confidence rebuilding exercises", "Identity & aging in sport support", "Pre-match mental preparation rituals"].map(t => (
                  <li key={t} className="flex items-start gap-3 text-sm">
                    <CheckCircle className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
              <Link to="/mindset-coach">
                <Button variant="gold" size="lg" className="shadow-glow">Try Mindset Coach <ArrowRight className="h-4 w-4" /></Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Featured Guides ── */}
      <section className="section-band-alt">
        <div className="container-content">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12 md:mb-14">
            <div>
              <p className="badge-green mb-4">Featured Guides</p>
              <h2 className="text-3xl md:text-[2.75rem] font-bold">Expert content for your game.</h2>
            </div>
            <Link to="/library" className="hidden md:flex items-center gap-2 text-sm font-semibold text-green-light hover:text-primary transition-colors">
              Browse full library <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {featuredContent.map((c, i) => (
              <motion.div key={c.title} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp}>
                <Link to={c.link} className="block group">
                  <div className="image-card mb-4">
                    <img src={c.image} alt={c.title} />
                    <div className="image-card-overlay">
                      <span className="badge-white w-fit mb-2">{c.badge}</span>
                    </div>
                  </div>
                  <h3 className="font-serif text-xl font-semibold mb-2 group-hover:text-green-light transition-colors">{c.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-2">{c.desc}</p>
                  <p className="text-xs text-muted-foreground">{c.readTime} read</p>
                </Link>
              </motion.div>
            ))}
          </div>
          <div className="mt-8 text-center md:hidden">
            <Link to="/library" className="inline-flex items-center gap-2 text-sm font-semibold text-green-light">
              Browse full library <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── My 2cts Teaser ── */}
      <section className="section-band">
        <div className="container-content">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                  <MessageSquareText className="h-5 w-5 text-accent" />
                </div>
                <span className="badge-gold">My 2cts</span>
              </div>
              <h2 className="text-3xl md:text-[2.75rem] font-bold">Honest reflections on playing past 40.</h2>
            </div>
            <Link to="/my2cts" className="hidden md:flex items-center gap-2 text-sm font-semibold text-accent hover:text-primary transition-colors">
              Read all entries <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {my2ctsEntries.slice(0, 3).map((entry, i) => (
              <motion.div key={entry.slug} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp}>
                <Link to={`/my2cts/${entry.slug}`} className="card-premium p-6 block h-full group">
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {entry.tags.slice(0, 2).map(t => (
                      <span key={t} className="badge-green text-[10px]">{t}</span>
                    ))}
                  </div>
                  <h3 className="font-serif text-xl font-semibold mb-2 group-hover:text-accent transition-colors">{entry.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">{entry.teaser}</p>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Calendar className="h-3.5 w-3.5" />
                    <span>{new Date(entry.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
          <div className="mt-8 text-center md:hidden">
            <Link to="/my2cts" className="inline-flex items-center gap-2 text-sm font-semibold text-accent">
              Read all entries <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Recovery Visual CTA ── */}
      <section className="relative py-28 md:py-36">
        <div className="absolute inset-0">
          <img src={recoveryHomeImg} alt="At-home recovery session" className="w-full h-full object-cover" />
          <div className="absolute inset-0 hero-gradient" />
        </div>
        <div className="relative container-content text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp}>
            <p className="badge-white mb-5">Recovery Hub</p>
            <h2 className="text-3xl md:text-5xl lg:text-[3.5rem] font-bold text-primary-foreground mb-5 text-balance">Recovery isn't optional.<br className="hidden md:block" /> It's your competitive edge.</h2>
            <p className="text-base md:text-lg text-primary-foreground/75 max-w-2xl mx-auto mb-10 leading-relaxed">Mobility routines, sleep protocols, hydration tracking, and post-match recovery plans — all designed for adults with real lives.</p>
            <Link to="/recovery">
              <Button variant="gold" size="xl" className="shadow-glow">Explore Recovery Hub <ArrowRight className="h-4 w-4" /></Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── Community ── */}
      <section className="section-band">
        <div className="container-content">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp}>
              <div className="grid grid-cols-2 gap-3">
                <div className="image-card"><img src={communityPostgameImg} alt="Adult soccer team post-game" /></div>
                <div className="image-card"><img src={gearImg} alt="Player lacing up boots" /></div>
              </div>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1} variants={fadeUp}>
              <p className="badge-green mb-4">Community</p>
              <h2 className="text-3xl md:text-[2.75rem] font-bold mb-5">You're not playing alone.</h2>
              <p className="text-editorial mb-7">Join accountability circles, share goals, and connect with players who understand exactly where you are.</p>
              <div className="grid grid-cols-2 gap-3 mb-8">
                {[
                  { icon: Users, label: "Small Groups", desc: "6–12 players" },
                  { icon: Target, label: "Shared Goals", desc: "Track together" },
                  { icon: MessageCircle, label: "Discussions", desc: "Weekly prompts" },
                  { icon: Star, label: "Member Stories", desc: "Real journeys" },
                ].map(f => (
                  <div key={f.label} className="flex items-start gap-3 p-3.5 rounded-xl bg-surface border border-border/30">
                    <f.icon className="h-4 w-4 text-green-light mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold">{f.label}</p>
                      <p className="text-xs text-muted-foreground">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Link to="/community">
                <Button variant="default" size="lg">Join the Community <ArrowRight className="h-4 w-4" /></Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="section-band-alt">
        <div className="container-content">
          <div className="text-center mb-16 md:mb-20">
            <p className="badge-gold mb-4">Real Players, Real Results</p>
            <h2 className="text-3xl md:text-[2.75rem] font-bold">Players like you, thriving.</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {testimonials.map((t, i) => (
              <motion.div key={t.name} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp}
                className="card-premium p-6 md:p-7">
                <div className="flex gap-0.5 mb-5">
                  {[...Array(5)].map((_, j) => <Star key={j} className="h-4 w-4 fill-accent text-accent" />)}
                </div>
                <p className="text-sm leading-relaxed mb-6 text-muted-foreground italic">"{t.quote}"</p>
                <div className="flex items-center gap-3 pt-4 border-t border-border/50">
                  <div className="w-9 h-9 rounded-full gradient-green flex items-center justify-center text-xs font-bold text-primary-foreground">{t.initials}</div>
                  <div>
                    <p className="text-sm font-semibold">{t.name}, {t.age}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Membership Teaser ── */}
      <section className="section-band">
        <div className="container-content">
          <div className="relative rounded-3xl overflow-hidden bg-primary p-8 md:p-16 lg:p-20">
            <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
              <div className="absolute inset-0" style={{ background: 'radial-gradient(circle at 70% 30%, hsl(25 100% 50% / 0.4), transparent 60%)' }} />
            </div>
            <div className="relative text-center max-w-2xl mx-auto">
              <p className="badge-gold mb-6">Membership</p>
              <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-5 text-balance">Build Your System for Soccer Longevity</h2>
              <p className="text-base md:text-lg text-primary-foreground/70 mb-10 leading-relaxed">
                Unlock personalized weekly plans, AI coaching, advanced tracking, and an exclusive community of committed adult players.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-3">
                <Link to="/membership"><Button variant="gold" size="xl" className="shadow-glow w-full sm:w-auto">View Plans & Pricing</Button></Link>
                <Link to="/start-here"><Button variant="hero-outline" size="xl" className="w-full sm:w-auto">Start Here</Button></Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="section-band-alt">
        <div className="container-content text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp}>
            <h2 className="text-3xl md:text-5xl font-bold mb-5 text-balance">Ready to play smarter, longer?</h2>
            <p className="text-editorial mx-auto mb-10">
              Join thousands of adult soccer players building better habits, recovering faster, and enjoying the game more than ever.
            </p>
            <Link to="/tracker">
              <Button variant="gold" size="xl" className="shadow-glow">Start Your Weekly Plan <ArrowRight className="h-4 w-4" /></Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
