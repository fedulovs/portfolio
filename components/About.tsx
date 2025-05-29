import React from 'react';
import { SlideInFromLeft } from './SlideInFromLeft';
import { FaCode, FaUsers, FaToolbox, FaBalanceScale } from 'react-icons/fa';

import styled from 'styled-components';

const AboutText = styled.div`
    a {
        color: ${({ theme }) => theme.text};
        &:hover {
            opacity: 0.8;
        }
    }
`;

const PIconRow = styled.div`
    display: flex;
    align-items: flex-start;
    gap: 0.75em;
    margin-bottom: 1.5em;
`;

const IconStyled = styled.span`
    display: flex;
    font-size: 1.5em;
    color: ${({ theme }) => theme.primary};
    margin-top: 0.2em;
`;

const Skill = styled.span`
    color: ${({ theme }) => theme.text};
`;

const About = () => (
    <SlideInFromLeft>
        <AboutText>
            <PIconRow>
                <IconStyled>
                    <FaCode />
                </IconStyled>
                <p>
                    As an engineer passionate about intuitive web applications,
                    I draw on my background in Quality Assurance for a
                    user-oriented perspective and strong attention to detail,
                    helping the teams I work with deliver reliable, seamless
                    products.
                </p>
            </PIconRow>
            <PIconRow>
                <IconStyled>
                    <FaUsers />
                </IconStyled>
                <p>
                    Currently, I am a Senior QA Engineer at{' '}
                    <a
                        href='https://yousician.com'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        Yousician
                    </a>
                    , a music learning app. In addition to my QA
                    responsibilities, I actively contribute to our frontend
                    projects. By integrating QA best practices into the
                    development process, I help deliver outstanding,
                    user-friendly experiences while maintaining the highest
                    standards of quality.
                </p>
            </PIconRow>
            <PIconRow>
                <IconStyled>
                    <FaToolbox />
                </IconStyled>
                <p>
                    With experience in both the social media and fintech
                    sectors, I have worked as a solo QA and as part of larger,
                    cross-functional teams. My technical skills include{' '}
                    <Skill>JavaScript/TypeScript</Skill>, <Skill>React</Skill>,{' '}
                    <Skill>HTML5 & CSS3</Skill>, and <Skill>Playwright</Skill>.
                </p>
            </PIconRow>
            <PIconRow>
                <IconStyled>
                    <FaBalanceScale />
                </IconStyled>
                <p>
                    By understanding both QA and developer perspectives, I
                    strive to help teams find solutions that combine the best of
                    both worlds—balancing business requirements with the needs
                    of users. I am passionate about creating seamless,
                    user-centric products that provide real value.
                </p>
            </PIconRow>
        </AboutText>
    </SlideInFromLeft>
);

export default About;
