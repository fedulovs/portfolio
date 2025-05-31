import { useEffect, useRef, useState, useCallback } from 'react';

export function useInView(options?: IntersectionObserverInit) {
    const [isInView, setInView] = useState(false);
    const nodeRef = useRef<HTMLElement | null>(null);

    const setRef = useCallback((node: HTMLElement | null) => {
        nodeRef.current = node;
    }, []);

    useEffect(() => {
        const node = nodeRef.current;
        if (!node || typeof window === 'undefined') return;

        // At mount: check if already in view
        const rect = node.getBoundingClientRect();
        const isTopInViewport =
            rect.top < window.innerHeight && rect.bottom >= 0;
        if (isTopInViewport) {
            setInView(true);
            console.log('InView fired at mount');
            return; // Don't need observer
        }

        // Set up observer for when it scrolls into view
        const observer = new window.IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setInView(true);
                    console.log('InView fired from observer');
                    observer.disconnect();
                }
            });
        }, options);
        observer.observe(node);

        return () => {
            observer.disconnect();
        };
    }, [options]);

    return [setRef, isInView] as const;
}
