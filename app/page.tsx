'use client';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Intro from '@/components/Intro';
import Social from '@/components/Social';
import ThemeToggle from '@/components/ThemeToggle';
import styled from 'styled-components';

const Grid = styled.main`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto;
    gap: 2rem;
    max-width: 1250px;
    margin: 0 auto;
    padding: 2rem;
    min-height: 100vh;
    align-items: center;
    justify-items: center;

    & > * {
        margin-top: 6rem;
        margin-bottom: 6rem;
    }

    margin-bottom: 6rem;

    @media (max-width: 800px) {
        grid-template-columns: 1fr;
        grid-template-rows: auto auto auto auto;
        max-width: 100%;
        padding: 1rem;

        & > * {
            margin-top: 3rem;
            margin-bottom: 3rem;
        }

        margin-bottom: 2rem;
    }
`;

export const Home = () => {
    return (
        <Grid>
            <Intro />
            <About />
            <Experience />
            <Experience />
            <Social />
            <ThemeToggle />
        </Grid>
    );
};

export default Home;
