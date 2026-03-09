import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Brain, Send, Heart, Sparkles, RotateCcw, Shield, Target } from "lucide-react";

import { fadeUp } from "@/lib/animations";

const useCases = [
  { icon: RotateCcw, title: "Reset after a bad game", desc: "Process frustration and move forward." },
  { icon: Sparkles, title: "Build confidence", desc: "Practical tools to believe in yourself again." },
  { icon: Target, title: "Stay consistent", desc: "Build systems for long-term motivation." },
  { icon: Shield, title: "Why am I losing motivation?", desc: "Unpack what's really going on." },
];

const demoMessages = [
  { from: "coach", text: "Welcome back. Before we start, I want to check in. How are you feeling about your game this week?" },
  { from: "user", text: "Honestly, not great. I had a terrible game on Saturday and I've been dreading going back." },
  { from: "coach", text: "That's completely normal. Bad games can really shake our confidence, especially when we feel like we should 'know better' at our age.\n\nLet's separate two things:\n1. What actually happened in the game\n2. The story you're telling yourself about it\n\nCan you tell me one specific moment that's stuck with you?" },
  { from: "user", text: "I miscontrolled a simple pass and it led to a goal. Everyone saw it. I felt embarrassed." },
  { from: "coach", text: "I hear you. That feeling of exposure — especially in front of teammates — cuts deep.\n\nBut here's something important: one miscontrol doesn't define your ability. What else did you do in that game? Let's look at the full picture." },
];

const checkIns = [
  { title: "Weekly Confidence Check", desc: "Rate your confidence this week and explore what influenced it." },
  { title: "Pre-Game Mental Reset", desc: "A 3-minute centering exercise before you step on the pitch." },
  { title: "Post-Game Reflection", desc: "Process your performance with compassion, not criticism." },
];

const journalPrompts = [
  "What am I most proud of from this week — on or off the pitch?",
  "When did I feel most confident recently, and why?",
  "What would I tell a teammate who was feeling the way I feel right now?",
  "What does 'playing well' actually mean to me at this stage of life?",
];

export default function MindsetCoach() {
  const [inputValue, setInputValue] = useState("");

  return (
    <>
      {/* Hero */}
      <section className="section-band bg-primary text-primary-foreground">
        <div className="container-content">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial="hidden" animate="visible">
              <motion.p variants={fadeUp} custom={0} className="badge-gold mb-4">Emotionally Intelligent</motion.p>
              <motion.h1 variants={fadeUp} custom={1} className="text-4xl md:text-5xl font-bold mb-4">
                Mindset Coach
              </motion.h1>
              <motion.p variants={fadeUp} custom={2} className="text-lg text-primary-foreground/80 mb-8 max-w-lg">
                A safe, private space to process frustration, rebuild confidence, and develop a healthier relationship with performance and aging.
              </motion.p>
              <motion.div variants={fadeUp} custom={3} className="flex flex-wrap gap-4">
                <Button variant="gold" size="lg">Start Coaching Session</Button>
                <Link to="/mindset"><Button variant="hero-outline" size="lg">Browse Mindset Hub</Button></Link>
              </motion.div>
            </motion.div>
            <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={2}>
              <div className="bg-surface-elevated/10 backdrop-blur rounded-2xl border border-primary-foreground/10 p-4">
                {useCases.map((u) => (
                  <div key={u.title} className="flex items-start gap-3 p-3 rounded-xl hover:bg-primary-foreground/5 transition-colors cursor-pointer">
                    <u.icon className="h-5 w-5 text-gold mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold text-primary-foreground">{u.title}</p>
                      <p className="text-xs text-primary-foreground/60">{u.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Chat Demo */}
      <section className="section-band">
        <div className="container-content">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">A conversation that actually helps</h2>
            <p className="text-editorial">See how the Mindset Coach guides you through real challenges.</p>
          </div>
          <div className="max-w-2xl mx-auto">
            <div className="card-premium p-6 space-y-4">
              {demoMessages.map((m, i) => (
                <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp}
                  className={`flex items-start gap-3 ${m.from === "user" ? "justify-end" : ""}`}>
                  {m.from === "coach" && (
                    <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                      <Brain className="h-4 w-4 text-accent" />
                    </div>
                  )}
                  <div className={`rounded-xl p-4 text-sm max-w-[85%] whitespace-pre-line ${
                    m.from === "coach"
                      ? "bg-muted rounded-tl-sm text-foreground"
                      : "bg-primary text-primary-foreground rounded-tr-sm"
                  }`}>
                    {m.text}
                  </div>
                </motion.div>
              ))}
              <div className="flex gap-2 pt-2 border-t border-border/50">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Share what's on your mind..."
                  className="flex-1 h-10 px-4 rounded-lg bg-muted text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                />
                <Button variant="gold" size="icon"><Send className="h-4 w-4" /></Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Check-ins & Modules */}
      <section className="section-band-alt">
        <div className="container-content">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-6">Weekly Check-Ins</h2>
              <div className="space-y-4">
                {checkIns.map((c) => (
                  <div key={c.title} className="card-premium p-5">
                    <h3 className="font-serif text-lg font-semibold mb-1">{c.title}</h3>
                    <p className="text-xs text-muted-foreground">{c.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-6">Journaling Prompts</h2>
              <div className="space-y-4">
                {journalPrompts.map((p) => (
                  <div key={p} className="card-premium p-5 flex items-start gap-3">
                    <Heart className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                    <p className="text-sm italic text-muted-foreground">{p}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-band">
        <div className="container-content text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Your mind deserves coaching too.</h2>
          <p className="text-editorial max-w-xl mx-auto mb-8">Calm, private, judgment-free support for the mental side of the game.</p>
          <Link to="/membership"><Button variant="gold" size="xl">Unlock Mindset Coach <ArrowRight className="h-4 w-4" /></Button></Link>
        </div>
      </section>
    </>
  );
}
