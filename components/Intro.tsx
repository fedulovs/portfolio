import React from 'react';
import styled from 'styled-components';
import { SlideInFromLeft } from './SlideInFromLeft';
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
        margin-bottom: 0.5rem;
    }
`;

const Intro = () => (
    <SlideInFromLeft>
        <SpacedIntro>
            <h1>Sergey Fedulov</h1>
            <h2>Software Engineer (QA & Frontend)</h2>
            <p>Creating smooth web apps with QA eye for quality</p>
        </SpacedIntro>
        <Social />
    </SlideInFromLeft>
);

export default Intro;
