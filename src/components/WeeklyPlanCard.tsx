import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Dumbbell, Heart, Brain, Target, Moon, Zap,
  CheckCircle, X, Edit3, ChevronRight, Calendar
} from "lucide-react";
import { Button } from "@/components/ui/button";
import type { PlannedSession, SessionType, SessionStatus } from "@/data/weeklyPlan";
import { SESSION_TYPE_META } from "@/data/weeklyPlan";

const typeIcons: Record<SessionType, React.ElementType> = {
  training: Dumbbell,
  recovery: Heart,
  mobility: Zap,
  match: Target,
  mindset: Brain,
  rest: Moon,
};

const statusActions: { status: SessionStatus; icon: React.ElementType; label: string }[] = [
  { status: "completed", icon: CheckCircle, label: "Done" },
  { status: "modified", icon: Edit3, label: "Modified" },
  { status: "skipped", icon: X, label: "Skipped" },
];

interface Props {
  plan: PlannedSession[];
  onStatusChange?: (id: string, status: SessionStatus) => void;
  compact?: boolean;
}

export function WeeklyPlanCard({ plan, onStatusChange, compact = false }: Props) {
  const completedCount = plan.filter(s => s.status === "completed" || s.status === "modified").length;

  return (
    <div className="card-premium-static overflow-hidden">
      {/* Header */}
      <div className="p-5 md:p-6 border-b border-border/40 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl gradient-green flex items-center justify-center">
            <Calendar className="h-5 w-5 text-primary-foreground" />
          </div>
          <div>
            <h3 className="font-serif text-lg font-bold">This Week's Plan</h3>
            <p className="text-xs text-muted-foreground">{completedCount} of {plan.length} sessions logged</p>
          </div>
        </div>
        <div className="progress-bar w-20 md:w-28">
          <div className="progress-bar-fill" style={{ width: `${(completedCount / plan.length) * 100}%` }} />
        </div>
      </div>

      {/* Days */}
      <div className="divide-y divide-border/30">
        {plan.map((session) => {
          const Icon = typeIcons[session.type];
          const meta = SESSION_TYPE_META[session.type];
          const isDone = session.status === "completed" || session.status === "modified";
          const isSkipped = session.status === "skipped";
          const href = session.workoutSlug
            ? `/training/${session.workoutSlug}`
            : session.recoverySlug
            ? `/recovery/${session.recoverySlug}`
            : undefined;

          return (
            <div
              key={session.id}
              className={`p-4 md:px-6 flex items-center gap-4 transition-colors ${
                isDone ? "bg-green-subtle/50" : isSkipped ? "opacity-50" : ""
              }`}
            >
              {/* Day label */}
              <div className="w-10 text-center flex-shrink-0">
                <p className={`text-[10px] font-bold uppercase tracking-widest ${
                  isDone ? "text-green-light" : "text-muted-foreground"
                }`}>
                  {session.dayShort}
                </p>
              </div>

              {/* Icon */}
              <div className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 ${
                isDone ? meta.bgClass : "bg-muted"
              }`}>
                <Icon className={`h-4 w-4 ${isDone ? "text-primary-foreground" : meta.colorClass}`} />
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <p className={`text-sm font-semibold truncate ${isSkipped ? "line-through" : ""}`}>
                    {session.title}
                  </p>
                  <span className={`text-[9px] font-bold uppercase tracking-wider ${meta.colorClass}`}>
                    {meta.label}
                  </span>
                </div>
                {!compact && (
                  <p className="text-xs text-muted-foreground mt-0.5 truncate">
                    {session.duration} · {session.intensity} intensity{session.description ? ` — ${session.description}` : ""}
                  </p>
                )}
              </div>

              {/* Actions */}
              <div className="flex items-center gap-1.5 flex-shrink-0">
                {session.status === "upcoming" && onStatusChange ? (
                  <>
                    {statusActions.map(a => (
                      <button
                        key={a.status}
                        onClick={() => onStatusChange(session.id, a.status)}
                        className="w-8 h-8 rounded-lg flex items-center justify-center text-muted-foreground hover:bg-primary/5 hover:text-foreground transition-colors"
                        title={a.label}
                      >
                        <a.icon className="h-4 w-4" />
                      </button>
                    ))}
                  </>
                ) : isDone ? (
                  <CheckCircle className="h-4 w-4 text-green-light" />
                ) : isSkipped ? (
                  <X className="h-4 w-4 text-muted-foreground" />
                ) : null}
                {href && (
                  <Link to={href} className="w-8 h-8 rounded-lg flex items-center justify-center text-muted-foreground hover:text-green-light transition-colors">
                    <ChevronRight className="h-4 w-4" />
                  </Link>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
