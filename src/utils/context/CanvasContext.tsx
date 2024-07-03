import React, { createContext, useRef, useState, ReactNode } from "react";
import { Coords, Reaction, CanvasState } from "@/types/types";

const initStates: CanvasState = {
    canvasMediaRef: { current: null },
    reactions: [],
    setReactions: () => { },
    isComposing: false,
    setIsComposing: () => { },
    composePosition: null,
    setComposePosition: () => { },
    composeComment: '',
    setComposeComment: () => { },
};

export const CanvasContext: React.Context<CanvasState> = createContext<CanvasState>(initStates);

export const CanvasProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const canvasMediaRef = useRef<HTMLImageElement>(null);
    const [isComposing, setIsComposing] = useState<boolean>(false);
    const [composePosition, setComposePosition] = useState<Coords | null>(null);
    const [composeComment, setComposeComment] = useState<string>('');
    const [reactions, setReactions] = useState<Reaction[]>([]);

    const providerValue: CanvasState = {
        canvasMediaRef,
        reactions,
        setReactions,
        isComposing,
        setIsComposing,
        composePosition,
        setComposePosition,
        composeComment,
        setComposeComment,
    };

    return (
        <CanvasContext.Provider value={providerValue}>
            {children}
        </CanvasContext.Provider>
    );
};