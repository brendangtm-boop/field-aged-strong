import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { RecommendedNext } from "@/components/RecommendedNext";
import { ArrowRight, Clock, Flame, Shield, Zap, RotateCcw, Target, Heart, Activity, Brain, Calendar, Play } from "lucide-react";
import trainingImg from "@/assets/training-hero.jpg";
import { workouts } from "@/data/workouts";
import { trainingPrograms } from "@/data/programs";
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

const filterGroups = [
  { label: "Goal", options: ["Build Fitness", "Prevent Injury", "Improve Speed", "Return to Play", "Maintain Strength"] },
  { label: "Time", options: ["15 min", "20 min", "30 min", "45 min"] },
  { label: "Body Area", options: ["Lower Body", "Upper Body", "Core", "Full Body", "Mobility"] },
];

export default function TrainingHub() {
  const [activeFilters, setActiveFilters] = useState<Record<string, string | null>>({
    Goal: null, Time: null, "Body Area": null,
  });

  const toggleFilter = (group: string, option: string) => {
    setActiveFilters(prev => ({
      ...prev,
      [group]: prev[group] === option ? null : option,
    }));
  };

  const categories = TRAINING_CATEGORIES.map(cat => ({
    icon: categoryIcons[cat] || Target,
    title: cat,
    desc: categoryDescs[cat] || "",
    count: workouts.filter(w => w.category === cat).length,
  }));

  const featured = workouts.slice(0, 6);

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
            <motion.div variants={fadeUp} custom={3} className="flex flex-wrap gap-3">
              <Link to="/exercise-coach"><Button variant="gold" size="lg">Try Exercise Coach <ArrowRight className="h-4 w-4" /></Button></Link>
              <Link to="#programs"><Button variant="hero-outline" size="lg">View Programs</Button></Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="section-band">
        <div className="container-content">
          <div className="mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-10">Find your training</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {filterGroups.map(f => (
                <div key={f.label} className="card-premium p-6 md:p-7">
                  <h3 className="text-sm font-bold uppercase tracking-widest text-foreground mb-4">{f.label}</h3>
                  <div className="flex flex-wrap gap-2.5">
                    {f.options.map(o => (
                      <button
                        key={o}
                        onClick={() => toggleFilter(f.label, o)}
                        className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 border ${
                          activeFilters[f.label] === o
                            ? "bg-accent text-accent-foreground border-accent shadow-sm scale-[1.03]"
                            : "bg-muted/60 text-foreground/70 border-border/40 hover:bg-primary hover:text-primary-foreground hover:border-primary"
                        }`}
                      >
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
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featured.map((w, i) => (
              <motion.div key={w.slug} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp}>
                <Link to={`/training/${w.slug}`} className="card-premium p-6 block h-full group">
                  <div className="flex items-center justify-between mb-3">
                    <span className={w.difficulty === "Advanced" ? "badge-gold text-[10px]" : "badge-green text-[10px]"}>
                      {w.difficulty}
                    </span>
                    <span className="text-xs text-muted-foreground">{w.category}</span>
                  </div>
                  <h3 className="font-serif text-xl font-semibold mb-2 group-hover:text-green-light transition-colors">{w.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{w.description}</p>
                  <div className="flex items-center gap-3 text-xs text-muted-foreground mb-4">
                    <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" /> {w.duration}</span>
                    <span className="flex items-center gap-1"><Zap className="h-3.5 w-3.5" /> {w.difficulty}</span>
                  </div>
                  <Button variant="gold" size="sm" className="w-full">
                    Start Session <ArrowRight className="h-3.5 w-3.5" />
                  </Button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Programs */}
      <section id="programs" className="section-band-alt">
        <div className="container-content">
          <div className="text-center mb-12">
            <p className="badge-gold mb-4">Structured Programs</p>
            <h2 className="text-3xl md:text-[2.75rem] font-bold mb-4">Multi-week training programs</h2>
            <p className="text-editorial mx-auto">Follow a structured plan designed to build fitness progressively and keep you injury-free.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {trainingPrograms.map((p, i) => (
              <motion.div key={p.slug} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp}>
                <div className="card-premium p-6 md:p-7 h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl gradient-green flex items-center justify-center">
                      <Calendar className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-serif text-lg font-semibold">{p.title}</h3>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <span>{p.duration}</span><span>•</span><span>{p.difficulty}</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{p.description}</p>
                  <div className="space-y-2 mb-4">
                    {p.weeklyStructure.slice(0, 3).map(w => (
                      <div key={w.week} className="flex items-center gap-3 p-2.5 rounded-lg bg-surface text-xs">
                        <span className="font-bold text-green-light w-14">Week {w.week}</span>
                        <span className="text-muted-foreground">{w.focus}</span>
                      </div>
                    ))}
                    {p.weeklyStructure.length > 3 && (
                      <p className="text-xs text-muted-foreground pl-2">+ {p.weeklyStructure.length - 3} more weeks</p>
                    )}
                  </div>
                  <Button variant="default" size="sm" className="w-full">
                    <Play className="h-3.5 w-3.5" /> Start Program
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-band">
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
