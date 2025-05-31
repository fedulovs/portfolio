import React, { PropsWithChildren } from 'react';
import { SectionContent } from './Section';
import { useInView } from '@/hooks/useInView';

export const SlideInFromLeft: React.FC<PropsWithChildren> = ({ children }) => {
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 801;
    const [ref, isInView] = useInView({
        threshold: isMobile ? 0.01 : 0.3,
        rootMargin: isMobile ? '0px 0px -20% 0px' : '0px',
    });

    return (
        <SectionContent ref={ref} $visible={isMobile || isInView}>
            {children}
        </SectionContent>
    );
};
