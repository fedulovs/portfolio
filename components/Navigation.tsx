import React, { useRef, useLayoutEffect, useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { useActiveSection } from '@/hooks/useActiveSection';

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
    width: 60px;
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
    position: relative;
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
        height: 2rem;
        justify-content: center;
        align-items: center;
    }
`;

const NavLink = styled.a<{ $active?: boolean }>`
    position: relative;
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
    text-decoration: none;

    ${({ $active, theme }) =>
        $active &&
        css`
            color: ${theme.primary};
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

const ActiveLine = styled.div<{
    top: number;
    height: number;
    left: number;
    width: number;
}>`
    position: absolute;
    background: ${({ theme }) => theme.primary};
    border-radius: 1.5px;
    z-index: 1;
    transition: top 0.36s cubic-bezier(0.4, 0.14, 0.3, 1),
        height 0.36s cubic-bezier(0.4, 0.14, 0.3, 1),
        left 0.36s cubic-bezier(0.4, 0.14, 0.3, 1),
        width 0.36s cubic-bezier(0.4, 0.14, 0.3, 1);

    left: 27px;
    width: 2.5px;
    top: ${({ top }) => `${top}px`};
    height: ${({ height }) => `${height}px`};
    transform: none;

    /* Mobile: horizontal underline */
    @media (max-width: 800px) {
        top: unset;
        bottom: 0;
        left: ${({ left }) => `${left}px`};
        width: ${({ width }) => `${width}px`};
        height: 2.5px;
        transform: none;
    }
`;

export const Navigation: React.FC = () => {
    const sectionIds = navLinks.map((link) => link.href);
    const activeSection = useActiveSection(sectionIds);

    // Use useRef to store a stable array of refs for each nav link
    const linkRefs = useRef<Array<HTMLAnchorElement | null>>([]);
    const [linePos, setLinePos] = useState({
        top: 0,
        height: 0,
        left: 0,
        width: 0,
    });

    function updateLinePosition() {
        const idx = sectionIds.indexOf(activeSection);
        const node = linkRefs.current[idx];
        if (!node) return;

        const parent = node.parentElement?.parentElement as
            | HTMLElement
            | undefined;
        if (!parent) return;

        const parentRect = parent.getBoundingClientRect();
        const nodeRect = node.getBoundingClientRect();

        if (window.innerWidth <= 800) {
            // Mobile: horizontal mode
            const newLeft = nodeRect.left - parentRect.left;
            const newWidth = nodeRect.width;
            if (linePos.left !== newLeft || linePos.width !== newWidth) {
                setLinePos((lp) => ({
                    ...lp,
                    left: newLeft,
                    width: newWidth,
                    top: 0,
                    height: 0,
                }));
            }
        } else {
            // Desktop: vertical mode
            const newTop = nodeRect.top - parentRect.top;
            const newHeight = node.offsetHeight;
            if (linePos.top !== newTop || linePos.height !== newHeight) {
                setLinePos((lp) => ({
                    ...lp,
                    top: newTop,
                    height: newHeight,
                    left: 0,
                    width: 0,
                }));
            }
        }
    }

    // Update underline on active section/nav resize
    useLayoutEffect(() => {
        updateLinePosition();
        // eslint-disable-next-line
    }, [activeSection, sectionIds]);

    // Also update on resize/orientation change
    useEffect(() => {
        const handleResize = () => {
            updateLinePosition();
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
        // eslint-disable-next-line
    }, [activeSection, sectionIds]);

    return (
        <NavWrapper>
            <NavList>
                <ActiveLine
                    top={linePos.top}
                    height={linePos.height}
                    left={linePos.left}
                    width={linePos.width}
                />
                {navLinks.map((link, i) => (
                    <li key={link.href} style={{ position: 'relative' }}>
                        <NavLink
                            ref={(el) => {
                                linkRefs.current[i] = el;
                                // no return!
                            }}
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
