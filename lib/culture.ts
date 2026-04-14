import type { ItineraryDay } from "@/components/ui/Itinerary";

export type CulturalTour = {
  title: string;
  slug: string;
  imageSrc: string;
  duration: string;
  difficulty: string;
  region?: string;
  price?: string;
  punchline: string;
  description: string;
  highlights: string[];
  whatsIncluded: string[];
  quickFacts: { label: string; val: string; icon: string }[];
  gallery: string[];
  itinerary: ItineraryDay[];
};

export const culturalTours: CulturalTour[] = [
  {
    title: "Langtang Culture Immersion",
    slug: "festive-pack",
    imageSrc: "/buddhist_03.jpg",
    duration: "15 Days",
    difficulty: "Easy",
    region: "Langtang, Nepal",
    price: "$590",
    punchline:
      "Experience Langtang beyond the trails where culture comes alive and you become part of it.",
    description: `
 	Langtang is often seen as a trekking destination, but its true essence lies beyond the trails. It is home to the Langtangpa community, where Tibetan-influenced Buddhism, tradition, and a deep connection to the land shape everyday life. Here, festivals are open and inclusive, welcoming everyone to witness and be part of something real.Guided by the lunar calendar, these celebrations don’t follow fixed travel seasons, so our Langtang Cultural Immersion is designed around them. This is not a staged experience, but a living culture of music, rituals, and community. It’s more than a trek, it’s a chance to connect, participate, and experience Langtang in its purest form.`,
    highlights: [
      "Time your visit to Nepal's most significant festivals on the lunar calendar",
      "Front-row access to Indra Jatra, Dashain, Tihar, or Losar depending on season",
      "Participate in traditional puja ceremonies at active temples",
      "Evening cultural performance: Newari masked dance and folk music",
      "Home-hosted festival meal with a local Newari family in Bhaktapur",
      "Monastery butter lamp ceremony in the Langtang hills",
    ],
    whatsIncluded: [
      "Festival-expert cultural guide throughout",
      "All entrance fees to heritage sites and ceremonies",
      "Home-hosted family dinner in Bhaktapur",
      "3 nights hotel accommodation in Kathmandu Valley",
      "2 nights teahouse accommodation in the hills",
      "All breakfasts, select lunches and dinners",
      "Airport and inter-city transfers",
      "Printed festival calendar and cultural briefing notes",
    ],
    quickFacts: [
      { label: "Starting Point", val: "Kathmandu, Nepal", icon: "mapPin" },
      { label: "Style", val: "Festival Immersion", icon: "star" },
      {
        label: "Best Season",
        val: "July – August · Feb – April",
        icon: "calendar",
      },
      {
        label: "Permits",
        val: "TIMS + Langtang NP",
        icon: "fileText",
      },
      { label: "Difficulty", val: "Easy", icon: "activity" },
      { label: "Min. Age", val: "All Ages", icon: "user" },
    ],
    gallery: [
      "/culture_festival_01.jpg",
      "/culture_festival_02.jpg",
      "/people_03.jpg",
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Arrive Kathmandu — Cultural Orientation & Thamel Walk",
        description:
          "Arrive at Tribhuvan International Airport and transfer to your hotel in the heart of Kathmandu. Evening orientation walk through Thamel and Asan Tole with your cultural guide — an introduction to the sights, sounds, and smells of the city before the festival immersion begins.",
      },
      {
        day: "Day 2",
        title:
          "Kathmandu Durbar Square — Festival Ceremonies & Kumari Procession",
        description:
          "Early morning visit to Kathmandu Durbar Square to witness the opening ceremonies of the season's primary festival. Observe the procession of the Living Goddess (Kumari) through the ancient palace courtyard. Afternoon visit to Pashupatinath Temple for evening aarti on the banks of the Bagmati River.",
      },
      {
        day: "Day 3",
        title: "Bhaktapur — Newari Culture & Home-Hosted Dinner",
        description:
          "Full day in Bhaktapur, Nepal's best-preserved medieval city. Explore Bhaktapur Durbar Square, Pottery Square, and the 55-Window Palace. Late afternoon visit to a local Newari home for a traditional festival meal — share food, stories, and ceremony with your host family.",
      },
      {
        day: "Day 4",
        title: "Patan & Swayambhunath — Masked Dance Performance",
        description:
          "Morning at Patan Durbar Square, one of the finest collections of Buddhist and Hindu architecture in Asia. Afternoon at Swayambhunath Stupa — the Monkey Temple — for circumambulation and prayer wheel spinning. Evening cultural performance: traditional Newari Lakhe masked dance and folk music.",
      },
      {
        day: "Day 5",
        title: "Drive to Langtang Hills — Tamang Monastery Visit",
        description:
          "Drive into the Langtang foothills to a Tamang Buddhist community. Visit a working monastery and meet the resident monks. Evening butter lamp ceremony — hundreds of flickering lights illuminate the gompa as prayers are offered for the new season.",
      },
      {
        day: "Day 6",
        title: "Village Festival Day — Local Celebrations & Losar Traditions",
        description:
          "Participate in village-level festival celebrations with your Tamang hosts. Help prepare traditional foods, join in local music and dance, and learn about the Tamang lunar calendar and its significance in daily life. This is the most intimate and personal day of the entire tour.",
      },
      {
        day: "Day 7",
        title: "Return to Kathmandu & Farewell",
        description:
          "Morning descent back to Kathmandu. Afternoon free for last-minute exploration or shopping in Thamel. Evening farewell dinner with your guide team, reflecting on the ceremonies and stories of the week.",
      },
    ],
  },
  {
    title: "Horse Backpacking",
    slug: "horse-backpacking",
    imageSrc: "/horse.jpeg",
    duration: "14 Days",
    difficulty: "Moderate",
    region: "Langtang,Nepal",
    price: "$1,150",
    punchline:
      "Ride the old trails of Langtang: raw, real, and rooted in tradition.",
    description: `Explore Langtang the old way, on horseback, just like our forefathers. This is for travelers who want more than a trek. It’s a raw, immersive journey into the heart of the valley, moving with your own logistics and the rhythm of the mountains.No luxury, just pure, untamed exploration. Cross rivers, ride ancient trails, and live a story that feels straight out of legend. Horseback packing in Langtang isn’t just travel. It’s real adventure, stripped to its culture and traditions. It is part of the life that Langtangpa used to live.`,
    highlights: [
      "Ride traditional Tibetan-stock horses on ancient Himalayan trade routes",
      "Traverse the Kali Gandaki Gorge — the world's deepest valley",
      "Explore the walled desert city of Lo Manthang in Upper Mustang",
      "Overnight in traditional Mustangi guesthouses and cave settlements",
      "Meet Bhotiya horse traders and hear living oral histories of the caravan era",
      "Cross high-altitude passes with unobstructed views of Annapurna and Dhaulagiri",
    ],
    whatsIncluded: [
      "All horse hire and handling fees",
      "Experienced Mustangi horsemen as wranglers",
      "Bilingual cultural guide throughout",
      "Upper Mustang Restricted Area Permit",
      "Annapurna Conservation Area Permit (ACAP)",
      "TIMS card",
      "All accommodation (guesthouses and homestays)",
      "All meals on route",
      "Domestic flights Pokhara – Jomsom – Pokhara",
    ],
    quickFacts: [
      { label: "Starting Point", val: "Ghodatabela, Langtang", icon: "mapPin" },
      { label: "Style", val: "Horse Trek / Cultural", icon: "mountain" },
      {
        label: "Best Season",
        val: "March - November",
        icon: "calendar",
      },
      {
        label: "Permits",
        val: "TIMS + Langtang NP",
        icon: "fileText",
      },
      { label: "Difficulty", val: "Moderate", icon: "activity" },
      { label: "Min. Age", val: "14 Years", icon: "user" },
    ],
    gallery: [
      "/culture_horse_01.jpg",
      "/landscape_01.jpg",
      "/culture_horse_02.jpg",
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Fly Pokhara → Jomsom — Meet the Horses",
        description:
          "Morning scenic flight from Pokhara to Jomsom (2,720m), the gateway to Mustang. Afternoon visit to the horse yard — meet your assigned horse and your Mustangi horseman. Briefing on riding posture, commands, and the route ahead.",
      },
      {
        day: "Day 2",
        title: "Jomsom → Kagbeni — Entering the Ancient Kingdom",
        description:
          "First morning in the saddle along the Kali Gandaki riverbed. Reach Kagbeni — the medieval gateway village to Upper Mustang — and visit the 15th-century monastery perched above the confluence. Overnight in a traditional mud-brick guesthouse.",
      },
      {
        day: "Day 3",
        title: "Kagbeni → Chele — Wind, Desert & Cliff Caves",
        description:
          "Ride north into the restricted zone. The landscape transforms dramatically — ochre cliffs, eroded canyons, and ancient cave settlements carved directly into the rock face. Pass through Tangbe and Chhusang villages. Overnight in Chele.",
      },
      {
        day: "Day 4",
        title: "Chele → Syangboche → Ghami — High Pass Crossing",
        description:
          "Cross the Taklam La pass (3,624m) with panoramic views stretching toward Tibet. Descend to Ghami, a village of whitewashed homes and long mani walls. Visit a local cheesemaker in the afternoon.",
      },
      {
        day: "Day 5",
        title: "Ghami → Lo Manthang — The Forbidden City",
        description:
          "Arrival at Lo Manthang (3,840m) — the ancient walled capital of the Kingdom of Mustang. Enter through the single gateway in the perimeter wall and explore the labyrinthine streets, royal palace, and painted cave monasteries of this extraordinary living medieval city.",
      },
      {
        day: "Day 6",
        title: "Lo Manthang — Full Exploration & Monastery Visits",
        description:
          "Rest day in Lo Manthang. Morning visit to Thubchen Gompa and Jampa Gompa — two of the finest 15th-century Buddhist monasteries in the Himalaya. Afternoon audience with the local monastery's head lama. Evening cultural exchange with the horsemen over traditional Mustangi Chang (barley beer).",
      },
      {
        day: "Day 7",
        title: "Lo Manthang → Ghiling — Descent Route",
        description:
          "Begin the return journey on an alternate trail offering different valley perspectives. Ride through wind-sculpted terrain to Ghiling. Your horseman shares stories of the salt trade routes and the changing way of life in Mustang.",
      },
      {
        day: "Day 8",
        title: "Ghiling → Marpha — Apple Country & Distillery",
        description:
          "Descend into the sheltered valley of Marpha, famous throughout Nepal for its apple orchards and apple brandy distillery. Visit the local distillery, walk the cobblestone village lanes, and enjoy a final evening celebration with your guide and horsemen.",
      },
      {
        day: "Day 9",
        title: "Marpha → Jomsom — Farewell & Fly to Pokhara",
        description:
          "Short morning ride back to Jomsom. Say farewell to your horse and horseman. Afternoon flight back to Pokhara. Optional overnight in Pokhara or onward travel.",
      },
    ],
  },
  {
    title: "Yak Herding",
    slug: "herding-tourism",
    imageSrc: "/pic4.JPG",
    duration: "17 Days",
    difficulty: "Easy – Moderate",
    region: "Langtang,Nepal",
    price: "$420",
    punchline:
      "Experience Langtang beyond the trails where culture comes alive and you become part of it.",
    description: `
 	
Langtang is more than mountains; it is a living tradition of movement, memory, and harmony with nature. For generations, the Langtangpa people have practiced transhumant herding, moving with their animals across the highlands in rhythm with the seasons. Today, this sustainable way of life is fading, and as local youth, we are working to revive it through Herding Tourism.This is not just a journey, but a way of life you step into. Move from one kharka to another, learn the skills of a “yak boy,” and experience raw Himalayan living. By joining, you don’t just travel, you help keep a culture alive.
`,
    highlights: [
      "Live and work alongside a Tamang or Sherpa herding family for multiple days",
      "Participate in the daily ritual of yak herding across high alpine pastures",
      "Learn traditional butter and cheesemaking directly from herders",
      "Sleep in a traditional stone herder's shelter (goTh) at altitude",
      "Understand the seasonal transhumance cycle and its spiritual dimensions",
      "Visit a high-altitude cheese factory established by Swiss development aid in the 1950s",
    ],
    whatsIncluded: [
      "Cultural liaison and bilingual guide throughout",
      "All accommodation (herder shelters and local teahouses)",
      "All meals — including traditional herder food (tsampa, butter tea, chhurpi)",
      "National Park and TIMS permits",
      "Transfers from Kathmandu to trailhead",
      "Small contribution directly paid to host herding family",
    ],
    quickFacts: [
      { label: "Starting Point", val: "Kathmandu, Nepal", icon: "mapPin" },
      {
        label: "Style",
        val: "Agri-Cultural Immersion",
        icon: "activity",
      },
      {
        label: "Best Season",
        val: "June – Sept",
        icon: "calendar",
      },
      {
        label: "Permits",
        val: "TIMS + Langtang NP",
        icon: "fileText",
      },
      { label: "Difficulty", val: "Easy – Moderate", icon: "activity" },
      { label: "Min. Age", val: "10 Years", icon: "user" },
    ],
    gallery: ["/culture_herding_01.jpg", "/people_03.jpg", "/landscape_01.jpg"],
    itinerary: [
      {
        day: "Day 1",
        title: "Drive Kathmandu → Trailhead — Meet the Herding Family",
        description:
          "Morning drive into the Langtang or Helambu foothills depending on the seasonal route. Arrive at the host family's lower settlement and spend the afternoon in introductions, sharing a meal, and learning the basic Tamang phrases you'll need for the days ahead.",
      },
      {
        day: "Day 2",
        title: "Dawn Herd Move — First Day on the Pasture",
        description:
          "Rise before sunrise to assist with the morning milking and the first herd movement of the day. Follow the yaks up to higher pastures under the guidance of the family's most experienced herder. Learn how to read animal behaviour, weather signs, and terrain the herders' way.",
      },
      {
        day: "Day 3",
        title: "High Pasture Camp — Butter Churning & Cheese Making",
        description:
          "Spend a full day at the high-altitude summer pasture. Morning dedicated to the milk collection, hand-churning butter, and learning to make chhurpi (hard dried cheese) — the same techniques passed down for generations. Afternoon free to explore the surrounding alpine terrain.",
      },
      {
        day: "Day 4",
        title: "Transhumance Route Walk — Reading the Mountain",
        description:
          "Walk the traditional seasonal migration route with a senior herder. Learn how the family decides when to move, which trails to take, and how to manage the herd across river crossings and steep terrain. Visit the historic Swiss-established cheese factory at Kyanjin if on the Langtang route.",
      },
      {
        day: "Day 5",
        title: "Community Day — Herder Gathering & Oral Traditions",
        description:
          "If timing allows, participate in an informal gathering of neighbouring herding families — a social ritual that serves as news exchange, dispute resolution, and celebration rolled into one. Evening storytelling and traditional Tamang music around the fire.",
      },
      {
        day: "Day 6",
        title: "Final Morning on the Herd & Return",
        description:
          "One last dawn with the animals before descending with your guide back to the road. Return to Kathmandu with a farewell gift of home-produced chhurpi from your host family.",
      },
    ],
  },
];

export function getCulturalTourBySlug(slug: string) {
  return culturalTours.find((t) => t.slug === slug);
}
