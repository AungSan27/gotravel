import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Bangkok from "./pages/destinations/Bangkok";
import Tokyo from "./pages/destinations/Tokyo";
import Bali from "./pages/destinations/Bali";
import BestThingsToDoBangkok from "./pages/blog/BestThingsToDoBangkok";
import CheapFlightsBangkok from "./pages/blog/CheapFlightsBangkok";
import BestTransfersBangkok from "./pages/blog/BestTransfersBangkok";
import BestInsuranceThailand from "./pages/blog/BestInsuranceThailand";
import BestEsimThailand from "./pages/blog/BestEsimThailand";
import Blog from "./pages/Blog";


function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/destinations/bangkok"} component={Bangkok} />
      <Route path={"/destinations/tokyo"} component={Tokyo} />
      <Route path={"/destinations/bali"} component={Bali} />
      <Route path={"/blog/best-things-to-do-in-bangkok"} component={BestThingsToDoBangkok} />
      <Route path={"/blog/cheap-flights-to-bangkok"} component={CheapFlightsBangkok} />
      <Route path={"/blog/best-airport-transfers-in-bangkok"} component={BestTransfersBangkok} />
      <Route path={"/blog/best-travel-insurance-for-thailand"} component={BestInsuranceThailand} />
      <Route path={"/blog/best-esim-for-thailand"} component={BestEsimThailand} />
      <Route path={"/blog"} component={Blog} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
        // switchable
      >
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
