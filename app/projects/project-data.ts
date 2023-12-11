import AppIcons from './app-icons/AppIcons';
import alerter from './assets/alerter/alerter.png';
import invidilinkDefault from './assets/invidilink/invidilink-default.png';
import invidilinkInvidious from './assets/invidilink/invidilink-invidious.png';
import invidilinkList from './assets/invidilink/invidilink-list.png';
import homescreen from './assets/mor/homescreen.jpg';
import library from './assets/mor/library.jpg';
import socialprofile from './assets/mor/social-profile.jpg';
import whatsAppShare from './assets/mor/whatsapp-share.png';
import unitedplans from './assets/optum/optum-united-plans.png';
import unitedtotals from './assets/optum/optum-united-totals.png';
import red4uDefault from './assets/red4u/red4u-default.png';
import red4uList from './assets/red4u/red4u-list.png';
import red4uViewInstance from './assets/red4u/red4u-viewinstance.png';
import seatgeekHome from './assets/seatgeek/seatgeek-home.png';
import seatgeekListing from './assets/seatgeek/seatgeek-listing.png';
import squeeblesDetail from './assets/squeebles/squeebles-detail.png';
import squeebles from './assets/squeebles/squeebles.png';
import twit2nitDefault from './assets/twit2nit/twit2nit-default.png';
import twit2nitList from './assets/twit2nit/twit2nit-list.png';
import twit2nitNitter from './assets/twit2nit/twit2nit-nitter.png';
import tailspinHome from './assets/tailspin/tailspin-home.png';
import tailspinQuery from './assets/tailspin/tailspin-query.png';
import tailspinResults from './assets/tailspin/tailspin-results.png';
import {StaticImageData} from 'next/image';

export interface Screenshot {
  src: string | StaticImageData;
  alt: string;
  caption: string;
  title: string;
  imageType: 'mobile' | 'desktop';
}

export interface ProjectDetails {
  name: string;
  shortname?: string;
  description: string;
  content: string;
  repoUrl: string | null;
  siteUrl: string | null;
  ios: boolean;
  web: boolean;
  openfin: boolean;
  opensource: boolean;
  screenshots: Screenshot[];
  link?: string;
}

