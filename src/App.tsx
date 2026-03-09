import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SiteLayout from "./components/SiteLayout";
import HomePage from "./pages/HomePage";
import TrainingHub from "./pages/TrainingHub";
import RecoveryHub from "./pages/RecoveryHub";
import MindsetHub from "./pages/MindsetHub";
import ExerciseCoach from "./pages/ExerciseCoach";
import MindsetCoach from "./pages/MindsetCoach";
import CommunityPage from "./pages/CommunityPage";
import GearPage from "./pages/GearPage";
import TrackerPage from "./pages/TrackerPage";
import LibraryPage from "./pages/LibraryPage";
import MembershipPage from "./pages/MembershipPage";
import AboutPage from "./pages/AboutPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route element={<SiteLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/training" element={<TrainingHub />} />
            <Route path="/recovery" element={<RecoveryHub />} />
            <Route path="/mindset" element={<MindsetHub />} />
            <Route path="/exercise-coach" element={<ExerciseCoach />} />
            <Route path="/mindset-coach" element={<MindsetCoach />} />
            <Route path="/community" element={<CommunityPage />} />
            <Route path="/gear" element={<GearPage />} />
            <Route path="/tracker" element={<TrackerPage />} />
            <Route path="/library" element={<LibraryPage />} />
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
