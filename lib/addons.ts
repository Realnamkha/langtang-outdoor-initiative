// lib/addons.ts

export type AddOn = {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string; // ← add this
};

export type ActivityAddOns = {
  activityId: string;
  addons: AddOn[];
};

export const activityAddOns: ActivityAddOns[] = [
  {
    activityId: "Via Ferrata",
    addons: [
      {
        id: "highlining",
        title: "Highlining",
        description: "Walk the line above the valley with expert guides.",
        image: "/via_02.jpg",
        link: "/adventures/highlining",
      },
      {
        id: "langtang-trek",
        title: "Langtang Trekking",
        description: "Explore the hidden valley with local guides.",
        image: "/langtang.jpg",
        link: "/adventures/langtang-trek",
      },
      {
        id: "bouldering",
        title: "Bouldering",
        description: "Hunt the best boulder problems in Langtang Valley.",
        image: "/bouldering_02.jpeg",
        link: "/adventures/boulder-trek",
      },
    ],
  },
  {
    activityId: "HighLine-SlackLine",
    addons: [
      {
        id: "via-ferrata",
        title: "Via Ferrata",
        description: "Experience the 1.9km iron path safely with thrill.",
        image: "/via_01.jpg",
        link: "/adventures/via-ferrata",
      },
      {
        id: "bouldering",
        title: "Bouldering",
        description: "Hunt the best boulder problems in Langtang Valley.",
        image: "/bouldering_04.jpeg",
        link: "/adventures/boulder-trek",
      },
      {
        id: "camping",
        title: "Cultural Tour",
        description: "Sleep under the stars at high-altitude campsites.",
        image: "/buddhist_02.jpg",
        link: "/cultural-tours",
      },
    ],
  },
  {
    activityId: "Langtang Trek",
    addons: [
      {
        id: "via-ferrata",
        title: "Via Ferrata",
        description: "Experience the 1.9km iron path safely with thrill.",
        image: "/via_01.jpg",
        link: "/adventures/via-ferrata",
      },
      {
        id: "highlining",
        title: "Highlining",
        description: "Walk the line above the valley with expert guides.",
        image: "/via_02.jpg",
        link: "/adventures/highlining",
      },
      {
        id: "cultural-tour",
        title: "Cultural Tour",
        description: "Visit ancient monasteries and Tamang villages.",
        image: "/buddhist_02.jpg",
        link: "/cultural-tours",
      },
    ],
  },
  {
    activityId: "Boulder Trek",
    addons: [
      {
        id: "via-ferrata",
        title: "Via Ferrata",
        description: "Experience the 1.9km iron path safely with thrill.",
        image: "/via_01.jpg",
        link: "/adventures/via-ferrata",
      },
      {
        id: "langtang-trek",
        title: "Langtang Trekking",
        description: "Explore the hidden valley with local guides.",
        image: "/langtang.jpg",
        link: "/adventures/langtang-trek",
      },
      {
        id: "HighLine-SlackLine",
        title: "Highlining",
        description: "Walk the line above the valley with expert guides.",
        image: "/via_02.jpg",
        link: "/adventures/highlining",
      },
    ],
  },
];
