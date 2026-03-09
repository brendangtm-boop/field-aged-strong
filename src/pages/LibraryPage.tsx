import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Search, BookOpen, Clock, User } from "lucide-react";
import { articles } from "@/data/articles";
import { ARTICLE_CATEGORIES } from "@/data/types";

import { fadeUp } from "@/lib/animations";

export default function LibraryPage() {
  const [searchParams] = useSearchParams();
  const initialCategory = searchParams.get("category") || "All";
  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [searchQuery, setSearchQuery] = useState("");

  const allCategories = ["All", ...ARTICLE_CATEGORIES];

  const filtered = articles.filter(a => {
    const matchesCategory = activeCategory === "All" || a.category === activeCategory;
    const matchesSearch = a.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featured = articles[0];

  return (
    <>
      <section className="section-band">
        <div className="container-content">
          <motion.div initial="hidden" animate="visible">
            <motion.div variants={fadeUp} custom={0} className="text-center mb-12">
              <p className="badge-green mb-4">Editorial Library</p>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Knowledge that keeps you playing.</h1>
              <p className="text-editorial max-w-2xl mx-auto">{articles.length} expert guides, practical articles, and evidence-based content for adult soccer players.</p>
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
              {allCategories.map(c => (
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
          {activeCategory === "All" && !searchQuery && (
            <Link to={`/library/${featured.slug}`}>
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp} className="card-premium p-8 md:p-12 mb-12 group cursor-pointer">
                <span className="badge-gold mb-4 block w-fit">Featured</span>
                <h2 className="font-serif text-2xl md:text-3xl font-bold mb-3 group-hover:text-green-light transition-colors">{featured.title}</h2>
                <p className="text-muted-foreground leading-relaxed mb-4 max-w-2xl">{featured.summary}</p>
                <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1"><BookOpen className="h-3.5 w-3.5" /> {featured.category}</span>
                  <span className="flex items-center gap-1"><User className="h-3.5 w-3.5" /> {featured.author}</span>
                  <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" /> {featured.readTime}</span>
                </div>
              </motion.div>
            </Link>
          )}

          {/* Articles Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((a, i) => (
              <motion.div key={a.slug} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp}>
                <Link to={`/library/${a.slug}`} className="card-premium p-5 group cursor-pointer relative block">
                  {a.premium && (
                    <div className="absolute top-4 right-4">
                      <span className="badge-gold text-[10px]">Premium</span>
                    </div>
                  )}
                  <span className="badge-green mb-3 block w-fit text-[10px]">{a.category}</span>
                  <h3 className="font-serif text-lg font-semibold mb-2 group-hover:text-green-light transition-colors pr-16">{a.title}</h3>
                  <p className="text-xs text-muted-foreground mb-2 line-clamp-2">{a.summary}</p>
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <span>{a.author}</span>
                    <span>•</span>
                    <span>{a.readTime}</span>
                  </div>
                </Link>
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
