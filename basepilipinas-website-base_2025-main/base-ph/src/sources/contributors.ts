export interface SocialLinks {
  facebook?: string;
  twitter?: string;
  telegram?: string;
  tiktok?: string;
  discord?: string;
  linkedin?: string;
}

export interface Contributor {
  name: string;
  email: string;
  socials: SocialLinks;
  skills: string[];
  tags?: string[];
  photoUrl?: string; // Added photoUrl property for profile images
  region?: string; // Added region property for regional ambassadors
}

export const contributors: Contributor[] = [
  {
    name: "EL Bonuan",
    email: "ebonuan@gmail.com",
    socials: {
      facebook: "https://www.facebook.com/bonuan",
      twitter: "https://x.com/ElBonuan",
      telegram: "ELBonuan",

      discord: "el.malamaya",
      linkedin: "https://www.linkedin.com/in/Malamaya/",
    },
    skills: [
      "Developer",
      "Creatives (UI/UX, graphic designer)",
      "Social Media",
      "Writer",
      "Content Creation",
      "Researcher",
      "Marketing",
      "Sales",
      "Video Editing",
      "Food Taster",
    ],
    photoUrl: "/contributors/EL Bonuan.jpg",
    tags: ["Contributor"],
  },
  {
    name: "Ryan Lucas",
    email: "markryanlucas20@gmail.com",
    socials: {
      facebook: "https://www.facebook.com/RyOfMadness",
      twitter: "https://x.com/RyLucas20",
      linkedin: "https://www.linkedin.com/in/rylucas20/",
    },
    skills: [
      "Creatives (UI/UX, graphic designer)",
      "Social Media",
      "Writer",
      "Marketing",
      "Video Editing",
    ],
    photoUrl: "/contributors/Lucas.jpg",
    tags: ["Contributor"],
  },
  {
    name: "Rhomuel Brian Macahilig",
    email: "rhomuelm@gmail.com",
    socials: {
      facebook: "http://fb.me/rhomuel",
      twitter: "https://x.com/rhomurl",
      telegram: "https://telegram.me/rhomurl",
      tiktok: "https://www.tiktok.com/@rhomurl",
      discord: "rhomurl",
      linkedin: "https://www.linkedin.com/in/rhomurl/",
    },
    skills: [
      "Social Media",
      "Content Creation",
      "Researcher",
      "Community Management/Moderation",
      "Web3 Forensics and Security",
    ],
    photoUrl: "/contributors/Rhomuel Macahilig.jpg", // Placeholder path for photo
    tags: ["Contributor"],
  },
  {
    name: "Missy Reign Dela Cruz",
    email: "missyreigndelacruz@gmail.com",
    socials: {
      facebook: "https://www.facebook.com/missy.reign.2024",
      twitter: "https://x.com/Eizz_Web3",
      telegram: "@Eizz_24",
      tiktok: "https://www.tiktok.com/@eizz.web3?_t=ZS-8teGsM1YK8I&_r=1",
      discord: "eizz7804",
      linkedin: "https://www.linkedin.com/in/missy-reign-dela-cruz-662722252/",
    },
    skills: [
      "Social Media",
      "Writer",
      "Content Creation",
      "Researcher",
      "Marketing",
    ],
    photoUrl: "/contributors/Missy Reign Dela Cruz.jpg", // Placeholder path for photo
    tags: ["Contributor"],
  },
  {
    name: "Jazz Michael Nase",
    email: "jazzmichaelnase@gmail.com",
    socials: {
      facebook: "https://www.facebook.com/jazz.nase.14",
      twitter: "https://x.com/JazzMichaelNase",
      telegram: "https://t.me/JazzMichaelNase",
      discord: "jazznase (ID: 838362929690050560)",
      linkedin: "https://www.linkedin.com/in/jazz-michael-g-nase-290a112a5/",
    },
    skills: [
      "Developer",
      "Creatives (UI/UX, graphic designer)",
      "Social Media",
      "Writer",
      "Content Creation",
    ],
    photoUrl: "/contributors/Jazz Michael Nase.jpg", // Placeholder path for photo
    tags: ["Contributor"],
  },
  {
    name: "Neil John Rivera",
    email: "0xhakua@gmail.com",
    socials: {
      facebook: "https://www.facebook.com/njerivera/",
      twitter: "https://x.com/0xhakua",
      telegram: "@hakua_gg",
      tiktok: "https://www.tiktok.com/@0xhakua",
      discord: "hakua.dev",
      linkedin: "https://www.linkedin.com/in/neil-john-rivera-105937252/",
    },
    skills: ["Creatives (UI/UX, graphic designer)"],
    photoUrl: "/contributors/Neil John Rivera.jpg", // Placeholder path for photo
    tags: ["Contributor"],
  },
  {
    name: "Joel Monjardino",
    email: "joelmonjardino@gmail.com",
    socials: {
      twitter: "https://x.com/JoelMonjardino",
      tiktok: "https://www.tiktok.com/@joel.monjardin",
      discord: "Jofi04493",
      linkedin: "https://www.linkedin.com/in/joel-monjardin-727a6b269/",
    },
    skills: ["Social Media", "Sales"],
    photoUrl: "/contributors/Joel.jpg", // Placeholder path for photo
    tags: ["Contributor"],
  },
  {
    name: "Nickjohn Ibuyat",
    email: "nickjohnibuyat@gmail.com",
    socials: {
      facebook: "https://www.facebook.com/nickibuyat/",
      twitter: "https://x.com/AoinoKen",
      telegram: "Nicc_kun",

      linkedin: "https://www.linkedin.com/in/nickjohn-ibuyat/",
    },
    skills: ["Researcher", "Marketing", "Sales", "Business Development"],
    photoUrl: "/contributors/Nickjohn Ibuyat.jpg",
    tags: ["Ambassador", "Regional Ambassador"],
    region: "North Luzon",
  },
  {
    name: "Patrick Joseph Carangan",
    email: "patrickjosephcarangan@gmail.com",
    socials: {
      facebook: "https://www.facebook.com/Pijeyyyy.21",
      twitter: "https://x.com/caranganpj",
      tiktok: "https://www.tiktok.com/@goodboypijey",
      discord: "Pijeyyy#4694",
      linkedin:
        "https://www.linkedin.com/in/patrick-joseph-carangan-503426327/",
    },
    skills: [
      "Creatives (UI/UX, graphic designer)",
      "Social Media",
      "Content Creation",
    ],
    photoUrl: "/contributors/Patrick Joseph Carangan.jpg",
    tags: ["Contributor"],
  },
  {
    name: "Jezza Penaflor",
    email: "jezzasasan128@gmail.com",
    socials: {
      facebook: "https://www.facebook.com/sasha.yonce.2024",
      twitter: "https://x.com/sashayonz28",
      telegram: "@yonce0128",
      tiktok: "https://www.tiktok.com/@zeta.ph2",
      discord: "@yonce0128",
      linkedin: "https://www.linkedin.com/in/jezza-penaflor-1a1771266/",
    },
    skills: ["Social Media", "Video Editing", "Event Lead / Community Lead"],
    photoUrl: "/contributors/Jezza Penaflor.jpg",
    tags: ["Contributor"],
  },
  {
    name: "MARVEE FASOY",
    email: "fasoymarvee606@gmail.com",
    socials: {
      facebook: "https://www.facebook.com/share/1BtRnFWhRV/?mibextid=qi2Omg",
      twitter: "https://x.com/CryptoShaman28",
    },
    skills: ["Social Media", "Marketing"],
    photoUrl: "/contributors/Marvee Fasoy.jpg",
    tags: ["Contributor"],
  },
  {
    name: "Francis Esparagoza",
    email: "francis.esparagoza03@gmail.com",
    socials: {
      facebook: "https://web.facebook.com/francisdaniel.esparagoza/",
      twitter: "https://x.com/frankydoodle01",
      telegram: "@frankydoodle02",
      discord: "_frankydoodle",
      linkedin: "https://www.linkedin.com/in/francisde/",
    },
    skills: ["Social Media", "Writer", "Content Creation", "Marketing"],
    photoUrl: "/contributors/Francis Esparagoza.jpg", // Placeholder path for photo
    tags: ["Contributor"],
  },
  {
    name: "Marc Edison Maniling",
    email: "cramnoside199@gmail.com",
    socials: {
      facebook: "https://www.facebook.com/maruku.eji",
      twitter: "https://x.com/mrcxxi02",
      telegram: "@Fuji_Eji",
      tiktok: "https://www.tiktok.com/@maruku_ejisan",
      discord: "@maruku_eji",
      linkedin: "https://www.linkedin.com/in/marc-edison-maniling-80946a205/",
    },
    skills: ["Social Media", "Writer", "Content Creation", "Moderator"],
    photoUrl: "/contributors/Marc Edison Maniling.jpg", // Placeholder path for photo
    tags: ["Contributor"],
  },
  {
    name: "Aaron (FYCEE) Aranez",
    email: "fycee22@gmail.com",
    socials: {
      facebook: "https://web.facebook.com/aaronedgar.aranez",
      twitter: "https://x.com/EironFycee",
      telegram: "@fycee",
      tiktok: "https://www.tiktok.com/@fyzeon",
      discord: "@fycee",
      linkedin: "https://www.linkedin.com/in/aaron-fycee-aranez-022460205/",
    },
    skills: [
      "Social Media",
      "Writer",
      "Content Creation",
      "Marketing",
      "Community Building",
      "Ambassadors Mentorship",
      "BizDev",
      "Lead-generation",
    ],
    photoUrl: "/contributors/Aaron.jpg", // Placeholder path for photo
    tags: ["Contributor"],
  },
  {
    name: "Elixes Becislao",
    email: "elixes.becislao@gmail.com",
    socials: {
      linkedin: "https://www.linkedin.com/in/elixes-becislao/",
    },
    skills: ["Leadership", "Strategy", "Community Building"],
    tags: ["Country Lead", "Leads"],
    photoUrl: "/contributors/Sir.eli.jpg",
  },
  {
    name: "Jerome Monte",
    email: "jerome.monte@gmail.com",
    socials: {
      linkedin: "https://www.linkedin.com/in/jerome-monte/",
    },
    skills: ["Tech Lead", "Development", "Blockchain"],
    tags: ["Tech Lead", "Leads"],
    photoUrl: "/contributors/Jerome.png",
    region: "Metro & Mega Manila",
  },
  {
    name: "Christine Chavez",
    email: "christine.chavez@gmail.com",
    socials: {
      linkedin: "https://www.linkedin.com/in/christine-chavez/",
    },
    skills: ["Marketing Lead", "Marketing", "Community"],
    tags: ["Marketing Lead", "Leads"],
    photoUrl: "/contributors/Ms.Christine.jpg",
  },
  {
    name: "Ryan Ariego",
    email: "ryan.ariego@gmail.com",
    socials: {
      linkedin: "https://www.linkedin.com/in/ryan-ariego/",
    },
    skills: ["Regional Ambassador", "Community"],
    tags: ["Ambassador", "Regional Ambassador"],
    photoUrl: "/contributors/Ryanchris.jpg",
    region: "Visayas",
  },
  {
    name: "Ruben Lacumba",
    email: "ruben.lacumba@gmail.com",
    socials: {
      linkedin: "https://www.linkedin.com/in/ruben-lacumba/",
    },
    skills: ["Regional Ambassador", "Community"],
    tags: ["Ambassador", "Regional Ambassador"],
    photoUrl: "/contributors/Ruben.jpg",
    region: "Mindanao",
  },
  {
    name: "Sean Michael Andrew B. Mendoza",
    email: "",
    socials: {
      facebook: "https://www.facebook.com/mndzsma",
      linkedin: "https://www.linkedin.com/in/sean-michael-andrew-mendoza-213223324/",
      telegram: "https://t.me/Seanniiea",
    },
    skills: ["Developer"],
    tags: ["Contributor", "Developer"],
    photoUrl: "/contributors/sean3.jpg",
  },
  {
    name: "Dan Vincent Laguimun",
    email: "",
    socials: {
      facebook: "https://www.facebook.com/share/1AvLjUMg34/",
      telegram: "@naD",
      linkedin: "https://www.linkedin.com/in/dan-vincent-laguimun-148112278/",
    },
    skills: ["Creatives (UI/UX, graphic designer)"],
    tags: ["Contributor"],
    photoUrl: "/contributors/Dan.jpg",
  }, // Dan Vincent Laguimun
  {
    name: "Maerhyl Bautista",
    email: "",
    socials: {
      linkedin: "https://www.linkedin.com/in/maerhylbautista/",
    },
    skills: ["Creatives (UI/UX, graphic designer)"],
    tags: ["Contributor"],
    photoUrl: "/contributors/Bautista.jpg",
  }, // Maerhyl Bautista
];
