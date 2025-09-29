// Act Alliance EU

import actHomepage from "../assets/images/websiteScreenshots/act-alliance-eu/act-alliance-eu_homepage.png";
import actStaff from "../assets/images/websiteScreenshots/act-alliance-eu/act-alliance-eu_staff.png";
import actContact from "../assets/images/websiteScreenshots/act-alliance-eu/act-alliance-eu_contact.png";
import actResource from "../assets/images/websiteScreenshots/act-alliance-eu/act-alliance-eu_resource.png";
import actTopic from "../assets/images/websiteScreenshots/act-alliance-eu/act-alliance-eu_topic.png";
import actTopics from "../assets/images/websiteScreenshots/act-alliance-eu/act-alliance-eu_topics.png";
import actResources from "../assets/images/websiteScreenshots/act-alliance-eu/act-alliance-eu_resources.png";
import designSystemDesktop from "../assets/images/websiteScreenshots/design-system/design-system_desktop.png";
import designSystemMobile from "../assets/images/websiteScreenshots/design-system/design-system_mobile.png";

// Belgium Women Together
import bwtHomepage from "../assets/images/websiteScreenshots/belgium-women-together/belgium-women-together_homepage.png";
import bwtMobile from "../assets/images/websiteScreenshots/belgium-women-together/belgium-women-together_mobile.png";

// Boulangerie
import boulangerieAbout from "../assets/images/websiteScreenshots/boulangerie/boulangerie_about.png";
import boulangerieContact from "../assets/images/websiteScreenshots/boulangerie/boulangerie_contact-page.png";
import boulangerieHero from "../assets/images/websiteScreenshots/boulangerie/boulangerie_hero-banner.png";
import boulangerieMobile from "../assets/images/websiteScreenshots/boulangerie/boulangerie_mobile-version.png";
import boulangerieOrder from "../assets/images/websiteScreenshots/boulangerie/boulangerie_order-page.png";

// Community Kitchen
import ckDonations from "../assets/images/websiteScreenshots/community-kitchen/community-kitchen_donations.png";
import ckHomepage from "../assets/images/websiteScreenshots/community-kitchen/community-kitchen_homepage.png";
import ckNews from "../assets/images/websiteScreenshots/community-kitchen/community-kitchen_news-and-events.png";
import ckRecipes from "../assets/images/websiteScreenshots/community-kitchen/community-kitchen_recipes.png";

// CSS Cheat Sheet
import cssDesktop from "../assets/images/websiteScreenshots/css-cheat-sheet/css-cheat-sheet_desktop.png";
import cssMobile from "../assets/images/websiteScreenshots/css-cheat-sheet/css-cheat-sheet_mobile.png";

// JavaScript
import jsConversation from "../assets/images/websiteScreenshots/javascript/javascript_conversation-generator.png";
import jsDates from "../assets/images/websiteScreenshots/javascript/javascript_dates.png";
import jsOperators from "../assets/images/websiteScreenshots/javascript/javascript_operators.png";

// Maison de l'Écologie
import maisonHomepage from "../assets/images/websiteScreenshots/maison-de-lecologie/maison-de-lecologie_homepage.png";
import maisonThumbnail from "../assets/images/websiteScreenshots/maison-de-lecologie/maison-de-lecologie_thumbnail.png";

// Molenbeek en Promenade
import molenbeekCycle from "../assets/images/websiteScreenshots/molenbeek-en-promenade/molenbeek-en-promenade_cycle-route.png";
import molenbeekHomepage from "../assets/images/websiteScreenshots/molenbeek-en-promenade/molenbeek-en-promenade_homepage.png";
import molenbeekMobile from "../assets/images/websiteScreenshots/molenbeek-en-promenade/molenbeek-en-promenade_mobile-version.png";
import molenbeekSignup from "../assets/images/websiteScreenshots/molenbeek-en-promenade/molenbeek-en-promenade_sign-up-page.png";

// Reactology
import reactologyCalc from "../assets/images/websiteScreenshots/reactology/reactology_calculator.png";
import reactologyHomepage from "../assets/images/websiteScreenshots/reactology/reactology_homepage.png";
import reactologyMemory from "../assets/images/websiteScreenshots/reactology/reactology_memory-game.png";
import reactologyTimer from "../assets/images/websiteScreenshots/reactology/reactology_timer.png";

