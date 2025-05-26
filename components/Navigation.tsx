import { useActiveSection } from '@/hooks/useActiveSection';
import React from 'react';
import styled, { css } from 'styled-components';

const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
];

const NavWrapper = styled.nav`
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 1000;
    background: transparent;

    @media (max-width: 800px) {
        position: fixed;
        height: 5rem;
        width: 100vw;
        right: 0;
        top: 0;
        flex-direction: row;
        background: ${({ theme }) => theme.background};
    }
`;

const NavList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    margin: 0;
    padding: 0;
    list-style: none;
    @media (max-width: 800px) {
        flex-direction: row;
        gap: 1.5rem;
        width: 100vw;
        height: 5rem;
        justify-content: center;
        align-items: center;
    }
`;

const NavLink = styled.a<{ $active?: boolean }>`
    display: inline-block;
    writing-mode: vertical-rl;
    transform: rotate(180deg);
    color: ${({ theme }) => theme.text};
    font-weight: bold;
    font-size: 1.1rem;
    letter-spacing: 0.05em;
    transition: color 0.2s;
    text-align: center;
    cursor: pointer;
    ${({ $active, theme }) =>
        $active &&
        css`
            color: ${theme.primary};
            text-decoration: underline;
        `}
    &:hover,
  &:focus {
        color: ${({ theme }) => theme.primary};
    }

    @media (max-width: 800px) {
        writing-mode: unset;
        transform: none;
        font-size: 1rem;
    }
`;

const Navigation: React.FC = () => {
    const sectionIds = navLinks.map((link) => link.href);
    const activeSection = useActiveSection(sectionIds);

    return (
        <NavWrapper>
            <NavList>
                {navLinks.map((link) => (
                    <li key={link.href}>
                        <NavLink
                            href={link.href}
                            $active={activeSection === link.href}
                        >
                            {link.name}
                        </NavLink>
                    </li>
                ))}
            </NavList>
        </NavWrapper>
    );
};

export default Navigation;
