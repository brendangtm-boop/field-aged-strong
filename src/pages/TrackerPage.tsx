import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { WeeklyPlanCard } from "@/components/WeeklyPlanCard";
import { QuickStartPanel } from "@/components/QuickStartPanel";
import { RecommendedNext } from "@/components/RecommendedNext";
import { My2ctsCallout } from "@/components/My2ctsCallout";
import { getMy2ctsByContext } from "@/data/my2cts-contextual";
import { defaultWeeklyPlan, quickStarts } from "@/data/weeklyPlan";
import type { PlannedSession, SessionStatus } from "@/data/weeklyPlan";
import {
  ArrowRight, Activity, Moon, Zap, Brain, TrendingUp,
  Flame, CheckCircle, Heart, Target, Dumbbell,
  Calendar, ChevronRight, ClipboardCheck
} from "lucide-react";
import { fadeUp } from "@/lib/animations";
import trackerImg from "@/assets/tracker-flatlay.jpg";

const todaySummary = {
  energy: 7,
  soreness: 4,
  sleep: 7.5,
  confidence: 8,
};

const weekConsistency = [
  { week: "W7", sessions: 5, max: 7 },
  { week: "W8", sessions: 6, max: 7 },
  { week: "W9", sessions: 4, max: 7 },
  { week: "W10", sessions: 7, max: 7 },
  { week: "W11", sessions: 5, max: 7 },
  { week: "W12", sessions: 6, max: 7 },
];

const habits = [
  { name: "Morning Stretch", streak: 12, done: true },
  { name: "Hydration Goal", streak: 7, done: true },
  { name: "Mindset Journal", streak: 4, done: false },
  { name: "Sleep 7+ Hours", streak: 5, done: true },
  { name: "Pre-Match Warm-up", streak: 8, done: true },
];

const dashboardInsights = getMy2ctsByContext("dashboard");

/** Context-aware recommendation based on seeded state */
function getRecommendation(plan: PlannedSession[], energy: number, soreness: number) {
  const completed = plan.filter(s => s.status === "completed" || s.status === "modified").length;
  const hasUpcomingMatch = plan.some(s => s.type === "match" && s.status === "upcoming");

  if (soreness >= 6) {
    return {
      title: "Recovery Mobility Session",
      description: `Your soreness is high (${soreness}/10). A gentle mobility flow will help clear stiffness and speed recovery.`,
      link: "/recovery/morning-mobility-flow",
      type: "recovery" as const,
    };
  }
  if (hasUpcomingMatch && completed >= 3) {
    return {
      title: "Taper — Light Preparation Only",
      description: "You've completed 3+ sessions this week with a match coming up. Keep it light to stay fresh.",
      link: "/training/pre-match-dynamic-stretch",
      type: "prepare" as const,
    };
  }
  if (energy <= 4) {
    return {
      title: "Rest Day or Light Walk",
      description: `Your energy is low (${energy}/10). Take a rest day or a 15-minute walk — consistency matters more than intensity.`,
      link: "/recovery",
      type: "rest" as const,
    };
  }
  return {
    title: "Interval Endurance Builder",
    description: "You're in good shape this week. Build match fitness with a 35-minute interval session.",
    link: "/training/interval-endurance-builder",
    type: "training" as const,
  };
}

