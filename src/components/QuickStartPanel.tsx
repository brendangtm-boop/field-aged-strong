import { Link } from "react-router-dom";
import { Clock, Target, Heart, RotateCcw, ArrowRight } from "lucide-react";
import type { QuickStart } from "@/data/weeklyPlan";

const iconMap: Record<string, React.ElementType> = {
  Clock, Target, Heart, RotateCcw,
};

interface Props {
  quickStarts: QuickStart[];
  heading?: string;
}

export function QuickStartPanel({ quickStarts, heading = "What do you need today?" }: Props) {
  return (
    <div>
      <h3 className="font-serif text-xl font-semibold mb-5">{heading}</h3>
      <div className="grid sm:grid-cols-2 gap-3">
        {quickStarts.map((qs) => {
          const Icon = iconMap[qs.icon] || Clock;
          const firstSlug = qs.suggestedWorkoutSlugs[0];
          const href = firstSlug ? `/training/${firstSlug}` : "/training";

          return (
            <Link
              key={qs.id}
              to={href}
              className="card-premium p-5 flex items-start gap-4 group"
            >
              <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                <Icon className="h-5 w-5 text-accent" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-bold mb-0.5 group-hover:text-accent transition-colors">{qs.label}</p>
                <p className="text-xs text-muted-foreground leading-relaxed">{qs.description}</p>
              </div>
              <ArrowRight className="h-4 w-4 text-muted-foreground/40 group-hover:text-accent transition-colors mt-1 flex-shrink-0" />
            </Link>
          );
        })}
      </div>
    </div>
  );
}
