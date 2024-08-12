import type { ISkill } from "./interfaces"

/** A list of my current skills. */
export const skills: ISkill[] = [
    // Skills that should be rendered in skills section
    {
        name: "React",
        abbreviation: "",
        description: "JavaScript library for building UIs",
        hasLogo: true,
        link: "reactjs.org",
        backlight: "bg-teal-500/10",
    },
    {
        name: "Material UI",
        abbreviation: "MUI",
        description: "Component library for React",
        hasLogo: true,
        link: "mui.com",
        backlight: "bg-blue-500/10",
    },
    {
        name: "Svelte",
        abbreviation: "",
        description: "Frontend compiler for building UIs",
        hasLogo: true,
        link: "svelte.dev",
    },
    {
        name: "SvelteKit",
        abbreviation: "",
        description: "Frontend framework for Svelte",
        hasLogo: true,
        link: "kit.svelte.dev",
        backlight: "bg-amber-500/10",
        customSize: "max-h-16 w-16 xl:max-h-20 xl:w-20",
    },
    {
        name: "i18next",
        abbreviation: "",
        description: "Internationalization framework",
        hasLogo: true,
        link: "i18next.com",
    },
    {
        name: "Tailwind CSS",
        abbreviation: "",
        description: "Utility-first CSS framework",
        hasLogo: true,
        link: "tailwindcss.com",
        backlight: "bg-cyan-500/10",
    },
    {
        name: "daisyUI",
        abbreviation: "",
        description: "Component library for Tailwind",
        hasLogo: true,
        link: "daisyui.com",
    },
    {
        name: "Jest",
        abbreviation: "",
        description: "JavaScript testing framework",
        hasLogo: true,
        link: "jestjs.io",
    },
    {
        name: "Socket.IO",
        abbreviation: "",
        description: "Real-time JavaScript library",
        hasLogo: true,
        link: "socket.io",
    },
    {
        name: "p5.js",
        abbreviation: "",
        description: "JavaScript library for creativity",
        hasLogo: true,
        link: "p5js.org",
        backlight: "bg-red-400/15",
    },
    {
        name: "matter.js",
        abbreviation: "",
        description: "2D physics engine for the web",
        hasLogo: true,
        link: "brm.io/matter-js",
        backlight: "bg-gradient-to-r from-green-300/30 to-red-300/30 via-gray-500/20",
        customSize: "max-h-14 w-14 xl:max-h-[72px] xl:w-[72px]",
    },
    {
        name: "Node.js",
        abbreviation: "",
        description: "JavaScript run-time environment",
        hasLogo: true,
        link: "nodejs.dev",
        backlight: "bg-green-300/30 xl:bg-green-300/40",
        customSize: "max-h-14 w-14 xl:max-h-16 xl:w-16",
    },
    {
        name: "Express",
        abbreviation: "ex",
        description: "Web framework for Node.js",
        hasLogo: true,
        link: "expressjs.com",
        backlight: "bg-gray-200/20",
        customSize: "max-h-8 w-8 xl:max-h-10 xl:w-10",
    },
    {
        name: "Spring Boot",
        abbreviation: "",
        description: "Extension for Java framework Spring",
        hasLogo: true,
        link: "spring.io",
    },
    {
        name: "OpenAPI",
        abbreviation: "",
        description: "Rest API specification standard",
        hasLogo: true,
        link: "openapis.org",
    },
    {
        name: "JavaScript",
        abbreviation: "JS",
        description: "Programming language of the web",
        hasLogo: true,
        link: "javascript.com",
    },
    {
        name: "TypeScript",
        abbreviation: "TS",
        description: "JavaScript with syntax for types",
        hasLogo: true,
        link: "typescriptlang.org",
    },
    {
        name: "Figma",
        abbreviation: "",
        description: "Tool for interface design",
        hasLogo: true,
        link: "figma.com",
    },
    {
        name: "Python",
        abbreviation: "",
        description: "High-level programming language",
        hasLogo: true,
        link: "python.org",
    },
    {
        name: "Arduino",
        abbreviation: "",
        description: "Microcontroller platform",
        hasLogo: true,
        link: "arduino.cc",
        backlight: "bg-teal-500/20",
    },
    {
        name: "Onshape",
        abbreviation: "",
        description: "CAD software for 3D modeling",
        hasLogo: true,
        link: "onshape.com",
        customSize: "max-h-11 w-11 xl:max-h-12 xl:w-12",
    },
    {
        name: "UltiMaker Cura",
        abbreviation: "",
        description: "Slicing software for 3D printing",
        hasLogo: true,
        link: "ultimaker.com",
        customSize: "max-h-12 w-12 xl:max-h-14 xl:w-14",
    },

    // Skills that should not be rendered in skills section
    {
        name: "Representational State Transfer",
        abbreviation: "REST",
        description: "Software architectural style",
        hasLogo: false,
        link: "restfulapi.net",
        isHidden: true,
    },
    {
        name: "Hypertext Markup Language",
        abbreviation: "HTML",
        description: "Markup language of the web",
        hasLogo: true,
        link: "w3.org/html",
        isHidden: true,
    },
    {
        name: "Cascading Style Sheets",
        abbreviation: "CSS",
        description: "Style sheet language of the web",
        hasLogo: true,
        link: "w3.org/style/css",
        isHidden: true,
    },
    {
        name: "Structured Query Language",
        abbreviation: "SQL",
        description: "Database language",
        hasLogo: false,
        link: "wikipedia.org/wiki/SQL",
        isHidden: true,
    },
    {
        name: "Git",
        abbreviation: "",
        description: "Version control system",
        hasLogo: true,
        link: "git-scm.com",
        isHidden: true,
    },
]