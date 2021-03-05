import React from "react";
import {Link} from 'react-router-dom';
//import imgs
import me from '../imgs/ME.jpg';
//styled
import { About, Description, Image, Hide} from '../styles'
//framer motion 
import {motion} from 'framer-motion';
import {titleAnim, fade, photoAnim} from "../animations";
import Wave from './Wave';


const AboutSection = () => {


    return(
    <About>
        <Description>
            <motion.div className="title">
                <Hide>
                    <motion.h1
                    variants={titleAnim} 
                    >
                        Darius Sparks
                    </motion.h1>
                </Hide>
                <Hide>
                    <motion.h2
                    variants={titleAnim} 
                    >
                        <span>Front-End Developer</span>
                    </motion.h2>
                </Hide>
                <Hide>
                    <motion.h4
                    variants={titleAnim}
                    >
                        Telling stories through eye-catching UI effects and animations for a dynamic user experience.
                    </motion.h4>
                </Hide>
                <motion.h2
                variants={fade}
                >
                        Passion & Ambition
                </motion.h2>
                <motion.p 
                variants={fade}
                >
                        Junior software developer consistently improving technical acumen to jumpstart a career in <span> Front-End Development</span>. 
                        Ability to build web applications utilizing <span>React</span> with advanced skills in <span>HTML</span>, <span>CSS</span>, <span>JavaScript</span> and <span>Pyt</span><span>hon</span>. 
                        Enjoy working with a collaborative company that advocates in making a difference in the community and the world.                </motion.p>
                <Link to="/contact">
                    <motion.button
                        variants={fade}
                    >
                        Contact Me
                    </motion.button>
                </Link>
            </motion.div>
        </Description>
        <Image>
            
                <motion.img
                    variants={photoAnim}
                    src={me} 
                    alt="ME"/>
        </Image>
        <Wave/>
    </About>
    );
};




export default AboutSection;