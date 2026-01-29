import { Link } from "wouter";
import StickyCTA from "./StickyCTA";
import { Button } from "@/components/ui/button";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-background font-sans text-foreground">
      {/* Header */}
      <header className="border-b border-border sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
              <img src="/logo.png" alt="GoTravel Logo" className="h-[50px] w-auto object-contain" />
              <div className="hidden lg:flex flex-col">
                <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground leading-none">Travel Guides • Stays • Experiences</span>
              </div>
          </Link>
          
          <nav className="hidden md:flex gap-8 items-center text-sm font-medium">
            <Link href="/thailand/chiang-mai" className="hover:text-primary transition-colors">Chiang Mai</Link>
            <Link href="/thailand/bangkok" className="hover:text-primary transition-colors">Bangkok</Link>
            <Link href="/thailand/phuket" className="hover:text-primary transition-colors">Phuket</Link>
            <Link href="/thailand/krabi" className="hover:text-primary transition-colors">Krabi</Link>
            <Link href="/blog" className="hover:text-primary transition-colors">Blog</Link>
          </nav>

          <div className="flex items-center gap-4">
             <Button variant="outline" className="hidden sm:inline-flex font-mono text-xs uppercase tracking-wider">
              Sign In
            </Button>
            <Button className="font-mono text-xs uppercase tracking-wider bg-secondary text-secondary-foreground hover:bg-primary hover:text-white transition-colors">
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
            <Link href="/" className="block mb-4">
              <img src="/logo.png" alt="GoTravel Logo" className="h-12 w-auto object-contain" />
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Thailand Travel Guides & Planning for Myanmar and International Travelers. Crafting Unforgettable Journeys.
            </p>
          </div>
          
          <div>
            <h4 className="font-mono text-xs uppercase tracking-wider text-muted-foreground mb-4">Destinations</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/thailand/chiang-mai" className="hover:underline">Chiang Mai</Link></li>
              <li><Link href="/thailand/bangkok" className="hover:underline">Bangkok</Link></li>
              <li><Link href="/thailand/phuket" className="hover:underline">Phuket</Link></li>
              <li><Link href="/thailand/krabi" className="hover:underline">Krabi</Link></li>
              <li><Link href="/thailand/pai" className="hover:underline">Pai</Link></li>
              <li><Link href="/thailand/chiang-rai" className="hover:underline">Chiang Rai</Link></li>
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
              Get the latest Thailand travel deals and tips.
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
        
        {/* Affiliate Disclosure */}
        <div className="container mt-12 pt-8 border-t border-border text-xs text-muted-foreground">
          <p className="mb-4">
            <strong>Disclosure:</strong> GoTravel is an affiliate website. Some links on this site are affiliate links, meaning we may earn a small commission if you make a purchase through them, at no extra cost to you. This helps support our work in creating free travel guides. We only recommend products and services we trust and use ourselves.
          </p>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 font-mono">
            <p>© 2026 GoTravel — Crafting Unforgettable Journeys</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-foreground">Instagram</a>
              <a href="#" className="hover:text-foreground">Twitter</a>
              <a href="#" className="hover:text-foreground">Facebook</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
