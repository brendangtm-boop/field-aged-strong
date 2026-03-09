import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Clock, Zap } from "lucide-react";
import { workouts } from "@/data/workouts";
import { recoveryRoutines } from "@/data/recovery";
import { fadeUp } from "@/lib/animations";

export default function CategoryPage() {
  const { type, category } = useParams();
  const decodedCategory = decodeURIComponent(category || "");

  const isTraining = type === "training";
  const items = isTraining
    ? workouts.filter(w => w.category === decodedCategory)
    : recoveryRoutines.filter(r => r.category === decodedCategory);

  const backLink = isTraining ? "/training" : "/recovery";
  const backLabel = isTraining ? "Training Hub" : "Recovery Hub";
  const detailBase = isTraining ? "/training" : "/recovery";

  if (items.length === 0) {
    return (
      <section className="section-band">
        <div className="container-content text-center py-20">
          <h1 className="text-3xl font-bold mb-4">Category not found</h1>
          <Link to={backLink}><Button variant="outline">Back to {backLabel}</Button></Link>
        </div>
      </section>
    );
  }

  return (
    <section className="section-band">
      <div className="container-content">
        <Link to={backLink} className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8">
          <ArrowLeft className="h-4 w-4" /> Back to {backLabel}
        </Link>

        <div className="mb-12">
          <span className={isTraining ? "badge-green mb-4 block w-fit" : "badge-gold mb-4 block w-fit"}>{isTraining ? "Training" : "Recovery"}</span>
          <h1 className="text-3xl md:text-4xl font-bold mb-2">{decodedCategory}</h1>
          <p className="text-muted-foreground">{items.length} {isTraining ? "workouts" : "routines"} available</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((item, i) => (
            <motion.div key={item.slug} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp}>
              <Link to={`${detailBase}/${item.slug}`} className="card-premium p-5 block h-full group">
                <h3 className="font-serif text-lg font-semibold mb-2 group-hover:text-green-light transition-colors">{item.title}</h3>
                <p className="text-xs text-muted-foreground mb-3 line-clamp-2">{item.description}</p>
                <div className="flex flex-wrap gap-2 text-xs">
                  <span className="px-2 py-1 rounded-full bg-muted text-muted-foreground flex items-center gap-1"><Clock className="h-3 w-3" /> {item.duration}</span>
                  {"difficulty" in item && (
                    <span className="px-2 py-1 rounded-full bg-muted text-muted-foreground flex items-center gap-1"><Zap className="h-3 w-3" /> {(item as any).difficulty}</span>
                  )}
                  {"bodyArea" in item && (
                    <span className="px-2 py-1 rounded-full bg-muted text-muted-foreground">{(item as any).bodyArea}</span>
                  )}
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
