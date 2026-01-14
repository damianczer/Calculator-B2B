import { useEffect, useRef, useState } from 'react';

export const useCountUp = (target: number, duration: number = 800) => {
    const [count, setCount] = useState(target);
    const prevTargetRef = useRef(target);

    useEffect(() => {
        const startValue = prevTargetRef.current;
        const endValue = target;
        const startTime = Date.now();

        if (startValue === endValue) return;

        const animate = () => {
            const now = Date.now();
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);

            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            const currentValue = startValue + (endValue - startValue) * easeOutQuart;

            setCount(currentValue);

            if (progress < 1) {
                requestAnimationFrame(animate);
            } else {
                setCount(endValue);
                prevTargetRef.current = endValue;
            }
        };

        requestAnimationFrame(animate);
    }, [target, duration]);

    return count;
};
