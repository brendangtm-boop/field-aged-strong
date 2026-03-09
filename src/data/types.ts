export interface TrainingWorkout {
  slug: string;
  title: string;
  category: string;
  duration: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced" | "All Levels";
  description: string;
  benefit: string;
  frequency: string;
  steps: string[];
}

export interface RecoveryRoutine {
  slug: string;
  title: string;
  category: string;
  duration: string;
  description: string;
  bodyArea: string;
  benefit: string;
  steps: string[];
}

export interface Article {
  slug: string;
  title: string;
  category: string;
  author: string;
  readTime: string;
  summary: string;
  content: string[];
  relatedCategories: string[];
  premium: boolean;
}

export const TRAINING_CATEGORIES = [
  "Stamina & Conditioning",
  "Strength for Soccer",
  "Mobility & Flexibility",
  "Acceleration & Agility",
  "Balance & Coordination",
  "Return-to-Play",
  "Age-Smart Training",
  "Quick Sessions",
] as const;

export const RECOVERY_CATEGORIES = [
  "Post-Match Recovery",
  "Mobility Reset",
  "Sleep Recovery",
  "Hydration Strategy",
  "Muscle Soreness Management",
] as const;

export const ARTICLE_CATEGORIES = [
  "Training",
  "Recovery",
  "Mindset",
  "Nutrition",
  "Sleep",
  "Hydration",
  "Injury Prevention",
  "Longevity",
  "Community",
  "Return to Play",
] as const;
