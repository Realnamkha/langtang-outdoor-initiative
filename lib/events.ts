import { ItineraryDay } from "@/components/ui/Itinerary";

export type FaqItem = {
  q: string;
  a: string;
};

export type EventDetails = {
  duration: string;
  difficulty: string;
  maxAltitude: string;
  groupSize: string;
  price: string;
  about: string;
  highlights: { title: string; description: string }[];
  includes: string[];
  notIncluded: string[];
  itinerary: ItineraryDay[];
  faqs: FaqItem[];
};

export type FestivalEvent = {
  id: number;
  slug: string;
  season: string;
  title: string;
  date: string;
  location: string;
  description: string;
  icon?: string;
  bgImage: string;
  tag?: string;
  accentHex: string;
  accentFrom: string;
  accentTo: string;
  details: EventDetails;
  comingSoon?: boolean;
};

export const events: FestivalEvent[] = [
  {
    id: 1,
    slug: "langtang-boulder-hunt",
    season: "Summer",
    title: "Langtang Boulder Hunt",
    date: "June 1 – June 15, 2026",
    location: "Langtang Valley",
    description: "The World's Highest Outdoor Festival",
    bgImage: "/event_02.JPG",
    accentHex: "#38bdf8",
    accentFrom: "from-sky-400",
    accentTo: "to-blue-500",
    details: {
      duration: "15 Days",
      difficulty: "Moderate–Hard",
      maxAltitude: "4,984m",
      groupSize: "8–14",
      price: "$1,850",
      about:
        "Langtang Outdoor Initiative: The Langtang Boulder Hunt is a premier mountain festival situated in the heart of Nepal’s Langtang Valley. Operating at an elevation between 3,200m and 4,000m, it holds the distinction of being the world’s highest outdoor festival, a high-altitude celebration of adventure, community, and the Himalayan spirit.",
      highlights: [
        {
          title: "High-Altitude Bouldering",
          description:
            "Discover and climb pristine granite boulders scattered across the glacial valley.",
        },
        {
          title: "Trekking",
          description:
            "Journey through the iconic Langtang National Park, experiencing its unique flora, fauna, and panoramic views.",
        },
        {
          title: "High line/Slack line",
          description:
            "Engage in High-lining and Slack-lining against a backdrop of 7,000-meter peaks.",
        },
        {
          title: "Via Ferrata",
          description:
            "Experience the thrill of protected climbing routes in a high-alpine setting.",
        },
        {
          title: "Calisthenics",
          description:
            "Develop bodyweight mastery and physical discipline in a unique, thin-air environment.",
        },
        {
          title: "Camping",
          description:
            "Immerse yourself in the elements with organized community camping under the Himalayan stars.",
        },
      ],
      includes: [
        "All trekking permits & entry fees",
        "Climbing gear rental",
        "All meals on trail",
        "Teahouse lodging",
        "Safety & first-aid equipment",
        "Expert local guides",
      ],
      notIncluded: [
        "International flights",
        "Travel insurance",
        "Personal gear",
        "Tips & gratuities",
      ],
      itinerary: [
        {
          day: "June 1",
          title: "Kathmandu to Sherpa-Gaun",
          description:
            "Jeep ride of 6-7 hours through the Trishuli River, Shyabru-Besi, and Khamjim, followed by 45 minutes of hiking to reach Sherpa Gaun for overnight stay.",
          altitude: "1300M",
          stay: "Hotel",
        },
        {
          day: "June 2",
          title: "Sherpa-Gaun to Ghoda Tabela",
          sections: [
            {
              label: "07:00",
              content:
                "Morning Briefing & Breakfast: Begin the day with a nutritious breakfast to fuel the upcoming ascent.",
            },
            {
              label: "07:30",
              content:
                "Preparation & Warm-up: A guided stretching and mobility session specifically tailored for high-altitude hiking to prevent injury and improve circulation.",
            },
            {
              label: "08:00",
              content:
                "Departure: We hit the trail promptly to take advantage of the optimal morning weather conditions.",
            },
            {
              label: "Mid-Day",
              content:
                "Field Lunch: Depending on the group's pace and appetite, a curated lunch will be served at either Woodland or Ghoda Tabela.",
            },
            {
              label: "Evening",
              content:
                "Base Establishment: We will reach our destination of Thangshyap, where we will establish a multi-night camp. This extended stay allows for proper acclimatization and deeper exploration of the surrounding terrain.",
            },
          ],
          altitude: "2550M",
          stay: "Tea House",
        },
        {
          day: "June 3",
          title: "Ghoda-Tabela to Langtang",
          sections: [
            {
              label: "07:00",
              content:
                "Morning Wake-up: Rise early to the morning light of the Langtang Valley.",
            },
            {
              label: "07:30",
              content:
                "Breakfast: A nutritious morning meal to fuel the day's movement.",
            },
            {
              label: "08:00",
              content:
                "Mobility & Stretching: A guided session designed to prepare the body for high-altitude trekking.",
            },
            {
              label: "08:30",
              content:
                "Departure: We begin the trail promptly, moving toward the upper reaches of the valley.",
            },
            {
              label: "Mid-Day",
              content:
                "Arrival & Lunch: Following a scenic two-hour hike, we will arrive in Langtang Village for a community lunch.",
            },
            {
              label: "Noon",
              content:
                "Recovery & Acclimatization: The afternoon is dedicated to rest, followed by a light acclimatization hike to assist the body in adapting to the increased elevation.",
            },
            {
              label: "Evening",
              content:
                " Briefing & Overnight: We will stay overnight in the village. The evening will conclude with a technical briefing for the following day’s Via Ferrata event, covering safety protocols and gear management.",
            },
          ],
          altitude: "3000M",
          stay: "Tea House",
        },
        {
          day: "June 4",
          title: "Langtang Activity Day",
          sections: [
            {
              label: "07:00",
              content:
                "Morning Wake-up: Rise early to the morning light of the Langtang Valley.",
            },
            {
              label: "07:30",
              content:
                "Mobility & Stretching: A guided warm-up session to prepare for high-altitude movement.",
            },
            {
              label: "08:00",
              content:
                "Activity Departure: Participants will transition to their chosen disciplines.",
            },
            {
              label: "Option 1: The Langtang Via Ferrata Experience",
              content:
                "This 1.9 km beginner-friendly route offers a safe yet thrilling introduction to technical climbing. The ascent takes approximately 4–5 hours, reaching an elevation of 4,000m. At the summit, climbers are rewarded with a breathtaking bird's-eye view of the Langtang Valley and the majestic south face of Langtang Lirung.",
            },
            {
              label: "Option 2: Langtang Valley Bouldering Session",
              content:
                "For those not participating in the Via Ferrata, a guided bouldering session will be held among the diverse granite blocks surrounding the valley. This allows for a focus on technique and movement at a lower intensity.",
            },
            {
              label: "Logistics & Event Coordination",
              content:
                "While participants are in the field, half of the organizing team will relocate to the Hard Rock Cafe area to manage the infrastructure for upcoming festival days, including the setup of banners, flyers, and event tents.",
            },
            {
              label: "Night",
              content:
                "All participants and staff will stay overnight in Langtang Village to continue acclimatization.",
            },
          ],
          altitude: "3450M",
          stay: "Tea House",
        },
        {
          day: "June 5",
          title: "Langtang to Hard Rock Cafe Base Camp",
          sections: [
            {
              label: "06:00",
              content:
                "Morning Wake-up: An early start to maximize the clear morning weather.",
            },
            {
              label: "06:30",
              content:
                "Breakfast: A high-energy meal to prepare for the transition to our base camp.",
            },
            {
              label: "07:00",
              content:
                "Expedition Departure: A scenic two-hour trek toward the Hard Rock Cafe bouldering area.",
            },
            {
              label: "10:30",
              content:
                "Sacred Puja Ceremony: In alignment with local traditions, we will hold a formal Puja. This ceremony is conducted to show respect to the mountain spirits, seeking their blessing for a safe, successful event and permission to climb among these sacred peaks.",
            },
            {
              label: "11:30",
              content:
                "Base Camp Settlement: Distribution of high-altitude tents. Accommodations are provided on a shared-occupancy basis to foster community and minimize our environmental footprint.",
            },
            {
              label: "12:30",
              content: "Field Lunch: A hot lunch served at the new base camp.",
            },
            {
              label: "14:00",
              content:
                "Guided Boulder Orientation: A walkthrough of the primary boulder fields. This session is designed to familiarize participants with the layout, safety zones, and specific problems within the sector.",
            },
            {
              label: "Evening",
              content:
                "Alpine Residency: This marks the first of five nights of wilderness camping, where we will live, climb, and celebrate in the heart of the Himalayas.",
            },
          ],
          altitude: "3620M",
          stay: "Tent",
        },
        {
          day: "June 6",
          title: "Hard Rock Cafe",
          description:
            "Following our arrival at the primary bouldering field, the festival transitions into a flexible, participant-led format. This allows everyone to pursue their specific interests—whether bouldering, high-lining, or calisthenics—at their own pace while maintaining a consistent communal structure for meals and recovery.",
          sections: [
            {
              label: "08:00",
              content: "Breakfast: Group morning meal and daily briefing.",
            },
            {
              label: "12:30",
              content:
                "Lunch: High-energy field lunch served at the base camp.",
            },
            {
              label: "16:00",
              content:
                "Noon Tea: A dedicated time for recovery, hydration, and social connection.",
            },
            {
              label: "19:00",
              content:
                "Dinner: Communal evening meal and reflection on the day’s sends.",
            },
            {
              label: "Flexible Activity & Specialized Workshops",
              content:
                "Outside of these scheduled mealtimes, participants are free to explore the valley and engage in their preferred outdoor disciplines.",
            },
          ],
        },
        {
          day: "June 10",
          title: "Hard Rock Cafe to Kyanjin Gompa",
          sections: [
            {
              label: "07:00",
              content:
                "Morning Wake-up: Final morning at the current campsite.",
            },
            {
              label: "07:30",
              content: "Breakfast: Group meal and energy replenishment.",
            },
            {
              label: "08:00–09:00",
              content:
                "Camp Deconstruction: A dedicated 'Pack-up Session' to ensure all gear is secured and the site is left in pristine condition (Leave No Trace)",
            },
            {
              label: "09:30",
              content:
                "Expedition Departure: A scenic 1.5-hour trek to Kyanjin, our base for the remainder of the festival.",
            },
            {
              label: "12:30",
              content:
                "Lunch: Served at our dedicated partner hotel in Kyanjin",
            },
            {
              label: "Noon",
              content:
                "Recovery & Exploration: The remainder of the day is flexible. Participants may choose to rest and acclimatize or join a guided orientation hike to the nearby boulder fields to scout new lines for the upcoming days",
            },
          ],
          altitude: "3845M",
        },
        {
          day: "June 11",
          title: "Kyanjin Gompa",
          description:
            "Participant-led activities, fixed mealtimes, and specialized workshops continue in Kyanjin region. Overnight at Tea House.",
          sections: [
            {
              label: "08:00",
              content:
                "Breakfast & Daily Briefing: Group morning meal and announcement of the day's conditions.",
            },
            {
              label: "12:30",
              content: "Lunch: High-energy meal served at the hotel.",
            },
            {
              label: "16:00",
              content:
                "Noon Tea: A dedicated window for hydration, recovery, and social connection.",
            },
            {
              label: "19:00",
              content:
                "Dinner & Reflection: Communal evening meal to share stories and celebrate the day’s achievements.",
            },
            {
              label: "Flexible Activity & Specialized Workshops",
              content:
                "The Kyanjin region offers some of the most spectacular terrain in the valley. Outside of scheduled mealtimes, participants are encouraged to engage in their preferred disciplines, whether that is pushing grades on the Kyanjin boulder fields, high-lining, or practicing calisthenics with a view of Langtang Lirung.",
            },
            {
              label: "Noon",
              content:
                "Recovery & Exploration: The remainder of the day is flexible. Participants may choose to rest and acclimatize or join a guided orientation hike to the nearby boulder fields to scout new lines for the upcoming days",
            },
          ],
          stay: "Tea House",
        },
        {
          day: "June 15",
          title: "Closing Ceremony",
          description:
            "The final evening in Kyanjin will be dedicated to a communal farewell, intentionally designed without a rigid schedule to allow for a natural and relaxed conclusion to the festival. As the sun sets behind the peaks of Langtang Lirung, we will gather for a final celebratory dinner at our partner hotel to share stories and reflect on the achievements of the past week. This informal closing serves as a time for participants, organizers, and the local community to connect one last time, honoring the bonds formed through high-altitude adventure.",
          altitude: "3845M",
          stay: "Tea House",
        },
      ],
      faqs: [
        {
          q: "Do I need prior climbing experience?",
          a: "Basic fitness required. No technical climbing experience needed — our guides handle everything.",
        },
        {
          q: "What's the weather like in June?",
          a: "Pre-monsoon: warm days (15–20°C at base), cold nights at altitude. Layering is essential.",
        },
        {
          q: "Is this suitable for solo travelers?",
          a: "Absolutely. Most participants are solo adventurers. Great community energy.",
        },
      ],
    },
  },
  {
    id: 2,
    slug: "langtang-winter-fest",
    season: "Winter",
    title: "Langtang Winter Fest",
    date: "December 1 – December 10, 2026",
    location: "Langtang Valley",
    description: "A Winter Celebration of Mountains and Adventure",
    bgImage: "/landscape_winter.jpg",
    accentHex: "#60a5fa",
    accentFrom: "from-blue-400",
    accentTo: "to-indigo-500",
    comingSoon: true,
    details: {
      duration: "",
      difficulty: "",
      maxAltitude: "",
      groupSize: "",
      price: "",
      about: "",
      highlights: [], // empty
      includes: [], // empty
      notIncluded: [], // empty
      itinerary: [], // empty
      faqs: [], // empty
    },
  },
];

export function getEventBySlug(slug: string): FestivalEvent | undefined {
  return events.find((e) => e.slug === slug);
}
