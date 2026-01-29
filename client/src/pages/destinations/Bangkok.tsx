import DestinationPage, { DestinationData } from "@/components/DestinationPage";

const bangkokData: DestinationData = {
  id: "bangkok",
  name: "Bangkok",
  tagline: "The City of Angels",
  description: "Bangkok is a sensory overload in the best way possible. From the golden spires of the Grand Palace to the neon-lit streets of Sukhumvit, this city blends ancient tradition with hyper-modernity. It's the world's street food capital, a shopper's paradise, and the gateway to Southeast Asia.",
  heroImage: "/images/bangkok.jpg",
  sections: {
    flights: {
      title: "Flights to Bangkok",
      content: "Bangkok is served by two main airports: Suvarnabhumi (BKK) and Don Mueang (DMK). BKK handles most long-haul international flights, while DMK is the hub for low-cost carriers like AirAsia.",
      airports: ["Suvarnabhumi Airport (BKK)", "Don Mueang Airport (DMK)"],
      affiliateLink: "https://www.kiwi.com/en/search/results/anywhere/bangkok-thailand",
    },
    hotels: {
      title: "Where to Stay",
      content: "Bangkok is huge, so choosing the right neighborhood is key. Stay near the BTS Skytrain or MRT Subway to beat the traffic.",
      areas: [
        { name: "Sukhumvit", description: "The heart of modern Bangkok. Great for nightlife, shopping, and luxury hotels." },
        { name: "Riverside", description: "Scenic and upscale. Home to the Mandarin Oriental and Peninsula." },
        { name: "Old City (Rattanakosin)", description: "Close to the Grand Palace and temples. More traditional vibe." },
        { name: "Siam", description: "The shopping center of the city. Malls, malls, and more malls." },
      ],
      affiliateLink: "https://www.traveloka.com/en-th/hotel/thailand/city/bangkok-10000045",
    },
    activities: {
      title: "Top Things to Do",
      content: "You could spend a lifetime in Bangkok and not see it all. Here are the absolute must-dos for first-timers.",
      topActivities: [
        { name: "Grand Palace & Wat Phra Kaew", description: "The dazzling spiritual heart of the Thai Kingdom.", image: "/images/bangkok.jpg" },
        { name: "Wat Arun at Sunset", description: "The Temple of Dawn is best viewed from across the river at twilight." },
        { name: "Chatuchak Weekend Market", description: "One of the world's largest markets with over 15,000 stalls." },
        { name: "Street Food Tour in Chinatown", description: "Yaowarat Road is famous for its incredible night eats." },
      ],
      affiliateLink: "https://www.klook.com/city/4-bangkok-things-to-do/",
    },
    transfers: {
      title: "Airport Transfers",
      content: "Avoid the taxi scams. Pre-booking your transfer is the stress-free way to start your trip.",
      options: [
        { name: "Welcome Pickups", pros: "English-speaking driver, flight monitoring", cons: "More expensive than public taxi" },
        { name: "Airport Rail Link", pros: "Fast, cheap, beats traffic", cons: "Crowded, doesn't go everywhere" },
        { name: "Grab (App)", pros: "Fixed price, convenient", cons: "Surge pricing during rush hour" },
      ],
      affiliateLink: "https://www.welcomepickups.com/bangkok/",
    },
    esim: {
      title: "Internet & eSIM",
      content: "Thailand has excellent 5G coverage. An eSIM is the easiest way to get connected without swapping physical cards.",
      affiliateLink: "https://www.airalo.com/thailand-esim",
    },
    insurance: {
      title: "Travel Insurance",
      content: "Medical care in Bangkok's private hospitals is world-class but expensive. Don't travel without coverage.",
      affiliateLink: "https://ekta.insure/",
    },
  },
};

export default function Bangkok() {
  return <DestinationPage data={bangkokData} />;
}
