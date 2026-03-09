import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Brain, Heart, Target, Shield, RotateCcw, Flame, Users, Sparkles } from "lucide-react";
import mindsetImg from "@/assets/mindset-hero.jpg";

import { fadeUp } from "@/lib/animations";

const topics = [
  { icon: Sparkles, title: "Confidence", desc: "Rebuild belief in your ability, regardless of age or recent form." },
  { icon: Target, title: "Consistency", desc: "Systems for showing up, even when motivation dips." },
  { icon: Flame, title: "Motivation", desc: "Reconnect to why you play and find deeper reasons to continue." },
  { icon: RotateCcw, title: "Dealing with Setbacks", desc: "Bounce back from bad games, injuries, and time away." },
  { icon: Brain, title: "Identity & Aging", desc: "Navigating who you are as a player when your body changes." },
  { icon: Shield, title: "Fear of Injury", desc: "Managing anxiety about getting hurt and playing freely." },
  { icon: Heart, title: "Returning After Time Away", desc: "The mental challenge of coming back to the game." },
  { icon: Users, title: "Work-Life-Sport Balance", desc: "Staying committed when life pulls you in every direction." },
];

const modules = [
  { title: "Pre-Match Mental Reset", desc: "A 5-minute routine to center yourself before kickoff.", type: "Exercise" },
  { title: "Post-Game Reflection Journal", desc: "Process your performance without judgment.", type: "Journaling" },
  { title: "The Aging Athlete's Identity", desc: "Redefining what success means at 40+.", type: "Article" },
  { title: "Confidence After a Bad Streak", desc: "Three practical techniques to rebuild self-belief.", type: "Guide" },
  { title: "Resilience After Poor Performance", desc: "How to bounce back when you let yourself down.", type: "Exercise" },
  { title: "Staying Committed Around Family", desc: "Balancing playing time with real-world responsibilities.", type: "Guide" },
];

export default function MindsetHub() {
  return (
    <>
      <section className="relative py-24 md:py-32">
        <div className="absolute inset-0">
          <img src={mindsetImg} alt="Thoughtful athlete on soccer field at sunset" className="w-full h-full object-cover" />
          <div className="absolute inset-0 hero-gradient" />
        </div>
        <div className="relative container-content max-w-2xl">
          <motion.div initial="hidden" animate="visible">
            <motion.p variants={fadeUp} custom={0} className="badge-gold mb-4">Mindset Hub</motion.p>
            <motion.h1 variants={fadeUp} custom={1} className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
              The strongest muscle is between your ears.
            </motion.h1>
            <motion.p variants={fadeUp} custom={2} className="text-lg text-primary-foreground/80 mb-8">
              Confidence, resilience, motivation, and emotional tools for the adult athlete. No clichés — just practical psychology for real players.
            </motion.p>
            <motion.div variants={fadeUp} custom={3}>
              <Link to="/mindset-coach"><Button variant="gold" size="lg">Try Mindset Coach <ArrowRight className="h-4 w-4" /></Button></Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="section-band">
        <div className="container-content">
          <h2 className="text-3xl font-bold mb-8">Explore Topics</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {topics.map((t, i) => (
              <motion.div key={t.title} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp} className="card-premium p-5 group cursor-pointer">
                <t.icon className="h-6 w-6 text-accent mb-3" />
                <h3 className="font-serif text-lg font-semibold mb-1">{t.title}</h3>
                <p className="text-xs text-muted-foreground">{t.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-band-alt">
        <div className="container-content">
          <h2 className="text-3xl font-bold mb-8">Mindset Modules</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {modules.map((m, i) => (
              <motion.div key={m.title} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp} className="card-premium p-5">
                <span className="badge-gold mb-3 block w-fit">{m.type}</span>
                <h3 className="font-serif text-lg font-semibold mb-2">{m.title}</h3>
                <p className="text-xs text-muted-foreground">{m.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-band">
        <div className="container-content text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Your mind is part of your game.</h2>
          <p className="text-editorial max-w-xl mx-auto mb-8">Get personalized mindset support from our AI-powered Mindset Coach.</p>
          <Link to="/mindset-coach"><Button variant="gold" size="xl">Start Mindset Coaching <ArrowRight className="h-4 w-4" /></Button></Link>

          <RecommendedNext items={[
            { icon: ClipboardCheck, label: "Reflect", title: "Log a Match Reflection", href: "/match-reflection" },
            { icon: Dumbbell, label: "Training", title: "Training Hub", href: "/training" },
            { icon: Heart, label: "Recovery", title: "Recovery Hub", href: "/recovery" },
          ]} />
        </div>
      </section>
    </>
  );
}
