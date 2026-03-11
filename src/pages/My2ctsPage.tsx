import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { RecommendedNext } from "@/components/RecommendedNext";
import { ArrowRight, Calendar, Dumbbell, Heart, Brain, MessageSquareText } from "lucide-react";
import { my2ctsEntries } from "@/data/my2cts";
import { fadeUp } from "@/lib/animations";

export default function My2ctsPage() {
  const featured = my2ctsEntries[0];
  const rest = my2ctsEntries.slice(1);

  return (
    <>
      {/* Hero */}
      <section className="section-band bg-primary">
        <div className="container-content">
          <motion.div initial="hidden" animate="visible" className="max-w-2xl">
            <motion.div variants={fadeUp} custom={0} className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-accent/20 flex items-center justify-center">
                <MessageSquareText className="h-6 w-6 text-accent" />
              </div>
              <span className="badge-white">Editorial</span>
            </motion.div>
            <motion.h1 variants={fadeUp} custom={1} className="text-4xl md:text-5xl font-bold text-primary-foreground mb-5">
              My 2cts
            </motion.h1>
            <motion.p variants={fadeUp} custom={2} className="text-lg text-primary-foreground/75 leading-relaxed max-w-lg">
              Honest reflections, personal insights, and real talk about playing soccer past 40. No coaching advice — just perspective from someone still lacing up.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Featured Entry */}
      <section className="section-band">
        <div className="container-content">
          <Link to={`/my2cts/${featured.slug}`}>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp}
              className="card-premium p-8 md:p-12 group cursor-pointer mb-12">
              <span className="badge-gold mb-4 block w-fit">Latest</span>
              <h2 className="font-serif text-2xl md:text-3xl font-bold mb-3 group-hover:text-accent transition-colors">{featured.title}</h2>
              <p className="text-base text-muted-foreground leading-relaxed mb-5 max-w-2xl">{featured.teaser}</p>
              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1.5"><Calendar className="h-4 w-4" /> {new Date(featured.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                <span>{featured.author}</span>
              </div>
            </motion.div>
          </Link>

          {/* All Entries */}
          <h2 className="text-2xl md:text-3xl font-bold mb-8">All Entries</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((entry, i) => (
              <motion.div key={entry.slug} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp}>
                <Link to={`/my2cts/${entry.slug}`} className="card-premium p-6 block h-full group">
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {entry.tags.slice(0, 2).map(t => (
                      <span key={t} className="badge-green text-[10px]">{t}</span>
                    ))}
                  </div>
                  <h3 className="font-serif text-lg font-bold mb-2 group-hover:text-accent transition-colors">{entry.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-3">{entry.teaser}</p>
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <span>{new Date(entry.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                    <span>•</span>
                    <span>{entry.author}</span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-band-alt">
        <div className="container-content text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Real perspectives. Real players.</h2>
          <p className="text-editorial max-w-xl mx-auto mb-8">My2cts is the editorial voice of WorkLifeSoccer — honest reflections on what it means to keep playing the game you love.</p>
          <Link to="/library"><Button variant="default" size="lg">Explore the Full Library <ArrowRight className="h-4 w-4" /></Button></Link>

          <RecommendedNext items={[
            { icon: Dumbbell, label: "Training", title: "Training Hub", href: "/training" },
            { icon: Heart, label: "Recovery", title: "Recovery Hub", href: "/recovery" },
            { icon: Brain, label: "Mindset", title: "Mindset Hub", href: "/mindset" },
          ]} />
        </div>
      </section>
    </>
  );
}
