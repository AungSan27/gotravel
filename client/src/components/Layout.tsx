import { Link } from "wouter";
import StickyCTA from "./StickyCTA";
import { Button } from "@/components/ui/button";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-background font-sans text-foreground">
      {/* Header */}
      <header className="border-b border-border sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="text-2xl font-bold tracking-tighter text-primary">
              GoTravel<span className="text-foreground">.</span>
          </Link>
          
          <nav className="hidden md:flex gap-8 items-center text-sm font-medium">
            <Link href="/destinations/bangkok" className="hover:text-primary transition-colors">Destinations</Link>
            <Link href="/blog" className="hover:text-primary transition-colors">Blog</Link>
            <Link href="/about" className="hover:text-primary transition-colors">About Us</Link>
          </nav>

          <div className="flex items-center gap-4">
             <Button variant="outline" className="hidden sm:inline-flex font-mono text-xs uppercase tracking-wider">
              Sign In
            </Button>
            <Button className="font-mono text-xs uppercase tracking-wider bg-primary text-primary-foreground hover:bg-primary/90">
              Plan Trip
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      <StickyCTA />
      {/* Footer */}
      <footer className="border-t border-border bg-muted/30 py-12">
        <div className="container grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-bold tracking-tight text-primary">GoTravel.</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Your expert guide to flights, hotels, tours, and more. Plan your entire journey in one place.
            </p>
          </div>
          
          <div>
            <h4 className="font-mono text-xs uppercase tracking-wider text-muted-foreground mb-4">Explore</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/destinations/bangkok" className="hover:underline">Bangkok</Link></li>
              <li><Link href="/destinations/tokyo" className="hover:underline">Tokyo</Link></li>
              <li><Link href="/destinations/bali" className="hover:underline">Bali</Link></li>
              <li><Link href="/destinations/singapore" className="hover:underline">Singapore</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-xs uppercase tracking-wider text-muted-foreground mb-4">Company</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/about" className="hover:underline">About Us</Link></li>
              <li><Link href="/contact" className="hover:underline">Contact</Link></li>
              <li><Link href="/privacy" className="hover:underline">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:underline">Terms of Service</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-xs uppercase tracking-wider text-muted-foreground mb-4">Newsletter</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Get the latest travel deals and tips.
            </p>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex h-9 w-full rounded-none border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
              />
              <Button type="submit" size="sm" className="rounded-none bg-primary text-primary-foreground">
                Join
              </Button>
            </form>
          </div>
        </div>
        <div className="container mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground font-mono">
          <p>© 2026 GoTravel. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-foreground">Instagram</a>
            <a href="#" className="hover:text-foreground">Twitter</a>
            <a href="#" className="hover:text-foreground">Facebook</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
