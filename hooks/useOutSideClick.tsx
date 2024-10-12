import { useEffect, RefObject } from 'react';

interface UseOutsideClickProps {
    ref: RefObject<HTMLElement>;
    handler: (event: MouseEvent | TouchEvent) => void;
}

const useOutsideClick = ({ ref, handler }: UseOutsideClickProps) => {
    useEffect(() => {

        const handleOutsideClick = (event: MouseEvent | TouchEvent) => {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                handler(event);
            }
        };

        document.addEventListener('mousedown', handleOutsideClick);
        document.addEventListener('touchstart', handleOutsideClick);

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
            document.removeEventListener('touchstart', handleOutsideClick);
        };
    }, [ref, handler]);
};

export default useOutsideClick;
