import { createBrowserRouter } from "react-router";
import { LandingPage } from "./pages/LandingPage";
import { LoginPage } from "./pages/LoginPage";
import { RegisterPage } from "./pages/RegisterPage";
import { AIAssessment } from "./pages/AIAssessment";
import { AIAnalysisLoading } from "./pages/AIAnalysisLoading";
import { CareerConfirmation } from "./pages/CareerConfirmation";
import { DashboardLayout } from "./components/DashboardLayout";
import { StudentDashboard } from "./pages/StudentDashboard";
import { ProfilePage } from "./pages/ProfilePage";
import { CareerRecommendation } from "./pages/CareerRecommendation";
import { LearningRoadmap } from "./pages/LearningRoadmap";
import { LearningModules } from "./pages/LearningModules";
import { CourseDetails } from "./pages/CourseDetails";
import { AIMentor } from "./pages/AIMentor";
import { ProgressTracker } from "./pages/ProgressTracker";
import { Achievements } from "./pages/Achievements";
import { Certificates } from "./pages/Certificates";
import { Settings } from "./pages/Settings";
import { AdminDashboard } from "./pages/AdminDashboard";

export const router = createBrowserRouter([
  { path: "/", Component: LandingPage },
  { path: "/login", Component: LoginPage },
  { path: "/register", Component: RegisterPage },
  { path: "/assessment", Component: AIAssessment },
  { path: "/ai-analysis", Component: AIAnalysisLoading },
  { path: "/career-confirmation", Component: CareerConfirmation },
  {
    path: "/dashboard",
    Component: DashboardLayout,
    children: [
      { index: true, Component: StudentDashboard },
      { path: "profile", Component: ProfilePage },
      { path: "career-recommendation", Component: CareerRecommendation },
      { path: "roadmap", Component: LearningRoadmap },
      { path: "modules", Component: LearningModules },
      { path: "course/:id", Component: CourseDetails },
      { path: "ai-mentor", Component: AIMentor },
      { path: "progress", Component: ProgressTracker },
      { path: "achievements", Component: Achievements },
      { path: "certificates", Component: Certificates },
      { path: "settings", Component: Settings },
    ],
  },
  { path: "/admin", Component: AdminDashboard },
]);
