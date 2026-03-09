import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Target, Heart, RotateCcw, Shield, Flame, Brain,
  ArrowRight, CheckCircle, Sparkles
} from "lucide-react";
import { fadeUp } from "@/lib/animations";

const paths = [
  {
    id: "longevity",
    icon: Target,
    title: "I want to keep playing longer",
    desc: "Sustainable training, smarter recovery, and injury prevention so you can play for years to come.",
    color: "text-green-light",
    links: [
      { label: "Longevity Training Plans", href: "/training" },
      { label: "Injury Prevention Guide", href: "/recovery" },
      { label: "Exercise Coach", href: "/exercise-coach" },
    ],
  },
  {
    id: "fitness",
    icon: Flame,
    title: "I want to improve fitness",
    desc: "Build match-ready stamina and conditioning designed for adult physiology and real schedules.",
    color: "text-accent",
    links: [
      { label: "Conditioning Programs", href: "/training" },
      { label: "Player Dashboard", href: "/tracker" },
      { label: "Exercise Coach", href: "/exercise-coach" },
    ],
  },
  {
    id: "returning",
    icon: RotateCcw,
    title: "I'm returning after time away",
    desc: "Progressive plans and mental support to come back stronger and safer after a break.",
    color: "text-green-light",
    links: [
      { label: "Return-to-Play Guide", href: "/training" },
      { label: "Mindset Coach", href: "/mindset-coach" },
      { label: "Recovery Hub", href: "/recovery" },
    ],
  },
  {
    id: "injury",
    icon: Shield,
    title: "I'm dealing with injuries",
    desc: "Rehab-safe routines, load management, and recovery protocols to get back on the pitch.",
    color: "text-accent",
    links: [
      { label: "Recovery Protocols", href: "/recovery" },
      { label: "Exercise Coach (Injury Mode)", href: "/exercise-coach" },
      { label: "Injury Prevention Hub", href: "/recovery" },
    ],
  },
  {
    id: "consistency",
    icon: Heart,
    title: "I want more consistency",
    desc: "Build habits, track progress, and create a weekly rhythm that fits around work and family.",
    color: "text-green-light",
    links: [
      { label: "Weekly Player Loop", href: "/tracker" },
      { label: "Habit Tracking Dashboard", href: "/tracker" },
      { label: "Accountability Groups", href: "/community" },
    ],
  },
  {
    id: "confidence",
    icon: Brain,
    title: "I want to rebuild confidence",
    desc: "Mental tools to play freely, silence self-doubt, and enjoy the game at any age.",
    color: "text-accent",
    links: [
      { label: "Confidence Builder Module", href: "/mindset-coach" },
      { label: "Mindset Hub", href: "/mindset" },
      { label: "Match Reflection Tool", href: "/match-reflection" },
    ],
  },
];

export default function StartHerePage() {
  const [selected, setSelected] = useState<string | null>(null);
  const activePath = paths.find((p) => p.id === selected);

  return (
    <>
      {/* Hero */}
      <section className="section-band bg-primary text-primary-foreground pt-28 md:pt-36">
        <div className="container-content text-center">
          <motion.div initial="hidden" animate="visible">
            <motion.p variants={fadeUp} custom={0} className="badge-gold mb-5">
              Start Here
            </motion.p>
            <motion.h1
              variants={fadeUp}
              custom={1}
              className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold mb-5 text-balance"
            >
              Where are you in your soccer journey?
            </motion.h1>
            <motion.p
              variants={fadeUp}
              custom={2}
              className="text-base md:text-lg text-primary-foreground/70 max-w-2xl mx-auto leading-relaxed"
            >
              Everyone's path is different. Tell us what matters most right now and we'll point you to the right tools, plans, and content.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Path Selection */}
      <section className="section-band">
        <div className="container-content">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {paths.map((p, i) => (
              <motion.button
                key={p.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                variants={fadeUp}
                onClick={() => setSelected(p.id === selected ? null : p.id)}
                className={`relative text-left p-6 rounded-2xl border transition-all duration-300 ${
                  selected === p.id
                    ? "bg-primary/5 border-primary/30 shadow-elevated ring-2 ring-primary/20"
                    : "bg-card border-border/40 shadow-card hover:shadow-elevated hover:border-border"
                }`}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 ${
                      selected === p.id ? "gradient-green" : "bg-primary/5"
                    }`}
                  >
                    <p.icon
                      className={`h-5 w-5 ${
                        selected === p.id ? "text-primary-foreground" : p.color
                      }`}
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-serif text-lg font-semibold mb-1">{p.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                  </div>
                </div>
                {selected === p.id && (
                  <CheckCircle className="h-5 w-5 text-green-light absolute top-4 right-4" />
                )}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Curated Recommendation */}
      {activePath && (
        <section className="section-band-alt">
          <div className="container-content">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="max-w-3xl mx-auto"
            >
              <div className="text-center mb-10">
                <Sparkles className="h-6 w-6 text-accent mx-auto mb-3" />
                <h2 className="text-3xl font-bold mb-3">Your recommended starting point</h2>
                <p className="text-editorial mx-auto">
                  Based on your focus — <strong className="text-foreground">{activePath.title.toLowerCase()}</strong> — here's where we suggest you begin.
                </p>
              </div>
              <div className="space-y-4">
                {activePath.links.map((link, i) => (
                  <Link
                    key={link.href + i}
                    to={link.href}
                    className="card-premium p-5 md:p-6 flex items-center justify-between group"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-8 h-8 rounded-lg bg-primary/5 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                        <span className="stat-number text-sm text-green-light">{i + 1}</span>
                      </div>
                      <p className="font-semibold group-hover:text-green-light transition-colors">
                        {link.label}
                      </p>
                    </div>
                    <ArrowRight className="h-4 w-4 text-muted-foreground/40 group-hover:text-green-light transition-colors" />
                  </Link>
                ))}
              </div>
              <div className="text-center mt-10">
                <Link to="/membership">
                  <Button variant="gold" size="lg" className="shadow-glow">
                    Build Your Full System <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="section-band">
        <div className="container-content text-center">
          <h2 className="text-3xl md:text-[2.75rem] font-bold mb-5 text-balance">
            Not sure where to start? Start everywhere.
          </h2>
          <p className="text-editorial mx-auto mb-10">
            Explore the platform at your own pace. Every tool, guide, and feature works together as one system.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <Link to="/">
              <Button variant="default" size="xl">Explore the Homepage</Button>
            </Link>
            <Link to="/membership">
              <Button variant="outline" size="xl">View Membership Plans</Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
