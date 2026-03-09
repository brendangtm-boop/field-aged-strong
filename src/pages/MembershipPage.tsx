import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { RecommendedNext } from "@/components/RecommendedNext";
import { CheckCircle, X, ArrowRight, Star, Lock, Dumbbell, Brain, BarChart3, Users, BookOpen, Shield, Sparkles, Heart, ClipboardCheck } from "lucide-react";
import { fadeUp } from "@/lib/animations";

const tiers = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    desc: "Get started with essential guides and community access.",
    features: [
      { label: "Core training articles", included: true },
      { label: "Community forum access", included: true },
      { label: "Weekly newsletter", included: true },
      { label: "Basic recovery guides", included: true },
      { label: "Exercise Coach", included: false },
      { label: "Mindset Coach", included: false },
      { label: "Match Reflection Tool", included: false },
      { label: "Player Dashboard", included: false },
      { label: "Custom training plans", included: false },
    ],
    cta: "Join Free",
    variant: "outline" as const,
    highlighted: false,
  },
  {
    name: "Plus",
    price: "$10",
    period: "/month",
    desc: "Full content library, tracking, and limited coaching.",
    features: [
      { label: "Everything in Free", included: true },
      { label: "Complete article library (100+)", included: true },
      { label: "Player Dashboard & tracking", included: true },
      { label: "Training plans & programs", included: true },
      { label: "Recovery routines library", included: true },
      { label: "All mindset modules", included: true },
      { label: "Exercise Coach (10/month)", included: true },
      { label: "Community access", included: true },
      { label: "Unlimited coaching & reflection", included: false },
    ],
    cta: "Start Plus — $10/mo",
    variant: "gold" as const,
    highlighted: true,
  },
  {
    name: "Premium Coaching",
    price: "$20",
    period: "/month",
    desc: "Unlimited coaching, match reflection, and advanced analytics.",
    features: [
      { label: "Everything in Plus", included: true },
      { label: "Unlimited Exercise Coach", included: true },
      { label: "Unlimited Mindset Coach", included: true },
      { label: "Match Reflection Tool", included: true },
      { label: "Custom training plans", included: true },
      { label: "Advanced progress analytics", included: true },
      { label: "Accountability circles", included: true },
      { label: "Monthly coaching insights", included: true },
      { label: "Early access to features", included: true },
    ],
    cta: "Start Premium — $20/mo",
    variant: "default" as const,
    highlighted: false,
  },
];

const premiumFeatures = [
  { icon: Dumbbell, title: "Exercise Coach", desc: "AI-powered workout planning that adapts to your energy, soreness, and schedule." },
  { icon: Brain, title: "Mindset Coach", desc: "Private coaching for confidence, motivation, and emotional resilience." },
  { icon: ClipboardCheck, title: "Match Reflection", desc: "Log your performance, process the game, and receive supportive feedback." },
  { icon: BarChart3, title: "Player Dashboard", desc: "Full tracking with training logs, wellness check-ins, habit streaks, and weekly insights." },
  { icon: Users, title: "Accountability Circles", desc: "Small groups of 6–12 players working toward shared goals with weekly check-ins." },
  { icon: BookOpen, title: "Complete Library", desc: "Access every article, guide, training program, and recovery protocol — over 100 pieces." },
];

const lockedContent = [
  { title: "6-Week Match Fitness Builder", type: "Training Plan" },
  { title: "Unlimited Exercise Coach Sessions", type: "AI Feature" },
  { title: "Post-Game Confidence Reset Module", type: "Mindset" },
  { title: "Match Reflection with Coach Feedback", type: "Tool" },
  { title: "Over-45 Strength Foundation Program", type: "Training Plan" },
  { title: "Weekly Player Loop & Progress Analytics", type: "Dashboard" },
];

