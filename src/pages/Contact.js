import React from "react";
//Animation
import {motion} from 'framer-motion';
import {pageAnimation, titleAnim} from "../animations";
import styled from 'styled-components';


const Contact = () => {
    return(
        <ContactStyle 
        exit="exit" 
        variants={pageAnimation} 
        initial="hidden" 
        animate="show"
        style={{background: "#1b1b1b" }}
        >
            <Title>
                <Hide>
                    <motion.h2 variants={titleAnim}>Connect</motion.h2>
                </Hide>
            </Title>
            <div>
                <Hide>
                    <Social variants={titleAnim}>
                        <Circle/>
                            <h2>Info:</h2>
                            <p>P: (408) 838-9580</p>
                            <p>San Jose, CA</p>
                    </Social>
                </Hide>
                <Hide>
                    <Social variants={titleAnim}>
                        <Circle/>
                            <h2>Email:</h2>
                            <p>dariussparks19@gmail.com</p>
                    </Social>
                </Hide>
                <Hide>
                    <Social variants={titleAnim}>
                        <Circle/>
                            <h2>Links:</h2>
                            <a href="https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&to=dariussparks19@gmail.com&subject=MISSED%20CALL%20EZTRADER&body=Greetings," target="blank">Email</a>
                            <a href="http://linkedin.com/in/dariusjsparks408/" target="blank">LinkedIn</a> 
                            <a href="https://github.com/dariussparks19" target="blank">GitHub</a>            
                    </Social>
                </Hide>
            </div>
        </ContactStyle>
    );
};


const ContactStyle = styled(motion.div)`
    padding: 5rem 10rem;
    color: #353535;
    min-height: 90vh;
    @media (max-width: 1500px){
        padding: 2rem;
        font-size: 1rem;
}

`

const Title = styled.div`
    margin-bottom: 4rem;
    color: black;
    @media (max-width: 1500px){
    margin-top: 5rem;
}
`
const Hide = styled.div`
    overflow:hidden;
    color: #E0CBDD;
`

const Circle = styled.div`
    border-radius: 50%;
    width: 3rem;
    height: 3rem;
    background: white;
`

const Social = styled(motion.div)`
    display: flex;
    align-items: center;
    h2{
        margin: 2rem;
        color: white;
    }
    a, p{
        color: #E0CBDD
    }
    a,p{
        padding: 1rem;
        font-size: 2rem;
    }
`


export default Contact;