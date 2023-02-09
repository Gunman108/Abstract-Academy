import { profile, facebook, instagram, linkedin, twitter, airbnb, binance, coinbase, dropbox } from "../assets";
import currPDF from "../assets/NFCurriculum.pdf";
import readyPDF from "../assets/Are_you_ready.pdf";

import {GrDocumentText} from  "react-icons/gr";
import { Profiler } from "react";

export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "curriculum",
    title: "Curriculum",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "quotes",
    title: "Quotes",
  },
  {
    id: "faq",
    title: "FAQ",
  },
];

export const features = [
  {
    id: "feature-1",
    title: "Curriculum Overview",
    content:
      "From Combinatorics and Conditionals to Sequences and Sorting Algorithms, we leave no stone unturned.",
    link: currPDF,
  },
  {
    id: "feature-2",
    title: "Sample Math Handout",
    content:
      "We take proactive steps make sure your information and transactions are secure.",
    link: ".",
  },
  {
    id: "feature-3",
    title: "Sample Programming Handout",
    content:
      "A balance transfer credit card can save you a lot of money in interest charges.",
    link: ".",
  },
  {
    id: "feature-4",
    title: "Are you ready?",
    content:
      "This document contains questions with prerequisite math knowledge for this program.",
    link: readyPDF,
  },
];

export const feedback = [
  // {
  //   id: "feedback-1",
  //   content:
  //     "Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.",
  //   name: "Grace S.",
  //   title: "Owner of Code Ninjas, Medfield",
  //   img: profile,
  // },
  {
    id: "feedback-2",
    content:
      "Gunner has done a great job leading the programming club. He is organizing both hackathons and outside speakers...His drive is unparalleled. When you combine this with his kindness and thoughtfulness, you get Gunner.",
    name: "Chris H.",
    title: "Programming Dept. Head, Milton Academy",
    img: profile,
  },
  {
    id: "feedback-3",
    content:
      "Corey regularly provides original ideas and out-of-the-box approaches that help simplify and solve a problem. He always tries to look at problems from different angles and find multiple ways that could potentially lead to a solution. Corey’s love for mathematics allows him to turn fear of a difficult problem into curiosity and a desire to find a solution.",
    name: "Alan A.",
    title: "International Mathematical Olympiad Medalist",
    img: profile,
  },
  // {
  //   id: "feedback-4",
  //   content:
  //     "It is usually people in the money business, finance, and international trade that are really rich.",
  //   name: "Rob M.",
  //   title: "Head of Academics, NuVu Innovation school",
  //   img: profile,
  // },
];

export const stats = [
  {
    id: "stats-1",
    title: "User Active",
    value: "3800+",
  },
  {
    id: "stats-2",
    title: "Trusted by Company",
    value: "230+",
  },
  {
    id: "stats-3",
    title: "Transaction",
    value: "$230M+",
  },
];

export const footerLinks = [
  {
    title: "Useful Links",
    links: [
      {
        name: "Content",
        link: "https://www.hoobank.com/content/",
      },
      {
        name: "How it Works",
        link: "https://www.hoobank.com/how-it-works/",
      },
      {
        name: "Create",
        link: "https://www.hoobank.com/create/",
      },
      {
        name: "Explore",
        link: "https://www.hoobank.com/explore/",
      },
      {
        name: "Terms & Services",
        link: "https://www.hoobank.com/terms-and-services/",
      },
    ],
  },
  {
    title: "Community",
    links: [
      {
        name: "Help Center",
        link: "https://www.hoobank.com/help-center/",
      },
      {
        name: "Partners",
        link: "https://www.hoobank.com/partners/",
      },
      {
        name: "Suggestions",
        link: "https://www.hoobank.com/suggestions/",
      },
      {
        name: "Blog",
        link: "https://www.hoobank.com/blog/",
      },
      {
        name: "Newsletters",
        link: "https://www.hoobank.com/newsletters/",
      },
    ],
  },
  {
    title: "Partner",
    links: [
      {
        name: "Our Partner",
        link: "https://www.hoobank.com/our-partner/",
      },
      {
        name: "Become a Partner",
        link: "https://www.hoobank.com/become-a-partner/",
      },
    ],
  },
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: instagram,
    link: "https://www.instagram.com/abstract.acad/",
  },
  {
    id: "social-media-2",
    icon: facebook,
    link: "https://www.facebook.com/profile.php?id=100090096793133",
  },
  {
    id: "social-media-3",
    icon: linkedin,
    link: "https://www.linkedin.com/company/abstractacademy",
  },
];

export const clients = [
  {
    id: "client-1",
    logo: airbnb,
  },
  {
    id: "client-2",
    logo: binance,
  },
  {
    id: "client-3",
    logo: coinbase,
  },
  {
    id: "client-4",
    logo: dropbox,
  },
];