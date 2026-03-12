import type { ItineraryDay } from "@/components/ui/Itinerary";

export type Adventure = {
  title: string;
  slug: string;
  imageSrc: string;
  duration: string;
  difficulty: string;
  region?: string;
  price?: string;
  description: string;
  highlights: string[];
  whatsIncluded: string[];
  quickFacts: { label: string; val: string; icon: string }[];
  gallery: string[];
  itinerary: ItineraryDay[];
};

export const adventures: Adventure[] = [
  {
    title: "Boulder Trek",
    slug: "boulder-trek",
    imageSrc: "/expe_01.jpg",
    duration: "8 Days",
    difficulty: "Moderate",
    region: "Langtang, Nepal",
    price: "$650",
    description: `The Boulder Trek combines the raw physical challenge of bouldering with the immersive experience of trekking through the Langtang Valley. Navigate natural rock formations scattered across glacial moraines and riverside boulderfields, with problems ranging from beginner-friendly traverses to technical V4+ lines. Between sessions, the trail winds through rhododendron forest, Tamang villages, and yak pastures — making this one of the most unique and complete adventure experiences in the Himalayas. No prior climbing experience is required, but a good base level of fitness will make this trip significantly more enjoyable.`,
    highlights: [
      "Boulder on natural Himalayan rock formations at altitude",
      "Trek through Langtang National Park's iconic valley",
      "Sessions guided by experienced local climbing instructors",
      "Evening culture nights in Tamang teahouses",
      "Stunning views of Langtang Lirung between problems",
    ],
    whatsIncluded: [
      "Climbing shoes and crash pad rental",
      "Certified bouldering guide",
      "All permits (TIMS + Langtang NP)",
      "Teahouse accommodation throughout",
      "All meals on trek",
      "Airport transfers",
    ],
    quickFacts: [
      { label: "Starting Point", val: "Kathmandu, Nepal", icon: "mapPin" },
      { label: "Style", val: "Trek + Bouldering", icon: "mountain" },
      { label: "Best Season", val: "Mar – May · Sep – Nov", icon: "calendar" },
      { label: "Permits", val: "TIMS + Langtang NP", icon: "fileText" },
      { label: "Difficulty", val: "Moderate", icon: "activity" },
      { label: "Min. Age", val: "14 Years", icon: "user" },
    ],
    gallery: ["/expe_01.jpg", "/pic2.jpeg", "/people_03.jpg"],
    itinerary: [
      {
        day: "Day 1",
        title: "Arrive Kathmandu — Gear Check & Briefing",
        description:
          "Arrive in Kathmandu and transfer to your hotel. Evening gear check, safety briefing, and introductions with your guide team.",
      },
      {
        day: "Day 2",
        title: "Drive Kathmandu → Syabrubesi",
        description:
          "Early morning drive through the hills to Syabrubesi (1,550m). Arrive, settle into the teahouse, and take a short warm-up walk along the river.",
      },
      {
        day: "Day 3",
        title: "Trek to Lama Hotel — First Boulder Session",
        description:
          "Trek through subtropical forest to Lama Hotel (2,380m). Afternoon introductory bouldering session on riverside rock formations with your instructor.",
      },
      {
        day: "Day 4",
        title: "Trek to Langtang Village — Valley Boulderfield",
        description:
          "Continue up the valley to Langtang Village (3,430m). Explore the glacial moraines and tackle the first significant boulderfield problems.",
      },
      {
        day: "Day 5",
        title: "Langtang Village — Full Bouldering Day",
        description:
          "Rest day from trekking, full day dedicated to bouldering. Problems range from easy traverses to technical V4+ lines depending on your progress.",
      },
      {
        day: "Day 6",
        title: "Trek to Kyanjin Gompa",
        description:
          "Final push to Kyanjin Gompa (3,870m). Short afternoon session on the high-altitude boulderfield with panoramic views of Langtang Lirung.",
      },
      {
        day: "Day 7",
        title: "Kyanjin — Summit Boulder Problems & Acclimatisation",
        description:
          "Optional morning hike to Kyanjin Ri. Afternoon dedicated to the most challenging boulder problems of the trip at altitude.",
      },
      {
        day: "Day 8",
        title: "Return Trek & Depart",
        description:
          "Begin descent back through the valley, catch the afternoon jeep to Kathmandu. Evening farewell dinner.",
      },
    ],
  },
  {
    title: "Normal Trek",
    slug: "normal-trek",
    imageSrc: "/landscape_01.jpg",
    duration: "10 Days",
    difficulty: "Easy – Moderate",
    region: "Langtang, Nepal",
    price: "$550",
    description: `The Langtang Normal Trek is the definitive introduction to Himalayan trekking — a classic teahouse route through one of Nepal's most accessible yet breathtaking valleys. The trail follows the Langtang Khola river from the subtropical forest of Syabrubesi to the high alpine meadows of Kyanjin Gompa at 3,870m. Along the way, trekkers pass ancient Buddhist monasteries, spinning prayer wheels, and villages where Tamang culture has remained largely unchanged for centuries. With well-maintained teahouses at every stage, this is ideal for first-time trekkers, families, or anyone seeking a genuine Himalayan experience without extreme altitude or technical challenge.`,
    highlights: [
      "Full valley traverse from forest to alpine meadow",
      "Overnight at Kyanjin Gompa monastery village",
      "Optional acclimatization hike to Kyanjin Ri (4,773m)",
      "Visit the famous yak cheese factory at Kyanjin",
      "Rich Tamang cultural immersion throughout",
    ],
    whatsIncluded: [
      "Certified trekking guide and porter",
      "All permits (TIMS + Langtang NP)",
      "Teahouse accommodation throughout",
      "All meals on trek (breakfast, lunch, dinner)",
      "Airport and hotel transfers",
      "First aid kit and emergency protocols",
    ],
    quickFacts: [
      { label: "Starting Point", val: "Syabrubesi, Nepal", icon: "mapPin" },
      { label: "Style", val: "Teahouse Trek", icon: "tent" },
      { label: "Best Season", val: "Mar – May · Sep – Nov", icon: "calendar" },
      { label: "Permits", val: "TIMS + Langtang NP", icon: "fileText" },
      { label: "Difficulty", val: "Easy – Moderate", icon: "activity" },
      { label: "Max Altitude", val: "3,870m", icon: "mountain" },
    ],
    gallery: ["/landscape_01.jpg", "/people_03.jpg", "/expe_02.jpg"],
    itinerary: [
      {
        day: "Day 1",
        title: "Arrive Kathmandu — Welcome & Briefing",
        description:
          "Arrive in Kathmandu, transfer to hotel. Evening welcome dinner and trek briefing with your guide.",
      },
      {
        day: "Day 2",
        title: "Drive Kathmandu → Syabrubesi",
        description:
          "Scenic 7–8 hour drive to Syabrubesi (1,550m), the starting point of the Langtang trek. Overnight in teahouse.",
      },
      {
        day: "Day 3",
        title: "Trek Syabrubesi → Lama Hotel",
        description:
          "First day on trail through dense subtropical forest following the Langtang Khola river. Arrive at Lama Hotel (2,380m).",
      },
      {
        day: "Day 4",
        title: "Trek Lama Hotel → Langtang Village",
        description:
          "The valley opens up dramatically as you climb to Langtang Village (3,430m). First views of Langtang Lirung and surrounding peaks.",
      },
      {
        day: "Day 5",
        title: "Trek Langtang Village → Kyanjin Gompa",
        description:
          "Short but rewarding day through yak pastures to Kyanjin Gompa (3,870m). Explore the monastery and visit the famous yak cheese factory.",
      },
      {
        day: "Day 6",
        title: "Kyanjin — Acclimatisation & Exploration",
        description:
          "Rest and acclimatise. Optional hike to Kyanjin Ri (4,773m) or Tsergo Ri for panoramic Himalayan views.",
      },
      {
        day: "Day 7",
        title: "Trek Kyanjin → Lama Hotel",
        description:
          "Begin the descent back through the valley, covering ground quickly on familiar trail. Overnight at Lama Hotel.",
      },
      {
        day: "Day 8",
        title: "Trek Lama Hotel → Syabrubesi",
        description:
          "Final day of trekking back to Syabrubesi through the forest. Celebrate with a meal at the teahouse.",
      },
      {
        day: "Day 9",
        title: "Drive Syabrubesi → Kathmandu",
        description:
          "Morning drive back to Kathmandu. Afternoon free to explore Thamel, shop for souvenirs, or rest.",
      },
      {
        day: "Day 10",
        title: "Departure Day",
        description:
          "Transfer to Tribhuvan International Airport for your onward flight. Safe travels!",
      },
    ],
  },
  {
    title: "Via Ferrata",
    slug: "via-ferrata",
    imageSrc: "/expe_02.jpg",
    duration: "5 Days",
    difficulty: "Moderate – Strenuous",
    region: "Langtang, Nepal",
    price: "$480",
    description: `Via Ferrata — Italian for "iron road" — brings European-style cliffside climbing to the heart of the Himalayas. Fixed iron rungs, steel cables, and engineered anchor systems bolted into the natural rock allow adventurers to scale dramatic cliff faces and exposed ridgelines that would otherwise require full technical climbing skills. Langtang's Via Ferrata routes traverse spectacular rocky terrain above the valley floor, offering exposure and adrenaline at altitude with a level of safety accessible to beginners. This is one of the only Via Ferrata experiences in Nepal — a genuinely rare adventure in one of the world's most extraordinary landscapes.`,
    highlights: [
      "One of the only Via Ferrata routes in Nepal",
      "Cliffside traverses with Himalayan panoramas",
      "Full harness and helmet provided — no prior experience needed",
      "Guided by certified climbing instructors",
      "Dramatic exposure with engineered safety systems",
    ],
    whatsIncluded: [
      "Full Via Ferrata kit (harness, helmet, via ferrata lanyard)",
      "Certified guide throughout",
      "All permits",
      "Accommodation and meals",
      "Airport and hotel transfers",
    ],
    quickFacts: [
      { label: "Starting Point", val: "Kathmandu, Nepal", icon: "mapPin" },
      { label: "Style", val: "Fixed-Route Climbing", icon: "mountain" },
      { label: "Best Season", val: "Mar – May · Sep – Nov", icon: "calendar" },
      { label: "Permits", val: "Langtang NP", icon: "fileText" },
      { label: "Difficulty", val: "Moderate – Strenuous", icon: "activity" },
      { label: "Min. Age", val: "16 Years", icon: "user" },
    ],
    gallery: ["/expe_02.jpg", "/expe_01.jpg", "/pic4.jpg"],
    itinerary: [
      {
        day: "Day 1",
        title: "Arrive Kathmandu — Kit Fitting & Safety Briefing",
        description:
          "Arrive in Kathmandu and transfer to your hotel. Afternoon kit fitting, harness sizing, and a thorough safety briefing with your certified instructor.",
      },
      {
        day: "Day 2",
        title: "Drive to Langtang & Practice Session",
        description:
          "Drive to the valley and complete a ground-level practice session on the lower via ferrata sections — learning cable clip technique and movement fundamentals.",
      },
      {
        day: "Day 3",
        title: "Main Via Ferrata Route — Full Ascent",
        description:
          "The centrepiece of the trip. Full guided ascent of the main Via Ferrata route with exposed ridgeline traverses and panoramic Himalayan views throughout.",
      },
      {
        day: "Day 4",
        title: "Secondary Route & Technical Sections",
        description:
          "Tackle the secondary route featuring more technical ladder sections and a dramatic cliff-face traverse above the valley floor.",
      },
      {
        day: "Day 5",
        title: "Descent & Return to Kathmandu",
        description:
          "Morning descent and drive back to Kathmandu. Evening farewell dinner to celebrate the climb.",
      },
    ],
  },
  {
    title: "Highlining & Slacklining",
    slug: "highlining-slacklining",
    imageSrc: "/expe_04.jpg",
    duration: "3 Days",
    difficulty: "Beginner – Advanced",
    region: "Langtang, Nepal",
    price: "$320",
    description: `Walk the line above the Himalayas. Slacklining and highlining in the Langtang Valley offers an utterly unique experience — balancing on a narrow webbing line stretched between cliffs, trees, or anchor points with some of the world's most dramatic mountain scenery as your backdrop. Ground-level slacklines are perfect for beginners learning balance and focus, while more experienced participants can attempt elevated highlines rigged above valley drops with full safety leashes. Sessions are run by experienced riggers with international highline credentials, and the combination of mindfulness, physical challenge, and raw Himalayan exposure makes this unlike any other adventure in Nepal.`,
    highlights: [
      "Highlines rigged above valley terrain with full safety systems",
      "Beginner slacklines available for all skill levels",
      "International-standard rigging and safety protocols",
      "Mindfulness and balance training sessions included",
      "Spectacular Himalayan backdrop unlike anywhere else on earth",
    ],
    whatsIncluded: [
      "All slackline and highline equipment",
      "Harness and leash system for highlines",
      "Certified highline rigger and instructor",
      "Accommodation and meals",
      "Transfers from Kathmandu",
    ],
    quickFacts: [
      { label: "Starting Point", val: "Kathmandu, Nepal", icon: "mapPin" },
      { label: "Style", val: "Balance + Highline", icon: "activity" },
      { label: "Best Season", val: "Mar – May · Sep – Nov", icon: "calendar" },
      { label: "Permits", val: "Langtang NP", icon: "fileText" },
      { label: "Difficulty", val: "Beginner – Advanced", icon: "activity" },
      { label: "Min. Age", val: "12 Years", icon: "user" },
    ],
    gallery: ["/expe_04.jpg", "/expe_01.jpg", "/people_03.jpg"],
    itinerary: [
      {
        day: "Day 1",
        title: "Arrive & Ground-Level Slackline Training",
        description:
          "Transfer to Langtang base. Morning orientation and full afternoon on ground-level slacklines — learning balance, falls, and line-walking fundamentals.",
      },
      {
        day: "Day 2",
        title: "Highline Introduction & Progression Sessions",
        description:
          "Morning introduction to the highline setup — rigging, leash systems, and safety checks. Afternoon progression sessions for those ready to step onto the elevated line.",
      },
      {
        day: "Day 3",
        title: "Free Session & Return to Kathmandu",
        description:
          "Morning free session to push your limits on whichever line suits your level. Pack up, debrief with instructors, and transfer back to Kathmandu.",
      },
    ],
  },
  {
    title: "Combo Trek",
    slug: "combo-trek",
    imageSrc: "/people_04.jpg",
    duration: "12 Days",
    difficulty: "Moderate – Strenuous",
    region: "Langtang, Nepal",
    price: "$980",
    description: `The Combo Trek is the ultimate Langtang adventure package — a carefully crafted multi-discipline experience that weaves trekking, bouldering, Via Ferrata, and slacklining into a single immersive journey through the valley. Each day brings a different physical and mental challenge: one morning you're navigating iron rungs on a cliff face, the next you're balancing on a highline above a glacial river, and by evening you're sitting around a teahouse fire in a Tamang village. Designed for adventurers who want to experience everything the Langtang Valley has to offer, the Combo Trek is the signature Langtang Outdoor Initiative experience — built for those who refuse to choose just one adventure.`,
    highlights: [
      "Full multi-discipline adventure: trek, boulder, climb, and balance",
      "Via Ferrata traverses and bouldering on natural Himalayan rock",
      "Highline session above the valley floor",
      "Cultural immersion with Tamang teahouse nights",
      "Designed for those who want the full Langtang experience",
    ],
    whatsIncluded: [
      "All specialist equipment across all disciplines",
      "Certified guides for each activity",
      "All permits (TIMS + Langtang NP)",
      "Teahouse accommodation throughout",
      "All meals on trek",
      "Airport and hotel transfers",
      "Certificate of completion",
    ],
    quickFacts: [
      { label: "Starting Point", val: "Kathmandu, Nepal", icon: "mapPin" },
      { label: "Style", val: "Multi-Discipline", icon: "mountain" },
      { label: "Best Season", val: "Mar – May · Sep – Nov", icon: "calendar" },
      { label: "Permits", val: "TIMS + Langtang NP", icon: "fileText" },
      { label: "Difficulty", val: "Moderate – Strenuous", icon: "activity" },
      { label: "Min. Age", val: "16 Years", icon: "user" },
    ],
    gallery: ["/people_04.jpg", "/expe_01.jpg", "/expe_02.jpg"],
    itinerary: [
      {
        day: "Day 1",
        title: "Arrive Kathmandu — Multi-Discipline Briefing",
        description:
          "Arrive in Kathmandu. Full evening briefing covering all four disciplines, kit fitting, and introductions to your specialist guide team.",
      },
      {
        day: "Day 2",
        title: "Drive to Syabrubesi & Slackline Intro",
        description:
          "Drive to Syabrubesi. Afternoon ground-level slackline session to warm up the body and get a feel for balance before the trek begins.",
      },
      {
        day: "Day 3",
        title: "Trek Syabrubesi → Lama Hotel",
        description:
          "First day trekking through subtropical forest to Lama Hotel (2,380m). River crossings, wildlife, and the first real taste of the valley.",
      },
      {
        day: "Day 4",
        title: "Via Ferrata — Lower Route",
        description:
          "Morning Via Ferrata session on the lower cliff sections. Learn cable technique and ascend your first iron-rung route with valley views below.",
      },
      {
        day: "Day 5",
        title: "Trek to Langtang Village — Boulder Intro",
        description:
          "Trek to Langtang Village (3,430m). Late afternoon introductory bouldering session on riverside rock formations.",
      },
      {
        day: "Day 6",
        title: "Full Bouldering Day",
        description:
          "Dedicated bouldering day in Langtang Village. Work through a range of problems from beginner traverses to technical lines with your instructor.",
      },
      {
        day: "Day 7",
        title: "Via Ferrata — Main Route Ascent",
        description:
          "The headline climb of the trip — full ascent of the main Via Ferrata route. Exposed ridgelines, panoramic peaks, and genuine altitude.",
      },
      {
        day: "Day 8",
        title: "Trek to Kyanjin Gompa",
        description:
          "Trek to Kyanjin Gompa (3,870m) through open yak pastures. Visit the monastery and cheese factory. Rest and acclimatise.",
      },
      {
        day: "Day 9",
        title: "Highline Session above Kyanjin",
        description:
          "The signature moment of the Combo Trek — a highline rigged above the valley floor at altitude with Langtang Lirung as your backdrop.",
      },
      {
        day: "Day 10",
        title: "Kyanjin Ri Hike & Final Boulder Problems",
        description:
          "Optional sunrise hike to Kyanjin Ri (4,773m). Afternoon final bouldering session — push your hardest problem of the trip.",
      },
      {
        day: "Day 11",
        title: "Full Descent to Syabrubesi",
        description:
          "Long descent day back to Syabrubesi, covering the full valley in one push. Celebration dinner at the teahouse.",
      },
      {
        day: "Day 12",
        title: "Drive to Kathmandu & Farewell",
        description:
          "Morning drive back to Kathmandu. Certificate of completion presentation and farewell dinner with the full team.",
      },
    ],
  },
];

export function getAdventureBySlug(slug: string) {
  return adventures.find((e) => e.slug === slug);
}
