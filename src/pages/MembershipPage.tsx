import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle, X, ArrowRight, Star, Lock, Dumbbell, Brain, BarChart3, Users, BookOpen } from "lucide-react";

import { fadeUp } from "@/lib/animations";

const tiers = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    desc: "Get started with essential content and community access.",
    features: [
      { label: "Basic training articles", included: true },
      { label: "Community forum access", included: true },
      { label: "Weekly newsletter", included: true },
      { label: "Limited recovery guides", included: true },
      { label: "Exercise Coach", included: false },
      { label: "Mindset Coach", included: false },
      { label: "Premium articles", included: false },
      { label: "Progress tracking", included: false },
      { label: "Training plans", included: false },
    ],
    cta: "Join Free",
    variant: "outline" as const,
    highlighted: false,
  },
  {
    name: "Plus",
    price: "$12",
    period: "/month",
    desc: "Full content access and tracking for committed players.",
    features: [
      { label: "All free features", included: true },
      { label: "Full article library", included: true },
      { label: "Progress tracking dashboard", included: true },
      { label: "Training plans & programs", included: true },
      { label: "Recovery routines library", included: true },
      { label: "Mindset modules", included: true },
      { label: "Exercise Coach (limited)", included: true },
      { label: "Mindset Coach", included: false },
      { label: "1-on-1 coaching", included: false },
    ],
    cta: "Start Plus",
    variant: "gold" as const,
    highlighted: true,
  },
  {
    name: "Premium Coaching",
    price: "$29",
    period: "/month",
    desc: "Everything plus unlimited AI coaching and premium features.",
    features: [
      { label: "All Plus features", included: true },
      { label: "Unlimited Exercise Coach", included: true },
      { label: "Unlimited Mindset Coach", included: true },
      { label: "Custom training plans", included: true },
      { label: "Advanced analytics", included: true },
      { label: "Priority community access", included: true },
      { label: "Accountability circles", included: true },
      { label: "Monthly coaching insights", included: true },
      { label: "Early access to features", included: true },
    ],
    cta: "Start Premium",
    variant: "default" as const,
    highlighted: false,
  },
];

const premiumFeatures = [
  { icon: Dumbbell, title: "Exercise Coach", desc: "AI-powered workout planning that adapts to your energy, soreness, and schedule." },
  { icon: Brain, title: "Mindset Coach", desc: "Private coaching for confidence, motivation, and emotional resilience." },
  { icon: BarChart3, title: "Progress Tracking", desc: "Full dashboard with training logs, wellness check-ins, and habit streaks." },
  { icon: Users, title: "Accountability Circles", desc: "Small groups of 6–12 players working toward shared goals." },
  { icon: BookOpen, title: "Premium Library", desc: "Access every article, guide, and program in our editorial library." },
  { icon: Star, title: "Custom Plans", desc: "Personalized training and recovery plans built around your life." },
];

export default function MembershipPage() {
  return (
    <>
      <section className="section-band">
        <div className="container-content text-center">
          <motion.div initial="hidden" animate="visible">
            <motion.p variants={fadeUp} custom={0} className="badge-gold mb-4">Membership</motion.p>
            <motion.h1 variants={fadeUp} custom={1} className="text-4xl md:text-5xl font-bold mb-4">
              Invest in your game.
            </motion.h1>
            <motion.p variants={fadeUp} custom={2} className="text-editorial max-w-2xl mx-auto">
              Choose the plan that fits your commitment. All plans include core content. Upgrade for coaching, tracking, and community.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="pb-20">
        <div className="container-content">
          <div className="grid md:grid-cols-3 gap-6">
            {tiers.map((t, i) => (
              <motion.div
                key={t.name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                variants={fadeUp}
                className={`card-premium p-6 md:p-8 relative ${t.highlighted ? "ring-2 ring-accent" : ""}`}
              >
                {t.highlighted && <span className="absolute -top-3 left-1/2 -translate-x-1/2 badge-gold">Most Popular</span>}
                <h3 className="font-serif text-2xl font-bold mb-1">{t.name}</h3>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-4xl font-bold">{t.price}</span>
                  <span className="text-sm text-muted-foreground">{t.period}</span>
                </div>
                <p className="text-sm text-muted-foreground mb-6">{t.desc}</p>
                <Button variant={t.variant} size="lg" className="w-full mb-6">{t.cta}</Button>
                <ul className="space-y-3">
                  {t.features.map(f => (
                    <li key={f.label} className="flex items-center gap-2 text-sm">
                      {f.included ? (
                        <CheckCircle className="h-4 w-4 text-green-light flex-shrink-0" />
                      ) : (
                        <X className="h-4 w-4 text-muted-foreground/30 flex-shrink-0" />
                      )}
                      <span className={f.included ? "" : "text-muted-foreground/50"}>{f.label}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Features */}
      <section className="section-band-alt">
        <div className="container-content">
          <h2 className="text-3xl font-bold mb-8 text-center">What's included in Premium</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {premiumFeatures.map((f, i) => (
              <motion.div key={f.title} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp} className="card-premium p-5">
                <f.icon className="h-6 w-6 text-accent mb-3" />
                <h3 className="font-serif text-lg font-semibold mb-1">{f.title}</h3>
                <p className="text-xs text-muted-foreground">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Lock Preview */}
      <section className="section-band">
        <div className="container-content max-w-2xl">
          <h2 className="text-3xl font-bold mb-8 text-center">See what you'll unlock</h2>
          <div className="space-y-4">
            {[
              "6-Week Match Fitness Builder Program",
              "Unlimited Exercise Coach Sessions",
              "Post-Game Confidence Reset Module",
              "Advanced Sleep & Recovery Analytics",
            ].map(item => (
              <div key={item} className="card-premium p-5 flex items-center justify-between opacity-60">
                <div className="flex items-center gap-3">
                  <Lock className="h-4 w-4 text-accent" />
                  <span className="text-sm font-medium">{item}</span>
                </div>
                <span className="badge-gold text-[10px]">Premium</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-band-alt">
        <div className="container-content text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to upgrade your game?</h2>
          <p className="text-editorial max-w-xl mx-auto mb-8">Start free, upgrade anytime. No commitment required.</p>
          <Button variant="gold" size="xl">Get Started Free <ArrowRight className="h-4 w-4" /></Button>
        </div>
      </section>
    </>
  );
}
