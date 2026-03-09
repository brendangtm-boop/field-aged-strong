import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { RecommendedNext } from "@/components/RecommendedNext";
import { ArrowRight, Moon, Droplets, Activity, Heart, Shield, Clock, Zap, Target, Dumbbell, Brain } from "lucide-react";
import recoveryImg from "@/assets/recovery-hero.jpg";

import { fadeUp } from "@/lib/animations";

const categories = [
  { icon: Activity, title: "Mobility Routines", desc: "Hip openers, ankle work, thoracic spine flows.", count: 18 },
  { icon: Moon, title: "Sleep Optimization", desc: "Better sleep habits for faster recovery.", count: 8 },
  { icon: Droplets, title: "Hydration Protocols", desc: "Pre, during, and post-match hydration strategies.", count: 6 },
  { icon: Heart, title: "Soreness Management", desc: "Active recovery and load management tips.", count: 12 },
  { icon: Shield, title: "Injury Prevention", desc: "Prehab exercises for knees, ankles, and hamstrings.", count: 14 },
  { icon: Clock, title: "Post-Match Recovery", desc: "The first 24 hours after a game.", count: 9 },
  { icon: Zap, title: "Recovery by Body Area", desc: "Targeted routines for specific joints and muscles.", count: 16 },
  { icon: Target, title: "Busy Adult Routines", desc: "10–15 minute recovery for packed schedules.", count: 11 },
];

const routines = [
  { title: "Morning Mobility Flow", time: "12 min", focus: "Full Body", level: "All Levels" },
  { title: "Post-Match Lower Body Reset", time: "18 min", focus: "Legs & Hips", level: "All Levels" },
  { title: "Desk Worker Hip Opener", time: "10 min", focus: "Hips", level: "Beginner" },
  { title: "Sunday Recovery Session", time: "25 min", focus: "Full Body", level: "All Levels" },
  { title: "Ankle & Knee Stability", time: "15 min", focus: "Lower Body", level: "Intermediate" },
  { title: "Pre-Bed Wind Down", time: "8 min", focus: "Relaxation", level: "All Levels" },
];

export default function RecoveryHub() {
  return (
    <>
      <section className="relative py-24 md:py-32">
        <div className="absolute inset-0">
          <img src={recoveryImg} alt="Adults stretching on soccer field" className="w-full h-full object-cover" />
          <div className="absolute inset-0 hero-gradient" />
        </div>
        <div className="relative container-content max-w-2xl">
          <motion.div initial="hidden" animate="visible">
            <motion.p variants={fadeUp} custom={0} className="badge-gold mb-4">Recovery Hub</motion.p>
            <motion.h1 variants={fadeUp} custom={1} className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
              Recover smarter. Come back stronger.
            </motion.h1>
            <motion.p variants={fadeUp} custom={2} className="text-lg text-primary-foreground/80 mb-8">
              Recovery is not a luxury — it's the foundation. Mobility, sleep, hydration, and load management designed for players 40+.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="section-band">
        <div className="container-content">
          <h2 className="text-3xl font-bold mb-8">Recovery Areas</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {categories.map((c, i) => (
              <motion.div key={c.title} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp} className="card-premium p-5 group cursor-pointer">
                <c.icon className="h-6 w-6 text-green-light mb-3" />
                <h3 className="font-serif text-lg font-semibold mb-1">{c.title}</h3>
                <p className="text-xs text-muted-foreground mb-2">{c.desc}</p>
                <span className="text-xs font-medium text-green-light">{c.count} resources</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-band-alt">
        <div className="container-content">
          <h2 className="text-3xl font-bold mb-8">Recovery Routines</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {routines.map((r, i) => (
              <motion.div key={r.title} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp} className="card-premium p-5">
                <h3 className="font-serif text-lg font-semibold mb-2">{r.title}</h3>
                <div className="flex flex-wrap gap-2 text-xs">
                  <span className="px-2 py-1 rounded-full bg-muted text-muted-foreground">{r.time}</span>
                  <span className="px-2 py-1 rounded-full bg-muted text-muted-foreground">{r.focus}</span>
                  <span className="px-2 py-1 rounded-full bg-muted text-muted-foreground">{r.level}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-band">
        <div className="container-content text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Recovery is your competitive advantage.</h2>
          <p className="text-editorial max-w-xl mx-auto mb-8">The players who last longest are the ones who recover best. Start building your recovery system today.</p>
          <Link to="/membership"><Button variant="gold" size="xl">Unlock Full Recovery Library <ArrowRight className="h-4 w-4" /></Button></Link>

          <RecommendedNext items={[
            { icon: Dumbbell, label: "Training", title: "Browse Training Programs", href: "/training" },
            { icon: Brain, label: "Mindset", title: "Mindset Hub", href: "/mindset" },
            { icon: Target, label: "Coach", title: "Try Exercise Coach", href: "/exercise-coach" },
          ]} />
        </div>
      </section>
    </>
  );
}
