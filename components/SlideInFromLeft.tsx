import React, { PropsWithChildren } from 'react';
import { SectionContent } from './Section';
import { useInView } from '@/hooks/useInView';

export const SlideInFromLeft: React.FC<PropsWithChildren> = ({ children }) => {
    const [ref, isInView] = useInView({ threshold: 0.3 });

    return (
        <SectionContent ref={ref} $visible={isInView}>
            {children}
        </SectionContent>
    );
};
