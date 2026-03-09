import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { RecommendedNext } from "@/components/RecommendedNext";
import { ArrowRight, Clock, Flame, Shield, Zap, RotateCcw, Target, Heart, Activity, Brain } from "lucide-react";
import trainingImg from "@/assets/training-hero.jpg";
import { workouts } from "@/data/workouts";
import { TRAINING_CATEGORIES } from "@/data/types";

import { fadeUp } from "@/lib/animations";

const categoryIcons: Record<string, any> = {
  "Stamina & Conditioning": Flame,
  "Strength for Soccer": Zap,
  "Mobility & Flexibility": Heart,
  "Acceleration & Agility": Activity,
  "Balance & Coordination": Shield,
  "Return-to-Play": RotateCcw,
  "Age-Smart Training": Target,
  "Quick Sessions": Clock,
};

const categoryDescs: Record<string, string> = {
  "Stamina & Conditioning": "Build match-ready endurance without burning out.",
  "Strength for Soccer": "Functional strength that translates to the pitch.",
  "Mobility & Flexibility": "Open up tight hips, ankles, and shoulders.",
  "Acceleration & Agility": "Quick direction changes and first-step speed.",
  "Balance & Coordination": "Stability training that prevents falls and injuries.",
  "Return-to-Play": "Progressive plans for coming back after injury or layoff.",
  "Age-Smart Training": "Periodization and load management for 40+ bodies.",
  "Quick Sessions": "15–20 minute workouts for the time-crunched player.",
};

const filters = [
  { label: "By Goal", options: ["Build Fitness", "Prevent Injury", "Return to Play", "Maintain Strength", "Improve Speed"] },
  { label: "By Time", options: ["15 min", "20 min", "30 min", "45 min", "60 min"] },
  { label: "By Body", options: ["Lower Body", "Upper Body", "Core", "Full Body", "Mobility"] },
];

export default function TrainingHub() {
  const categories = TRAINING_CATEGORIES.map(cat => ({
    icon: categoryIcons[cat] || Target,
    title: cat,
    desc: categoryDescs[cat] || "",
    count: workouts.filter(w => w.category === cat).length,
  }));

  const featured = workouts.slice(0, 4).map(w => ({
    slug: w.slug,
    title: w.title,
    level: w.difficulty,
    duration: w.duration,
    category: w.category,
    badge: w.difficulty === "Advanced" ? "Premium" : w.difficulty === "Beginner" ? "New" : "Popular",
  }));

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
              {workouts.length} soccer-specific workouts, plans, and exercise guides designed for adult players who want to stay competitive.
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
              <motion.div key={c.title} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp}>
                <Link to={`/category/training/${encodeURIComponent(c.title)}`} className="card-premium p-5 group cursor-pointer block">
                  <c.icon className="h-6 w-6 text-green-light mb-3" />
                  <h3 className="font-serif text-lg font-semibold mb-1 group-hover:text-green-light transition-colors">{c.title}</h3>
                  <p className="text-xs text-muted-foreground mb-2">{c.desc}</p>
                  <span className="text-xs font-medium text-green-light">{c.count} workouts</span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Workouts */}
      <section className="section-band">
        <div className="container-content">
          <h2 className="text-3xl font-bold mb-8">Featured Workouts</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {featured.map((p, i) => (
              <motion.div key={p.slug} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp}>
                <Link to={`/training/${p.slug}`} className="card-premium p-6 flex items-start justify-between gap-4 group block">
                  <div>
                    {p.badge && <span className={p.badge === "Premium" ? "badge-gold mb-2 block w-fit" : "badge-green mb-2 block w-fit"}>{p.badge}</span>}
                    <h3 className="font-serif text-xl font-semibold mb-2 group-hover:text-green-light transition-colors">{p.title}</h3>
                    <div className="flex flex-wrap gap-3 text-xs text-muted-foreground">
                      <span>{p.level}</span><span>•</span><span>{p.duration}</span><span>•</span><span>{p.category}</span>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">View</Button>
                </Link>
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
