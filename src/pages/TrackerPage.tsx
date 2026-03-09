import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  ArrowRight, Activity, Moon, Zap, Brain, TrendingUp,
  Calendar, Flame, CheckCircle, BarChart3, Heart, Target
} from "lucide-react";

import { fadeUp } from "@/lib/animations";

const todaySummary = {
  energy: 7,
  soreness: 4,
  sleep: "7.5 hrs",
  mood: "Good",
  nextAction: "Recovery mobility session (20 min)",
};

const weeklyStats = [
  { label: "Training Sessions", value: "3", icon: Activity, trend: "+1 vs last week" },
  { label: "Matches Played", value: "1", icon: Target, trend: "Same as usual" },
  { label: "Recovery Sessions", value: "2", icon: Heart, trend: "New streak!" },
  { label: "Mindset Check-ins", value: "4", icon: Brain, trend: "+2 vs last week" },
];

const recentSessions = [
  { title: "Match: Sunday League vs. Riverside FC", type: "Match", date: "Today", duration: "90 min" },
  { title: "Pre-Match Activation Warm-up", type: "Training", date: "Yesterday", duration: "15 min" },
  { title: "Lower Body Mobility Flow", type: "Recovery", date: "2 days ago", duration: "20 min" },
  { title: "Post-Game Confidence Reset", type: "Mindset", date: "3 days ago", duration: "8 min" },
];

const habits = [
  { name: "Morning Stretch", streak: 12, done: true },
  { name: "Hydration Goal", streak: 7, done: true },
  { name: "Mindset Journal", streak: 4, done: false },
  { name: "Sleep 7+ Hours", streak: 5, done: true },
];

export default function TrackerPage() {
  return (
    <>
      <section className="section-band">
        <div className="container-content">
          <motion.div initial="hidden" animate="visible">
            <motion.div variants={fadeUp} custom={0} className="flex items-center justify-between mb-8">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold">Your Dashboard</h1>
                <p className="text-muted-foreground mt-1">Welcome back. Here's how you're doing.</p>
              </div>
              <span className="badge-green">Week 12</span>
            </motion.div>

            {/* Today's Check-in */}
            <motion.div variants={fadeUp} custom={1} className="card-premium p-6 mb-8">
              <h2 className="font-serif text-xl font-semibold mb-4">Today's Wellness Check</h2>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                <div className="text-center p-3 rounded-xl bg-muted/50">
                  <Zap className="h-5 w-5 mx-auto mb-1 text-accent" />
                  <p className="text-2xl font-bold">{todaySummary.energy}/10</p>
                  <p className="text-xs text-muted-foreground">Energy</p>
                </div>
                <div className="text-center p-3 rounded-xl bg-muted/50">
                  <Activity className="h-5 w-5 mx-auto mb-1 text-green-light" />
                  <p className="text-2xl font-bold">{todaySummary.soreness}/10</p>
                  <p className="text-xs text-muted-foreground">Soreness</p>
                </div>
                <div className="text-center p-3 rounded-xl bg-muted/50">
                  <Moon className="h-5 w-5 mx-auto mb-1 text-green-light" />
                  <p className="text-2xl font-bold">{todaySummary.sleep}</p>
                  <p className="text-xs text-muted-foreground">Sleep</p>
                </div>
                <div className="text-center p-3 rounded-xl bg-muted/50">
                  <Brain className="h-5 w-5 mx-auto mb-1 text-accent" />
                  <p className="text-2xl font-bold">{todaySummary.mood}</p>
                  <p className="text-xs text-muted-foreground">Mood</p>
                </div>
                <div className="text-center p-3 rounded-xl bg-primary/5 border border-primary/10">
                  <TrendingUp className="h-5 w-5 mx-auto mb-1 text-green-light" />
                  <p className="text-xs font-medium">{todaySummary.nextAction}</p>
                  <p className="text-xs text-muted-foreground mt-1">Recommended</p>
                </div>
              </div>
            </motion.div>

            {/* Weekly Stats */}
            <motion.div variants={fadeUp} custom={2} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {weeklyStats.map((s) => (
                <div key={s.label} className="card-premium p-5 text-center">
                  <s.icon className="h-5 w-5 mx-auto mb-2 text-green-light" />
                  <p className="text-3xl font-bold mb-1">{s.value}</p>
                  <p className="text-xs font-medium mb-1">{s.label}</p>
                  <p className="text-xs text-muted-foreground">{s.trend}</p>
                </div>
              ))}
            </motion.div>

            {/* Habits & Sessions */}
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div variants={fadeUp} custom={3}>
                <h2 className="font-serif text-xl font-semibold mb-4">Habit Streaks</h2>
                <div className="space-y-3">
                  {habits.map((h) => (
                    <div key={h.name} className="card-premium p-4 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <CheckCircle className={`h-5 w-5 ${h.done ? "text-green-light" : "text-muted-foreground/30"}`} />
                        <span className="text-sm font-medium">{h.name}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Flame className="h-4 w-4 text-accent" />
                        <span className="text-sm font-bold">{h.streak}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div variants={fadeUp} custom={4}>
                <h2 className="font-serif text-xl font-semibold mb-4">Recent Sessions</h2>
                <div className="space-y-3">
                  {recentSessions.map((s) => (
                    <div key={s.title} className="card-premium p-4">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <p className="text-sm font-medium">{s.title}</p>
                          <div className="flex gap-2 mt-1 text-xs text-muted-foreground">
                            <span>{s.type}</span><span>•</span><span>{s.date}</span><span>•</span><span>{s.duration}</span>
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
          <h2 className="text-3xl font-bold mb-4">Track your progress. See your growth.</h2>
          <p className="text-editorial max-w-xl mx-auto mb-8">Premium members get full tracking history, custom goals, and weekly insights.</p>
          <Link to="/membership"><Button variant="gold" size="xl">Upgrade to Premium <ArrowRight className="h-4 w-4" /></Button></Link>
        </div>
      </section>
    </>
  );
}
