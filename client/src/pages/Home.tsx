import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Plane, Hotel, Ticket, Car, Wifi, ShieldCheck, ArrowRight } from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  const categories = [
    { icon: Plane, label: "Find Flights", link: "/flights", color: "text-blue-500" },
    { icon: Hotel, label: "Hotels", link: "/hotels", color: "text-indigo-500" },
    { icon: Ticket, label: "Things To Do", link: "/activities", color: "text-pink-500" },
    { icon: Car, label: "Transfers", link: "/transfers", color: "text-orange-500" },
    { icon: Wifi, label: "eSIM", link: "/esim", color: "text-green-500" },
    { icon: ShieldCheck, label: "Insurance", link: "/insurance", color: "text-red-500" },
  ];

  const featuredDestinations = [
    {
      name: "Chiang Mai",
      image: "/images/chiang-mai.jpg",
      description: "Ancient temples, mountain retreats, and the best night markets.",
      link: "/thailand/chiang-mai"
    },
    {
      name: "Bangkok",
      image: "/images/bangkok.jpg",
      description: "The vibrant capital. Street food, shopping, and grand palaces.",
      link: "/thailand/bangkok"
    },
    {
      name: "Phuket",
      image: "/images/phuket.jpg",
      description: "Thailand's largest island with stunning beaches and nightlife.",
      link: "/thailand/phuket"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/hero-travel.jpg" 
            alt="Thailand Temple" 
            className="w-full h-full object-cover grayscale contrast-125 brightness-75"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-90" />
        </div>
        
        <div className="container relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold tracking-tighter text-white mb-4 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            PLAN YOUR TRIP TO<br />
            <span className="text-primary">THAILAND</span>
          </h1>
          <p className="text-lg md:text-xl text-secondary font-mono uppercase tracking-[0.2em] mb-8 animate-in fade-in slide-in-from-bottom-5 duration-1000 delay-100">
            Crafting Unforgettable Journeys
          </p>
          <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto mb-10 font-light tracking-wide animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-200">
            Thailand Travel Guides & Planning for Myanmar and International Travelers.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-5xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-400">
            {categories.map((cat, index) => (
              <Link key={index} href={cat.link} className="group block h-full">
                  <div className="bg-background/10 backdrop-blur-md border border-white/20 p-6 flex flex-col items-center justify-center gap-3 hover:bg-primary hover:border-primary transition-all duration-300 h-full">
                    <cat.icon className="w-8 h-8 text-white group-hover:scale-110 transition-transform" />
                    <span className="text-sm font-medium text-white tracking-wide uppercase">{cat.label}</span>
                  </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl font-bold tracking-tighter mb-2">Explore Thailand</h2>
              <p className="text-muted-foreground font-mono uppercase text-sm tracking-wider">Curated guides for the Land of Smiles</p>
            </div>
            <Button variant="outline" className="hidden md:flex gap-2 group">
              View All <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredDestinations.map((dest, index) => (
              <Link key={index} href={dest.link} className="group block">
                  <div className="relative aspect-[4/5] overflow-hidden bg-muted">
                    <img 
                      src={dest.image} 
                      alt={dest.name} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 transition-opacity group-hover:opacity-90" />
                    <div className="absolute bottom-0 left-0 p-8 w-full">
                      <h3 className="text-3xl font-bold text-white mb-2 tracking-tight">{dest.name}</h3>
                      <p className="text-gray-300 text-sm line-clamp-2 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                        {dest.description}
                      </p>
                      <div className="flex items-center gap-2 text-primary font-mono text-xs uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200">
                        Explore Guide <ArrowRight className="w-3 h-3" />
                      </div>
                    </div>
                  </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition / Why Use Us */}
      <section className="py-24 bg-muted/30 border-y border-border">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tighter leading-tight">
                Your Thailand<br />
                <span className="text-primary">Travel Expert.</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Whether you're visiting from Myanmar or anywhere else in the world, we help you navigate Thailand with ease. From visa tips to local transport, we've got you covered.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-4">
                <div className="space-y-2">
                  <div className="w-10 h-10 bg-primary/10 flex items-center justify-center rounded-none mb-2">
                    <Plane className="w-5 h-5 text-primary" />
                  </div>
                  <h4 className="font-bold">Regional Flights</h4>
                  <p className="text-sm text-muted-foreground">Best connections from Yangon, Mandalay, and beyond.</p>
                </div>
                <div className="space-y-2">
                  <div className="w-10 h-10 bg-primary/10 flex items-center justify-center rounded-none mb-2">
                    <ShieldCheck className="w-5 h-5 text-primary" />
                  </div>
                  <h4 className="font-bold">Trusted Partners</h4>
                  <p className="text-sm text-muted-foreground">We only recommend services we trust and use ourselves.</p>
                </div>
                <div className="space-y-2">
                  <div className="w-10 h-10 bg-primary/10 flex items-center justify-center rounded-none mb-2">
                    <Ticket className="w-5 h-5 text-primary" />
                  </div>
                  <h4 className="font-bold">Local Experiences</h4>
                  <p className="text-sm text-muted-foreground">Cooking classes, ethical elephant sanctuaries, and island tours.</p>
                </div>
                <div className="space-y-2">
                  <div className="w-10 h-10 bg-primary/10 flex items-center justify-center rounded-none mb-2">
                    <Wifi className="w-5 h-5 text-primary" />
                  </div>
                  <h4 className="font-bold">Stay Connected</h4>
                  <p className="text-sm text-muted-foreground">Reliable eSIMs for seamless internet across Thailand.</p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary to-accent opacity-20 blur-2xl" />
              <div className="relative bg-background border border-border p-8 shadow-2xl">
                <div className="flex items-center justify-between mb-8 border-b border-border pb-4">
                  <span className="font-mono text-sm text-muted-foreground">TRIP_ID: #TH8829</span>
                  <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-bold uppercase tracking-wider">Confirmed</span>
                </div>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 text-blue-600">
                      <Plane className="w-4 h-4" />
                    </div>
                    <div>
                      <h5 className="font-bold text-sm">Flight to Chiang Mai</h5>
                      <p className="text-xs text-muted-foreground font-mono mt-1">BKK → CNX • 1h 15m</p>
                    </div>
                    <div className="ml-auto font-mono text-sm">฿1,200</div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center flex-shrink-0 text-indigo-600">
                      <Hotel className="w-4 h-4" />
                    </div>
                    <div>
                      <h5 className="font-bold text-sm">Boutique Hotel</h5>
                      <p className="text-xs text-muted-foreground font-mono mt-1">3 Nights • Nimman</p>
                    </div>
                    <div className="ml-auto font-mono text-sm">฿4,500</div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-pink-100 flex items-center justify-center flex-shrink-0 text-pink-600">
                      <Ticket className="w-4 h-4" />
                    </div>
                    <div>
                      <h5 className="font-bold text-sm">Doi Inthanon Tour</h5>
                      <p className="text-xs text-muted-foreground font-mono mt-1">Full Day • Guided</p>
                    </div>
                    <div className="ml-auto font-mono text-sm">฿1,500</div>
                  </div>

                  <div className="pt-4 border-t border-border flex justify-between items-center">
                    <span className="font-bold">Total</span>
                    <span className="font-mono text-lg font-bold text-primary">฿7,200</span>
                  </div>
                </div>
                
                <div className="mt-8">
                  <Button className="w-full font-mono uppercase tracking-wider bg-secondary text-secondary-foreground hover:bg-primary hover:text-white transition-colors">Start Planning Now</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container text-center max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">Don't Miss the Next Deal</h2>
          <p className="text-primary-foreground/80 mb-8 text-lg">
            Join thousands of travelers getting the best Thailand travel tips and deals.
          </p>
          <form className="flex flex-col sm:flex-row gap-4" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Enter your email address" 
              className="flex-1 h-12 px-4 bg-white/10 border border-white/20 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
            />
            <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-white hover:text-primary font-bold px-8">
              Subscribe
            </Button>
          </form>
          <p className="text-xs text-primary-foreground/60 mt-4 font-mono">
            No spam. Unsubscribe anytime.
          </p>
        </div>
      </section>
    </Layout>
  );
}
