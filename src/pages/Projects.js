import React from "react";
import styled from 'styled-components';
import {Link} from 'react-router-dom'
//images
import musicplayer from '../imgs/musicplayer.png';
import musicplayer2 from '../imgs/musicplayer2.png';
import card from '../imgs/card.jpeg'
//Animations

import {motion} from 'framer-motion';
import {sliderContainer, pageAnimation, fade, photoAnim, lineAnim, slider} from "../animations";
import {useScroll} from '../components/useScroll';
import ScrollTop from '../components/ScrollTop';

const MyProjects = () => {

    const[element, controls] = useScroll();
    const[element2, controls2] = useScroll();
    return(
        <Projects 
        exit="exit" 
        variants={pageAnimation} 
        initial="hidden" 
        animate="show" 
        style={{background: "#fff" }}>
            <motion.div variants={sliderContainer}>
                <Frame1 variants={slider}></Frame1>
                <Frame2 variants={slider}></Frame2>
                <Frame3 variants={slider}></Frame3>
                <Frame4 variants={slider}></Frame4>
            </motion.div>
            <Project>
            <Link to="/projects/waveplayer">
                <motion.h2 variants={fade}>Wave Music Player</motion.h2>
                <motion.div variants={lineAnim} className="line"></motion.div>
                    <Hide>
                        <motion.img variants={photoAnim} src={musicplayer} alt="musicplayer" />
                    </Hide>
                </Link>
            </Project>
            <ScrollTop/>
            <Project>
            <Link to="/projects/frontendmentor">
                <motion.h2 variants={fade}>Frontend Mentor Project</motion.h2>
                <motion.div variants={lineAnim} className="line"></motion.div>
                    <Hide>
                        <motion.img variants={photoAnim} src={card} alt="musicplayer" />
                    </Hide>
                </Link>
            </Project>
            <ScrollTop/>

        </Projects>
    );
};

const Projects = styled(motion.div)`
    min-height: 100vh;
    overflow: hidden;
    padding: 5rem 10rem;
    h2{
        padding: 1rem 0rem;
    }
    @media (max-width: 1300px){
    padding: 2rem 2rem;
}
`; 

const Project = styled(motion.div)`
    padding-bottom: 10rem;
    h2{
        color: #1b1b1b;
    } 
    .line{
        height: 0.5rem;
        background: #E0CBDD;
        margin-bottom: 3rem;
        img{
            width: 100%;
            height: 70vh;
            object-fit: cover;
        }
    }
`

const Hide = styled.div`
    overflow: hidden;
`

//FrameAnimation
const Frame1 = styled(motion.div)`
    position: fixed;
    left: 0;
    top: 10%;
    width: 100%;
    height: 100vh;
    background: #1b1b1b;
    z-index: 2;
`;
const Frame2 = styled(Frame1)`
background: grey;
`;
const Frame3 = styled(Frame1)`
background: #CCCCCC;
`;
const Frame4 = styled(Frame1)`
    background: #E0CBDD;
`;

export default MyProjects;