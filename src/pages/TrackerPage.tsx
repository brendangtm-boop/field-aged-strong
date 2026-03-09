import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { RecommendedNext } from "@/components/RecommendedNext";
import {
  ArrowRight, Activity, Moon, Zap, Brain, TrendingUp,
  Flame, CheckCircle, Heart, Target, Dumbbell,
  Calendar, ChevronRight, ClipboardCheck
} from "lucide-react";
import { fadeUp } from "@/lib/animations";
import trackerImg from "@/assets/tracker-flatlay.jpg";

/* ── Data ── */
const todaySummary = {
  energy: 7,
  soreness: 4,
  sleep: 7.5,
  confidence: 8,
};

const weeklyStats = [
  { label: "Training", value: "3", target: "3", icon: Activity, color: "text-green-light" },
  { label: "Matches", value: "1", target: "1", icon: Target, color: "text-accent" },
  { label: "Recovery", value: "2", target: "3", icon: Heart, color: "text-green-light" },
  { label: "Mindset", value: "4", target: "5", icon: Brain, color: "text-accent" },
];

const weeklyLoop = [
  { day: "Mon", label: "Training Plan", icon: Dumbbell, type: "Train", active: true, done: true },
  { day: "Tue", label: "Mobility Flow", icon: Heart, type: "Recover", active: false, done: true },
  { day: "Wed", label: "Conditioning", icon: Activity, type: "Train", active: false, done: true },
  { day: "Thu", label: "Mindset Reflection", icon: Brain, type: "Mindset", active: false, done: false },
  { day: "Fri", label: "Light Preparation", icon: Zap, type: "Prepare", active: false, done: false },
  { day: "Sat", label: "Match Day", icon: Target, type: "Match", active: false, done: false },
  { day: "Sun", label: "Recovery Session", icon: Moon, type: "Recover", active: false, done: false },
];

const recentSessions = [
  { title: "Match: Sunday League vs. Riverside FC", type: "Match", date: "Today", duration: "90 min", typeColor: "bg-primary/8 text-primary" },
  { title: "Pre-Match Activation Warm-up", type: "Training", date: "Yesterday", duration: "15 min", typeColor: "bg-green-subtle text-green-light" },
  { title: "Lower Body Mobility Flow", type: "Recovery", date: "2 days ago", duration: "20 min", typeColor: "bg-accent/10 text-gold-dark" },
  { title: "Post-Game Confidence Reset", type: "Mindset", date: "3 days ago", duration: "8 min", typeColor: "bg-accent/10 text-gold-dark" },
  { title: "Strength: Legs & Core Circuit", type: "Training", date: "4 days ago", duration: "35 min", typeColor: "bg-green-subtle text-green-light" },
];

const habits = [
  { name: "Morning Stretch", streak: 12, done: true },
  { name: "Hydration Goal", streak: 7, done: true },
  { name: "Mindset Journal", streak: 4, done: false },
  { name: "Sleep 7+ Hours", streak: 5, done: true },
  { name: "Pre-Match Warm-up", streak: 8, done: true },
];

const weekConsistency = [
  { week: "W7", sessions: 5, max: 7 },
  { week: "W8", sessions: 6, max: 7 },
  { week: "W9", sessions: 4, max: 7 },
  { week: "W10", sessions: 7, max: 7 },
  { week: "W11", sessions: 5, max: 7 },
  { week: "W12", sessions: 6, max: 7 },
];

