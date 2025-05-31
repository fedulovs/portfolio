import React from 'react';
import { SlideInFromLeft } from './SlideInFromLeft';
import { styled } from 'styled-components';

const SkillTags = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-top: 0.5rem;
`;

const SkillBubble = styled.div`
    background: ${({ theme }) => theme.primary}22;
    color: ${({ theme }) => theme.primary};
    border-radius: 999px;
    padding: 0.33em 0.9em;
    font-size: 0.93em;
    font-weight: 500;
    display: inline-flex;
    align-items: center;
    border: none;
    user-select: none;
    white-space: nowrap;
    transition: background 0.2s, color 0.2s;

    &:hover {
        background: ${({ theme }) => theme.primary}55;
    }
`;

const TimeLine = styled.div`
    width: 100px;
    flex-shrink: 0;
    padding-right: 1rem;
    color: ${({ theme }) => theme.textBody};
    font-size: 0.97em;
    display: flex;
    align-items: center;
    height: 100%;
    margin-top: 0.3em;
`;

const ExperienceContainer = styled.div`
    display: flex;
    gap: 1.5rem;
    align-items: flex-start;
    margin-bottom: 2rem;
`;

const ExperienceInfo = styled.div`
    display: flex;
    flex-direction: column;
    h3 {
        margin: 0;
    }
    p {
        margin: 0.3em 0 0.5em 0;
    }
`;

type ExperienceItem = {
    company: string;
    title: string;
    period: string;
    description: string;
    skills: string[];
};

const experiences: ExperienceItem[] = [
    {
        company: 'Yousician',
        title: 'Senior QA Engineer',
        period: 'Jun 2022 - Present',
        description:
            'Led manual and automated testing for cross-platform (iOS, Android, Windows, MacOS) Unity apps, initiated and built mobile test automation from scratch (C# + AltTester, Appium), and optimized QA processes. Actively fostered QA community by leading meetings, workshops, and feedback sessions; coordinated external QA teams, facilitated hiring and mentoring, and played a key role in planning and driving new QA initiatives.',
        skills: [
            'Software Testing',
            'Test Automation',
            'React',
            'JavaScript',
            'Typescript',
            'HTML',
            'CSS',
            'Next.js',
            'Styled Components',
        ],
    },
    {
        company: 'VK',
        title: 'QA Engineer',
        period: 'Mar 2021 - Jun 2022',
        description:
            'Responsible for manual and automated testing of the native Android News Feed app, including developing the first tests for analytics events (Kotlin), increasing test coverage, and creating QA tools like bug report generators and chat bots. Collaborated on process improvements, outlined new QA activities, and implemented enhancements to overall QA effectiveness.',
        skills: [
            'Software Testing',
            'Mobile Testing',
            'Test Automation',
            'Android',
            'Kotlin',
        ],
    },
    {
        company: 'Yandex.Money',
        title: 'QA Engineer',
        period: 'Mar 2020 - Mar 2021',
        description:
            'Performed manual and automated testing of React Native mobile apps (iOS and Android), initiated and implemented the first automation tests (Typescript + Detox) and page objects, and provided mentorship for new QA team members in automation practices.',
        skills: [
            'Software Testing',
            'Mobile Testing',
            'React',
            'JavaScript',
            'Typescript',
            'Test Automation',
            'Detox',
        ],
    },
    {
        company: 'Karuna',
        title: 'QA Engineer',
        period: 'Jun 2018 - Mar 2020',
        description:
            'Conducted manual testing of native iOS and Android apps, helped implement gamification systems for fintech trading plarform, created and maintained the testing repository.',
        skills: ['Software Testing', 'Mobile Testing', 'iOS', 'Android'],
    },
];

const Experience = () => {
    return (
        <SlideInFromLeft>
            <div style={{ minHeight: 1 }}>
                {experiences.map((exp) => (
                    <ExperienceContainer key={exp.period + exp.company}>
                        <TimeLine>{exp.period}</TimeLine>
                        <ExperienceInfo>
                            <h3>
                                {exp.company} - {exp.title}
                            </h3>
                            <p>{exp.description}</p>
                            <SkillTags>
                                {exp.skills.map((skill) => (
                                    <SkillBubble key={skill}>
                                        {skill}
                                    </SkillBubble>
                                ))}
                            </SkillTags>
                        </ExperienceInfo>
                    </ExperienceContainer>
                ))}
            </div>
        </SlideInFromLeft>
    );
};

export default Experience;
