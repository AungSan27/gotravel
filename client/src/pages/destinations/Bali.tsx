import DestinationPage, { DestinationData } from "@/components/DestinationPage";

const baliData: DestinationData = {
  id: "bali",
  name: "Bali",
  tagline: "Island of the Gods",
  description: "Bali is more than just a destination; it's a mood. It's tropical beaches, lush rice terraces, spiritual temples, and a vibrant cafe culture. Whether you're a surfer, a yogi, or a digital nomad, Bali has a corner just for you.",
  heroImage: "/images/bali.jpg",
  sections: {
    flights: {
      title: "Flights to Bali",
      content: "The gateway to Bali is Ngurah Rai International Airport (DPS) in Denpasar. It's well-connected to major hubs in Asia and Australia.",
      airports: ["Ngurah Rai International Airport (DPS)"],
      affiliateLink: "https://www.kiwi.com/en/search/results/anywhere/denpasar-bali-indonesia",
    },
    hotels: {
      title: "Where to Stay",
      content: "Bali has distinct vibes in different areas. Choose wisely based on what you want to do.",
      areas: [
        { name: "Ubud", description: "The cultural heart. Rice terraces, yoga, monkeys, and jungle vibes." },
        { name: "Seminyak", description: "Upscale beach clubs, fine dining, and luxury villas." },
        { name: "Canggu", description: "The digital nomad capital. Hipster cafes, surf breaks, and beach bars." },
        { name: "Uluwatu", description: "Dramatic cliffs, white sand beaches, and world-class surfing." },
      ],
      affiliateLink: "https://www.traveloka.com/en-th/hotel/indonesia/region/bali-102746",
    },
    activities: {
      title: "Top Things to Do",
      content: "From chasing waterfalls to climbing volcanoes, Bali is an outdoor lover's playground.",
      topActivities: [
        { name: "Tegalalang Rice Terrace", description: "Iconic green layers of rice paddies. Go early for the light.", image: "/images/bali.jpg" },
        { name: "Mount Batur Sunrise Trek", description: "Hike up an active volcano for an unforgettable sunrise." },
        { name: "Uluwatu Temple", description: "Watch the Kecak Fire Dance on a cliff at sunset." },
        { name: "Nusa Penida Day Trip", description: "Visit the famous Kelingking Beach (T-Rex Beach)." },
      ],
      affiliateLink: "https://www.klook.com/city/6-bali-things-to-do/",
    },
    transfers: {
      title: "Airport Transfers",
      content: "Public transport is non-existent. You need a private driver or a scooter.",
      options: [
        { name: "Private Driver", pros: "Air-conditioned, safe, fixed price", cons: "More expensive than scooter" },
        { name: "Grab/Gojek", pros: "Cheap and easy app booking", cons: "Banned in some local areas" },
        { name: "Scooter Rental", pros: "Ultimate freedom, cheap", cons: "Dangerous if inexperienced" },
      ],
      affiliateLink: "https://www.welcomepickups.com/bali/",
    },
    esim: {
      title: "Internet & eSIM",
      content: "WiFi is everywhere in cafes, but you'll want data for navigating the backroads.",
      affiliateLink: "https://www.airalo.com/indonesia-esim",
    },
    insurance: {
      title: "Travel Insurance",
      content: "Bali Belly (food poisoning) and scooter accidents are common. Comprehensive insurance is a must.",
      affiliateLink: "https://ekta.insure/",
    },
  },
};

export default function Bali() {
  return <DestinationPage data={baliData} />;
}
