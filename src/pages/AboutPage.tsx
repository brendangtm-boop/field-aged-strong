import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Heart, Target, Users, Sparkles, Shield, Brain } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const values = [
  { icon: Heart, title: "Longevity Over Intensity", desc: "We believe the best approach to sport after 40 is one that keeps you playing for decades, not weeks." },
  { icon: Brain, title: "Intelligence Over Ego", desc: "Smart training, smart recovery, smart mindset. Leave the ego on the sideline." },
  { icon: Users, title: "Community Over Competition", desc: "The real win is showing up. We celebrate consistency, support, and shared commitment." },
  { icon: Shield, title: "Prevention Over Repair", desc: "We prioritize keeping you healthy over fixing what breaks. Prehab > rehab." },
  { icon: Sparkles, title: "Progress Over Perfection", desc: "Small improvements compound. We track what matters and celebrate what changes." },
  { icon: Target, title: "Substance Over Hype", desc: "No gimmicks, no empty motivation. Real content backed by real expertise." },
];

export default function AboutPage() {
  return (
    <>
      <section className="section-band bg-primary text-primary-foreground">
        <div className="container-content max-w-3xl text-center">
          <motion.div initial="hidden" animate="visible">
            <motion.p variants={fadeUp} custom={0} className="badge-gold mb-4">Our Mission</motion.p>
            <motion.h1 variants={fadeUp} custom={1} className="text-4xl md:text-5xl font-bold mb-6">
              Helping adults keep playing soccer — longer, smarter, and with more joy.
            </motion.h1>
            <motion.p variants={fadeUp} custom={2} className="text-lg text-primary-foreground/80 leading-relaxed">
              WorkLifeSoccer exists because the game doesn't have to end at 35. With the right structure, the right support, and the right mindset, you can play well into your 50s, 60s, and beyond.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="section-band">
        <div className="container-content max-w-3xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp}>
            <h2 className="text-3xl font-bold mb-6">Why This Exists</h2>
            <div className="prose prose-lg text-muted-foreground space-y-4 text-editorial">
              <p>
                Most sports platforms are built for young athletes chasing peak performance. But millions of adults play soccer every week — in rec leagues, veterans' divisions, casual kickabouts, and competitive over-35 circuits.
              </p>
              <p>
                These players don't need elite performance coaching. They need practical, intelligent support for the reality of playing a demanding sport while managing careers, families, aging bodies, and the mental challenges that come with all of it.
              </p>
              <p>
                WorkLifeSoccer was built to fill that gap. We combine expert content, digital coaching tools, progress tracking, and community support into one platform designed specifically for adult athletes who love the game and want to keep playing it.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section-band-alt">
        <div className="container-content max-w-3xl">
          <h2 className="text-3xl font-bold mb-6">Who It's For</h2>
          <div className="space-y-3">
            {[
              "Soccer players over 40 who want to play longer with less pain",
              "Former athletes returning to sport after years away",
              "Recreational and competitive adult league players",
              "Players balancing demanding careers, families, and fitness",
              "Anyone dealing with stiffness, fatigue, confidence, or injury concerns",
              "Adults who want practical guidance — not programs designed for 25-year-olds",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3 p-4 card-premium">
                <Target className="h-4 w-4 text-green-light flex-shrink-0" />
                <span className="text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-band">
        <div className="container-content">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Values</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <motion.div key={v.title} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp} className="card-premium p-6">
                <v.icon className="h-7 w-7 text-accent mb-3" />
                <h3 className="font-serif text-xl font-semibold mb-2">{v.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-band-alt">
        <div className="container-content text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Join us.</h2>
          <p className="text-editorial max-w-xl mx-auto mb-8">
            Whether you're returning after years away or looking to play another 20 seasons, we're here to help.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/membership"><Button variant="gold" size="xl">View Plans <ArrowRight className="h-4 w-4" /></Button></Link>
            <Link to="/library"><Button variant="outline" size="xl">Browse Content</Button></Link>
          </div>
        </div>
      </section>
    </>
  );
}
