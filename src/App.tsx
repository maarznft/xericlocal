
import React from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import About from "./pages/About";
import Verticals from "./pages/Verticals";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import WaterInfrastructure from "./pages/WaterInfrastructure";
import Aerospace from "./pages/Aerospace";
import Defense from "./pages/Defense";
import IndustrialServices from "./pages/IndustrialServices";
import Tier2Supplier from "./pages/Tier2Supplier";
import PortablePower from "./pages/PortablePower";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/verticals" element={<Verticals />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/water-infrastructure" element={<WaterInfrastructure />} />
          <Route path="/aerospace" element={<Aerospace />} />
          <Route path="/defense" element={<Defense />} />
          <Route path="/industrial-services" element={<IndustrialServices />} />
          <Route path="/tier2-supplier" element={<Tier2Supplier />} />
          <Route path="/portable-power" element={<PortablePower />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
