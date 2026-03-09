import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { RecommendedNext } from "@/components/RecommendedNext";
import { ArrowRight, Moon, Droplets, Activity, Heart, Shield, Clock, Zap, Target, Dumbbell, Brain } from "lucide-react";
import recoveryImg from "@/assets/recovery-hero.jpg";
import { recoveryRoutines } from "@/data/recovery";
import { RECOVERY_CATEGORIES } from "@/data/types";

import { fadeUp } from "@/lib/animations";

const categoryIcons: Record<string, any> = {
  "Post-Match Recovery": Clock,
  "Mobility Reset": Activity,
  "Sleep Recovery": Moon,
  "Hydration Strategy": Droplets,
  "Muscle Soreness Management": Heart,
};

const categoryDescs: Record<string, string> = {
  "Post-Match Recovery": "The first 24-48 hours after a game — protocols that accelerate healing.",
  "Mobility Reset": "Hip openers, spine flows, and joint maintenance routines.",
  "Sleep Recovery": "Better sleep habits for faster recovery and performance.",
  "Hydration Strategy": "Pre, during, and post-match hydration protocols.",
  "Muscle Soreness Management": "Active recovery and load management for sore muscles.",
};

export default function RecoveryHub() {
  const categories = RECOVERY_CATEGORIES.map(cat => ({
    icon: categoryIcons[cat] || Heart,
    title: cat,
    desc: categoryDescs[cat] || "",
    count: recoveryRoutines.filter(r => r.category === cat).length,
  }));

  const featuredRoutines = recoveryRoutines.slice(0, 6);

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
              {recoveryRoutines.length} recovery routines covering mobility, sleep, hydration, and load management designed for players 40+.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="section-band">
        <div className="container-content">
          <h2 className="text-3xl font-bold mb-8">Recovery Areas</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {categories.map((c, i) => (
              <motion.div key={c.title} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp}>
                <Link to={`/category/recovery/${encodeURIComponent(c.title)}`} className="card-premium p-5 group cursor-pointer block h-full">
                  <c.icon className="h-6 w-6 text-green-light mb-3" />
                  <h3 className="font-serif text-lg font-semibold mb-1">{c.title}</h3>
                  <p className="text-xs text-muted-foreground mb-2">{c.desc}</p>
                  <span className="text-xs font-medium text-green-light">{c.count} routines</span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-band-alt">
        <div className="container-content">
          <h2 className="text-3xl font-bold mb-8">Recovery Routines</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {featuredRoutines.map((r, i) => (
              <motion.div key={r.slug} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp}>
                <Link to={`/recovery/${r.slug}`} className="card-premium p-5 block group">
                  <h3 className="font-serif text-lg font-semibold mb-2 group-hover:text-green-light transition-colors">{r.title}</h3>
                  <p className="text-xs text-muted-foreground mb-3 line-clamp-2">{r.description}</p>
                  <div className="flex flex-wrap gap-2 text-xs">
                    <span className="px-2 py-1 rounded-full bg-muted text-muted-foreground">{r.duration}</span>
                    <span className="px-2 py-1 rounded-full bg-muted text-muted-foreground">{r.bodyArea}</span>
                    <span className="px-2 py-1 rounded-full bg-muted text-muted-foreground">{r.category}</span>
                  </div>
                </Link>
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
