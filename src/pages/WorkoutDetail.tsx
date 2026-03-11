import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Clock, Zap, RotateCcw } from "lucide-react";
import { workouts } from "@/data/workouts";
import { RecommendedNext } from "@/components/RecommendedNext";
import { My2ctsCallout } from "@/components/My2ctsCallout";
import { getMy2ctsByContext } from "@/data/my2cts-contextual";
import { Heart, Brain, Activity } from "lucide-react";

const trainingInsights = getMy2ctsByContext("training");

export default function WorkoutDetail() {
  const { slug } = useParams();
  const workout = workouts.find(w => w.slug === slug);

  if (!workout) {
    return (
      <section className="section-band">
        <div className="container-content text-center py-20">
          <h1 className="text-3xl font-bold mb-4">Workout not found</h1>
          <Link to="/training"><Button variant="outline">Back to Training Hub</Button></Link>
        </div>
      </section>
    );
  }

  const related = workouts.filter(w => w.category === workout.category && w.slug !== workout.slug).slice(0, 3);
  // Pick a contextual insight based on workout index for variety
  const insightIndex = workouts.indexOf(workout) % trainingInsights.length;
  const insight = trainingInsights[insightIndex];

  return (
    <>
      <section className="section-band">
        <div className="container-content max-w-3xl">
          <Link to="/training" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8">
            <ArrowLeft className="h-4 w-4" /> Back to Training Hub
          </Link>

          <span className="badge-green mb-4 block w-fit">{workout.category}</span>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{workout.title}</h1>
          <p className="text-editorial mb-8">{workout.description}</p>

          <div className="flex flex-wrap gap-4 mb-10">
            <div className="flex items-center gap-2 text-sm text-muted-foreground"><Clock className="h-4 w-4 text-green-light" /> {workout.duration}</div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground"><Zap className="h-4 w-4 text-green-light" /> {workout.difficulty}</div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground"><RotateCcw className="h-4 w-4 text-green-light" /> {workout.frequency}</div>
          </div>

          <div className="card-premium p-6 md:p-8 mb-8">
            <h2 className="font-serif text-xl font-semibold mb-2">Why this works</h2>
            <p className="text-muted-foreground leading-relaxed">{workout.benefit}</p>
          </div>

          <h2 className="font-serif text-xl font-semibold mb-4">Step-by-step instructions</h2>
          <ol className="space-y-3 mb-12">
            {workout.steps.map((step, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center text-xs font-bold text-green-light flex-shrink-0 mt-0.5">{i + 1}</span>
                <span className="text-sm leading-relaxed">{step}</span>
              </li>
            ))}
          </ol>

          {/* My2cts Insight */}
          {insight && (
            <div className="mb-12">
              <My2ctsCallout
                title={insight.title}
                quote={insight.quote}
                takeaway={insight.takeaway}
                slug={insight.slug}
              />
            </div>
          )}

          {related.length > 0 && (
            <div>
              <h2 className="font-serif text-xl font-semibold mb-4">More in {workout.category}</h2>
              <div className="grid sm:grid-cols-3 gap-4">
                {related.map(r => (
                  <Link key={r.slug} to={`/training/${r.slug}`} className="card-premium p-4 group">
                    <h3 className="font-serif text-sm font-semibold mb-1 group-hover:text-green-light transition-colors">{r.title}</h3>
                    <p className="text-xs text-muted-foreground">{r.duration} · {r.difficulty}</p>
                  </Link>
                ))}
              </div>
            </div>
          )}

          <RecommendedNext items={[
            { icon: Heart, label: "Recovery", title: "Explore Recovery Hub", href: "/recovery" },
            { icon: Brain, label: "Mindset", title: "Build Mental Resilience", href: "/mindset" },
            { icon: Activity, label: "Dashboard", title: "Track Your Progress", href: "/tracker" },
          ]} />
        </div>
      </section>
    </>
  );
}
