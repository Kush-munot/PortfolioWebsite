import {
    SiVisualstudiocode,
    SiMicrosoftedge,
    SiWindowsterminal,
    SiSamsung,
    SiGooglechrome,
    SiReact,
    SiNextdotjs,
    SiNetlify,
    SiMaterialui,
    SiGit,
    SiMongodb,
    SiBootstrap,
    SiJavascript,
    SiC,
    SiCplusplus,
    SiJava,
    SiPython,
    SiNodedotjs,
    SiExpress,
    SiHtml5,
    SiCss3,
    SiGeeksforgeeks,
    SiFigma,
    SiSpotify,
    SiObsstudio,
    SiGrammarly,
    SiNotion,
    SiCodechef,
    SiCodeforces,
    SiHackerearth,
    SiHackerrank,
    SiLeetcode,
    SiGithub,
} from "react-icons/si";
import {
    BsFillPaletteFill,
    BsWindows,
} from "react-icons/bs";
import { FaGitAlt, FaSearch } from "react-icons/fa";

/* import SVG from "@components/SVG"; //==> not created yet */

const utilities = {
    title: "Utilities",
    description:
        "In case you are wondering What tech I use, Here's the list of what tech I'm currently using for coding on the daily basis. This list is always changing.",
    lastUpdate: "December 06, 2022",

    /* System */

    system: {
        title: "System",
        data: [
            {
                name: "VSCode",
                description: "Primary Code editor",
                Icon: SiVisualstudiocode,
                link: "https://code.visualstudio.com/download",
            },
            {
                name: "Infinity Ddark Theme",
                description: "VS Code theme",
                Icon: BsFillPaletteFill,
                link: "https://marketplace.visualstudio.com/items?itemName=nadim-vscode.infinity-dark-theme",
            },
            {
                name: "Microsoft Edge",
                description: "Default Browser",
                Icon: SiMicrosoftedge,
                link: "https://www.microsoft.com/en-us/edge?form=MA13FJ",
            },
            {
                name: "Google Chrome",
                description: "Internet Browser",
                Icon: SiGooglechrome,
                link: "https://www.google.com/chrome/",
            },
            {
                name: "Windows 11",
                description: "Windows Version",
                Icon: BsWindows,
                link: "https://www.microsoft.com/software-download/windows11",
            },
            {
                name: "Command Prompt",
                description: "Windows Terminal",
                Icon: SiWindowsterminal,
                link: "https://www.makeuseof.com/tag/15-cmd-commands-every-windows-user-know/",
            },
            {
                name: "Samsung",
                description: "Phone Brand",
                Icon: SiSamsung,
                link: "https://www.samsung.com/in/",
            },
        ],
    },

    /* Coding Tools */
    tools: {
        title: "Coding Tools",
        data: [
            {
                name: "React.js",
                description: "Primary Front-end library",
                Icon: SiReact,
                link: "https://reactjs.org/",
            },
            {
                name: "Next.js",
                description: "Primary Web Development Framework",
                Icon: SiNextdotjs,
                link: "https://nextjs.org/",
            },
            {
                name: "Material UI",
                description: "Primary Web Development Framework",
                Icon: SiMaterialui,
                link: "https://mui.com/material-ui/getting-started/installation/",
            },
            {
                name: "Javascript",
                description: "Primary Web Development Framework",
                Icon: SiJavascript,
                link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
            },
            {
                name: "Node.js",
                description: "Primary Web Development Framework",
                Icon: SiNodedotjs,
                link: "https://nodejs.org/en/docs/",
            },
            {
                name: "Mongo DB",
                description: "Primary Web Development Framework",
                Icon: SiMongodb,
                link: "https://www.mongodb.com/docs/",
            },
            {
                name: "Express.js",
                description: "Primary Web Development Framework",
                Icon: SiExpress,
                link: "https://expressjs.com/en/5x/api.html",
            },
            {
                name: "CSS",
                description: "Primary Web Development Framework",
                Icon: SiCss3,
                link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
            },
            {
                name: "HTML",
                description: "Primary Web Development Framework",
                Icon: SiHtml5,
                link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
            },
            {
                name: "Bootstrap",
                description: "Primary Web Development Framework",
                Icon: SiBootstrap,
                link: "https://getbootstrap.com/docs/5.0/getting-started/introduction/",
            },
            {
                name: "C++",
                description: "Primary Web Development Framework",
                Icon: SiCplusplus,
                link: "https://cplusplus.com/",
            },
            {
                name: "C",
                description: "Coding Language",
                Icon: SiC,
                link: "https://cplusplus.com/",
            },
            {
                name: "Java",
                description: "Coding Language",
                Icon: SiJava,
                link: "https://docs.oracle.com/en/java/",
            },
            {
                name: "Python",
                description: "Coding Language",
                Icon: SiPython,
                link: "https://docs.python.org/3/",
            },
        ],
    },

    /* Software/Applications */

    software: {
        title: "Software/Applications",
        data: [
            {
                name: "Figma",
                description: "UI And Graphics",
                Icon: SiFigma,
                link: "https://www.figma.com/downloads/",
            },
            {
                name: "Notion",
                description: "Notebook",
                Icon: SiNotion,
                link: "https://www.notion.so/desktop",
            },
            {
                name: "Spotify",
                description: "Music",
                Icon: SiSpotify,
                link: "https://open.spotify.com/",
            },
            {
                name: "OBS Studio",
                description: "Recording",
                Icon: SiObsstudio,
                link: "https://obsproject.com/",
            },
            {
                name: "Grammarly",
                description: "Recording",
                Icon: SiGrammarly,
                link: "https://www.grammarly.com/",
            },
            {
                name: "Netlify",
                description: "Deploying Applications",
                Icon: SiNetlify,
                link: "https://app.netlify.com/",
            },
            {
                name: "Git",
                description: "Version Control",
                Icon: SiGit,
                link: "https://github.com/",
            },
            {
                name: "Github Desktop",
                description: "Open Source",
                Icon: SiGithub,
                link: "https://github.com/",
            },
            /* .............Other......... */
        ],
    },

    /* Coding Platforms */

    coding: {
        title: "Coding Platform Profiles",
        data: [
            {
                name: "Codechef",
                description: "Competitve Programming",
                Icon: SiCodechef,
                link: "https://www.codechef.com/users/kushmunot",
            },
            {
                name: "Codeforces",
                description: "Competitive Programming",
                Icon: SiCodeforces,
                link: "https://codeforces.com/profile/axelblaze_17",
            },
            {
                name: "HackerRank",
                description: "Competitve Programming",
                Icon: SiHackerrank,
                link: "https://www.hackerrank.com/Kush_Munot",
            },
            {
                name: "Geeks For Geeks",
                description: "DSA Programming",
                Icon: SiGeeksforgeeks,
                link: "https://auth.geeksforgeeks.org/user/munotkgm/practice",
            },
            {
                name: "Leetcode",
                description: "DSA Programming",
                Icon: SiLeetcode,
                link: "https://leetcode.com/user4382M/",
            },
            {
                name: "Hacker Earth",
                description: "Competitive Programming",
                Icon: SiHackerearth,
                link: "https://www.hackerearth.com/@munot.kgm",
            },
            /* .............Other......... */
        ],
    },
};

export default utilities;