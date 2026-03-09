import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Target, Heart, Brain, Shield, RotateCcw, Flame,
  Layers, Users, Sparkles, ArrowRight, Star, CheckCircle,
  MessageCircle, TrendingUp, BookOpen, Dumbbell
} from "lucide-react";
import heroImg from "@/assets/hero-soccer.jpg";
import recoveryImg from "@/assets/recovery-hero.jpg";
import communityImg from "@/assets/community-hero.jpg";

import { fadeUp } from "@/lib/animations";

const goals = [
  { icon: Target, title: "Keep Playing Longer", desc: "Sustainable training that protects your body while keeping you competitive." },
  { icon: Flame, title: "Improve Fitness", desc: "Build soccer-specific stamina and conditioning at your own pace." },
  { icon: Heart, title: "Recover Better", desc: "Smart recovery protocols designed for busy adults over 40." },
  { icon: Brain, title: "Build Confidence", desc: "Mental tools to silence self-doubt and play with freedom." },
  { icon: Shield, title: "Prevent Injury", desc: "Prehab routines, warm-ups, and load management that actually work." },
  { icon: RotateCcw, title: "Return to the Game", desc: "Step-by-step progression to come back stronger after time away." },
];

const pillars = [
  { icon: Layers, title: "Structure", desc: "Clear training plans, recovery routines, and weekly schedules that fit a real adult life. No guesswork." },
  { icon: Users, title: "Support", desc: "Expert-guided content, coaching tools, and a community of players who understand your journey." },
  { icon: Sparkles, title: "Mindset", desc: "Confidence building, motivation frameworks, and mental resilience for the long game." },
];

const featuredContent = [
  { badge: "Training", title: "The Over-40 Pre-Season Blueprint", desc: "A 6-week progressive plan to build match fitness without breaking down.", link: "/training" },
  { badge: "Recovery", title: "Post-Match Recovery: The 24-Hour Protocol", desc: "What to do in the first hour, the first night, and the morning after.", link: "/recovery" },
  { badge: "Mindset", title: "Playing Through Self-Doubt at 45", desc: "Why confidence fades as we age — and what to do about it.", link: "/mindset" },
];

