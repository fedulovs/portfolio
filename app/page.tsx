'use client';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Intro from '@/components/Intro';
import Navigation from '@/components/Navigation';
import Projects from '@/components/Projects';
import { Section } from '@/components/Section';
import ThemeToggle from '@/components/ThemeToggle';

export const Home = () => (
    <>
        <Navigation />
        <Section id='home' $first>
            <Intro />
        </Section>
        <Section id='about'>
            <About />
        </Section>
        <Section id='experience'>
            <Experience />
        </Section>
        <Section id='projects'>
            <Projects />
        </Section>
        <Section>
            <ThemeToggle />
        </Section>
    </>
);

export default Home;
