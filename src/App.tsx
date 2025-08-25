import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/providers/theme-provider";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import InstitutionManagement from "./pages/InstitutionManagement";
import CourseManagement from "./pages/CourseManagement";
import StudentOversight from "./pages/StudentOversight";
import Communications from "./pages/Communications";
import PersonnelManagement from "./pages/PersonnelManagement";
import InteractiveFeatures from "./pages/InteractiveFeatures";
import Analytics from "./pages/Analytics";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/institution" element={<InstitutionManagement />} />
            <Route path="/students" element={<StudentOversight />} />
            <Route path="/courses" element={<CourseManagement />} />
            <Route path="/staff" element={<PersonnelManagement />} />
            <Route path="/communication" element={<Communications />} />
            <Route path="/events" element={<InteractiveFeatures />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/settings" element={<Settings />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