export default function MembershipPage() {
  return (
    <>
      {/* Hero */}
      <section className="section-band bg-primary text-primary-foreground pt-28 md:pt-36">
        <div className="container-content text-center">
          <motion.div initial="hidden" animate="visible">
            <motion.p variants={fadeUp} custom={0} className="badge-gold mb-5">Membership</motion.p>
            <motion.h1 variants={fadeUp} custom={1} className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold mb-5 text-balance">
              Build your system for soccer longevity.
            </motion.h1>
            <motion.p variants={fadeUp} custom={2} className="text-base md:text-lg text-primary-foreground/70 max-w-2xl mx-auto leading-relaxed">
              Choose the plan that fits your commitment. Start free, upgrade when you're ready. Cancel anytime.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="pb-24 bg-primary">
        <div className="container-content">
          <div className="grid md:grid-cols-3 gap-5 -mt-2">
            {tiers.map((t, i) => (
              <motion.div
                key={t.name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                variants={fadeUp}
                className={`rounded-2xl p-7 md:p-8 relative transition-all ${
                  t.highlighted
                    ? "bg-card text-foreground ring-2 ring-accent shadow-glow scale-[1.02] md:scale-105"
                    : "bg-primary-foreground/5 text-primary-foreground border border-primary-foreground/10"
                }`}
              >
                {t.highlighted && <span className="absolute -top-3 left-1/2 -translate-x-1/2 badge-gold shadow-glow">Most Popular</span>}
                <h3 className="font-serif text-2xl font-bold mb-1">{t.name}</h3>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="stat-number text-4xl">{t.price}</span>
                  <span className={`text-sm ${t.highlighted ? "text-muted-foreground" : "text-primary-foreground/50"}`}>{t.period}</span>
                </div>
                <p className={`text-sm mb-6 ${t.highlighted ? "text-muted-foreground" : "text-primary-foreground/60"}`}>{t.desc}</p>

                {t.highlighted ? (
                  <Button variant="gold" size="lg" className="w-full mb-6 shadow-glow">{t.cta}</Button>
                ) : (
                  <Button variant={t.variant} size="lg" className="w-full mb-6">{t.cta}</Button>
                )}

                <ul className="space-y-3">
                  {t.features.map(f => (
                    <li key={f.label} className="flex items-center gap-2.5 text-sm">
                      {f.included ? (
                        <CheckCircle className={`h-4 w-4 flex-shrink-0 ${t.highlighted ? "text-green-light" : "text-gold-light"}`} />
                      ) : (
                        <X className={`h-4 w-4 flex-shrink-0 ${t.highlighted ? "text-muted-foreground/30" : "text-primary-foreground/20"}`} />
                      )}
                      <span className={!f.included ? (t.highlighted ? "text-muted-foreground/50" : "text-primary-foreground/30") : ""}>{f.label}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Features */}
      <section className="section-band">
        <div className="container-content">
          <div className="text-center mb-14">
            <p className="badge-green mb-4">What You Get</p>
            <h2 className="text-3xl md:text-[2.75rem] font-bold mb-4">Everything you need to stay in the game</h2>
            <p className="text-editorial mx-auto">Premium membership gives you the complete Longevity System — coaching, content, tracking, and community.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {premiumFeatures.map((f, i) => (
              <motion.div key={f.title} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp}
                className="card-premium p-6 md:p-7">
                <div className="w-11 h-11 rounded-xl bg-primary/5 flex items-center justify-center mb-4">
                  <f.icon className="h-5 w-5 text-green-light" />
                </div>
                <h3 className="font-serif text-lg font-semibold mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Locked Content Preview */}
      <section className="section-band-alt">
        <div className="container-content container-narrow">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">See what you'll unlock</h2>
            <p className="text-editorial mx-auto">Premium content and features waiting for you.</p>
          </div>
          <div className="space-y-3">
            {lockedContent.map(item => (
              <div key={item.title} className="card-premium-static p-5 flex items-center justify-between group hover:border-accent/30 transition-colors">
                <div className="flex items-center gap-3.5">
                  <Lock className="h-4 w-4 text-accent/60" />
                  <div>
                    <p className="text-sm font-semibold">{item.title}</p>
                    <p className="text-xs text-muted-foreground">{item.type}</p>
                  </div>
                </div>
                <span className="badge-gold text-[10px]">Premium</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="section-band">
        <div className="container-content">
          <div className="grid md:grid-cols-4 gap-6 text-center">
            {[
              { stat: "2,400+", label: "Active members" },
              { stat: "4.9/5", label: "Average rating" },
              { stat: "87%", label: "Play more consistently" },
              { stat: "92%", label: "Would recommend" },
            ].map(s => (
              <div key={s.label}>
                <p className="stat-number text-4xl text-foreground mb-1">{s.stat}</p>
                <p className="text-sm text-muted-foreground">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-band-alt">
        <div className="container-content text-center">
          <h2 className="text-3xl md:text-[2.75rem] font-bold mb-5 text-balance">Ready to build your longevity system?</h2>
          <p className="text-editorial mx-auto mb-10">Start free. Upgrade anytime. No commitment, no card needed to begin.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <Button variant="gold" size="xl" className="shadow-glow">Start Free Today <ArrowRight className="h-4 w-4" /></Button>
            <Link to="/start-here"><Button variant="outline" size="xl">Find Your Starting Point</Button></Link>
          </div>

          <RecommendedNext items={[
            { icon: Dumbbell, label: "Feature", title: "Try the Exercise Coach", href: "/exercise-coach" },
            { icon: Brain, label: "Feature", title: "Try the Mindset Coach", href: "/mindset-coach" },
            { icon: Heart, label: "Explore", title: "Recovery Hub", href: "/recovery" },
          ]} />
        </div>
      </section>
    </>
  );
}
