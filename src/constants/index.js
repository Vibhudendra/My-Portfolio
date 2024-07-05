import { meta, shopify, starbucks, tesla, TCS, WIRIN } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    // linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    Zustand,
    typescript,
    apple,
} from "../assets/icons";
import { Link } from "react-router-dom";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js[Familiar]",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "Software Developer",
        company_name: "Tata Consultancy services",
        icon: TCS,
        iconBg: "#accbe1",
        date: "June 2023 - Present",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
        ],
    },
    {
        title: "Inter UI Developer",
        company_name: "WIRIN",
        icon: WIRIN,
        iconBg: "#fbc3bc",
        date: "Dec 2022 - Mar 2023",
        points: [
            "Collaborated on research and design to conceptualize and refine the digital cockpit interface for an autonomous vehicle.",
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        icon: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        icon: github,
        link: 'https://github.com/Vibhudendra',
    },
    // {
    //     name: 'LinkedIn',
    //     // iconUrl: linkedin,
    //     link: 'https://www.linkedin.com/in/vibhudendras/',
    // }
];

export const projects = [
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Car Finding App',
        description: 'Designed and built a mobile app for finding and comparing cars on the market, streamlining the car-buying process.',
        link: 'https://github.com/Vibhudendra/cars_showcase',
        Livelink : 'https://cars-showcase-five-hazel.vercel.app/',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-green',
        name: 'Real-Estate Application',
        description: 'Designed and built a Realestates website for finding reliable homes on the market, Simplifying the property purchase and rent process',
        link: 'https://github.com/Vibhudendra/Homes-RealEstate',
        Livelink : 'https://homes-real-estate.vercel.app/',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-pink',
        name: 'Portfolio ',
        description: 'Designed and built portfolio website that showcases projects, skills and experience.',
        link: 'https://github.com/Vibhudendra/Portfolio',
        Livelink :'https://three-dusk-11.vercel.app',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'AI Summarizer Application',
        description: 'App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.',
        link: 'InProgress',
        Livelink : '',
    },
    {
        iconUrl: apple,
        theme: 'btn-back-black',
        name: 'Apple Website',
        description: 'A website that resembles the apple product page, that showcases the 3D render of the actual product, built using three JS and GSAP and also integrated sentry to monitor the web-vitals.',
        link: 'https://github.com/Vibhudendra/Apple',
        Livelink : 'https://apple-e.vercel.app/',
    }
];