const testimonials = [
  { name: "David R.", age: 47, quote: "I was ready to quit. Two months with WorkLifeSoccer's recovery routines and I'm playing twice a week again pain-free.", role: "Midfielder, Sunday League" },
  { name: "Sarah K.", age: 43, quote: "The mindset coaching helped me stop comparing myself to who I was at 25. Now I actually enjoy the game again.", role: "Defender, Women's Over-35" },
  { name: "Marcus T.", age: 52, quote: "The exercise coach saved me so much time. Quick plans when I'm busy, full sessions when I have the energy. Brilliant.", role: "Goalkeeper, Veterans League" },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Adult soccer player training at golden hour" className="w-full h-full object-cover" />
          <div className="absolute inset-0 hero-gradient" />
        </div>
        <div className="relative container-content py-24 md:py-32">
          <motion.div
            initial="hidden"
            animate="visible"
            className="max-w-2xl"
          >
            <motion.p variants={fadeUp} custom={0} className="badge-gold mb-6">
              For players 40 and beyond
            </motion.p>
            <motion.h1 variants={fadeUp} custom={1} className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground leading-[1.1] mb-6">
              Stay in the game.<br />Play smarter. Recover stronger.
            </motion.h1>
            <motion.p variants={fadeUp} custom={2} className="text-lg text-primary-foreground/80 mb-8 max-w-lg leading-relaxed">
              The complete platform for adult soccer players who want better training, faster recovery, and a healthier relationship with the game they love.
            </motion.p>
            <motion.div variants={fadeUp} custom={3} className="flex flex-wrap gap-4">
              <Link to="/membership">
                <Button variant="gold" size="xl">Start Free Today</Button>
              </Link>
              <Link to="/training">
                <Button variant="hero-outline" size="xl">Explore Training</Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Goals */}
      <section className="section-band">
        <div className="container-content">
          <div className="text-center mb-16">
            <p className="badge-green mb-4">Choose Your Focus</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What matters most to you right now?</h2>
            <p className="text-editorial max-w-2xl mx-auto">Every player's journey is different. Start with what you need most.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {goals.map((g, i) => (
              <motion.div
                key={g.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                variants={fadeUp}
                className="card-premium p-6 group cursor-pointer"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                  <g.icon className="h-6 w-6 text-green-light" />
                </div>
                <h3 className="font-serif text-xl font-semibold mb-2">{g.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{g.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="section-band-alt">
        <div className="container-content">
          <div className="text-center mb-16">
            <p className="badge-gold mb-4">Our Approach</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Three pillars. One smarter system.</h2>
            <p className="text-editorial max-w-2xl mx-auto">WorkLifeSoccer is built on the idea that staying in the game takes more than fitness. It takes structure, support, and the right mindset.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {pillars.map((p, i) => (
              <motion.div
                key={p.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                variants={fadeUp}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-2xl gradient-gold flex items-center justify-center mx-auto mb-6">
                  <p.icon className="h-7 w-7 text-foreground" />
                </div>
                <h3 className="font-serif text-2xl font-semibold mb-3">{p.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Content */}
      <section className="section-band">
        <div className="container-content">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="badge-green mb-4">Featured Guides</p>
              <h2 className="text-3xl md:text-4xl font-bold">Expert content, built for you.</h2>
            </div>
            <Link to="/library" className="hidden md:flex items-center gap-2 text-sm font-medium text-green-light hover:text-primary transition-colors">
              View all <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {featuredContent.map((c, i) => (
              <motion.div
                key={c.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                variants={fadeUp}
              >
                <Link to={c.link} className="card-premium p-6 block h-full group">
                  <span className="badge-gold mb-4 block w-fit">{c.badge}</span>
                  <h3 className="font-serif text-xl font-semibold mb-3 group-hover:text-green-light transition-colors">{c.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Exercise Coach Teaser */}
      <section className="section-band-alt">
        <div className="container-content">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp}>
              <p className="badge-green mb-4">AI-Powered</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Your personal Exercise Coach</h2>
              <p className="text-editorial mb-6">Tell it how you're feeling, how much time you have, and what your body needs. Get a tailored session in seconds.</p>
              <ul className="space-y-3 mb-8">
                {["Adapts to your energy and soreness", "Plans for 15, 30, or 60 minutes", "Soccer-specific conditioning", "Safe progression after injury"].map(t => (
                  <li key={t} className="flex items-center gap-3 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-light flex-shrink-0" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
              <Link to="/exercise-coach">
                <Button variant="default" size="lg">Try Exercise Coach <ArrowRight className="h-4 w-4" /></Button>
              </Link>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1} variants={fadeUp}>
              <div className="card-premium p-6 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Dumbbell className="h-4 w-4 text-green-light" />
                  </div>
                  <div className="bg-muted rounded-xl rounded-tl-sm p-4 text-sm">
                    <p className="font-medium mb-1">Exercise Coach</p>
                    <p className="text-muted-foreground">Based on your match yesterday and moderate soreness, I'd suggest a 25-minute recovery session focused on hip mobility and light core work. Want me to build it?</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 justify-end">
                  <div className="bg-primary text-primary-foreground rounded-xl rounded-tr-sm p-4 text-sm max-w-[80%]">
                    Yes, and add some hamstring stretches too. I felt tightness in the second half.
                  </div>
                </div>
                <div className="flex gap-2 flex-wrap">
                  {["I only have 20 min", "I'm sore after a match", "Build my weekly plan"].map(p => (
                    <span key={p} className="px-3 py-1.5 rounded-full bg-muted text-xs font-medium text-muted-foreground">{p}</span>
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
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1} variants={fadeUp} className="order-2 lg:order-1">
              <div className="card-premium p-6 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <Brain className="h-4 w-4 text-accent" />
                  </div>
                  <div className="bg-muted rounded-xl rounded-tl-sm p-4 text-sm">
                    <p className="font-medium mb-1">Mindset Coach</p>
                    <p className="text-muted-foreground">It sounds like you're carrying frustration from that last match. Let's work through it. What specifically is bothering you most — the result, your own performance, or something else?</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 justify-end">
                  <div className="bg-primary text-primary-foreground rounded-xl rounded-tr-sm p-4 text-sm max-w-[80%]">
                    I keep making mistakes I wouldn't have made 10 years ago. It's hard not to feel like I'm declining.
                  </div>
                </div>
                <div className="flex gap-2 flex-wrap">
                  {["Reset after a bad game", "Build pre-match focus", "Why am I losing motivation?"].map(p => (
                    <span key={p} className="px-3 py-1.5 rounded-full bg-muted text-xs font-medium text-muted-foreground">{p}</span>
                  ))}
                </div>
              </div>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp} className="order-1 lg:order-2">
              <p className="badge-gold mb-4">Emotionally Intelligent</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Your personal Mindset Coach</h2>
              <p className="text-editorial mb-6">Process frustration, rebuild confidence, and develop a healthier relationship with performance and aging.</p>
              <ul className="space-y-3 mb-8">
                {["Post-game emotional reset", "Confidence building exercises", "Identity & aging support", "Pre-match mental preparation"].map(t => (
                  <li key={t} className="flex items-center gap-3 text-sm">
                    <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
              <Link to="/mindset-coach">
                <Button variant="gold" size="lg">Try Mindset Coach <ArrowRight className="h-4 w-4" /></Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Recovery Teaser */}
      <section className="relative py-24 md:py-32">
        <div className="absolute inset-0">
          <img src={recoveryImg} alt="Adults stretching on soccer field" className="w-full h-full object-cover" />
          <div className="absolute inset-0 hero-gradient" />
        </div>
        <div className="relative container-content text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp}>
            <p className="badge-gold mb-4">Recovery Hub</p>
            <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-4">Recovery isn't optional. It's your edge.</h2>
            <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto mb-8">Mobility routines, sleep protocols, hydration tracking, and post-match recovery plans designed for real life.</p>
            <Link to="/recovery">
              <Button variant="gold" size="xl">Explore Recovery <ArrowRight className="h-4 w-4" /></Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Community Teaser */}
      <section className="section-band">
        <div className="container-content">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp}>
              <img src={communityImg} alt="Adult soccer team celebrating together" className="rounded-2xl shadow-elevated w-full" />
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1} variants={fadeUp}>
              <p className="badge-green mb-4">Community</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">You're not alone in this.</h2>
              <p className="text-editorial mb-6">Join accountability circles, share goals, celebrate milestones, and connect with players who understand exactly where you are.</p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { icon: Users, label: "Small Groups" },
                  { icon: Target, label: "Shared Goals" },
                  { icon: MessageCircle, label: "Discussion" },
                  { icon: Star, label: "Member Stories" },
                ].map(f => (
                  <div key={f.label} className="flex items-center gap-3 p-3 rounded-xl bg-muted/50">
                    <f.icon className="h-5 w-5 text-green-light" />
                    <span className="text-sm font-medium">{f.label}</span>
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
          <div className="text-center mb-16">
            <p className="badge-gold mb-4">Real Stories</p>
            <h2 className="text-3xl md:text-4xl font-bold">Players like you, thriving.</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                variants={fadeUp}
                className="card-premium p-6"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-sm leading-relaxed mb-6 italic text-muted-foreground">"{t.quote}"</p>
                <div>
                  <p className="text-sm font-semibold">{t.name}, {t.age}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Membership Teaser */}
      <section className="section-band">
        <div className="container-content">
          <div className="card-premium bg-primary text-primary-foreground p-8 md:p-16 text-center">
            <p className="badge-gold mb-6">Membership</p>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Your game. Your system. Your progress.</h2>
            <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto mb-8">
              Unlock premium training plans, coaching access, progress tracking, and an exclusive community of committed adult players.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/membership">
                <Button variant="gold" size="xl">View Plans</Button>
              </Link>
              <Link to="/library">
                <Button variant="hero-outline" size="xl">Browse Free Content</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-band-alt">
        <div className="container-content text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp}>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Ready to play smarter?</h2>
            <p className="text-editorial max-w-xl mx-auto mb-8">
              Join thousands of adult soccer players who are building better habits, recovering faster, and enjoying the game more.
            </p>
            <Link to="/membership">
              <Button variant="gold" size="xl">Get Started Free <ArrowRight className="h-4 w-4" /></Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
