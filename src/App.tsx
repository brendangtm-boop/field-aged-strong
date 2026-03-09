import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SiteLayout from "./components/SiteLayout";
import { ScrollToTop } from "./components/ScrollToTop";
import HomePage from "./pages/HomePage";
import StartHerePage from "./pages/StartHerePage";
import TrainingHub from "./pages/TrainingHub";
import RecoveryHub from "./pages/RecoveryHub";
import MindsetHub from "./pages/MindsetHub";
import ExerciseCoach from "./pages/ExerciseCoach";
import MindsetCoach from "./pages/MindsetCoach";
import MatchReflectionPage from "./pages/MatchReflectionPage";
import CommunityPage from "./pages/CommunityPage";
import GearPage from "./pages/GearPage";
import TrackerPage from "./pages/TrackerPage";
import LibraryPage from "./pages/LibraryPage";
import MembershipPage from "./pages/MembershipPage";
import AboutPage from "./pages/AboutPage";
import WorkoutDetail from "./pages/WorkoutDetail";
import RecoveryDetail from "./pages/RecoveryDetail";
import ArticleDetail from "./pages/ArticleDetail";
import CategoryPage from "./pages/CategoryPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route element={<SiteLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/start-here" element={<StartHerePage />} />
            <Route path="/training" element={<TrainingHub />} />
            <Route path="/training/:slug" element={<WorkoutDetail />} />
            <Route path="/recovery" element={<RecoveryHub />} />
            <Route path="/recovery/:slug" element={<RecoveryDetail />} />
            <Route path="/mindset" element={<MindsetHub />} />
            <Route path="/library" element={<LibraryPage />} />
            <Route path="/library/:slug" element={<ArticleDetail />} />
            <Route path="/category/:type/:category" element={<CategoryPage />} />
            <Route path="/exercise-coach" element={<ExerciseCoach />} />
            <Route path="/mindset-coach" element={<MindsetCoach />} />
            <Route path="/match-reflection" element={<MatchReflectionPage />} />
            <Route path="/community" element={<CommunityPage />} />
            <Route path="/gear" element={<GearPage />} />
            <Route path="/tracker" element={<TrackerPage />} />
            <Route path="/membership" element={<MembershipPage />} />
            <Route path="/about" element={<AboutPage />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
