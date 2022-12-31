import React from "react";
import AnimatedHeading from "../components/FramerMotion/AnimatedHeading";
import "react-toastify/dist/ReactToastify.css";
import AnimatedText from "../components/FramerMotion/AnimatedText";
import AnimatedDiv from "@components/FramerMotion/AnimatedDiv";
import {
    FadeContainer,
    opacityVariant,
    popUp,
    popUpFromBottomForText,
} from "@content/FramerMotionVariant";
import { motion } from "framer-motion";
import utilities from "@content/letsConnectData";
import Link from "next/link";

export default function Contact() {
    return (
        <div id="contact" className="dark:bg-darkPrimary !relative">
            {/* Get in touch top section */}
            <section className="pageTop py-10">
                <AnimatedHeading
                    variants={popUpFromBottomForText}
                    className="font-bold text-5xl"
                >
                    Let's Connect
                </AnimatedHeading>

                <AnimatedText
                    variants={popUpFromBottomForText}
                    className="py-5 pr-10 font-medium text-slate-400"
                >
                    Hey, I am Kush Munot. A Front-end Developer/React Developer from India who loves to design and code. I love connecting with people and help them.
                    <br></br>
                    <br></br>
                    I am also a Community Lead of the <a href="https://gfgrcoem.netlify.app/"><b>Geeks for Geeks RCOEM Chapter</b></a> 2022-2023. I would love to connect with you too.
                </AnimatedText>

                <section className="pageTop font-inter">
                <div className="flex flex-col gap-14">
                    <UtilitySection utility={utilities.system} />
                    <UtilitySection utility={utilities.coding} />
                </div>
            </section>
            </section>
        </div>)
}


function UtilitySection({ utility }) {
    return (
        <AnimatedDiv
            variants={FadeContainer}
            className="!w-full  selection:bg-blue-300 dark:selection:bg-blue-900 dark:selection:text-gray-400 dark:text-neutral-200 font-medium"
        >
            <motion.h2
                variants={popUpFromBottomForText}
                className="font-bold text-2xl sm:text-3xl font-barlow mb-4"
            >
                {utility.title}
            </motion.h2>

            <AnimatedDiv
                variants={FadeContainer}
                className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-3 mt-5"
            >
                {utility.data.map((item) => {
                    return (
                        <Link href={item.link} key={item.name} passHref>
                            <motion.a
                                variants={popUp}
                                title={item.name + " - " + item.description}
                                rel="noopener noreferrer"
                                target="_blank"
                                className="relative flex flex-col gap-3 items-center justify-center bg-white dark:bg-darkSecondary shadow dark:shadow-md p-8  border border-transparent hover:border-gray-400 dark:hover:border-neutral-600 rounded-md transition-all lg:hover:!scale-125 active:!scale-90 hover:z-10 hover:shadow-lg hover:origin-center text-gray-700 hover:text-black dark:text-gray-300/80 dark:hover:text-white"
                            >
                                <item.Icon className="utilities-svg" />

                                <p className="absolute bottom-3 text-[14px] select-none">
                                    {item.name}
                                </p>
                            </motion.a>
                        </Link>
                    );
                })}
            </AnimatedDiv>
        </AnimatedDiv>
    );
}