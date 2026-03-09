import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { RecommendedNext } from "@/components/RecommendedNext";
import { ArrowRight, Clock, Flame, Shield, Zap, RotateCcw, Target, Heart, Activity, Brain } from "lucide-react";
import trainingImg from "@/assets/training-hero.jpg";

import { fadeUp } from "@/lib/animations";

const categories = [
  { icon: Flame, title: "Stamina & Conditioning", desc: "Build match-ready endurance without burning out.", count: 12 },
  { icon: Zap, title: "Strength for Soccer", desc: "Functional strength that translates to the pitch.", count: 9 },
  { icon: Heart, title: "Mobility & Flexibility", desc: "Open up tight hips, ankles, and shoulders.", count: 15 },
  { icon: Activity, title: "Acceleration & Agility", desc: "Quick direction changes and first-step speed.", count: 8 },
  { icon: Shield, title: "Balance & Coordination", desc: "Stability training that prevents falls and injuries.", count: 7 },
  { icon: RotateCcw, title: "Return-to-Play", desc: "Progressive plans for coming back after injury or layoff.", count: 6 },
  { icon: Target, title: "Age-Smart Training", desc: "Periodization and load management for 40+ bodies.", count: 11 },
  { icon: Clock, title: "Quick Sessions", desc: "15–20 minute workouts for the time-crunched player.", count: 14 },
];

const plans = [
  { title: "6-Week Match Fitness Builder", level: "Intermediate", duration: "6 weeks", sessions: "3x/week", badge: "Popular" },
  { title: "Return After Layoff Program", level: "Beginner", duration: "8 weeks", sessions: "2–3x/week", badge: "New" },
  { title: "Over-45 Strength Foundation", level: "All Levels", duration: "4 weeks", sessions: "2x/week", badge: "" },
  { title: "Pre-Season Speed & Power", level: "Advanced", duration: "4 weeks", sessions: "3x/week", badge: "Premium" },
];

const filters = [
  { label: "By Goal", options: ["Build Fitness", "Prevent Injury", "Return to Play", "Maintain Strength", "Improve Speed"] },
  { label: "By Time", options: ["15 min", "20 min", "30 min", "45 min", "60 min"] },
  { label: "By Body", options: ["Lower Body", "Upper Body", "Core", "Full Body", "Mobility"] },
];

export default function TrainingHub() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-24 md:py-32">
        <div className="absolute inset-0">
          <img src={trainingImg} alt="Adult players doing agility drills" className="w-full h-full object-cover" />
          <div className="absolute inset-0 hero-gradient" />
        </div>
        <div className="relative container-content">
          <motion.div initial="hidden" animate="visible" className="max-w-2xl">
            <motion.p variants={fadeUp} custom={0} className="badge-gold mb-4">Training Hub</motion.p>
            <motion.h1 variants={fadeUp} custom={1} className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
              Train smarter. Play longer.
            </motion.h1>
            <motion.p variants={fadeUp} custom={2} className="text-lg text-primary-foreground/80 mb-8 max-w-lg">
              Soccer-specific training programs, workout plans, and exercise guides designed for adult players who want to stay competitive.
            </motion.p>
            <motion.div variants={fadeUp} custom={3}>
              <Link to="/exercise-coach"><Button variant="gold" size="lg">Try Exercise Coach <ArrowRight className="h-4 w-4" /></Button></Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="section-band">
        <div className="container-content">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-8">Find your training</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {filters.map(f => (
                <div key={f.label} className="card-premium p-5">
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3">{f.label}</h3>
                  <div className="flex flex-wrap gap-2">
                    {f.options.map(o => (
                      <button key={o} className="px-3 py-1.5 rounded-full bg-muted text-xs font-medium text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
                        {o}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="section-band-alt">
        <div className="container-content">
          <h2 className="text-3xl font-bold mb-8">Training Categories</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {categories.map((c, i) => (
              <motion.div key={c.title} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp} className="card-premium p-5 group cursor-pointer">
                <c.icon className="h-6 w-6 text-green-light mb-3" />
                <h3 className="font-serif text-lg font-semibold mb-1 group-hover:text-green-light transition-colors">{c.title}</h3>
                <p className="text-xs text-muted-foreground mb-2">{c.desc}</p>
                <span className="text-xs font-medium text-green-light">{c.count} workouts</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Plans */}
      <section className="section-band">
        <div className="container-content">
          <h2 className="text-3xl font-bold mb-8">Featured Plans</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {plans.map((p, i) => (
              <motion.div key={p.title} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp} className="card-premium p-6 flex items-start justify-between gap-4">
                <div>
                  {p.badge && <span className={p.badge === "Premium" ? "badge-gold mb-2 block w-fit" : "badge-green mb-2 block w-fit"}>{p.badge}</span>}
                  <h3 className="font-serif text-xl font-semibold mb-2">{p.title}</h3>
                  <div className="flex flex-wrap gap-3 text-xs text-muted-foreground">
                    <span>{p.level}</span><span>•</span><span>{p.duration}</span><span>•</span><span>{p.sessions}</span>
                  </div>
                </div>
                <Button variant="outline" size="sm">View Plan</Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-band-alt">
        <div className="container-content text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Not sure where to start?</h2>
          <p className="text-editorial max-w-xl mx-auto mb-8">Let the Exercise Coach build a personalized plan based on your goals, fitness level, and schedule.</p>
          <Link to="/exercise-coach"><Button variant="gold" size="xl">Try Exercise Coach <ArrowRight className="h-4 w-4" /></Button></Link>

          <RecommendedNext items={[
            { icon: Heart, label: "Recovery", title: "Explore Recovery Hub", href: "/recovery" },
            { icon: Brain, label: "Mindset", title: "Build Mental Resilience", href: "/mindset" },
            { icon: Activity, label: "Dashboard", title: "Track Your Progress", href: "/tracker" },
          ]} />
        </div>
      </section>
    </>
  );
}
