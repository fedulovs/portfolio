import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { SiGoodreads } from 'react-icons/si';
import styled, { keyframes, css } from 'styled-components';
import { useInView } from '@/hooks/useInView';

const BottomLeftWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 60px;
`;

const IconRow = styled.div`
    display: flex;
    gap: 1.25rem;
`;

const slideInLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-100%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const IconLink = styled.a<{ $visible?: boolean; $delay?: number }>`
    color: ${({ theme }) => theme.text};
    font-size: 1.25rem;
    transition: color 0.2s;
    opacity: 0;
    transform: translateX(-100%);

    ${({ $visible, $delay }) =>
        $visible &&
        css`
            animation: ${slideInLeft} 0.7s cubic-bezier(0.33, 1.02, 0.53, 0.97)
                forwards;
            animation-delay: ${$delay ?? 0}ms;
        `}

    &:hover,
    &:focus {
        color: ${({ theme }) => theme.primary};
    }
    &:focus {
        outline: 2px solid ${({ theme }) => theme.primary};
        border-radius: 10px;
        outline-offset: 2px;
    }
`;

const socialLinks = [
    {
        icon: <FaLinkedin />,
        href: 'https://www.linkedin.com/in/sergey-fedulov/',
        label: 'LinkedIn',
    },
    {
        icon: <FaGithub />,
        href: 'https://github.com/fedulovs',
        label: 'GitHub',
    },
    {
        icon: <SiGoodreads />,
        href: 'https://www.goodreads.com/user/show/181037672-sergei-fedulov',
        label: 'Goodreads',
    },
];

export default function Social() {
    const [ref, inView] = useInView({ threshold: 0.2 });

    return (
        <BottomLeftWrapper ref={ref}>
            <IconRow>
                {socialLinks.map((link, i) => (
                    <IconLink
                        key={link.href}
                        href={link.href}
                        target='_blank'
                        rel='noopener noreferrer'
                        aria-label={link.label}
                        $visible={inView}
                        $delay={i * 160} /* Delay variable for icons */
                        tabIndex={0}
                    >
                        {link.icon}
                    </IconLink>
                ))}
            </IconRow>
        </BottomLeftWrapper>
    );
}
