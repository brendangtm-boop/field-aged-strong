import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Clock, MapPin, CheckCircle } from "lucide-react";
import { recoveryRoutines } from "@/data/recovery";
import { RecommendedNext } from "@/components/RecommendedNext";
import { Dumbbell, Brain, Activity } from "lucide-react";

export default function RecoveryDetail() {
  const { slug } = useParams();
  const routine = recoveryRoutines.find(r => r.slug === slug);

  if (!routine) {
    return (
      <section className="section-band">
        <div className="container-content text-center py-20">
          <h1 className="text-3xl font-bold mb-4">Routine not found</h1>
          <Link to="/recovery"><Button variant="outline">Back to Recovery Hub</Button></Link>
        </div>
      </section>
    );
  }

  const related = recoveryRoutines.filter(r => r.category === routine.category && r.slug !== routine.slug).slice(0, 3);

  return (
    <>
      <section className="section-band">
        <div className="container-content max-w-3xl">
          <Link to="/recovery" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8">
            <ArrowLeft className="h-4 w-4" /> Back to Recovery Hub
          </Link>

          <span className="badge-gold mb-4 block w-fit">{routine.category}</span>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{routine.title}</h1>
          <p className="text-editorial mb-8">{routine.description}</p>

          <div className="flex flex-wrap gap-4 mb-10">
            <div className="flex items-center gap-2 text-sm text-muted-foreground"><Clock className="h-4 w-4 text-accent" /> {routine.duration}</div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground"><MapPin className="h-4 w-4 text-accent" /> {routine.bodyArea}</div>
          </div>

          <div className="card-premium p-6 md:p-8 mb-8">
            <h2 className="font-serif text-xl font-semibold mb-2">Key benefit</h2>
            <p className="text-muted-foreground leading-relaxed">{routine.benefit}</p>
          </div>

          <h2 className="font-serif text-xl font-semibold mb-4">Instructions</h2>
          <ol className="space-y-3 mb-12">
            {routine.steps.map((step, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="w-7 h-7 rounded-full bg-accent/10 flex items-center justify-center text-xs font-bold text-accent flex-shrink-0 mt-0.5">{i + 1}</span>
                <span className="text-sm leading-relaxed">{step}</span>
              </li>
            ))}
          </ol>

          {related.length > 0 && (
            <div>
              <h2 className="font-serif text-xl font-semibold mb-4">More in {routine.category}</h2>
              <div className="grid sm:grid-cols-3 gap-4">
                {related.map(r => (
                  <Link key={r.slug} to={`/recovery/${r.slug}`} className="card-premium p-4 group">
                    <h3 className="font-serif text-sm font-semibold mb-1 group-hover:text-accent transition-colors">{r.title}</h3>
                    <p className="text-xs text-muted-foreground">{r.duration} · {r.bodyArea}</p>
                  </Link>
                ))}
              </div>
            </div>
          )}

          <RecommendedNext items={[
            { icon: Dumbbell, label: "Training", title: "Browse Training Programs", href: "/training" },
            { icon: Brain, label: "Mindset", title: "Mindset Hub", href: "/mindset" },
            { icon: Activity, label: "Dashboard", title: "Track Your Progress", href: "/tracker" },
          ]} />
        </div>
      </section>
    </>
  );
}
