import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Clock, User, BookOpen } from "lucide-react";
import { articles } from "@/data/articles";
import { RecommendedNext } from "@/components/RecommendedNext";
import { Dumbbell, Heart, Activity } from "lucide-react";

export default function ArticleDetail() {
  const { slug } = useParams();
  const article = articles.find(a => a.slug === slug);

  if (!article) {
    return (
      <section className="section-band">
        <div className="container-content text-center py-20">
          <h1 className="text-3xl font-bold mb-4">Article not found</h1>
          <Link to="/library"><Button variant="outline">Back to Library</Button></Link>
        </div>
      </section>
    );
  }

  const related = articles.filter(a => a.category === article.category && a.slug !== article.slug).slice(0, 3);

  return (
    <>
      <section className="section-band">
        <div className="container-content max-w-3xl">
          <Link to="/library" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8">
            <ArrowLeft className="h-4 w-4" /> Back to Library
          </Link>

          <span className="badge-green mb-4 block w-fit">{article.category}</span>
          {article.premium && <span className="badge-gold mb-4 ml-2 inline-block">Premium</span>}
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{article.title}</h1>

          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-8">
            <span className="flex items-center gap-1.5"><User className="h-4 w-4" /> {article.author}</span>
            <span className="flex items-center gap-1.5"><Clock className="h-4 w-4" /> {article.readTime}</span>
            <span className="flex items-center gap-1.5"><BookOpen className="h-4 w-4" /> {article.category}</span>
          </div>

          <p className="text-lg text-muted-foreground leading-relaxed mb-10 border-l-2 border-accent pl-4">{article.summary}</p>

          <div className="prose prose-sm max-w-none space-y-6 mb-12">
            {article.content.map((paragraph, i) => (
              <p key={i} className="leading-relaxed text-foreground/90">{paragraph}</p>
            ))}
          </div>

          {article.relatedCategories.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-10">
              <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Related topics:</span>
              {article.relatedCategories.map(c => (
                <Link key={c} to={`/library?category=${encodeURIComponent(c)}`} className="px-3 py-1 rounded-full bg-muted text-xs text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors">{c}</Link>
              ))}
            </div>
          )}

          {related.length > 0 && (
            <div>
              <h2 className="font-serif text-xl font-semibold mb-4">More in {article.category}</h2>
              <div className="grid sm:grid-cols-3 gap-4">
                {related.map(a => (
                  <Link key={a.slug} to={`/library/${a.slug}`} className="card-premium p-4 group">
                    <h3 className="font-serif text-sm font-semibold mb-1 group-hover:text-green-light transition-colors">{a.title}</h3>
                    <p className="text-xs text-muted-foreground">{a.author} · {a.readTime}</p>
                  </Link>
                ))}
              </div>
            </div>
          )}

          <RecommendedNext items={[
            { icon: Dumbbell, label: "Training", title: "Browse Workouts", href: "/training" },
            { icon: Heart, label: "Recovery", title: "Recovery Routines", href: "/recovery" },
            { icon: Activity, label: "Dashboard", title: "Track Progress", href: "/tracker" },
          ]} />
        </div>
      </section>
    </>
  );
}
