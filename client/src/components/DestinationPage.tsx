import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Plane, Hotel, Ticket, Car, Wifi, ShieldCheck, ExternalLink, MapPin } from "lucide-react";
import { Link } from "wouter";

export interface DestinationData {
  id: string;
  name: string;
  tagline: string;
  description: string;
  heroImage: string;
  sections: {
    flights: {
      title: string;
      content: string;
      airports: string[];
      affiliateLink: string;
    };
    hotels: {
      title: string;
      content: string;
      areas: { name: string; description: string }[];
      affiliateLink: string;
    };
    activities: {
      title: string;
      content: string;
      topActivities: { name: string; description: string; image?: string }[];
      affiliateLink: string;
    };
    transfers: {
      title: string;
      content: string;
      options: { name: string; pros: string; cons: string }[];
      affiliateLink: string;
    };
    esim: {
      title: string;
      content: string;
      affiliateLink: string;
    };
    insurance: {
      title: string;
      content: string;
      affiliateLink: string;
    };
  };
}

export default function DestinationPage({ data }: { data: DestinationData }) {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={data.heroImage} 
            alt={data.name} 
            className="w-full h-full object-cover grayscale contrast-125 brightness-75"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-90" />
        </div>
        
        <div className="container relative z-10 text-center">
          <div className="inline-block bg-primary px-4 py-1 mb-4">
            <span className="text-white font-mono text-xs uppercase tracking-widest">Destination Guide</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-white mb-4">
            {data.name.toUpperCase()}
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto font-light tracking-wide">
            {data.tagline}
          </p>
        </div>
      </section>

      {/* Quick Nav / Intro */}
      <section className="py-12 border-b border-border">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <p className="text-xl leading-relaxed text-muted-foreground">
                {data.description}
              </p>
            </div>
            <div className="bg-muted p-6 border-l-4 border-primary">
              <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-primary" />
                Trip Essentials
              </h3>
              <ul className="space-y-3 font-mono text-sm">
                <li className="flex justify-between">
                  <span>Flight Time:</span>
                  <span className="text-muted-foreground">Varies</span>
                </li>
                <li className="flex justify-between">
                  <span>Currency:</span>
                  <span className="text-muted-foreground">Local</span>
                </li>
                <li className="flex justify-between">
                  <span>Best Time:</span>
                  <span className="text-muted-foreground">Nov - Feb</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 1. Flights */}
      <section className="py-24 bg-background" id="flights">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-4 sticky top-24">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 flex items-center justify-center rounded-none">
                  <Plane className="w-6 h-6" />
                </div>
                <h2 className="text-3xl font-bold tracking-tight">Getting There</h2>
              </div>
              <p className="text-muted-foreground mb-8">
                {data.sections.flights.content}
              </p>
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-mono uppercase tracking-wider h-12" asChild>
                <a href={data.sections.flights.affiliateLink} target="_blank" rel="noopener noreferrer">
                  Find Flights <ExternalLink className="ml-2 w-4 h-4" />
                </a>
              </Button>
            </div>
            <div className="lg:col-span-8 bg-muted/30 p-8 border border-border">
              <h3 className="font-bold text-xl mb-6">Main Airports</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {data.sections.flights.airports.map((airport, idx) => (
                  <div key={idx} className="bg-background p-4 border border-border flex items-center justify-between">
                    <span className="font-mono font-bold">{airport}</span>
                    <Plane className="w-4 h-4 text-muted-foreground" />
                  </div>
                ))}
              </div>
              <div className="mt-8 p-4 bg-blue-50 border border-blue-100 text-blue-800 text-sm">
                <strong>Pro Tip:</strong> Use our flight search to compare prices across all major airlines instantly.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Hotels */}
      <section className="py-24 bg-muted/20 border-y border-border" id="hotels">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-4 sticky top-24">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-indigo-100 text-indigo-600 flex items-center justify-center rounded-none">
                  <Hotel className="w-6 h-6" />
                </div>
                <h2 className="text-3xl font-bold tracking-tight">Where to Stay</h2>
              </div>
              <p className="text-muted-foreground mb-8">
                {data.sections.hotels.content}
              </p>
              <Button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-mono uppercase tracking-wider h-12" asChild>
                <a href={data.sections.hotels.affiliateLink} target="_blank" rel="noopener noreferrer">
                  Find Hotels <ExternalLink className="ml-2 w-4 h-4" />
                </a>
              </Button>
            </div>
            <div className="lg:col-span-8">
              <h3 className="font-bold text-xl mb-6">Best Neighborhoods</h3>
              <div className="grid grid-cols-1 gap-6">
                {data.sections.hotels.areas.map((area, idx) => (
                  <div key={idx} className="bg-background p-6 border border-border hover:border-primary transition-colors group">
                    <h4 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">{area.name}</h4>
                    <p className="text-muted-foreground">{area.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Activities */}
      <section className="py-24 bg-background" id="activities">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-4 sticky top-24">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-pink-100 text-pink-600 flex items-center justify-center rounded-none">
                  <Ticket className="w-6 h-6" />
                </div>
                <h2 className="text-3xl font-bold tracking-tight">Things To Do</h2>
              </div>
              <p className="text-muted-foreground mb-8">
                {data.sections.activities.content}
              </p>
              <Button className="w-full bg-pink-600 hover:bg-pink-700 text-white font-mono uppercase tracking-wider h-12" asChild>
                <a href={data.sections.activities.affiliateLink} target="_blank" rel="noopener noreferrer">
                  Book Activities <ExternalLink className="ml-2 w-4 h-4" />
                </a>
              </Button>
            </div>
            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {data.sections.activities.topActivities.map((activity, idx) => (
                  <div key={idx} className="group cursor-pointer">
                    <div className="aspect-video bg-muted mb-4 overflow-hidden">
                       {/* Placeholder for activity image if not provided */}
                       <div className="w-full h-full bg-gray-200 flex items-center justify-center text-muted-foreground">
                          {activity.image ? <img src={activity.image} alt={activity.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" /> : <Ticket className="w-8 h-8 opacity-20" />}
                       </div>
                    </div>
                    <h4 className="font-bold text-lg mb-2 group-hover:text-pink-600 transition-colors">{activity.name}</h4>
                    <p className="text-sm text-muted-foreground">{activity.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Essentials Grid (Transfers, eSIM, Insurance) */}
      <section className="py-24 bg-muted/30 border-t border-border" id="essentials">
        <div className="container">
          <h2 className="text-3xl font-bold tracking-tight mb-12 text-center">Trip Essentials</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Transfers */}
            <div className="bg-background p-8 border border-border flex flex-col">
              <div className="w-12 h-12 bg-orange-100 text-orange-600 flex items-center justify-center rounded-none mb-6">
                <Car className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-xl mb-4">{data.sections.transfers.title}</h3>
              <p className="text-muted-foreground text-sm mb-6 flex-grow">
                {data.sections.transfers.content}
              </p>
              <ul className="space-y-4 mb-8">
                {data.sections.transfers.options.map((opt, idx) => (
                  <li key={idx} className="text-sm border-b border-border pb-2 last:border-0">
                    <div className="font-bold">{opt.name}</div>
                    <div className="text-xs text-green-600">Pros: {opt.pros}</div>
                    <div className="text-xs text-red-500">Cons: {opt.cons}</div>
                  </li>
                ))}
              </ul>
              <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-mono uppercase tracking-wider" asChild>
                <a href={data.sections.transfers.affiliateLink} target="_blank" rel="noopener noreferrer">
                  Book Transfer
                </a>
              </Button>
            </div>

            {/* eSIM */}
            <div className="bg-background p-8 border border-border flex flex-col">
              <div className="w-12 h-12 bg-green-100 text-green-600 flex items-center justify-center rounded-none mb-6">
                <Wifi className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-xl mb-4">{data.sections.esim.title}</h3>
              <p className="text-muted-foreground text-sm mb-6 flex-grow">
                {data.sections.esim.content}
              </p>
              <div className="bg-green-50 p-4 mb-8 border border-green-100">
                <p className="text-sm text-green-800 font-medium">
                  Don't pay roaming fees. Get an eSIM instantly and stay connected the moment you land.
                </p>
              </div>
              <Button className="w-full bg-green-600 hover:bg-green-700 text-white font-mono uppercase tracking-wider" asChild>
                <a href={data.sections.esim.affiliateLink} target="_blank" rel="noopener noreferrer">
                  Get eSIM
                </a>
              </Button>
            </div>

            {/* Insurance */}
            <div className="bg-background p-8 border border-border flex flex-col">
              <div className="w-12 h-12 bg-red-100 text-red-600 flex items-center justify-center rounded-none mb-6">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-xl mb-4">{data.sections.insurance.title}</h3>
              <p className="text-muted-foreground text-sm mb-6 flex-grow">
                {data.sections.insurance.content}
              </p>
              <div className="bg-red-50 p-4 mb-8 border border-red-100">
                <p className="text-sm text-red-800 font-medium">
                  Medical emergencies can cost thousands. Protect yourself starting from just a few dollars a day.
                </p>
              </div>
              <Button className="w-full bg-red-600 hover:bg-red-700 text-white font-mono uppercase tracking-wider" asChild>
                <a href={data.sections.insurance.affiliateLink} target="_blank" rel="noopener noreferrer">
                  Get Insured
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
