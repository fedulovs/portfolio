import React from 'react';
import styled from 'styled-components';
import { SlideInFromLeft } from './SlideInFromLeft';
import { FiExternalLink } from 'react-icons/fi';

const SkillTags = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;

    @media (max-width: 800px) {
        gap: 0.25rem;
    }
`;

const SkillBubble = styled.div`
    background: ${({ theme }) => theme.primary}22;
    color: ${({ theme }) => theme.primary};
    border-radius: 999px;
    font-size: 0.93em;
    padding: 0.28em 0.7em;
    font-weight: 500;
    display: inline-flex;
    align-items: center;
    border: none;
    user-select: none;
    white-space: nowrap;
    transition: background 0.2s, color 0.2s;

    @media (max-width: 800px) {
        font-size: 0.85em;
        padding: 0.22em 0.55em;
    }

    &:hover {
        background: ${({ theme }) => theme.primary}55;
    }
`;

const Section = styled.section`
    margin-bottom: 2.5rem;
    @media (max-width: 800px) {
        margin-bottom: 1.3rem;
    }
`;

const Topic = styled.h3`
    margin-bottom: 1rem;
    font-size: 1.3rem;
    @media (max-width: 800px) {
        margin-bottom: 0.6rem;
        font-size: 1.07rem;
    }
`;

const TableContainer = styled.div`
    width: 100%;
    overflow-x: auto;
    max-width: 1100px;
    margin: 0 auto;

    @media (max-width: 800px) {
        padding: 0;
        max-width: 100%;
    }
`;

const Table = styled.table`
    width: 100%;
    min-width: 800px;
    border-collapse: collapse;
    background: ${({ theme }) => theme.background};
    border-radius: 7px;
    overflow: hidden;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.04);

    @media (max-width: 800px) {
        display: block;
        min-width: 0;
        box-shadow: none;
        border-radius: 0;
        background: none;
    }
`;

const TH = styled.th`
    padding: 0.75rem 1rem;
    text-align: left;
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    border-bottom: 2px solid ${({ theme }) => theme.primary}26;
    font-size: 1.1rem;
    font-weight: 500;
    @media (max-width: 800px) {
        display: none;
    }
`;

const TableRow = styled.tr`
    @media (max-width: 800px) {
        display: block;
        background: ${({ theme }) => theme.background};
        border-radius: 6px;
        margin-bottom: 1rem;
        box-shadow: 0 1px 4px rgba(0, 0, 0, 0.05);
        border: 1px solid ${({ theme }) => theme.primary}10;
        padding: 1rem;
    }
`;

const TD = styled.td`
    padding: 0.75rem 1rem;
    border-bottom: 1px solid ${({ theme }) => theme.textBody}22;
    vertical-align: middle;
    font-size: 1.04rem;
    color: ${({ theme }) => theme.textBody};
    min-width: 140px;

    @media (max-width: 800px) {
        display: block;
        padding: 0.4rem 0;
        border: none;
        background: none;
        min-width: unset;
        font-size: 1rem;

        &:not(:last-child) {
            margin-bottom: 0.25rem;
        }
    }
`;

const ProjectLink = styled.a`
    color: ${({ theme }) => theme.primary};
    font-weight: 500;
    &:hover {
        text-decoration: underline;
    }
`;

const projectSections = [
    {
        topic: 'Frontend Apps',
        projects: [
            {
                name: 'Personal Portfolio',
                link: 'https://github.com/fedulovs/portfolio',
                technologies: ['React', 'Styled Components', 'Next.js'],
            },
            {
                name: 'Movie Website',
                link: 'https://github.com/fedulovs/find-movies',
                technologies: [
                    'React',
                    'TypeScript',
                    'React Context',
                    'Styled Components',
                    'Vite',
                ],
            },
            {
                name: 'Chrome extension for generating bug reports',
                link: 'https://github.com/fedulovs/bug-report-extension',
                technologies: ['React', 'TypeScript', 'Vite'],
            },
            {
                name: 'Language App',
                link: 'https://github.com/fedulovs/language-app',
                technologies: ['React', 'TypeScript', 'PWA', 'CSS Modules'],
            },

            {
                name: 'Bandmate',
                link: 'https://github.com/fedulovs/bandmate',
                technologies: ['React', 'TypeScript', 'Redux', 'CSS Modules'],
            },
        ],
    },
    {
        topic: 'QA Automation',
        projects: [
            {
                name: 'CI Integration Suite',
                link: 'https://github.com/yourprofile/ci-suite',
                technologies: ['Jest', 'Playwright', 'GitHub Actions'],
            },
        ],
    },
];

const Projects = () => (
    <SlideInFromLeft>
        <div style={{ minHeight: 1 }}>
            {projectSections.map((section) => (
                <Section key={section.topic}>
                    <Topic>{section.topic}</Topic>
                    <TableContainer>
                        <Table>
                            <colgroup>
                                {/* Project column */}
                                <col style={{ width: '24%' }} />
                                {/* Tech Stack column */}
                                <col style={{ width: '70%' }} />
                                {/* Link column */}
                                <col style={{ width: '6%' }} />
                            </colgroup>
                            <thead>
                                <tr>
                                    <TH>Project</TH>
                                    <TH>Stack</TH>
                                </tr>
                            </thead>
                            <tbody>
                                {section.projects.map((project) => (
                                    <TableRow key={project.name}>
                                        <TD>
                                            <strong>{project.name}</strong>
                                            <div>
                                                <ProjectLink
                                                    href={project.link}
                                                    target='_blank'
                                                    rel='noopener noreferrer'
                                                >
                                                    <FiExternalLink />
                                                </ProjectLink>
                                            </div>
                                        </TD>
                                        <TD>
                                            <SkillTags>
                                                {project.technologies.map(
                                                    (tech) => (
                                                        <SkillBubble key={tech}>
                                                            {tech}
                                                        </SkillBubble>
                                                    )
                                                )}
                                            </SkillTags>
                                        </TD>
                                    </TableRow>
                                ))}
                            </tbody>
                        </Table>
                    </TableContainer>
                </Section>
            ))}
        </div>
    </SlideInFromLeft>
);

export default Projects;
