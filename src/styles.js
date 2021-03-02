import styled from 'styled-components';
import {motion} from 'framer-motion';


export const About = styled(motion.div)`
    min-height: 90vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5rem 7rem;
    color: white;
    @media (max-width: 1300px){
        display: block;
        padding: 2rem 2rem;
        text-align: center;
    }

`;

export const Description = styled.div`
    flex: 1;
    z-index: 2;
    padding-right: 2rem;
    h2{
        font-weight:lighter;
    }
    h4{
        font-family: 'Inter', sans-serif;
    }
    span:nth-child(2){
        color: #61DAFB
    }
    span:nth-child(3){
        color: #E96228
    }
    span:nth-child(4){
        color: #2965F1
    }
    span:nth-child(5){
        color: #FEDC6F
    }
    span:nth-child(6){
        color: #4D84A3
    }
    span:nth-child(7){
        color: #FEDC6F
    }
    @media (max-width: 1300px){
        padding: 0;
        button{
            margin: 2rem 0rem 5rem 0rem;
        }
    }
`

export const Image = styled.div`
    flex: 0.8;
    overflow: hidden;
    z-index: 2;
    img{
        width:100%;
        height: 60vh;
        object-fit: cover;
    }
`;

export const Hide = styled.div`
overflow: hidden;
`