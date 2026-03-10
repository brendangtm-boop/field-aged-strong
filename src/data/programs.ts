export interface TrainingProgram {
  slug: string;
  title: string;
  description: string;
  duration: string;
  difficulty: string;
  workoutSlugs: string[];
  weeklyStructure: { week: number; focus: string; sessions: string[] }[];
}

export const trainingPrograms: TrainingProgram[] = [
  {
    slug: "4-week-match-fitness",
    title: "4-Week Match Fitness Plan",
    description: "A progressive program that builds match-ready endurance over 4 weeks. Start with aerobic base work and finish with match-simulation sessions.",
    duration: "4 weeks",
    difficulty: "Intermediate",
    workoutSlugs: ["aerobic-base-builder", "interval-endurance-builder", "tempo-run-pitch-laps", "30-min-match-simulation"],
    weeklyStructure: [
      { week: 1, focus: "Aerobic Foundation", sessions: ["Aerobic Base Builder x3", "Full Body Mobility Flow x2", "Light Strength x1"] },
      { week: 2, focus: "Building Volume", sessions: ["Tempo Run x2", "Interval Endurance x1", "Core Stability x2", "Mobility x1"] },
      { week: 3, focus: "Intensity Increase", sessions: ["Interval Endurance x2", "Fartlek Fun Run x1", "Strength Circuit x2", "Recovery x1"] },
      { week: 4, focus: "Match Simulation", sessions: ["Match Simulation x2", "Shuttle Pyramid x1", "Pre-Match Activation x1", "Full Recovery x2"] },
    ],
  },
  {
    slug: "strength-for-40-plus",
    title: "Strength for Soccer Players 40+",
    description: "Build functional strength that protects joints and improves on-pitch power. Designed for players who need strength without the soreness.",
    duration: "6 weeks",
    difficulty: "Beginner to Intermediate",
    workoutSlugs: ["bodyweight-strength-anywhere", "lower-body-power-circuit", "core-stability-for-soccer", "posterior-chain-protector"],
    weeklyStructure: [
      { week: 1, focus: "Movement Foundations", sessions: ["Bodyweight Strength x3", "Mobility Flow x3"] },
      { week: 2, focus: "Building Patterns", sessions: ["Bodyweight Strength x2", "Core Stability x2", "Mobility x2"] },
      { week: 3, focus: "Adding Load", sessions: ["Lower Body Circuit x2", "Core Stability x2", "Mobility x1", "Recovery x1"] },
      { week: 4, focus: "Posterior Chain Focus", sessions: ["Posterior Chain x2", "Lower Body x1", "Core x2", "Mobility x1"] },
      { week: 5, focus: "Integration", sessions: ["Lower Body x2", "Posterior Chain x1", "Single Leg Focus x1", "Mobility x2"] },
      { week: 6, focus: "Performance Peak", sessions: ["Full Strength Session x2", "Core x1", "Mobility x2", "Recovery x1"] },
    ],
  },
  {
    slug: "pre-season-conditioning",
    title: "Pre-Season Conditioning",
    description: "Get ready for the new season with this 3-week ramp-up program. Combines cardio progression with agility and match preparation.",
    duration: "3 weeks",
    difficulty: "All Levels",
    workoutSlugs: ["low-impact-cardio-circuit", "fartlek-fun-run", "first-step-explosion", "match-day-ready-circuit"],
    weeklyStructure: [
      { week: 1, focus: "Base Conditioning", sessions: ["Low-Impact Cardio x3", "Mobility x2", "Light Agility x1"] },
      { week: 2, focus: "Speed Integration", sessions: ["Fartlek Run x2", "First Step Drills x2", "Strength x1", "Mobility x1"] },
      { week: 3, focus: "Match Readiness", sessions: ["Match Simulation x1", "Agility Session x2", "Match Day Activation x1", "Recovery x2"] },
    ],
  },
  {
    slug: "return-to-play-program",
    title: "Return-to-Play Program",
    description: "A safe, progressive return to soccer after injury or extended time away. Starts with mobility and gradually introduces running, agility, and match play.",
    duration: "6 weeks",
    difficulty: "Beginner",
    workoutSlugs: ["full-body-mobility-flow", "resistance-band-full-body", "low-impact-cardio-circuit", "bodyweight-strength-anywhere"],
    weeklyStructure: [
      { week: 1, focus: "Movement & Mobility", sessions: ["Mobility Flow x4", "Walking x3 (20 min)"] },
      { week: 2, focus: "Gentle Activation", sessions: ["Mobility x3", "Resistance Band x2", "Walking x2 (30 min)"] },
      { week: 3, focus: "Light Training", sessions: ["Bodyweight Strength x2", "Low-Impact Cardio x2", "Mobility x2"] },
      { week: 4, focus: "Building Capacity", sessions: ["Strength x2", "Light Jogging x2 (15 min)", "Mobility x2"] },
      { week: 5, focus: "Soccer Movements", sessions: ["Strength x2", "Easy Running x2", "Light Agility x1", "Mobility x1"] },
      { week: 6, focus: "Return to Play", sessions: ["Full Training x2", "Agility x1", "Practice Match x1", "Recovery x2"] },
    ],
  },
];