export default function TrackerPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative py-20 md:py-24">
        <div className="absolute inset-0">
          <img src={trackerImg} alt="Fitness tracking setup" className="w-full h-full object-cover" />
          <div className="absolute inset-0 hero-gradient" />
        </div>
        <div className="relative container-content">
          <motion.div initial="hidden" animate="visible">
            <motion.p variants={fadeUp} custom={0} className="badge-white mb-4">Player Dashboard</motion.p>
            <motion.h1 variants={fadeUp} custom={1} className="text-3xl md:text-5xl font-bold text-primary-foreground mb-3">
              Your Progress
            </motion.h1>
            <motion.p variants={fadeUp} custom={2} className="text-primary-foreground/70 max-w-md">
              Track training, recovery, mindset, and habits — all in one place.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="section-band">
        <div className="container-content">
          <motion.div initial="hidden" animate="visible">
            {/* Quick Log */}
            <motion.div variants={fadeUp} custom={0} className="mb-8">
              <div className="flex items-center justify-between mb-5">
                <h2 className="font-serif text-2xl font-bold">How are you feeling today?</h2>
                <span className="badge-green">Week 12</span>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { label: "Energy", value: todaySummary.energy, icon: Zap, color: "text-accent" },
                  { label: "Soreness", value: todaySummary.soreness, icon: Activity, color: "text-green-light" },
                  { label: "Sleep", value: `${todaySummary.sleep}h`, icon: Moon, color: "text-green-light" },
                  { label: "Confidence", value: todaySummary.confidence, icon: Brain, color: "text-accent" },
                ].map((s) => (
                  <div key={s.label} className="card-premium-static p-5 text-center">
                    <s.icon className={`h-5 w-5 mx-auto mb-2 ${s.color}`} />
                    <p className="stat-number text-3xl mb-1">{s.value}{typeof s.value === 'number' ? '/10' : ''}</p>
                    <p className="text-xs text-muted-foreground font-medium">{s.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Recommended Action */}
            <motion.div variants={fadeUp} custom={1} className="mb-8">
              <div className="card-premium-static p-5 md:p-6 bg-green-subtle border-primary/10">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl gradient-green flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs font-bold uppercase tracking-widest text-green-light mb-1">Recommended Next</p>
                    <p className="font-serif text-lg font-semibold mb-1">Recovery Mobility Session</p>
                    <p className="text-sm text-muted-foreground">Based on your match today and soreness level (4/10), a 20-minute mobility flow will help you recover faster.</p>
                  </div>
                  <Button variant="default" size="sm" className="flex-shrink-0">
                    Start <ChevronRight className="h-3.5 w-3.5" />
                  </Button>
                </div>
              </div>
            </motion.div>

            {/* Weekly Player Loop */}
            <motion.div variants={fadeUp} custom={2} className="mb-8">
              <h2 className="font-serif text-xl font-semibold mb-5">The Weekly Player Loop</h2>
              <div className="card-premium-static overflow-hidden">
                <div className="grid grid-cols-7">
                  {weeklyLoop.map((d) => (
                    <div
                      key={d.day}
                      className={`p-3 md:p-4 text-center border-r border-border/30 last:border-r-0 ${
                        d.done ? "bg-green-subtle" : ""
                      }`}
                    >
                      <p className={`text-[10px] font-bold uppercase tracking-widest mb-2 ${
                        d.done ? "text-green-light" : "text-muted-foreground"
                      }`}>
                        {d.day}
                      </p>
                      <div className={`w-8 h-8 md:w-10 md:h-10 rounded-xl mx-auto mb-2 flex items-center justify-center ${
                        d.done ? "gradient-green" : "bg-muted"
                      }`}>
                        <d.icon className={`h-4 w-4 ${d.done ? "text-primary-foreground" : "text-muted-foreground"}`} />
                      </div>
                      <p className="text-[10px] md:text-xs font-medium hidden md:block">{d.label}</p>
                      <p className={`text-[9px] font-bold uppercase tracking-wider mt-1 ${
                        d.type === "Train" ? "text-green-light" :
                        d.type === "Recover" ? "text-accent" :
                        d.type === "Mindset" ? "text-accent" :
                        d.type === "Match" ? "text-primary" :
                        "text-muted-foreground"
                      }`}>
                        {d.type}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Weekly Stats */}
            <motion.div variants={fadeUp} custom={3} className="mb-8">
              <h2 className="font-serif text-xl font-semibold mb-5">This Week's Activity</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {weeklyStats.map((s) => {
                  const pct = Math.min(100, (parseInt(s.value) / parseInt(s.target)) * 100);
                  return (
                    <div key={s.label} className="card-premium-static p-5">
                      <div className="flex items-center justify-between mb-3">
                        <s.icon className={`h-4 w-4 ${s.color}`} />
                        <span className="text-xs text-muted-foreground">{s.value}/{s.target}</span>
                      </div>
                      <p className="stat-number text-3xl mb-1">{s.value}</p>
                      <p className="text-xs font-medium text-muted-foreground mb-3">{s.label} sessions</p>
                      <div className="progress-bar">
                        <div className="progress-bar-fill" style={{ width: `${pct}%` }} />
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>

            {/* Consistency Chart */}
            <motion.div variants={fadeUp} custom={4} className="mb-8">
              <h2 className="font-serif text-xl font-semibold mb-5">Consistency Over Time</h2>
              <div className="card-premium-static p-5 md:p-6">
                <div className="flex items-end gap-3 h-32">
                  {weekConsistency.map((w) => (
                    <div key={w.week} className="flex-1 flex flex-col items-center gap-2">
                      <div className="w-full relative" style={{ height: '100px' }}>
                        <div className="absolute bottom-0 w-full rounded-t-md gradient-green transition-all duration-700"
                          style={{ height: `${(w.sessions / w.max) * 100}%` }} />
                      </div>
                      <span className="text-[10px] font-medium text-muted-foreground">{w.week}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-3 pt-3 border-t border-border/50 text-center">
                  <p className="text-sm text-muted-foreground">Average <span className="font-bold text-foreground">5.5 sessions/week</span> over the last 6 weeks</p>
                </div>
              </div>
            </motion.div>

            {/* Habits & Sessions */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <motion.div variants={fadeUp} custom={5}>
                <h2 className="font-serif text-xl font-semibold mb-5">Habit Streaks</h2>
                <div className="space-y-2.5">
                  {habits.map((h) => (
                    <div key={h.name} className="card-premium-static p-4 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <CheckCircle className={`h-5 w-5 ${h.done ? "text-green-light" : "text-border"}`} />
                        <span className="text-sm font-medium">{h.name}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Flame className="h-4 w-4 text-accent" />
                        <span className="stat-number text-sm">{h.streak}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div variants={fadeUp} custom={6}>
                <h2 className="font-serif text-xl font-semibold mb-5">Recent Sessions</h2>
                <div className="space-y-2.5">
                  {recentSessions.map((s) => (
                    <div key={s.title} className="card-premium-static p-4">
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium truncate">{s.title}</p>
                          <div className="flex items-center gap-2 mt-1.5">
                            <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${s.typeColor}`}>{s.type}</span>
                            <span className="text-xs text-muted-foreground">{s.date}</span>
                            <span className="text-xs text-muted-foreground">•</span>
                            <span className="text-xs text-muted-foreground">{s.duration}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section-band-alt">
        <div className="container-content text-center">
          <h2 className="text-3xl md:text-[2.75rem] font-bold mb-5 text-balance">See your progress. Stay accountable.</h2>
          <p className="text-editorial mx-auto mb-10">Premium members get complete tracking history, custom goals, weekly insights, and coaching recommendations.</p>
          <Link to="/membership"><Button variant="gold" size="xl" className="shadow-glow">Unlock Full Dashboard <ArrowRight className="h-4 w-4" /></Button></Link>

          <RecommendedNext items={[
            { icon: Dumbbell, label: "Coach", title: "Get Today's Plan from Exercise Coach", href: "/exercise-coach" },
            { icon: ClipboardCheck, label: "Reflect", title: "Log a Match Reflection", href: "/match-reflection" },
            { icon: Calendar, label: "Training", title: "Browse Training Programs", href: "/training" },
          ]} />
        </div>
      </section>
    </>
  );
}
