import {
  Car,
  UtensilsCrossed,
  Users,
  ShieldCheck,
  Package,
  FileCheck,
  PartyPopper,
  Plane,
  Fingerprint,
  AlertTriangle,
  Receipt,
  HandCoins,
  Hotel,
  Video,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type Item = {
  icon: LucideIcon;
  title: string;
  desc: string;
};

export type TabKey = "inc" | "exc";

export const includes: Item[] = [
  {
    icon: Car,
    title: "Logistics & Transfers",
    desc: "Private, comfortable tourist vehicle transfers between the airport and your hotel on arrival and departure.",
  },
  {
    icon: UtensilsCrossed,
    title: "Mountain Hospitality",
    desc: "Three nutritious meals daily at local lodges and tea houses throughout the trek, plus tea and coffee to keep you fueled.",
  },
  {
    icon: Users,
    title: "Elite Field Staff",
    desc: "A licensed, English-speaking guide with deep local knowledge, plus porters to handle your gear (up to 10 kg per climber).",
  },
  {
    icon: ShieldCheck,
    title: "Safety & Welfare",
    desc: "All Nepalese staff and porters receive fair wages, full equipment, and comprehensive medical and emergency rescue insurance.",
  },
  {
    icon: Package,
    title: "Technical Gear & Kit",
    desc: "A signature Langtang Outdoor Initiative duffle bag, branded cap and neck warmer, plus a full first-aid kit carried throughout.",
  },
  {
    icon: FileCheck,
    title: "Permits & Transport",
    desc: "Langtang National Park Permit and TIMS card pre-arranged. All ground transport between Kathmandu and Syabrubesi included.",
  },
  {
    icon: PartyPopper,
    title: "Welcome & Farewell Dinners",
    desc: "Celebrate the start and end of the journey with an authentic dinner at a Kathmandu restaurant alongside the expedition team.",
  },
];

export const excludes: Item[] = [
  {
    icon: Plane,
    title: "International Travel",
    desc: "Airfare to and from your home country to Kathmandu is the responsibility of the participant.",
  },
  {
    icon: Fingerprint,
    title: "Visa Requirements",
    desc: "The Nepalese Entry Visa fee (currently $30 USD for 15 days) is payable upon arrival at the airport.",
  },
  {
    icon: AlertTriangle,
    title: "Personal Insurance",
    desc: "You must hold a comprehensive insurance policy covering high-altitude rescue, air evacuation, and medical treatment.",
  },
  {
    icon: Receipt,
    title: "Incidental Expenses",
    desc: "Personal communication, laundry, battery charging, hot showers, and bar bills (soft drinks or alcohol) are not included.",
  },
  {
    icon: HandCoins,
    title: "Gratuities",
    desc: "Tips for your guide and porter team are not included and are greatly appreciated as a reflection of their hard work.",
  },
  {
    icon: Hotel,
    title: "Extra Stay Costs",
    desc: "Additional nights in Kathmandu or extra meals resulting from early arrival, late departure, or early return are at your own expense.",
  },
  {
    icon: Video,
    title: "Special Permits",
    desc: "Fees for professional filming, high-end camera equipment, or drone permits must be arranged separately.",
  },
];
