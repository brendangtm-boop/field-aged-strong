import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { RecommendedNext } from "@/components/RecommendedNext";
import { ArrowRight, Dumbbell, Send, CheckCircle, Clock, Zap, Shield, RotateCcw, Play, Heart, Target, Calendar, Sparkles } from "lucide-react";
import { fadeUp } from "@/lib/animations";

const useCases = [
  { icon: Clock, title: "I only have 20 minutes", desc: "Quick, focused sessions when time is tight.", color: "text-accent" },
  { icon: Zap, title: "I'm sore after a match", desc: "Smart recovery sessions based on your soreness level.", color: "text-green-light" },
  { icon: RotateCcw, title: "I'm returning after injury", desc: "Safe, progressive plans to get you back on the pitch.", color: "text-accent" },
  { icon: Shield, title: "Build my weekly plan", desc: "A complete week structured around your schedule.", color: "text-green-light" },
  { icon: Target, title: "Prepare for match day", desc: "Activation routines for peak readiness.", color: "text-accent" },
  { icon: Heart, title: "I need a rest day plan", desc: "Active recovery that speeds up healing.", color: "text-green-light" },
];

const demoMessages = [
  { from: "coach", text: "Good morning! How are you feeling today? Any soreness from your game last night?" },
  { from: "user", text: "Pretty sore, especially my quads and lower back. I have about 30 minutes before work." },
  { from: "coach", text: "Got it. Based on your moderate soreness and 30-minute window, here's what I recommend:" },
];

const planSteps = [
  { time: "5 min", name: "Gentle warm-up walk + ankle circles", done: true },
  { time: "10 min", name: "Quad & hip flexor foam rolling + release", done: true },
  { time: "8 min", name: "Lower back mobility flow (cat-cow, thread the needle)", done: false },
  { time: "7 min", name: "Cool-down stretches — hamstrings, glutes, calves", done: false },
];

const weekPlan = [
  { day: "Mon", type: "Recovery", name: "Post-match mobility", duration: "25 min", active: true },
  { day: "Tue", type: "Training", name: "Light conditioning", duration: "35 min", active: false },
  { day: "Wed", type: "Rest", name: "Active rest", duration: "15 min", active: false },
  { day: "Thu", type: "Training", name: "Strength + agility", duration: "40 min", active: false },
  { day: "Fri", type: "Recovery", name: "Pre-match prep", duration: "20 min", active: false },
  { day: "Sat", type: "Match", name: "Game day", duration: "—", active: false },
  { day: "Sun", type: "Recovery", name: "Full recovery session", duration: "30 min", active: false },
];

const features = [
  { icon: Sparkles, title: "Adapts to You", desc: "Adjusts every session to your energy, soreness, schedule, and goals. No two plans are the same." },
  { icon: Calendar, title: "Weekly Planning", desc: "Builds a complete training week around your matches, work, and recovery needs." },
  { icon: Shield, title: "Injury-Aware", desc: "Flags risky exercises and adjusts intensity when you report pain or returning from injury." },
  { icon: Target, title: "Goal-Driven", desc: "Whether you want fitness, flexibility, or match readiness — the coach optimizes for your goal." },
];

