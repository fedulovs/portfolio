import styled, { css, keyframes } from 'styled-components';

export const Section = styled.section<{ $first?: boolean }>`
    width: 100%;
    max-width: 900px;
    min-height: 100vh;
    margin: 0 auto;
    padding: 5rem 2rem 4rem 2rem;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (min-width: 801px) {
        padding-right: calc(2rem + 5.5rem);
    }

    ${({ $first }) =>
        $first &&
        `
    @media (max-width: 800px) {
      padding-top: 6rem;
    }
  `}

    scroll-margin-top: 6rem;

    @media (max-width: 800px) {
        padding: 2rem 1rem;
        min-height: 60vh;
        padding-right: 0;
    }
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

const visibleStyle = css`
    opacity: 1;
    transform: translateX(0);
    animation: ${slideInLeft} 0.8s cubic-bezier(0.33, 1.02, 0.53, 0.97);
`;

export const SectionContent = styled.div<{ $visible: boolean }>`
    opacity: 0;
    transform: translateX(-100%);
    transition: opacity 0.5s, transform 0.5s;
    will-change: opacity, transform;
    display: block;
    min-height: 1px;
    ${({ $visible }) => $visible && visibleStyle}
`;
