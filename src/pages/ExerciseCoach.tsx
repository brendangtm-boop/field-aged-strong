import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Dumbbell, Send, CheckCircle, Clock, Zap, Shield, RotateCcw } from "lucide-react";

import { fadeUp } from "@/lib/animations";

const useCases = [
  { icon: Clock, title: "I only have 20 minutes", desc: "Quick, focused sessions when time is tight." },
  { icon: Zap, title: "I'm sore after a match", desc: "Smart recovery sessions based on your soreness." },
  { icon: RotateCcw, title: "I'm returning after injury", desc: "Safe, progressive plans to get you back." },
  { icon: Shield, title: "Build my weekly plan", desc: "A complete week structured around your life." },
];

const demoMessages = [
  { from: "coach", text: "Good morning! How are you feeling today? Any soreness from your game last night?" },
  { from: "user", text: "Pretty sore, especially my quads and lower back. I have about 30 minutes before work." },
  { from: "coach", text: "Got it. I'd recommend a recovery-focused session today. Here's what I'm thinking:\n\n🧘 5 min gentle warm-up\n🦵 10 min quad & hip flexor release\n🔄 8 min lower back mobility flow\n💆 7 min cool-down stretches\n\nThis should help with your soreness without adding fatigue. Want me to build the full routine?" },
  { from: "user", text: "That sounds perfect. Let's do it." },
];

const todayPlan = {
  type: "Recovery Day",
  duration: "30 min",
  focus: "Lower body mobility + core activation",
  exercises: [
    "Foam roller quads & IT band — 5 min",
    "90/90 hip switches — 3x8 each",
    "Cat-cow flow — 2 min",
    "Dead bug — 3x10",
    "Pigeon stretch — 90 sec each",
    "Gentle hamstring walk-outs — 2x8",
  ],
};

export default function ExerciseCoach() {
  const [inputValue, setInputValue] = useState("");

  return (
    <>
      {/* Hero */}
      <section className="section-band bg-primary text-primary-foreground">
        <div className="container-content">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial="hidden" animate="visible">
              <motion.p variants={fadeUp} custom={0} className="badge-gold mb-4">AI-Powered</motion.p>
              <motion.h1 variants={fadeUp} custom={1} className="text-4xl md:text-5xl font-bold mb-4">
                Exercise Coach
              </motion.h1>
              <motion.p variants={fadeUp} custom={2} className="text-lg text-primary-foreground/80 mb-8 max-w-lg">
                Your intelligent training companion. Tell it how you feel, what you need, and how much time you have. Get a personalized session in seconds.
              </motion.p>
              <motion.div variants={fadeUp} custom={3} className="flex flex-wrap gap-4">
                <Button variant="gold" size="lg">Start a Session</Button>
                <Link to="/training"><Button variant="hero-outline" size="lg">Browse Plans</Button></Link>
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
            <h2 className="text-3xl font-bold mb-4">See it in action</h2>
            <p className="text-editorial">A real conversation with your Exercise Coach.</p>
          </div>
          <div className="max-w-2xl mx-auto">
            <div className="card-premium p-6 space-y-4">
              {demoMessages.map((m, i) => (
                <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp}
                  className={`flex items-start gap-3 ${m.from === "user" ? "justify-end" : ""}`}>
                  {m.from === "coach" && (
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Dumbbell className="h-4 w-4 text-green-light" />
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
              {/* Input */}
              <div className="flex gap-2 pt-2 border-t border-border/50">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Tell your coach how you're feeling..."
                  className="flex-1 h-10 px-4 rounded-lg bg-muted text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                />
                <Button variant="default" size="icon"><Send className="h-4 w-4" /></Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Today's Plan */}
      <section className="section-band-alt">
        <div className="container-content">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Today's Plan</h2>
            <div className="card-premium p-6">
              <div className="flex items-center gap-3 mb-6">
                <span className="badge-green">{todayPlan.type}</span>
                <span className="text-xs text-muted-foreground">{todayPlan.duration}</span>
                <span className="text-xs text-muted-foreground">•</span>
                <span className="text-xs text-muted-foreground">{todayPlan.focus}</span>
              </div>
              <ul className="space-y-3">
                {todayPlan.exercises.map((e) => (
                  <li key={e} className="flex items-center gap-3 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-light flex-shrink-0" />
                    <span>{e}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-4 border-t border-border/50 flex gap-3">
                <Button variant="default" size="sm">Start Session</Button>
                <Button variant="outline" size="sm">Adjust Plan</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-band">
        <div className="container-content text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Your smartest training partner.</h2>
          <p className="text-editorial max-w-xl mx-auto mb-8">Available anytime. Adapts to your body. Knows when to push and when to recover.</p>
          <Link to="/membership"><Button variant="gold" size="xl">Unlock Exercise Coach <ArrowRight className="h-4 w-4" /></Button></Link>
        </div>
      </section>
    </>
  );
}