export const projectData: ProjectDetails[] = [
  {
    name: 'Mor Life',
    shortname: 'mor',
    description: 'Discover events with friends.',
    content:
      'Mor Life is a social event creation and discovery app that allows users to create events and invite friends. Users can also share events on social media apps such as WhatsApp.\n\nThe app features a day view, a library of events, and a social profile to display a gallery of events.\n\nUsers can find and follow friends, and view their events in a social feed.\n\nThe app was built with React Native, and is currently available on the web and as an iOS app on TestFlight.',
    repoUrl: null,
    siteUrl: null,
    ios: true,
    web: true,
    openfin: false,
    opensource: false,
    link: '/projects/mor',
    screenshots: [
      {
        src: homescreen,
        alt: 'Mor Life Homescreen',
        caption: 'Mor Life Homescreen',
        title: 'Day View',
        imageType: 'mobile',
      },
      {
        src: library,
        alt: 'Mor Life Library',
        caption: 'Mor Life Library',
        title: 'Library',
        imageType: 'mobile',
      },
      {
        src: socialprofile,
        alt: 'Social Profile',
        caption: 'Social Profile',
        title: 'Social Profile',
        imageType: 'mobile',
      },
      {
        src: whatsAppShare,
        //"./assets/mor/whatsapp-share.png", // <-- could I add a required image here?
        alt: 'Share on WhatsApp',
        caption: 'Share on WhatsApp',
        title: 'Share on WhatsApp',
        imageType: 'mobile',
      },
    ],
  },
  {
    name: 'SeatGeek',
    description: 'Homescreen and Listings (2019)',
    content:
      'In 2019, I worked on the SeatGeek web app as a frontend engineer and implemented the home page redesign and and enhanced the ticket listing page with structured data and SEO improvements.',
    repoUrl: null,
    siteUrl: 'https://seatgeek.com',
    ios: false,
    web: true,
    openfin: false,
    opensource: false,
    screenshots: [
      {
        src: seatgeekHome,
        alt: 'SeatGeek Home',
        caption: 'SeatGeek Home',
        title: 'Home Screen',
        imageType: 'desktop',
      },
      {
        src: seatgeekListing,
        alt: 'SeatGeek Listing',
        caption: 'SeatGeek Listing',
        title: 'Ticket Listing',
        imageType: 'desktop',
      },
    ],
  },
  {
    name: 'Alerter',
    description: 'Real-time price alerts for bond traders.',
    content:
      'Alerter was built with Angular, WebSockets and OpenFin, a secure wrapper for Chromium used in financial services. The app is used by bond traders at a top capital markets bank to receive real-time price alerts for bonds they are trading, enabling faster execution and better pricing.',
    repoUrl: null,
    siteUrl: null,
    ios: false,
    web: false,
    openfin: true,
    opensource: false,
    screenshots: [
      {
        src: alerter,
        alt: 'Alerter',
        caption: 'Alerter',
        title: 'Alerter with toast notification',
        imageType: 'desktop',
      },
    ],
  },
  {
    name: 'United Health',
    description: "UnitedHealth's AARP Medicare app.",
    content:
      "UnitedHealth engaged Optum's web development team to build a mobile web app for AARP Medicare plans. The app was built with an Angular frontend and a Java backend.",
    repoUrl: null,
    siteUrl: 'https://www.aarpmedicareplans.com/',
    ios: false,
    web: true,
    openfin: false,
    opensource: false,
    screenshots: [
      {
        src: unitedplans,
        alt: 'UnitedHealth AARP',
        caption: 'UnitedHealth AARP Plans',
        title: 'Plans',
        imageType: 'mobile',
      },
      {
        src: unitedtotals,
        alt: 'UnitedHealth AARP',
        caption: 'UnitedHealth AARP Totals',
        title: 'Details',
        imageType: 'mobile',
      },
    ],
  },
  {
    name: 'Squeebles',
    description: 'A viral video site created for Cogo Labs.',
    content:
      'Squeebles was a viral video site created for Cogo Labs to encourage users to like and share videos on Facebook. Facebook Graph API was used to track likes and shares as well as gather emails from interested users.',
    repoUrl: null,
    siteUrl: null,
    ios: false,
    web: true,
    openfin: false,
    opensource: false,
    screenshots: [
      {
        src: squeebles,
        alt: 'Squeebles',
        caption: 'Squeebles',
        title: 'Squeebles Home',
        imageType: 'desktop',
      },
      {
        src: squeeblesDetail,
        alt: 'Squeebles',
        caption: 'Squeebles',
        title: 'Detail view',
        imageType: 'desktop',
      },
    ],
  },
  {
    name: 'Tailspin',
    description: 'Interactive AI Story Generator.',
    content:
      "Tailspin is an interactive AI story generator that uses OpenAI's GPT-3.5-instruct. Users create a prompt by pressing on story elements to change the story. A prompt is generated from the user's selections and sent to the backend to generate a story. The story is then displayed to the user.\n\nThe frontend is built with React and the backend is built with Express.",
    repoUrl: 'https://github.com/ktleary/tailspin-client',
    siteUrl: 'https://tailspin.fun',
    ios: false,
    web: true,
    openfin: false,
    opensource: true,
    screenshots: [
      {
        src: tailspinHome,
        alt: 'Tailspin',
        caption: 'Tailspin',
        title: 'Tailspin Home',
        imageType: 'desktop',
      },
      {
        src: tailspinQuery,
        alt: 'Tailspin',
        caption: 'Tailspin',
        title: 'Tailspin Query',
        imageType: 'desktop',
      },
      {
        src: tailspinResults,
        alt: 'Tailspin',
        caption: 'Tailspin',
        title: 'Tailspin Results',
        imageType: 'desktop',
      },
    ],
  },
  {
    name: 'twit2nit',
    description: 'View Twitter links on a live Nitter instance.',
    content:
      'twit2nit works by querying a list of Nitter instances to determine which are live. Users can enter a Twitter (X) username or link, and twit2nit will redirect to a live Nitter instance.\n\nThe frontend is built with React and the backend is built with Express.',
    repoUrl: 'https://github.com/ktleary/twit2nit.xyz',
    siteUrl: 'https://twit2nit.xyz',
    ios: false,
    web: true,
    openfin: false,
    opensource: true,
    screenshots: [
      {
        src: twit2nitDefault,
        alt: 'twit2nit',
        caption: 'twit2nit',
        title: 'twit2nit',
        imageType: 'mobile',
      },
      {
        src: twit2nitList,
        alt: 'twit2nit',
        caption: 'twit2nit',
        title: 'twit2nit live instance list',
        imageType: 'mobile',
      },
      {
        src: twit2nitNitter,
        alt: 'twit2nit',
        caption: 'twit2nit',
        title: 'View on Nitter',
        imageType: 'mobile',
      },
    ],
  },
  {
    name: 'invidi.link',
    description: 'View YouTube links on a live Invidious instance.',
    content: `invidi.link works by retrieving a list of healthy Invidious instances from invidios.io. Users can enter a YouTube url, and invidi.link will redirect to a live Invidious instance.\n\nThe frontend is built with React and the backend is built with Express.`,
    repoUrl: 'https://github.com/ktleary/invidi.link',
    siteUrl: 'https://invidi.link',
    ios: false,
    web: true,
    openfin: false,
    opensource: true,
    screenshots: [
      {
        src: invidilinkDefault,
        alt: 'invidi.link',
        caption: 'invidi.link',
        title: 'invidi.link',
        imageType: 'desktop',
      },
      {
        src: invidilinkList,
        alt: 'invidi.link',
        caption: 'invidi.link',
        title: 'invidi.link live instance list',
        imageType: 'desktop',
      },
      {
        src: invidilinkInvidious,
        alt: 'invidi.link',
        caption: 'invidi.link',
        title: 'View on Invidious',
        imageType: 'desktop',
      },
    ],
  },
  {
    name: 'red4u',
    description: 'View reddit links on libreddit or teddit.',
    content:
      'red4u works by querying a list of libreddit or teddit instances to determine which are live. Users can enter a reddit username or link, and red4u will redirect to a live libreddit or teddit instance.\n\nThe frontend is built with React and the backend is built with Express.',
    repoUrl: 'https://github.com/ktleary/red4u.xyz',
    siteUrl: 'https://red4u.xyz',
    ios: false,
    web: true,
    openfin: false,
    opensource: true,
    screenshots: [
      {
        src: red4uDefault,
        alt: 'red4u',
        caption: 'red4u',
        title: 'red4u',
        imageType: 'desktop',
      },
      {
        src: red4uList,
        alt: 'red4u',
        caption: 'red4u',
        title: 'red4u live instance list',
        imageType: 'desktop',
      },
      {
        src: red4uViewInstance,
        alt: 'red4u',
        caption: 'red4u',
        title: 'View on libreddit',
        imageType: 'desktop',
      },
    ],
  },
];