// Webflow Portfolio
import webflowHomepage from "../assets/images/websiteScreenshots/webflow-portfolio/webflow-portfolio_homepage.png";
import webflowThumbnail from "../assets/images/websiteScreenshots/webflow-portfolio/webflow-portfolio_thumbnail.png";



export const projects = [
  {
    title: "Design System",
    year: 2025,
    slug: "design-system",
    client: "",
    tagline: "This is a web page I created as part of a Codecademy project to build a design system. It showcases a structured approach to web design, including a defined colour palette, typography, text styles, buttons, and navigation elements.",
    roles: [ "Web Design", "Development" ],
    type: "Website",
    tech: [ "HTML, CSS" ],
    team: [],
    overview: "I built this website using HTML and CSS, applying Flexbox and CSS Grid for a responsive layout. It organises key design elements, such as typography, colour schemes, and UI components, into a cohesive system. The page follows a three-column structure on desktop and adapts to a single-column layout on mobile. The goal was to create a reusable framework for consistent design across web projects.",
    site: "https://meicien.github.io/website-design-system/",
    previousProjectTitle: "",
    previousProjectSlug: "",
    nextProjectTitle: "",
    nextProjectSlug: "",
    gallery: [
      { src: designSystemDesktop, alt: "Desktop version of Design System", caption: "Desktop" },
      { src: designSystemMobile, alt: "Mobile version of Design System", caption: "Mobile", mobile: true },
    ], thumbnail: designSystemDesktop,
    summary: {
      text:
        "A structured design system showing a cohesive colour palette, typography, text styles, and UI components for consistent web design.",
      linkText: "design system", // the underlined word(s)
    },
  },
  {
    title: "CSS Cheat Sheet",
    year: 2025,
    slug: "css-cheat-sheet",
    client: "",
    tagline: "This CSS cheat sheet outlines different types of selectors and specificity rules. It provides an easy-to-read reference for applying styles effectively in web development.",
    roles: [ "Web Design", "Development" ],
    type: "Website",
    tech: [ "HTML, CSS" ],
    team: [],
    overview: "I created this cheat sheet using HTML and CSS. It organises CSS selectors into a structured table, showing examples and explanations of how each selector works. It also includes a section on specificity rules to help understand the priority of different selectors. The goal is to provide a quick reference for writing clean and efficient CSS.",
    site: "https://meicien.github.io/css-specificity-cheat-sheet/",
    previousProjectTitle: "",
    previousProjectSlug: "",
    nextProjectTitle: "",
    nextProjectSlug: "",
    gallery: [
      { src: cssDesktop, alt: "Desktop version of CSS Cheat Sheet", caption: "Desktop" },
      { src: cssMobile, alt: "Mobile version of CSS Cheat Sheet", caption: "Mobile", mobile: true },
    ],
    thumbnail: cssDesktop,
    summary: {
      text:
        "A handy CSS cheat sheet covering selectors and specificity rules, designed for quick reference and better styling control in web projects.",
      linkText: "CSS cheat sheet",

    },
  },
  {
    title: "ACT Alliance EU",
    year: 2024,
    slug: "act-alliance-eu",
    client: "ACT Alliance EU",
    tagline:
      "I created a new website for a network of NGOs, prioritising visibility, accessibility and intuitive navigation.",
    roles: [ "Web Design", "Development" ],
    type: "website",
    tech: [ "WordPress, Elementor Pro" ],
    team: [],
    overview:
      "ACT Alliance EU wanted an attractive website that provided clear information on their mission: advocating towards the EU for fairer humanitarian and development policies. One of the main features of the site was an extensive library of resources, which users could filter using various categories and keywords. To aid navigation, I simplified the previous website's structure. The new site adheres to recognised web accessibility standards, and is optimised for search engines.",
    site: "https://actalliance.eu",
    previousProjectTitle: "",
    previousProjectSlug: "",
    nextProjectTitle: "Community Kitchen",
    nextProjectSlug: "community-kitchen",
    gallery: [
      { src: actHomepage, alt: "Homepage of ACT Alliance EU", caption: "Homepage" },
      { src: actStaff, alt: "Staff listing page", caption: "Staff Page" },
      { src: actResources, alt: "Resources library with filters", caption: "Resources Library" },
      { src: actContact, alt: "Contact page with details and map", caption: "Contact" },
      { src: actResource, alt: "Single resource/article layout", caption: "Resource Page" },
      { src: actTopics, alt: "Topic landing page", caption: "Topic Page" },
    ],
    thumbnail: actHomepage,
    summary: {
      text:
        "ACT Alliance EU wanted an attractive website that provided clear information on their mission: advocating towards the EU for fairer humanitarian and development policies.",
      linkText: "ACT Alliance EU",

    },
  },
  {
    title: "Community Kitchen",
    year: 2023,
    slug: "community-kitchen",
    client: "Community Kitchen",
    tagline: "Community Kitchen is a Brussels-based charity that prepares thousands of  nourishing meals each week for people who are hungry, homeless, or vulnerable in the city. ",
    roles: [ "Web Design", "Development" ],
    type: "website",
    tech: [ "WordPress, Elementor Pro" ],
    team: [],
    overview: "Community Kitchen is a fantastic organisation that relies on donations to carry out its mission of feeding those in need. However, without a website their reach was limited. I offered to build them one for my internship at Interface3, and they gladly accepted!",
    site: "https://communitykitchen.be/",
    previousProjectTitle: "",
    previousProjectSlug: "",
    nextProjectTitle: "",
    nextProjectSlug: "",
    gallery: [
      { src: ckHomepage, alt: "Homepage of Community Kitchen", caption: "Homepage" },
      { src: ckRecipes, alt: "Recipe Page of Community Kitchen", caption: "Recipes" },
      { src: ckNews, alt: "News and Events Page of Community Kitchen", caption: "News and Events" },
      { src: ckDonations, alt: "Donations Page of Community Kitchen", caption: "Donations" },
    ],
    thumbnail: ckHomepage,
    summary: {
      text:
        "Community Kitchen is a Brussels-based charity that prepares thousands of  nourishing meals each week for people who are hungry, homeless, or vulnerable in the city.",
      linkText: "Community Kitchen",

    },
  },
  {
    title: "Reactology",
    year: 2023,
    slug: "reactology",
    client: "",
    tagline: "Reactology is a collection of projects I’ve created using React and Tailwind CSS.",
    roles: [ "Web Design", "Development" ],
    type: "website",
    tech: [ "React, Tailwind CSS" ],
    team: [],
    overview: "I created Reactology as a kind of laboratory where I can try out react code. Projects include  a to-do list app, stopwatch, countdown timer, calculator and memory game.",
    site: "https://react.eleanor-mears.com/",
    previousProjectTitle: "",
    previousProjectSlug: "",
    nextProjectTitle: "",
    nextProjectSlug: "",
    gallery: [
      { src: reactologyHomepage, alt: "Homepage of Reactology", caption: "Homepage" },
      { src: reactologyMemory, alt: "Reactology Memory Game", caption: "Memory Game" },
      { src: reactologyCalc, alt: "Reactology Calculator", caption: "Calculator" },
      { src: reactologyTimer, alt: "Reactology Timer", caption: "Timer" },
    ],
    thumbnail: reactologyHomepage,
    summary: {
      text:
        "I created Reactology as a kind of laboratory where I can try out react code. Projects include a to-do list app, a stopwatch, countdown timer, calculator and memory game.",
      linkText: "Reactology",

    },
  },
  {
    title: "JavaScript",
    year: 2023,
    slug: "javascript",
    client: "",
    tagline: "This is a website I created while following the W3Schools JavaScript course. It contains my notes and practice exercises I set myself.",
    roles: [ "Web Design", "Development" ],
    type: "website",
    tech: [ "HTML, CSS, JavaScript, PHP, Bootstrap, Prism.js" ],
    team: [],
    overview: "I created this website using HTML, CSS, JavaScript, and PHP. I used Bootstrap for layout and styling, and the Prism.js library for syntax highlighting. It contains notes on a variety of topics (loops, conditional statements, logical operators etc.), practice exercises and the corresponding code, as well as a glossary of terms. It's a work in progress that I'll keep adding to as I learn more.",
    site: "https://javascript.eleanor-mears.com/",
    previousProjectTitle: "",
    previousProjectSlug: "",
    nextProjectTitle: "",
    nextProjectSlug: "",
    gallery: [
      { src: jsDates, alt: "Dates page in JavaScript site", caption: "Dates" },
      { src: jsOperators, alt: "Operators page in JavaScript site", caption: "Operators" },
      { src: jsConversation, alt: "Conversation Generator page in JavaScript site", caption: "Conversation Generator" },
    ],
    thumbnail: jsConversation,
    summary: {
      text:
        "This site contains notes on a variety of JavaScript topics (loops, conditional statements, logical operators etc.), practice exercises and the corresponding code, as well as a glossary of terms. It's a work in progress that I'll keep adding to as I learn more.",
      linkText: "notes on a variety of JavaScript topics",

    },
  },
  {
    title: "Webflow Portfolio",
    year: 2023,
    slug: "webflow-portfolio",
    client: "",
    tagline: "A one-page portfolio site created using Webflow",
    roles: [ "Web Design", "Development" ],
    type: "website",
    tech: [ "Webflow" ],
    team: [],
    overview: "I created this fully responsive portfolio page using the 'no-code' platform Webflow, inspired by Sandy Ludosky's LinkedIn course.",
    site: "",
    previousProjectTitle: "",
    previousProjectSlug: "",
    nextProjectTitle: "",
    nextProjectSlug: "",
    gallery: [
      { src: webflowHomepage, alt: "Homepage of Webflow Portfolio", caption: "Homepage" },
    ],
    thumbnail: webflowThumbnail,
    summary: {
      text:
        "I created this fully responsive portfolio page using the 'no-code' platform Webflow, inspired by Sandy Ludosky's LinkedIn course. The design is colourful, clean and easy-to-navigate.",
    },
  },
  {
    title: "Molenbeek en Promenade",
    year: 2022,
    slug: "molenbeek-en-promenade",
    client: "",
    tagline: "A district bursting with life and colour, Molenbeek has too often been ignored or maligned. Molenbeek en Promenade aims to change all that by putting Brussels 1080 back on the map.",
    roles: [ "Web Design", "Development" ],
    type: "website",
    tech: [ "HTML, CSS, JavaScript, Leaflet.js" ],
    team: [ "Christel Rodriguez Perez", "Nasra Ahmed Ibrahim" ],
    overview: "A former industrial hub, West Brussels’ Molenbeek is now one of the most culturally diverse districts in Europe. Housing some 100,000 inhabitants from over 100 countries, the area is known for its bustling markets, beautiful parks, lively art scene and its emphasis on green development. Molenbeek en Promenade is a website that attempts to highlight Molenbeek's amazing cultural, historical and ecological heritage by offering self-guided walking and cycling tours of the commune.",
    site: "",
    previousProjectTitle: "",
    previousProjectSlug: "",
    nextProjectTitle: "",
    nextProjectSlug: "",
    gallery: [
      { src: molenbeekHomepage, alt: "Homepage of Molenbeek en Promenade", caption: "Homepage" },
      { src: molenbeekSignup, alt: "Registration page of Molenbeek en Promenade", caption: "Sign-up Page" },
      { src: molenbeekCycle, alt: "Cycle Route page of Molenbeek en Promenade", caption: "Cycle Route" },
      { src: molenbeekMobile, alt: "Mobile version of Molenbeek en Promenade", caption: "Mobile version" },
    ],
    thumbnail: molenbeekHomepage,
    summary: {
      text:
        "A district bursting with life and colour, Molenbeek has too often been ignored or maligned. Molenbeek en Promenade aims to change all that by putting Brussels 1080 back on the map.",
    },
  },
  {
    title: "Maison de l'Écologie",
    year: 2022,
    slug: "maison-de-lecologie",
    client: "Maison de l'Écologie",
    tagline: "I designed a new homepage for the Maison de l’Écologie in Namur for a student project.",
    roles: [ "Web Design", "Development" ],
    type: "website",
    tech: [ "WordPress" ],
    team: [ "Soumaya Mhenni" ],
    overview: "The Maison de l'Écologie in Namur is a charity that promotes sustainability through workshops, children's holiday clubs and a large library of toys and board games. They turned to my coding school, Interface3, because they wanted a more coherent, attractive and user-friendly website. Soumaya Mhenni and I were tasked with redesigning the home page and navigation menu. WordPress was an excellent choice for this project, as we needed an easy-to-use administration interface that would allow the organisation's staff to easily publish news articles and add events to the calendar.",
    site: "",
    previousProjectTitle: "",
    previousProjectSlug: "",
    nextProjectTitle: "",
    nextProjectSlug: "",
    gallery: [
      { src: maisonHomepage, alt: "Homepage of La Maison de l'Écologie", caption: "Homepage" },
    ],
    thumbnail: maisonThumbnail,
    summary: {
      text:
        "I created a new homepage and navigation menu for the Maison de l’Écologie in Namur.",
    },
  },
  {
    title: "Belgium Women Together",
    year: 2022,
    slug: "belgium-women-together",
    client: "",
    tagline: "Belgium Women Together was a microsite created especially to advertise a religious retreat aimed at women from English-speaking churches across Benelux.",
    roles: [ "Web Design", "Development" ],
    type: "website",
    tech: [ "HTML, CSS, JavaScript" ],
    team: [],
    overview: "Belgium Women Together, as a non-denominational event, needed an independent website not linked to any one particular church. The aim was to outline the programme, introduce the speaker, give practical details and provide a way of signing up for the event. The one-page approach was designed to be accessible and clear, paying particular attention to those viewing the site on a smartphone. The colour scheme of the site takes its cue from a piece of artwork that had been chosen by the speaker as a focus for the event.",
    site: "",
    previousProjectTitle: "",
    previousProjectSlug: "",
    nextProjectTitle: "",
    nextProjectSlug: "",
    gallery: [
      { src: bwtHomepage, alt: "Homepage of Belgium Women Together", caption: "Homepage" },
      { src: bwtMobile, alt: "Mobile version of Belgium Women Together", caption: "Mobile" },
    ],
    thumbnail: bwtMobile,
    summary: {
      text:
        "Belgium Women Together is a microsite created especially to advertise a religious retreat aimed at women from English-speaking churches across Benelux.",
    },
  },
  {
    title: "Boulangerie",
    year: 2022,
    slug: "boulangerie",
    client: "",
    tagline: "During Covid lockdown I learnt to bake sourdough bread and loved it. So I decided to create the website for a (pretend) bakery as my first project at Interface3.",
    roles: [ "Web Design", "Development" ],
    type: "website",
    tech: [ "HTML, CSS, JavaScript" ],
    team: [],
    overview: "The website includes a homepage, about page, contact page and order page.",
    site: "",
    previousProjectTitle: "",
    previousProjectSlug: "",
    nextProjectTitle: "",
    nextProjectSlug: "",
    gallery: [
      { src: boulangerieHero, alt: "Homepage 'Hero' banner of Boulangerie Eleanor", caption: "Homepage 'Hero' banner" },
      { src: boulangerieAbout, alt: "About Page of Boulangerie Eleanor", caption: "About Page" },
      { src: boulangerieContact, alt: "Contact Page of Boulangerie Eleanor", caption: "Contact Page" },
      { src: boulangerieOrder, alt: "Order Page of Boulangerie Eleanor", caption: "Order Page" },
      { src: boulangerieMobile, alt: "Mobile version of Boulangerie Eleanor", caption: "Mobile version" },
    ],
    thumbnail: boulangerieHero,
    summary: {
      text:
        "During Covid lockdown I learnt to bake sourdough bread and loved it. So I decided to create the website for a (pretend) bakery as my first project at Interface3.",
    },
  },
];

// Fill previous project dynamically
projects.forEach( ( project, i ) =>
{
  const previous = projects[ ( i - 1 + projects.length ) % projects.length ];
  project.previousProjectTitle = previous.title;
  project.previousProjectSlug = previous.slug;
} );


// Fill next project dynamically
projects.forEach( ( project, i ) =>
{
  const next = projects[ ( i + 1 ) % projects.length ]; // loops back to first if last
  project.nextProjectTitle = next.title;
  project.nextProjectSlug = next.slug;
} );