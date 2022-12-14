import React from "react";
import { popUpFromBottomForText } from "../content/FramerMotionVariant";
import AnimatedHeading from "../components/FramerMotion/AnimatedHeading";
import "react-toastify/dist/ReactToastify.css";
import AnimatedText from "../components/FramerMotion/AnimatedText";

export default function Contact() {
    return (
        <div id="contact" className="dark:bg-darkPrimary !relative">
            {/* Get in touch top section */}
            <section className="pageTop py-10">
                <AnimatedHeading
                    variants={popUpFromBottomForText}
                    className="font-bold text-5xl"
                >
                    About Me
                </AnimatedHeading>

                <AnimatedText
                    variants={popUpFromBottomForText}
                    className="py-5 pr-10 font-medium text-slate-400"
                >
                    Hey, I am Kush Munot. A Front-end Developer/React Developer from India who loves to design and code. I use React.js or Next.js to build the web application interfaces and the functionalities. At the moment, I am pursuing my Bachelor's degree in Computer Science.<br /><br />

                    The first programming language I learned was C. Since then, I have also learned Python. I also played around with databases, but Firebase is my favorite right now.<br />


                    Aside from coding, I love reading books and cooking as well. I don't have the time or really any interest in playing video games these days. However, I also enjoy watching movies and web series whenever I have the chance.<br /><br />

                    If you were to ask me what stack I would prefer, I would say<br /><br />

                    - Framework - React.js<br />
                    - Database : Firebase<br />
                    - UI Library - Material UI<br /><br />

                    You can do anything you can think of with these three things. I have done two paid Internships into early stage Startups as Full Stack Developer. I prefer making projects with my team and friends. I am also the President of a growing College Community called Geeks For Geeks RCOEM Chapter.<br /><br />


                    I love my work and enjoy each and every project as I get it. Feel free to look at my portfolio and don't hesitate to contact me.

                </AnimatedText>
            </section>
        </div>)
}