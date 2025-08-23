import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import Index from "./pages/Index";
import CreatorDashboard from "./pages/CreatorDashboard";
import Ideas from "./pages/Ideas";
import Scripts from "./pages/Scripts";
import Thumbnails from "./pages/Thumbnails";
import Analytics from "./pages/Analytics";
import BrandDashboard from "./pages/BrandDashboard";
import Campaigns from "./pages/Campaigns";
import Creators from "./pages/Creators";
import BrandAnalytics from "./pages/BrandAnalytics";
import Insights from "./pages/Insights";
import Community from "./pages/Community";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem
      disableTransitionOnChange
    >
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/creator" element={<CreatorDashboard />} />
            <Route path="/ideas" element={<Ideas />} />
            <Route path="/scripts" element={<Scripts />} />
            <Route path="/thumbnails" element={<Thumbnails />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/brand" element={<BrandDashboard />} />
            <Route path="/campaigns" element={<Campaigns />} />
            <Route path="/creators" element={<Creators />} />
            <Route path="/brand-analytics" element={<BrandAnalytics />} />
            <Route path="/insights" element={<Insights />} />
            <Route path="/community" element={<Community />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
