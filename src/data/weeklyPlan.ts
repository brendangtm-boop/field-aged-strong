/** Weekly plan data model — seeded with a default in-season week.
 *  Future: generate dynamically from user profile, match schedule, fatigue. */

export type SessionType = "training" | "recovery" | "mobility" | "match" | "mindset" | "rest";
export type SessionStatus = "completed" | "skipped" | "modified" | "upcoming";

export interface PlannedSession {
  id: string;
  day: string;
  dayShort: string;
  type: SessionType;
  title: string;
  duration: string;
  intensity: "Low" | "Moderate" | "High" | "Match";
  description: string;
  workoutSlug?: string;
  recoverySlug?: string;
  status: SessionStatus;
}

export const SESSION_TYPE_META: Record<SessionType, { label: string; colorClass: string; bgClass: string }> = {
  training:  { label: "Training",  colorClass: "text-green-light",    bgClass: "gradient-green" },
  recovery:  { label: "Recovery",  colorClass: "text-accent",         bgClass: "gradient-gold" },
  mobility:  { label: "Mobility",  colorClass: "text-green-light",    bgClass: "bg-primary/10" },
  match:     { label: "Match Day", colorClass: "text-primary",        bgClass: "gradient-green" },
  mindset:   { label: "Mindset",   colorClass: "text-accent",         bgClass: "bg-accent/15" },
  rest:      { label: "Rest Day",  colorClass: "text-muted-foreground", bgClass: "bg-muted" },
};

/** Default seeded weekly plan — mid-season, match on Saturday */
export const defaultWeeklyPlan: PlannedSession[] = [
  {
    id: "mon",
    day: "Monday",
    dayShort: "Mon",
    type: "training",
    title: "Interval Endurance Builder",
    duration: "35 min",
    intensity: "Moderate",
    description: "Build match-day stamina with stop-start intervals that mirror real game demands.",
    workoutSlug: "interval-endurance-builder",
    status: "completed",
  },
  {
    id: "tue",
    day: "Tuesday",
    dayShort: "Tue",
    type: "recovery",
    title: "Full Body Mobility Flow",
    duration: "20 min",
    intensity: "Low",
    description: "Head-to-toe mobility to maintain movement quality and identify tight spots.",
    workoutSlug: "full-body-mobility-flow",
    status: "completed",
  },
  {
    id: "wed",
    day: "Wednesday",
    dayShort: "Wed",
    type: "training",
    title: "Lower Body Power Circuit",
    duration: "35 min",
    intensity: "Moderate",
    description: "Functional leg strength for powerful shots, tackles, and sustained running.",
    workoutSlug: "lower-body-power-circuit",
    status: "completed",
  },
  {
    id: "thu",
    day: "Thursday",
    dayShort: "Thu",
    type: "mindset",
    title: "Confidence & Focus Check-in",
    duration: "10 min",
    intensity: "Low",
    description: "Quick mental check-in — rate confidence, set an intention for the weekend match.",
    status: "upcoming",
  },
  {
    id: "fri",
    day: "Friday",
    dayShort: "Fri",
    type: "mobility",
    title: "Pre-Match Dynamic Stretch",
    duration: "10 min",
    intensity: "Low",
    description: "Light activation to stay loose without adding fatigue before match day.",
    workoutSlug: "pre-match-dynamic-stretch",
    status: "upcoming",
  },
  {
    id: "sat",
    day: "Saturday",
    dayShort: "Sat",
    type: "match",
    title: "Match Day",
    duration: "90 min",
    intensity: "Match",
    description: "Game day. Activate, compete, then begin recovery immediately after.",
    status: "upcoming",
  },
  {
    id: "sun",
    day: "Sunday",
    dayShort: "Sun",
    type: "rest",
    title: "Active Recovery & Reflection",
    duration: "25 min",
    intensity: "Low",
    description: "Gentle movement, foam rolling, and a brief match reflection to close the week.",
    recoverySlug: "active-recovery-day-after",
    status: "upcoming",
  },
];

/** Quick-start scenarios that surface relevant sessions */
export interface QuickStart {
  id: string;
  label: string;
  icon: string; // lucide icon name
  description: string;
  suggestedWorkoutSlugs: string[];
  suggestedRecoverySlugs: string[];
}

export const quickStarts: QuickStart[] = [
  {
    id: "20-min",
    label: "I have 20 minutes",
    icon: "Clock",
    description: "Quick, focused sessions you can finish in 20 minutes or less.",
    suggestedWorkoutSlugs: ["first-step-explosion", "morning-hip-opener", "core-stability-for-soccer", "bodyweight-strength-anywhere"],
    suggestedRecoverySlugs: ["morning-mobility-flow", "desk-worker-hip-reset"],
  },
  {
    id: "match-weekend",
    label: "I play this weekend",
    icon: "Target",
    description: "Taper training and prepare your body and mind for match day.",
    suggestedWorkoutSlugs: ["pre-match-dynamic-stretch", "match-day-ready-circuit"],
    suggestedRecoverySlugs: ["pre-bed-relaxation-sequence"],
  },
  {
    id: "sore",
    label: "I feel sore",
    icon: "Heart",
    description: "Recovery sessions to reduce soreness and get you moving again.",
    suggestedWorkoutSlugs: ["foam-roller-full-body", "morning-hip-opener"],
    suggestedRecoverySlugs: ["active-recovery-day-after", "post-match-lower-body-flush", "morning-mobility-flow"],
  },
  {
    id: "returning",
    label: "Returning from injury",
    icon: "RotateCcw",
    description: "Safe, progressive sessions to rebuild confidence and fitness.",
    suggestedWorkoutSlugs: ["low-impact-cardio-circuit", "resistance-band-full-body", "bodyweight-strength-anywhere"],
    suggestedRecoverySlugs: ["knee-mobility-maintenance", "morning-mobility-flow"],
  },
];
