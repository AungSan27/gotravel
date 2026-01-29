import DestinationPage, { DestinationData } from "@/components/DestinationPage";

const tokyoData: DestinationData = {
  id: "tokyo",
  name: "Tokyo",
  tagline: "Where Future Meets Tradition",
  description: "Tokyo is a city of infinite layers. It's a place where centuries-old shrines sit in the shadow of futuristic skyscrapers. It's the cleanest, safest, and most polite megalopolis on Earth. From the fashion of Harajuku to the sushi of Tsukiji, Tokyo is an adventure for every sense.",
  heroImage: "/images/tokyo.jpg",
  sections: {
    flights: {
      title: "Flights to Tokyo",
      content: "Tokyo has two major airports: Narita (NRT) and Haneda (HND). Haneda is much closer to the city center, saving you time and money on transfers.",
      airports: ["Haneda Airport (HND)", "Narita International Airport (NRT)"],
      affiliateLink: "https://www.kiwi.com/en/search/results/anywhere/tokyo-japan",
    },
    hotels: {
      title: "Where to Stay",
      content: "Tokyo's rail network is amazing, so staying near a Yamanote Line station is the best strategy.",
      areas: [
        { name: "Shinjuku", description: "The busiest part of Tokyo. Neon lights, skyscrapers, and endless dining." },
        { name: "Shibuya", description: "Youth culture hub, famous crossing, and great shopping." },
        { name: "Ginza", description: "Luxury shopping and high-end dining. The 5th Avenue of Tokyo." },
        { name: "Asakusa", description: "Old Tokyo vibes. Home to Senso-ji Temple and traditional ryokans." },
      ],
      affiliateLink: "https://www.traveloka.com/en-th/hotel/japan/city/tokyo-10000060",
    },
    activities: {
      title: "Top Things to Do",
      content: "Tokyo is dense with experiences. Plan your days by neighborhood to minimize travel time.",
      topActivities: [
        { name: "Shibuya Crossing", description: "The world's busiest pedestrian crossing. A chaotic masterpiece.", image: "/images/tokyo.jpg" },
        { name: "TeamLab Planets", description: "An immersive digital art museum where you walk through water." },
        { name: "Senso-ji Temple", description: "Tokyo's oldest and most significant Buddhist temple." },
        { name: "Tsukiji Outer Market", description: "Fresh sushi, street food, and kitchenware galore." },
      ],
      affiliateLink: "https://www.klook.com/city/28-tokyo-things-to-do/",
    },
    transfers: {
      title: "Airport Transfers",
      content: "Taxis in Japan are expensive. The trains and limousines buses are efficient and comfortable.",
      options: [
        { name: "Narita Express (N'EX)", pros: "Fast, direct to major stations", cons: "Expensive for solo travelers" },
        { name: "Airport Limousine Bus", pros: "Direct to hotel door, no luggage hauling", cons: "Can get stuck in traffic" },
        { name: "Keisei Skyliner", pros: "Fastest to Ueno/Nippori", cons: "Requires transfer for Shinjuku/Shibuya" },
      ],
      affiliateLink: "https://www.welcomepickups.com/tokyo/",
    },
    esim: {
      title: "Internet & eSIM",
      content: "Free WiFi is not as common in Japan as you might think. A data connection is essential for maps and translation.",
      affiliateLink: "https://www.airalo.com/japan-esim",
    },
    insurance: {
      title: "Travel Insurance",
      content: "Healthcare in Japan is excellent but costs can add up quickly for tourists without insurance.",
      affiliateLink: "https://ekta.insure/",
    },
  },
};

export default function Tokyo() {
  return <DestinationPage data={tokyoData} />;
}
