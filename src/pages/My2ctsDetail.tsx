import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, MessageSquareText } from "lucide-react";
import { my2ctsEntries } from "@/data/my2cts";
import { RecommendedNext } from "@/components/RecommendedNext";
import { Dumbbell, Heart, Brain } from "lucide-react";

export default function My2ctsDetail() {
  const { slug } = useParams();
  const entry = my2ctsEntries.find(e => e.slug === slug);

  if (!entry) {
    return (
      <section className="section-band">
        <div className="container-content text-center py-20">
          <h1 className="text-3xl font-bold mb-4">Entry not found</h1>
          <Link to="/my2cts"><Button variant="outline">Back to My2cts</Button></Link>
        </div>
      </section>
    );
  }

  const currentIndex = my2ctsEntries.findIndex(e => e.slug === slug);
  const nextEntries = my2ctsEntries.filter((_, i) => i !== currentIndex).slice(0, 3);

  return (
    <section className="section-band">
      <div className="container-content max-w-3xl">
        <Link to="/my2cts" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8">
          <ArrowLeft className="h-4 w-4" /> Back to My2cts
        </Link>

        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
            <MessageSquareText className="h-5 w-5 text-accent" />
          </div>
          <span className="badge-gold">My 2cts</span>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold mb-4">{entry.title}</h1>

        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-8">
          <span className="flex items-center gap-1.5">
            <Calendar className="h-4 w-4" />
            {new Date(entry.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </span>
          <span>{entry.author}</span>
        </div>

        <p className="text-lg text-muted-foreground leading-relaxed mb-10 border-l-2 border-accent pl-4">{entry.teaser}</p>

        <div className="space-y-6 mb-12">
          {entry.body.map((paragraph, i) => (
            <p key={i} className="text-base leading-[1.8] text-foreground/90">{paragraph}</p>
          ))}
        </div>

        {entry.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-10">
            <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Tags:</span>
            {entry.tags.map(t => (
              <span key={t} className="px-3 py-1 rounded-full bg-muted text-xs text-muted-foreground">{t}</span>
            ))}
          </div>
        )}

        {nextEntries.length > 0 && (
          <div>
            <h2 className="font-serif text-xl font-semibold mb-4">More from My2cts</h2>
            <div className="grid sm:grid-cols-3 gap-4">
              {nextEntries.map(e => (
                <Link key={e.slug} to={`/my2cts/${e.slug}`} className="card-premium p-4 group">
                  <h3 className="font-serif text-sm font-semibold mb-1 group-hover:text-accent transition-colors">{e.title}</h3>
                  <p className="text-xs text-muted-foreground">{new Date(e.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</p>
                </Link>
              ))}
            </div>
          </div>
        )}

        <RecommendedNext items={[
          { icon: Dumbbell, label: "Training", title: "Training Hub", href: "/training" },
          { icon: Heart, label: "Recovery", title: "Recovery Hub", href: "/recovery" },
          { icon: Brain, label: "Mindset", title: "Mindset Hub", href: "/mindset" },
        ]} />
      </div>
    </section>
  );
}
