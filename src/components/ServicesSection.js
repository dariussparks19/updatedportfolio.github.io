import React from "react";
//import icons
import clock from "../imgs/clock.svg";
import stairs from '../imgs/stairs.jpg'
import money from '../imgs/money.svg';
import teamwork from '../imgs/teamwork.svg';
import performance from '../imgs/performance.png';
import diaphragm from '../imgs/diaphragm.svg';
import service from '../imgs/services.jpg';
//styles
import { About, Description, Hide, Image} from '../styles';
import styled from 'styled-components';
import {fade} from '../animations';
import {useScroll} from './useScroll';


const ServicesSection = () => {
    const [element, controls] = useScroll();

    return(
        <Services 
        variants={fade} 
        animate={controls} 
        initial="hidden"
        ref={element}>
            <Description>
                <h2><span>Services</span></h2>
                <Cards>
                    <Card>
                        <div className="icon">
                        <img alt="icon" src={clock}/>
                            <h3>Responsive Web Design</h3>
                        </div>
                        <p>Constant design to match company's branding guidelines. Expert designing responsive websites with CSS at the core of front end development alongside JavaScript and HTML.</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img alt="icon" src={diaphragm}/>
                            <h3>React JS Development</h3>
                        </div>
                        <p>ReactJS is renowned for its extensibility, adjustability, and convenience. Enjoy creating complex software for businesses, including web browsers and mobile application user interfaces.</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img alt="icon" src={teamwork}/>
                            <h3>Communication</h3>
                        </div>
                        <p>Communication is key. Designers and developers focus on different aspects. Familiarized with researching and planning to bring the best optimized feature.</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img alt="icon" src={money}/>
                            <h3>Passionate</h3>
                        </div>
                        <p>Information is limitless. Always looking and researching for improvement in a constantly expanding field. </p>
                    </Card>
                </Cards>
            </Description>
            <Image>
                <img alt="stairs" src={stairs}/>
            </Image> 
        </Services>
    )
};

const Services = styled(About)`

h2{
    padding-bottom: 5rem;
}

p{
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
}
`

const Cards = styled.div`
    display: flex;
    flex-wrap: wrap;
    @media (max-width: 1300px){
        justify-content: center;
}
`

const Card = styled.div`
    flex-basis: 26rem;
    .icon{
        display: flex;
        align-items: center;
        padding: 0.5rem;
        h3{
            margin-left: 1rem;
            background: white;
            color: black;
            padding: 1rem;
            border-radius: 5px;
        }
    }
    p{
        text-align:center;
    }
`

export default ServicesSection