export default function ExerciseCoach() {
  const [inputValue, setInputValue] = useState("");

  return (
    <>
      {/* Hero */}
      <section className="section-band bg-primary text-primary-foreground pt-28 md:pt-36">
        <div className="container-content">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <motion.div initial="hidden" animate="visible">
              <motion.p variants={fadeUp} custom={0} className="badge-gold mb-5">AI-Powered Feature</motion.p>
              <motion.h1 variants={fadeUp} custom={1} className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold mb-5 text-balance">
                Your intelligent<br />Exercise Coach
              </motion.h1>
              <motion.p variants={fadeUp} custom={2} className="text-base md:text-lg text-primary-foreground/75 mb-10 max-w-lg leading-relaxed">
                Tell it how you feel, what you need, and how much time you have. Get a personalized, soccer-specific session built in seconds.
              </motion.p>
              <motion.div variants={fadeUp} custom={3} className="flex flex-wrap gap-3">
                <Button variant="gold" size="lg" className="shadow-glow">Start a Session</Button>
                <Link to="/training"><Button variant="hero-outline" size="lg">Browse Training Plans</Button></Link>
              </motion.div>
            </motion.div>
            <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={2}>
              <div className="rounded-2xl border border-primary-foreground/10 bg-primary-foreground/5 backdrop-blur p-5">
                <p className="text-xs font-bold uppercase tracking-widest text-primary-foreground/50 mb-4">Quick start prompts</p>
                <div className="space-y-2">
                  {useCases.map((u) => (
                    <div key={u.title} className="flex items-start gap-3 p-3 rounded-xl hover:bg-primary-foreground/5 transition-colors cursor-pointer group">
                      <u.icon className={`h-4.5 w-4.5 ${u.color} mt-0.5`} />
                      <div>
                        <p className="text-sm font-semibold text-primary-foreground group-hover:text-gold-light transition-colors">{u.title}</p>
                        <p className="text-xs text-primary-foreground/50">{u.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Chat Demo */}
      <section className="section-band">
        <div className="container-content">
          <div className="text-center mb-14">
            <p className="badge-green mb-4">Live Demo</p>
            <h2 className="text-3xl md:text-[2.75rem] font-bold mb-4">See it in action</h2>
            <p className="text-editorial mx-auto">A real conversation with your Exercise Coach — and the session it builds.</p>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="card-premium-static p-5 md:p-7">
              {/* Chat messages */}
              <div className="space-y-4 mb-5">
                {demoMessages.map((m, i) => (
                  <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp}
                    className={`flex items-start gap-3 ${m.from === "user" ? "justify-end" : ""}`}>
                    {m.from === "coach" && (
                      <div className="w-8 h-8 rounded-full gradient-green flex items-center justify-center flex-shrink-0">
                        <Dumbbell className="h-3.5 w-3.5 text-primary-foreground" />
                      </div>
                    )}
                    <div className={m.from === "coach" ? "chat-bubble-coach flex-1" : "chat-bubble-user max-w-[80%]"}>
                      {m.text}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Generated plan */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={3} variants={fadeUp}
                className="rounded-xl bg-green-subtle border border-primary/10 p-5 mb-5">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-green-light mb-1">Today's Session</p>
                    <p className="font-serif text-lg font-semibold">Post-Match Recovery Flow</p>
                  </div>
                  <span className="badge-green">30 min</span>
                </div>
                <div className="space-y-2.5">
                  {planSteps.map((s, i) => (
                    <div key={i} className="flex items-start gap-3 p-2.5 rounded-lg bg-card/60">
                      <CheckCircle className={`h-4 w-4 mt-0.5 flex-shrink-0 ${s.done ? "text-green-light" : "text-border"}`} />
                      <div className="flex-1 flex items-start justify-between gap-2">
                        <span className="text-sm">{s.name}</span>
                        <span className="text-xs text-muted-foreground whitespace-nowrap">{s.time}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 flex gap-2">
                  <Button variant="default" size="sm"><Play className="h-3.5 w-3.5" /> Start Session</Button>
                  <Button variant="outline" size="sm">Adjust Plan</Button>
                  <Button variant="ghost" size="sm">Save for Later</Button>
                </div>
              </motion.div>

              {/* Input */}
              <div className="flex gap-2 pt-3 border-t border-border/50">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Tell your coach how you're feeling today..."
                  className="flex-1 h-11 px-4 rounded-xl bg-surface border border-border/50 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                />
                <Button variant="default" size="icon" className="h-11 w-11 rounded-xl"><Send className="h-4 w-4" /></Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Weekly Plan Demo */}
      <section className="section-band-alt">
        <div className="container-content">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold mb-4">Your week, planned intelligently</h2>
              <p className="text-editorial mx-auto">The coach builds a full week around your matches, energy, and recovery needs.</p>
            </div>
            <div className="card-premium-static overflow-hidden">
              <div className="p-5 md:p-6 border-b border-border/50 flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">This Week</p>
                  <p className="font-serif text-lg font-semibold">March 10 – 16</p>
                </div>
                <Button variant="outline" size="sm">Regenerate</Button>
              </div>
              <div className="divide-y divide-border/50">
                {weekPlan.map((d) => (
                  <div key={d.day} className={`flex items-center gap-4 p-4 md:px-6 ${d.active ? "bg-green-subtle" : ""}`}>
                    <div className="w-10 text-center">
                      <p className={`text-xs font-bold uppercase ${d.active ? "text-green-light" : "text-muted-foreground"}`}>{d.day}</p>
                    </div>
                    <div className={`px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider w-20 text-center ${
                      d.type === "Training" ? "bg-primary/8 text-green-light" :
                      d.type === "Recovery" ? "bg-accent/10 text-gold-dark" :
                      d.type === "Match" ? "bg-primary/10 text-primary" :
                      "bg-muted text-muted-foreground"
                    }`}>
                      {d.type}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">{d.name}</p>
                    </div>
                    <p className="text-xs text-muted-foreground">{d.duration}</p>
                    {d.active && <span className="w-2 h-2 rounded-full bg-green-light" />}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-band">
        <div className="container-content">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold mb-4">Smarter than a spreadsheet. Kinder than a drill sergeant.</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-5 max-w-3xl mx-auto">
            {features.map((f, i) => (
              <motion.div key={f.title} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp}
                className="card-premium p-6">
                <f.icon className="h-6 w-6 text-green-light mb-3" />
                <h3 className="font-serif text-lg font-semibold mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-band-alt">
        <div className="container-content text-center">
          <h2 className="text-3xl md:text-[2.75rem] font-bold mb-5 text-balance">Your smartest training partner is ready.</h2>
          <p className="text-editorial mx-auto mb-10">Available anytime. Adapts to your body. Knows when to push and when to recover.</p>
          <Link to="/membership"><Button variant="gold" size="xl" className="shadow-glow">Unlock Exercise Coach <ArrowRight className="h-4 w-4" /></Button></Link>

          <RecommendedNext items={[
            { icon: Heart, label: "Recovery", title: "Explore Recovery Hub", href: "/recovery" },
            { icon: Dumbbell, label: "Training", title: "Browse Training Plans", href: "/training" },
            { icon: Target, label: "Track", title: "Daily Progress Tracker", href: "/tracker" },
          ]} />
        </div>
      </section>
    </>
  );
}
