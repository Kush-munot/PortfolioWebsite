import {
    SiInstagram,
    SiTwitter,
    SiLinkedin,
    SiGmail,
    SiDiscord,
    SiGeeksforgeeks,
    SiCodechef,
    SiCodeforces,
    SiHackerearth,
    SiHackerrank,
    SiLeetcode,
    SiGithub,
} from "react-icons/si";


/* import SVG from "@components/SVG"; //==> not created yet */

const utilities = {
    title: "Utilities",
    description:
        "In case you are wondering What tech I use, Here's the list of what tech I'm currently using for coding on the daily basis. This list is always changing.",

    /* System */

    system: {
        title: "Social Media",
        data: [
            {
                name: "LinkedIn",
                Icon: SiLinkedin,
                link: "https://www.linkedin.com/in/kush-munot/",
            },
            {
                name: "Github",
                Icon: SiGithub,
                link: "https://github.com/Kush-munot",
            },
            {
                name: "Instagram",
                Icon: SiInstagram,
                link: "https://www.instagram.com/kushjain.17",
            },
            {
                name: "Twitter",
                Icon: SiTwitter,
                link: "https://twitter.com/intent/follow?screen_name=kushmunot151",
            },
            {
                name: "Email",
                Icon: SiGmail,
                link: "mailto:munot.kgm@gmail.com",
            },
            {
                name: "Discord",
                Icon: SiDiscord,
                link: "https://discord.com/kushmunot#1371",
            },
            
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