export default function TrackerPage() {
  const [plan, setPlan] = useState<PlannedSession[]>(defaultWeeklyPlan);

  const handleStatusChange = (id: string, status: SessionStatus) => {
    setPlan(prev => prev.map(s => s.id === id ? { ...s, status } : s));
  };

  const completedCount = plan.filter(s => s.status === "completed" || s.status === "modified").length;
  const totalMinutes = plan
    .filter(s => s.status === "completed" || s.status === "modified")
    .reduce((acc, s) => acc + parseInt(s.duration) || 0, 0);
  const recommendation = getRecommendation(plan, todaySummary.energy, todaySummary.soreness);

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
              Your Weekly System
            </motion.h1>
            <motion.p variants={fadeUp} custom={2} className="text-primary-foreground/70 max-w-md">
              Plan your week, log sessions, track progress — everything in one place.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="section-band">
        <div className="container-content">
          <motion.div initial="hidden" animate="visible">

            {/* Status bar */}
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

            {/* Context-aware recommendation */}
            <motion.div variants={fadeUp} custom={0.5} className="mb-8">
              <div className="card-premium-static p-5 md:p-6 bg-green-subtle border-primary/10">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl gradient-green flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs font-bold uppercase tracking-widest text-green-light mb-1">Recommended Next</p>
                    <p className="font-serif text-lg font-semibold mb-1">{recommendation.title}</p>
                    <p className="text-sm text-muted-foreground">{recommendation.description}</p>
                  </div>
                  <Link to={recommendation.link}>
                    <Button variant="default" size="sm" className="flex-shrink-0">
                      Start <ChevronRight className="h-3.5 w-3.5" />
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Weekly Plan — main feature */}
            <motion.div variants={fadeUp} custom={1} className="mb-8">
              <WeeklyPlanCard plan={plan} onStatusChange={handleStatusChange} />
            </motion.div>

            {/* Quick Start + My2cts */}
            <motion.div variants={fadeUp} custom={1.5} className="grid lg:grid-cols-2 gap-8 mb-8">
              <QuickStartPanel quickStarts={quickStarts} />
              <div>
                {dashboardInsights[0] && (
                  <My2ctsCallout
                    title={dashboardInsights[0].title}
                    quote={dashboardInsights[0].quote}
                    takeaway={dashboardInsights[0].takeaway}
                    slug={dashboardInsights[0].slug}
                  />
                )}
              </div>
            </motion.div>

            {/* Progress stats */}
            <motion.div variants={fadeUp} custom={2} className="mb-8">
              <h2 className="font-serif text-xl font-semibold mb-5">This Week's Progress</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { label: "Sessions Completed", value: completedCount.toString(), target: plan.length.toString(), icon: Activity, color: "text-green-light" },
                  { label: "Training Minutes", value: totalMinutes.toString(), target: "180", icon: Dumbbell, color: "text-accent" },
                  { label: "Recovery Compliance", value: plan.filter(s => s.type === "recovery" && s.status === "completed").length.toString(), target: plan.filter(s => s.type === "recovery").length.toString(), icon: Heart, color: "text-green-light" },
                  { label: "Consistency Streak", value: "12", target: "—", icon: Flame, color: "text-accent" },
                ].map((s) => {
                  const pct = s.target !== "—" ? Math.min(100, (parseInt(s.value) / parseInt(s.target)) * 100) : 100;
                  return (
                    <div key={s.label} className="card-premium-static p-5">
                      <div className="flex items-center justify-between mb-3">
                        <s.icon className={`h-5 w-5 ${s.color}`} />
                        {s.target !== "—" && <span className="text-xs text-muted-foreground">{s.value}/{s.target}</span>}
                      </div>
                      <p className="stat-number text-3xl mb-1">{s.value}</p>
                      <p className="text-xs font-medium text-muted-foreground mb-3">{s.label}</p>
                      <div className="progress-bar">
                        <div className="progress-bar-fill" style={{ width: `${pct}%` }} />
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>

            {/* Consistency Chart */}
            <motion.div variants={fadeUp} custom={3} className="mb-8">
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

            {/* My Season */}
            <motion.div variants={fadeUp} custom={3.5} className="mb-8">
              <h2 className="font-serif text-xl font-semibold mb-5">My Season</h2>
              <div className="card-premium-static p-5 md:p-6">
                <div className="grid grid-cols-3 md:grid-cols-6 gap-4 mb-6">
                  {[
                    { label: "Matches", value: "14" },
                    { label: "Training Sessions", value: "38" },
                    { label: "Goals / Assists", value: "3 / 5" },
                    { label: "Recovery Sessions", value: "22" },
                    { label: "Avg Confidence", value: "7.4" },
                    { label: "Avg Energy", value: "6.8" },
                  ].map(s => (
                    <div key={s.label} className="text-center">
                      <p className="stat-number text-2xl md:text-3xl mb-1">{s.value}</p>
                      <p className="text-[10px] md:text-xs text-muted-foreground font-medium">{s.label}</p>
                    </div>
                  ))}
                </div>
                <div className="pt-4 border-t border-border/50">
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Season Progress</p>
                    <p className="text-xs text-muted-foreground">Week 12 of 30</p>
                  </div>
                  <div className="progress-bar">
                    <div className="progress-bar-fill" style={{ width: '40%' }} />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Habits */}
            <motion.div variants={fadeUp} custom={4} className="mb-8">
              <h2 className="font-serif text-xl font-semibold mb-5">Habit Streaks</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
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

            {/* Streaks insight */}
            {dashboardInsights[1] && (
              <motion.div variants={fadeUp} custom={4.5} className="mb-8">
                <My2ctsCallout
                  title={dashboardInsights[1].title}
                  quote={dashboardInsights[1].quote}
                  takeaway={dashboardInsights[1].takeaway}
                  slug={dashboardInsights[1].slug}
                />
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      <section className="section-band-alt">
        <div className="container-content text-center">
          <h2 className="text-3xl md:text-[2.75rem] font-bold mb-5 text-balance">Your system. Your progress. Your game.</h2>
          <p className="text-editorial mx-auto mb-10">Premium members get personalized weekly plans, advanced tracking, coaching recommendations, and exclusive programs.</p>
          <Link to="/membership"><Button variant="gold" size="xl" className="shadow-glow">Unlock Full System <ArrowRight className="h-4 w-4" /></Button></Link>

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
