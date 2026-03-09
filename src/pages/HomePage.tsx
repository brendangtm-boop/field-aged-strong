import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { RecommendedNext } from "@/components/RecommendedNext";
import {
  Target, Heart, Brain, Shield, RotateCcw, Flame,
  Layers, Users, Sparkles, ArrowRight, Star, CheckCircle,
  MessageCircle, Dumbbell, BookOpen, TrendingUp, Play
} from "lucide-react";
import heroImg from "@/assets/hero-soccer.jpg";
import recoveryImg from "@/assets/recovery-hero.jpg";
import communityImg from "@/assets/community-hero.jpg";
import mobilityImg from "@/assets/mobility-stretch.jpg";
import gearImg from "@/assets/gear-boots.jpg";
import foamImg from "@/assets/recovery-foam-roller.jpg";
import partnersImg from "@/assets/training-partners.jpg";
import { fadeUp } from "@/lib/animations";

const goals = [
  { icon: Target, title: "Keep Playing Longer", desc: "Sustainable training that protects your body while keeping you on the pitch for years to come.", link: "/training" },
  { icon: Flame, title: "Improve Fitness", desc: "Build match-ready stamina and conditioning designed around adult physiology.", link: "/training" },
  { icon: Heart, title: "Recover Better", desc: "Smart recovery protocols that fit your schedule and keep you coming back.", link: "/recovery" },
  { icon: Brain, title: "Build Confidence", desc: "Mental tools to play freely, silence doubt, and enjoy the game again.", link: "/mindset" },
  { icon: Shield, title: "Prevent Injury", desc: "Prehab routines, load management, and warm-ups that actually protect you.", link: "/recovery" },
  { icon: RotateCcw, title: "Return to the Game", desc: "Progressive plans to come back stronger and safer after time away.", link: "/training" },
];

const pillars = [
  { icon: Layers, title: "Structure", desc: "Clear training plans, recovery routines, and weekly schedules that fit a real adult life.", stat: "50+", statLabel: "guided plans" },
  { icon: Users, title: "Support", desc: "Expert content, coaching tools, and a community of players who understand your journey.", stat: "2,400+", statLabel: "active members" },
  { icon: Sparkles, title: "Mindset", desc: "Confidence building, motivation frameworks, and mental resilience for the long game.", stat: "30+", statLabel: "mindset modules" },
];

const featuredContent = [
  { image: partnersImg, badge: "Training", title: "The Over-40 Pre-Season Blueprint", desc: "A 6-week progressive plan to build match fitness without breaking down.", link: "/training", readTime: "8 min" },
  { image: foamImg, badge: "Recovery", title: "Post-Match Recovery: The 24-Hour Protocol", desc: "What to do in the first hour, the first night, and the morning after.", link: "/recovery", readTime: "6 min" },
  { image: mobilityImg, badge: "Mindset", title: "Playing Through Self-Doubt at 45", desc: "Why confidence fades as we age — and what to do about it.", link: "/mindset", readTime: "10 min" },
];

const testimonials = [
  { name: "David R.", age: 47, quote: "I was ready to quit. Two months with WorkLifeSoccer's recovery routines and I'm playing twice a week again — pain-free.", role: "Midfielder, Sunday League", initials: "DR" },
  { name: "Sarah K.", age: 43, quote: "The mindset coaching helped me stop comparing myself to who I was at 25. Now I actually enjoy the game again.", role: "Defender, Women's Over-35", initials: "SK" },
  { name: "Marcus T.", age: 52, quote: "The exercise coach gives me a plan in 30 seconds. Quick sessions when I'm busy, full sessions when I have energy. Game-changer.", role: "Goalkeeper, Veterans League", initials: "MT" },
];

