import React from 'react';
import styled from 'styled-components';
import { SlideInFromLeft } from './slideInFromLeft';
import Social from './Social';

const SpacedIntro = styled.div`
    text-align: center;

    h1 {
        font-size: 2.6rem;
        font-weight: 600;
        margin-bottom: 0.5rem;
        line-height: 1.1;
        letter-spacing: -1.5px;
    }
    h2 {
        margin-bottom: 1rem;
    }
    p {
        margin-top: 0;
    }
`;

const Intro = () => (
    <SlideInFromLeft>
        <SpacedIntro>
            <h1>Sergey Fedulov</h1>
            <h2>Web Developer</h2>
            <p>React | Typescript</p>
        </SpacedIntro>
        <Social />
    </SlideInFromLeft>
);

export default Intro;
