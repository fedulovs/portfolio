import styled from 'styled-components';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { SiGoodreads } from 'react-icons/si';

const BottomLeftWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: flex-start;
    min-height: 60px;
`;

const IconRow = styled.div`
    display: flex;
    gap: 1.25rem;
`;

const IconLink = styled.a`
    color: ${({ theme }) => theme.text};
    font-size: 1.25rem;
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

export default function Social() {
    return (
        <BottomLeftWrapper>
            <IconRow>
                <IconLink
                    href='https://www.linkedin.com/in/sergey-fedulov/'
                    target='_blank'
                    rel='noopener noreferrer'
                    aria-label='LinkedIn'
                >
                    <FaLinkedin />
                </IconLink>
                <IconLink
                    href='https://github.com/fedulovs'
                    target='_blank'
                    rel='noopener noreferrer'
                    aria-label='GitHub'
                >
                    <FaGithub />
                </IconLink>
                <IconLink
                    href='https://www.goodreads.com/user/show/181037672-sergei-fedulov'
                    target='_blank'
                    rel='noopener noreferrer'
                    aria-label='Goodreads'
                >
                    <SiGoodreads />
                </IconLink>
            </IconRow>
        </BottomLeftWrapper>
    );
}
