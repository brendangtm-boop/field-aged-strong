import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { RecommendedNext } from "@/components/RecommendedNext";
import {
  ArrowRight, Brain, Zap, Star, Target, AlertCircle,
  BookOpen, CheckCircle, Heart, TrendingUp, MessageCircle
} from "lucide-react";
import { fadeUp } from "@/lib/animations";

const ratingLabels: Record<string, string[]> = {
  energy: ["Exhausted", "Low", "Moderate", "Good", "Peak"],
  performance: ["Poor", "Below Avg", "Average", "Good", "Excellent"],
  confidence: ["Very Low", "Low", "Neutral", "Confident", "Very Confident"],
};

const reflectionPrompts = [
  "What went well today?",
  "What was one mistake I can learn from?",
  "How did I feel in the first 15 minutes?",
  "Did I communicate well with teammates?",
  "What would I do differently next time?",
];

const coachFeedback = [
  {
    condition: "Low confidence after match",
    message: "One game doesn't define your ability. Focus on what you controlled today — your effort, positioning, and decision to show up. That's what builds long-term consistency.",
  },
  {
    condition: "Moderate energy",
    message: "Moderate energy suggests your recovery before the match was decent. Consider a lighter training week ahead to maintain balance and avoid overtraining.",
  },
  {
    condition: "Learning from mistakes",
    message: "Recognizing specific mistakes is a sign of growth, not failure. The best players at any age are the ones who reflect honestly and adjust. You're doing that right now.",
  },
];

