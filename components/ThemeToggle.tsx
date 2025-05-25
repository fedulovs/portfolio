'use client';
import { useTheme } from './ThemeProvider';
import styled from 'styled-components';
import { FiSun, FiMoon } from 'react-icons/fi';

const ToggleButton = styled.button`
    background: none;
    border: none;
    padding: 0;
    color: ${({ theme }) => theme.text};
    font-size: 1.25rem;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: color 0.2s;

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

const BottomRightWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
`;

export default function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();

    return (
        <BottomRightWrapper>
            <ToggleButton
                onClick={toggleTheme}
                aria-label={
                    theme === 'light'
                        ? 'Switch to dark theme'
                        : 'Switch to light theme'
                }
                title={
                    theme === 'light'
                        ? 'Switch to dark theme'
                        : 'Switch to light theme'
                }
            >
                {theme === 'light' ? <FiMoon /> : <FiSun />}
            </ToggleButton>
        </BottomRightWrapper>
    );
}
