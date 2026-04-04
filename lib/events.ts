export type ScheduleItem = {
  day: string;
  label: string;
};

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
  highlights: string[];
  includes: string[];
  notIncluded: string[];
  schedule: ScheduleItem[];
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
  icon: string;
  bgImage: string;
  tag?: string;
  accentHex: string;
  accentFrom: string;
  accentTo: string;
  details: EventDetails;
};

export const events: FestivalEvent[] = [
  {
    id: 1,
    slug: "langtang-boulder-hunt",
    season: "Summer",
    title: "Langtang Boulder Hunt",
    date: "June 1 – June 15, 2026",
    location: "Langtang Valley",
    description: "The Wolrd's Highest Outdoor Festival",
    icon: "☀️",
    accentHex: "#38bdf8",
    accentFrom: "from-sky-400",
    accentTo: "to-blue-500",
    bgImage: "/landscape_02.jpg",
    details: {
      duration: "15 Days",
      difficulty: "Moderate–Hard",
      maxAltitude: "4,984m",
      groupSize: "8–14",
      price: "$1,850",
      about:
        "Langtang Outdoor Initiative The Langtang Boulder Hunt is a premier mountain festival situated in the heart of Nepal’s Langtang Valley. Operating at an elevation between 3,200m and 4,000m, it holds the distinction of being the world’s highest outdoor festival, a high-altitude celebration of adventure, community, and the Himalayan spirit. This multidisciplinary gathering is designed by the community, for the community, bringing together like-minded enthusiasts to celebrate a shared love for the mountains.",
      highlights: [
        "High-Altitude Bouldering: Discover and climb pristine granite boulders scattered across the glacial valley.",
        "Trekking: Journey through the iconic Langtang National Park, experiencing its unique flora, fauna, and panoramic views.",
        "High line/Slack line: Engage in High-lining and Slack-lining against a backdrop of 7,000-meter peaks.",
        "Via Ferrata: Experience the thrill of protected climbing routes in a high-alpine setting.",
        "Calisthenics: Develop bodyweight mastery and physical discipline in a unique, thin-air environment.",
        "Camping: Immerse yourself in the elements with organized community camping under the Himalayan stars.",
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
      schedule: [
        {
          day: "Day 1–2",
          label: "Kathmandu arrival & acclimatization briefing",
        },
        { day: "Day 3", label: "Drive to Syabrubesi — gateway to Langtang" },
        { day: "Day 4–5", label: "Trek through rhododendron forests to base" },
        {
          day: "Day 6–12",
          label: "Bouldering sessions & peak attempt windows",
        },
        { day: "Day 13", label: "Rest day — monastery visit & local culture" },
        {
          day: "Day 14–15",
          label: "Descent & celebration dinner in the valley",
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
    date: "Stay Tuned",
    location: "Langtang Valley, Nepal",
    description:
      "An intimate winter evening with lantern walks, acoustic performances, warm drinks, and stargazing sessions.",
    icon: "❄️",
    bgImage: "/landscape_02.jpg",
    tag: "Selling Fast",
    accentHex: "#38bdf8",
    accentFrom: "from-sky-400",
    accentTo: "to-blue-500",
    details: {
      duration: "5 Evenings",
      difficulty: "Easy",
      maxAltitude: "3,430m",
      groupSize: "Up to 180",
      price: "$320",
      about:
        "Winter transforms Langtang into a silent, snow-draped world unlike any other. The Winter Fest is an intimate gathering — folk music echoing off ice-covered peaks, lanterns floating above frozen trails, and telescope sessions revealing skies unspoiled by light pollution. An unforgettable sensory experience.",
      highlights: [
        "Lantern procession through snowed-in trails",
        "Acoustic live sets by Nepali folk artists",
        "Himalayan stargazing with professional telescopes",
        "Traditional Tamang food & yak butter tea",
        "Bonfire storytelling & ice sculpture walk",
        "Winter photography workshop at golden hour",
      ],
      includes: [
        "5-evening festival pass",
        "Guided lantern walk",
        "Welcome dinner",
        "Stargazing kit",
        "Festival tote & souvenirs",
        "Local transport from Syabrubesi",
      ],
      notIncluded: [
        "Accommodation",
        "International travel",
        "Personal expenses",
        "Extra food & drink",
      ],
      schedule: [
        { day: "Eve 1", label: "Opening ceremony & grand lantern lighting" },
        { day: "Eve 2", label: "Folk music night & traditional Tamang feast" },
        { day: "Eve 3", label: "Ice sculpture trail & hot spring soak" },
        { day: "Eve 4", label: "Stargazing summit walk with telescopes" },
        { day: "Eve 5", label: "Closing bonfire, awards & farewell dinner" },
      ],
      faqs: [
        {
          q: "How cold does it get?",
          a: "Evenings range from -5°C to 5°C. Warm gear is provided for all outdoor sessions.",
        },
        {
          q: "Is this family-friendly?",
          a: "Yes! Easy terrain, no altitude issues, and activities for all ages.",
        },
        {
          q: "When are exact dates announced?",
          a: "Dates drop 8 weeks before the festival. Register now for priority notification.",
        },
      ],
    },
  },
];

export function getEventBySlug(slug: string): FestivalEvent | undefined {
  return events.find((e) => e.slug === slug);
}
