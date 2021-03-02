import React, {useState} from "react";
import { About, Description, Hide, Image} from '../styles';
import styled from 'styled-components';
import Toggle from './Toggle';
import {AnimateSharedLayout, motion} from 'framer-motion';
import {scrollReveal} from '../animations';
import {useScroll} from "./useScroll";





const FaqSection = () => {

    const [element, controls] = useScroll();


    return (
        <Faq variants={scrollReveal} ref={element} animate={controls} initial="hidden">
            <h2><span>Core Skills</span></h2>
            <AnimateSharedLayout>
                <Toggle title = "Languages">
                        <div  className="answer">
                            <p>HTML, CSS, JavaScript, Python</p>
                        </div>
                </Toggle>
                <Toggle title="Front End">
                    <div className="answer">
                        <p>React, Angular, jQuery, AJAX, JSON, RESTful APIs, Bootstrap, Spring</p>
                    </div>
                </Toggle>
                <Toggle title="Backend">
                        <div className="answer">
                            <p>Node.js, Express, Django, Flask, AWS, Socket.io, OOP</p>
                        </div>
                </Toggle>
                <Toggle title="Database">
                        <div className="answer">
                            <p>SQL (MySQL, SQLite), NoSQL (MongoDB), Mongoose, Django ORM</p>
                        </div>
                </Toggle>
            </AnimateSharedLayout>
        </Faq>
    )
}

const Faq = styled(About)`
    display: block;
    span{
        display: block;
    }
    h2{
        padding-bottom: 2rem;
        font-weight: lighter;
    }
    .faq-line{
        background: #cccccc;
        height: 0.2rem;
        margin: 2rem 0rem;
        width: 100%;
    }
    .question{
        padding: 3rem 0rem;
        cursor: pointer;
    }
    .answer{
        padding: 2rem 0rem;
        p{
            padding: 1rem 0rem;
        }
    }
`

export default FaqSection;