export default function MatchReflectionPage() {
  const [energy, setEnergy] = useState(3);
  const [performance, setPerformance] = useState(3);
  const [confidence, setConfidence] = useState(3);
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      {/* Hero */}
      <section className="section-band bg-primary text-primary-foreground pt-28 md:pt-36">
        <div className="container-content text-center">
          <motion.div initial="hidden" animate="visible">
            <motion.p variants={fadeUp} custom={0} className="badge-gold mb-5">
              Post-Match Tool
            </motion.p>
            <motion.h1 variants={fadeUp} custom={1} className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold mb-5 text-balance">
              Match Reflection
            </motion.h1>
            <motion.p variants={fadeUp} custom={2} className="text-base md:text-lg text-primary-foreground/70 max-w-2xl mx-auto leading-relaxed">
              Process your performance with honesty and compassion. Log how you felt, what you learned, and let the Mindset Coach guide your recovery.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Reflection Form */}
      <section className="section-band">
        <div className="container-content">
          <div className="max-w-3xl mx-auto">
            {!submitted ? (
              <motion.div initial="hidden" animate="visible">
                {/* Rating Sliders */}
                <motion.div variants={fadeUp} custom={0} className="space-y-8 mb-10">
                  {([
                    { key: "energy", icon: Zap, label: "Energy Level", value: energy, setter: setEnergy, color: "text-accent" },
                    { key: "performance", icon: Star, label: "Performance Rating", value: performance, setter: setPerformance, color: "text-green-light" },
                    { key: "confidence", icon: Target, label: "Confidence Level", value: confidence, setter: setConfidence, color: "text-accent" },
                  ] as const).map((field) => (
                    <div key={field.key} className="card-premium-static p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <field.icon className={`h-5 w-5 ${field.color}`} />
                        <h3 className="font-serif text-lg font-semibold">{field.label}</h3>
                      </div>
                      <div className="flex gap-2">
                        {[1, 2, 3, 4, 5].map((v) => (
                          <button
                            key={v}
                            onClick={() => field.setter(v)}
                            className={`flex-1 py-3 rounded-xl text-sm font-medium transition-all ${
                              field.value === v
                                ? "bg-primary text-primary-foreground shadow-card"
                                : "bg-surface hover:bg-muted text-muted-foreground"
                            }`}
                          >
                            {v}
                          </button>
                        ))}
                      </div>
                      <p className="text-xs text-muted-foreground mt-2 text-center">
                        {ratingLabels[field.key][field.value - 1]}
                      </p>
                    </div>
                  ))}
                </motion.div>

                {/* Reflection Prompts */}
                <motion.div variants={fadeUp} custom={1} className="mb-10">
                  <h3 className="font-serif text-xl font-semibold mb-5">Reflection Prompts</h3>
                  <div className="space-y-3">
                    {reflectionPrompts.map((prompt) => (
                      <div key={prompt} className="card-premium-static p-5">
                        <div className="flex items-start gap-3 mb-3">
                          <BookOpen className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                          <p className="text-sm font-medium">{prompt}</p>
                        </div>
                        <textarea
                          placeholder="Write your reflection..."
                          className="w-full h-20 px-4 py-3 rounded-xl bg-surface border border-border/50 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                        />
                      </div>
                    ))}
                  </div>
                </motion.div>

                <motion.div variants={fadeUp} custom={2} className="text-center">
                  <Button
                    variant="gold"
                    size="xl"
                    className="shadow-glow"
                    onClick={() => setSubmitted(true)}
                  >
                    Submit Reflection <CheckCircle className="h-4 w-4" />
                  </Button>
                </motion.div>
              </motion.div>
            ) : (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                {/* Submitted State with Coach Feedback */}
                <div className="text-center mb-10">
                  <div className="w-16 h-16 rounded-2xl gradient-gold flex items-center justify-center mx-auto mb-5 shadow-glow">
                    <CheckCircle className="h-7 w-7 text-foreground" />
                  </div>
                  <h2 className="text-3xl font-bold mb-3">Reflection Logged</h2>
                  <p className="text-editorial mx-auto">Great work reflecting on your match. Here's what your Mindset Coach has to say.</p>
                </div>

                {/* Summary */}
                <div className="grid grid-cols-3 gap-4 mb-8">
                  {[
                    { label: "Energy", value: energy, icon: Zap },
                    { label: "Performance", value: performance, icon: Star },
                    { label: "Confidence", value: confidence, icon: Target },
                  ].map((s) => (
                    <div key={s.label} className="card-premium-static p-5 text-center">
                      <s.icon className="h-5 w-5 mx-auto mb-2 text-accent" />
                      <p className="stat-number text-3xl mb-1">{s.value}/5</p>
                      <p className="text-xs text-muted-foreground">{s.label}</p>
                    </div>
                  ))}
                </div>

                {/* Coach Feedback */}
                <div className="space-y-4 mb-10">
                  <h3 className="font-serif text-xl font-semibold flex items-center gap-2">
                    <Brain className="h-5 w-5 text-accent" /> Mindset Coach Feedback
                  </h3>
                  {coachFeedback.map((f) => (
                    <div key={f.condition} className="card-premium-static p-5 bg-green-subtle border-primary/10">
                      <div className="flex items-start gap-3">
                        <MessageCircle className="h-4 w-4 text-green-light mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-xs font-bold uppercase tracking-widest text-green-light mb-1.5">{f.condition}</p>
                          <p className="text-sm text-muted-foreground leading-relaxed">{f.message}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="text-center">
                  <Button variant="default" size="lg" onClick={() => setSubmitted(false)}>
                    Log Another Reflection
                  </Button>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-band-alt">
        <div className="container-content text-center">
          <h2 className="text-3xl font-bold mb-5 text-balance">Reflection is the foundation of growth.</h2>
          <p className="text-editorial mx-auto mb-10">
            Players who reflect consistently build confidence faster, recover better, and enjoy the game more.
          </p>
          <Link to="/membership">
            <Button variant="gold" size="xl" className="shadow-glow">
              Unlock Full Reflection Tools <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>

          <RecommendedNext items={[
            { icon: Brain, label: "Mindset", title: "Mindset Coach Session", href: "/mindset-coach" },
            { icon: Heart, label: "Recovery", title: "Post-Match Recovery", href: "/recovery" },
            { icon: TrendingUp, label: "Dashboard", title: "View Your Progress", href: "/tracker" },
          ]} />
        </div>
      </section>
    </>
  );
}
