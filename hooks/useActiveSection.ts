import { useEffect, useState } from 'react';

export const useActiveSection = (sectionIds: string[]) => {
    const [activeSection, setActiveSection] = useState(sectionIds[0]);

    useEffect(() => {
        const handleScroll = () => {
            for (const id of sectionIds) {
                const el = document.getElementById(id.replace('#', ''));
                if (el) {
                    const rect = el.getBoundingClientRect();

                    if (rect.top > -120) {
                        setActiveSection(id);
                        return;
                    }
                }
            }
            setActiveSection(sectionIds[sectionIds.length - 1]);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, [sectionIds]);

    return activeSection;
};
