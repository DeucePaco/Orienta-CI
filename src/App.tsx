import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Universities from "./pages/Universities";
import UniversityDetail from "./pages/UniversityDetail";
import Programs from "./pages/Programs";
import ProgramDetails from "./pages/ProgramDetails";
import Favorites from "./pages/Favorites";
import Dashboard from "./pages/Dashboard";
import AdminDashboard from "./pages/AdminDashboard";
import Auth from "./pages/Auth";
import NotFound from "./pages/NotFound";
import Guides from "./pages/Guides";
import Search from "./pages/Search";
import { TrustSection } from "@/components/TrustSection";
import { HowItWorks } from "@/components/HowItWorks";
import { RecentAdditions } from "@/components/RecentAdditions";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/universities" element={<Universities />} />
          <Route path="/universities/:id" element={<UniversityDetail />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/programs/:id" element={<ProgramDetails />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/guides" element={<Guides />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="/search" element={<Search />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