const stats = [
  { value: "2,400+", label: "Active players" },
  { value: "50+", label: "Training plans" },
  { value: "87%", label: "Play more consistently" },
  { value: "4.9", label: "Average rating" },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Adult soccer player training at golden hour" className="w-full h-full object-cover" />
          <div className="absolute inset-0 hero-gradient" />
        </div>
        <div className="relative container-content py-28 md:py-36 lg:py-44">
          <motion.div initial="hidden" animate="visible" className="max-w-2xl">
            <motion.p variants={fadeUp} custom={0} className="badge-white mb-6">
              For players 40 and beyond
            </motion.p>
            <motion.h1 variants={fadeUp} custom={1} className="text-4xl sm:text-5xl lg:text-[3.75rem] font-bold text-primary-foreground leading-[1.08] mb-6 text-balance">
              Stay in the game.<br className="hidden sm:block" />
              <span className="text-gold-light">Play smarter.</span> Recover stronger.
            </motion.h1>
            <motion.p variants={fadeUp} custom={2} className="text-base sm:text-lg text-primary-foreground/75 mb-10 max-w-lg leading-relaxed">
              The complete training, recovery, and mindset platform for adult soccer players who refuse to quit the game they love.
            </motion.p>
            <motion.div variants={fadeUp} custom={3} className="flex flex-col sm:flex-row gap-3">
              <Link to="/membership">
                <Button variant="gold" size="xl" className="shadow-glow w-full sm:w-auto">Start Free — No Card Needed</Button>
              </Link>
              <Link to="/training">
                <Button variant="hero-outline" size="xl" className="w-full sm:w-auto">
                  <Play className="h-4 w-4" /> Explore the Platform
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom stats strip */}
        <div className="absolute bottom-0 left-0 right-0 bg-primary/40 backdrop-blur-md border-t border-primary-foreground/10">
          <div className="container-content py-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
              {stats.map(s => (
                <div key={s.label} className="text-center">
                  <p className="stat-number text-xl md:text-2xl text-primary-foreground">{s.value}</p>
                  <p className="text-xs text-primary-foreground/60 mt-0.5">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Goals */}
      <section className="section-band">
        <div className="container-content">
          <div className="text-center mb-16 md:mb-20">
            <p className="badge-green mb-4">Choose Your Focus</p>
            <h2 className="text-3xl md:text-[2.75rem] font-bold mb-5 text-balance">What matters most to you right now?</h2>
            <p className="text-editorial mx-auto">Every player's journey is different. Start with the area that will make the biggest impact on your game.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {goals.map((g, i) => (
              <motion.div key={g.title} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-40px" }} custom={i} variants={fadeUp}>
                <Link to={g.link} className="card-premium p-6 md:p-7 block h-full group">
                  <div className="w-11 h-11 rounded-xl bg-primary/5 flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                    <g.icon className="h-5 w-5 text-green-light" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold mb-2 group-hover:text-green-light transition-colors">{g.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{g.desc}</p>
                  <span className="inline-flex items-center gap-1.5 mt-4 text-xs font-semibold text-green-light opacity-0 group-hover:opacity-100 transition-opacity">
                    Explore <ArrowRight className="h-3 w-3" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="section-band-alt">
        <div className="container-content">
          <div className="text-center mb-16 md:mb-20">
            <p className="badge-gold mb-4">The WorkLifeSoccer System</p>
            <h2 className="text-3xl md:text-[2.75rem] font-bold mb-5 text-balance">Three pillars. One smarter way to play.</h2>
            <p className="text-editorial mx-auto">Staying in the game takes more than fitness. It takes structure, support, and the right mindset working together.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {pillars.map((p, i) => (
              <motion.div key={p.title} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp}
                className="text-center p-8 rounded-2xl bg-card border border-border/30 shadow-card">
                <div className="w-14 h-14 rounded-2xl gradient-gold flex items-center justify-center mx-auto mb-6 shadow-glow">
                  <p.icon className="h-6 w-6 text-foreground" />
                </div>
                <h3 className="font-serif text-2xl font-bold mb-3">{p.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-5">{p.desc}</p>
                <div className="pt-4 border-t border-border/50">
                  <p className="stat-number text-2xl text-foreground">{p.stat}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{p.statLabel}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Content with Images */}
      <section className="section-band">
        <div className="container-content">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12 md:mb-14">
            <div>
              <p className="badge-green mb-4">Featured Guides</p>
              <h2 className="text-3xl md:text-[2.75rem] font-bold">Expert content, built for your game.</h2>
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

      {/* Exercise Coach Teaser */}
      <section className="section-band-warm">
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
                {/* Mock chat */}
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

      {/* Mindset Coach Teaser */}
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
                      <p className="text-muted-foreground">It sounds like you're carrying frustration from that last match. Let's separate what happened from the story you're telling yourself about it. What's bothering you most?</p>
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

      {/* Recovery Banner */}
      <section className="relative py-28 md:py-36">
        <div className="absolute inset-0">
          <img src={recoveryImg} alt="Adults stretching on soccer field" className="w-full h-full object-cover" />
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

      {/* Community + Image Cards */}
      <section className="section-band">
        <div className="container-content">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp}>
              <div className="grid grid-cols-2 gap-3">
                <div className="image-card">
                  <img src={communityImg} alt="Adult soccer team celebrating" />
                </div>
                <div className="image-card">
                  <img src={gearImg} alt="Player lacing up boots" />
                </div>
              </div>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1} variants={fadeUp}>
              <p className="badge-green mb-4">Community</p>
              <h2 className="text-3xl md:text-[2.75rem] font-bold mb-5">You're not playing alone.</h2>
              <p className="text-editorial mb-7">Join accountability circles, share goals, celebrate progress, and connect with players who understand exactly where you are in your journey.</p>
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

      {/* Testimonials */}
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
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-sm leading-relaxed mb-6 text-muted-foreground italic">"{t.quote}"</p>
                <div className="flex items-center gap-3 pt-4 border-t border-border/50">
                  <div className="w-9 h-9 rounded-full gradient-green flex items-center justify-center text-xs font-bold text-primary-foreground">
                    {t.initials}
                  </div>
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

      {/* Membership Teaser */}
      <section className="section-band">
        <div className="container-content">
          <div className="relative rounded-3xl overflow-hidden bg-primary p-8 md:p-16 lg:p-20">
            <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
              <div className="absolute inset-0" style={{ background: 'radial-gradient(circle at 70% 30%, hsl(36 78% 50% / 0.4), transparent 60%)' }} />
            </div>
            <div className="relative text-center max-w-2xl mx-auto">
              <p className="badge-gold mb-6">Membership</p>
              <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-5 text-balance">Your game. Your system. Your progress.</h2>
              <p className="text-base md:text-lg text-primary-foreground/70 mb-10 leading-relaxed">
                Unlock premium training plans, AI coaching, progress tracking, and an exclusive community of committed adult players.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-3">
                <Link to="/membership">
                  <Button variant="gold" size="xl" className="shadow-glow w-full sm:w-auto">View Plans & Pricing</Button>
                </Link>
                <Link to="/library">
                  <Button variant="hero-outline" size="xl" className="w-full sm:w-auto">Browse Free Content</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-band-alt">
        <div className="container-content text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp}>
            <h2 className="text-3xl md:text-5xl font-bold mb-5 text-balance">Ready to play smarter, longer?</h2>
            <p className="text-editorial mx-auto mb-10">
              Join thousands of adult soccer players building better habits, recovering faster, and enjoying the game more than ever.
            </p>
            <Link to="/membership">
              <Button variant="gold" size="xl" className="shadow-glow">Get Started Free <ArrowRight className="h-4 w-4" /></Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
