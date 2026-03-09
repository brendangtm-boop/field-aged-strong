import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Shield, Shirt, Footprints, Wrench, Sun } from "lucide-react";

import { fadeUp } from "@/lib/animations";

const gearCategories = [
  { icon: Footprints, title: "Footwear", desc: "Boots and turf shoes for aging feet, wide fits, and comfort-first performance.", items: ["Best boots for artificial turf over 40", "Wide-fit soccer shoes that don't compromise touch", "Why cushioning matters more now"] },
  { icon: Shield, title: "Shin Guards & Protection", desc: "Lightweight protection that doesn't slow you down.", items: ["Ultra-light shin guards for veterans", "Ankle support sleeves worth buying", "Padded compression gear for contact play"] },
  { icon: Shirt, title: "Training Gear", desc: "Apparel and accessories that support your training.", items: ["Moisture-wicking base layers for all seasons", "Training vests and bibs", "The right socks (they matter more than you think)"] },
  { icon: Wrench, title: "Recovery Tools", desc: "Foam rollers, massage guns, and recovery tech.", items: ["Best foam rollers for soccer players", "Percussion therapy: worth the investment?", "Cold therapy options for home use"] },
  { icon: Sun, title: "Seasonal Essentials", desc: "Gear for playing through every season.", items: ["Winter training layers that breathe", "Summer hydration gear", "Rain-proof match day essentials"] },
];

const buyingGuides = [
  { title: "The Over-40 Boot Guide", desc: "How to choose soccer boots when comfort matters as much as control.", badge: "Editor's Pick" },
  { title: "Recovery Tech That Actually Works", desc: "We tested 15 recovery tools so you don't have to.", badge: "Tested" },
  { title: "Building Your Home Recovery Kit", desc: "Everything you need for under $100.", badge: "Budget" },
  { title: "Shin Guard Buying Guide 2025", desc: "Protection, fit, and comfort for adult league players.", badge: "Updated" },
];

export default function GearPage() {
  return (
    <>
      <section className="section-band bg-primary text-primary-foreground">
        <div className="container-content max-w-2xl text-center">
          <motion.div initial="hidden" animate="visible">
            <motion.p variants={fadeUp} custom={0} className="badge-gold mb-4">Gear Guide</motion.p>
            <motion.h1 variants={fadeUp} custom={1} className="text-4xl md:text-5xl font-bold mb-4">
              The right gear for your game.
            </motion.h1>
            <motion.p variants={fadeUp} custom={2} className="text-lg text-primary-foreground/80">
              Expert recommendations on footwear, protection, training gear, and recovery tools — curated for adult players.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="section-band">
        <div className="container-content">
          <h2 className="text-3xl font-bold mb-8">Gear by Category</h2>
          <div className="space-y-6">
            {gearCategories.map((g, i) => (
              <motion.div key={g.title} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp} className="card-premium p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center flex-shrink-0">
                    <g.icon className="h-6 w-6 text-green-light" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-serif text-xl font-semibold mb-1">{g.title}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{g.desc}</p>
                    <ul className="space-y-2">
                      {g.items.map(item => (
                        <li key={item} className="text-sm text-green-light hover:text-primary cursor-pointer transition-colors flex items-center gap-2">
                          <ArrowRight className="h-3 w-3" /> {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-band-alt">
        <div className="container-content">
          <h2 className="text-3xl font-bold mb-8">Buying Guides</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {buyingGuides.map((g, i) => (
              <motion.div key={g.title} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp} className="card-premium p-6 group cursor-pointer">
                <span className="badge-gold mb-3 block w-fit">{g.badge}</span>
                <h3 className="font-serif text-xl font-semibold mb-2 group-hover:text-green-light transition-colors">{g.title}</h3>
                <p className="text-sm text-muted-foreground">{g.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-band">
        <div className="container-content text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Gear that supports your game.</h2>
          <p className="text-editorial max-w-xl mx-auto mb-8">No affiliate clutter. Just honest recommendations from players who understand what adult athletes need.</p>
          <Link to="/library"><Button variant="default" size="lg">Browse All Guides <ArrowRight className="h-4 w-4" /></Button></Link>
        </div>
      </section>
    </>
  );
}
