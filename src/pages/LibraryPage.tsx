import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Search, BookOpen, Clock, User } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const categories = [
  "All", "Training", "Recovery", "Mindset", "Nutrition", "Sleep",
  "Hydration", "Footwear", "Injury Prevention", "Longevity", "Community", "Return to Play"
];

const featured = {
  title: "Why Your Body Feels Different After 40 — And What To Do About It",
  desc: "Understanding the physiological changes that affect adult athletes, and the evidence-based strategies that help you adapt, recover, and keep performing.",
  category: "Longevity",
  author: "Dr. Sarah Mitchell",
  readTime: "12 min read",
};

const articles = [
  { title: "The 10-Minute Pre-Match Warm-Up That Prevents 60% of Injuries", category: "Injury Prevention", author: "Coach Tom Bradley", readTime: "6 min", premium: false },
  { title: "Sleep Strategies for the Adult Athlete", category: "Sleep", author: "Dr. James Chen", readTime: "8 min", premium: false },
  { title: "Building a Sustainable Training Week When You're Over 45", category: "Training", author: "Coach Maria Santos", readTime: "10 min", premium: true },
  { title: "Hydration Math: How Much You Actually Need on Match Day", category: "Hydration", author: "Nutritionist Alex Rivera", readTime: "5 min", premium: false },
  { title: "The Psychology of Returning After ACL Surgery", category: "Mindset", author: "Dr. Lisa Park", readTime: "9 min", premium: true },
  { title: "Best Foods for Post-Match Recovery", category: "Nutrition", author: "Nutritionist Alex Rivera", readTime: "7 min", premium: false },
  { title: "Ankle Stability: The Most Underrated Skill After 40", category: "Injury Prevention", author: "Physio Rachel Hughes", readTime: "6 min", premium: false },
  { title: "How to Find Your Local Adult Soccer Community", category: "Community", author: "WorkLifeSoccer Team", readTime: "5 min", premium: false },
  { title: "From Couch to Pitch: A 12-Week Return Plan", category: "Return to Play", author: "Coach Tom Bradley", readTime: "11 min", premium: true },
];

export default function LibraryPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = articles.filter(a => {
    const matchesCategory = activeCategory === "All" || a.category === activeCategory;
    const matchesSearch = a.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <section className="section-band">
        <div className="container-content">
          <motion.div initial="hidden" animate="visible">
            <motion.div variants={fadeUp} custom={0} className="text-center mb-12">
              <p className="badge-green mb-4">Editorial Library</p>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Knowledge that keeps you playing.</h1>
              <p className="text-editorial max-w-2xl mx-auto">Expert guides, practical articles, and evidence-based content for adult soccer players.</p>
            </motion.div>

            {/* Search */}
            <motion.div variants={fadeUp} custom={1} className="max-w-xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search articles..."
                  className="w-full h-12 pl-11 pr-4 rounded-xl bg-card border border-border text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
            </motion.div>

            {/* Categories */}
            <motion.div variants={fadeUp} custom={2} className="flex flex-wrap justify-center gap-2 mb-12">
              {categories.map(c => (
                <button
                  key={c}
                  onClick={() => setActiveCategory(c)}
                  className={`px-4 py-2 rounded-full text-xs font-medium transition-colors ${
                    activeCategory === c
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground hover:bg-muted/80"
                  }`}
                >
                  {c}
                </button>
              ))}
            </motion.div>
          </motion.div>

          {/* Featured */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp} className="card-premium p-8 md:p-12 mb-12">
            <span className="badge-gold mb-4 block w-fit">Featured</span>
            <h2 className="font-serif text-2xl md:text-3xl font-bold mb-3">{featured.title}</h2>
            <p className="text-muted-foreground leading-relaxed mb-4 max-w-2xl">{featured.desc}</p>
            <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
              <span className="flex items-center gap-1"><BookOpen className="h-3.5 w-3.5" /> {featured.category}</span>
              <span className="flex items-center gap-1"><User className="h-3.5 w-3.5" /> {featured.author}</span>
              <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" /> {featured.readTime}</span>
            </div>
          </motion.div>

          {/* Articles Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((a, i) => (
              <motion.div key={a.title} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp} className="card-premium p-5 group cursor-pointer relative">
                {a.premium && (
                  <div className="absolute top-4 right-4">
                    <span className="badge-gold text-[10px]">Premium</span>
                  </div>
                )}
                <span className="badge-green mb-3 block w-fit text-[10px]">{a.category}</span>
                <h3 className="font-serif text-lg font-semibold mb-2 group-hover:text-green-light transition-colors pr-16">{a.title}</h3>
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <span>{a.author}</span>
                  <span>•</span>
                  <span>{a.readTime}</span>
                </div>
              </motion.div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground">No articles found. Try a different search or category.</p>
            </div>
          )}
        </div>
      </section>

      <section className="section-band-alt">
        <div className="container-content text-center">
          <h2 className="text-3xl font-bold mb-4">Unlock the full library.</h2>
          <p className="text-editorial max-w-xl mx-auto mb-8">Premium members get access to all guides, expert interviews, and deep-dive articles.</p>
          <Link to="/membership"><Button variant="gold" size="xl">View Plans <ArrowRight className="h-4 w-4" /></Button></Link>
        </div>
      </section>
    </>
  );
}
