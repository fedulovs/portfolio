import { useEffect, useRef, useState } from 'react';

export function useInView(options?: IntersectionObserverInit) {
    const ref = useRef<HTMLDivElement | null>(null);
    const [isInView, setInView] = useState(false);

    useEffect(() => {
        const node = ref.current;
        if (!node) return;

        const observer = new window.IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setInView(true);
                    observer.disconnect();
                }
            });
        }, options);
        observer.observe(node);

        return () => observer.disconnect();
    }, [options]);

    return [ref, isInView] as const;
}
