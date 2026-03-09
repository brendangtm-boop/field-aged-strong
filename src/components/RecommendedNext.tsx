import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Recommendation {
  icon: LucideIcon;
  label: string;
  title: string;
  href: string;
}

export function RecommendedNext({ items, heading = "Recommended next" }: { items: Recommendation[]; heading?: string }) {
  return (
    <div className="mt-16 pt-12 border-t border-border/50">
      <h3 className="font-serif text-xl font-semibold mb-6">{heading}</h3>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((item) => (
          <Link
            key={item.href}
            to={item.href}
            className="card-premium p-5 flex items-start gap-4 group"
          >
            <div className="w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/10 transition-colors">
              <item.icon className="h-5 w-5 text-green-light" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground mb-0.5">{item.label}</p>
              <p className="text-sm font-semibold group-hover:text-green-light transition-colors">{item.title}</p>
            </div>
            <ArrowRight className="h-4 w-4 text-muted-foreground/40 group-hover:text-green-light transition-colors mt-1 flex-shrink-0" />
          </Link>
        ))}
      </div>
    </div>
  );
}
