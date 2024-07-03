import { useCallback } from 'react';

type InputElement = HTMLInputElement | HTMLTextAreaElement | null;

export const useAutoFocus = (): (inputElement: InputElement) => void => {
    const inputRef = useCallback((inputElement: InputElement) => {
        if (inputElement) {
            inputElement.focus();
        }
    }, []);

    return inputRef;
};