// enum Emoji { "👍", "❤️", "🔥", "😂", "🚀", "😡" }
type Emoji = "👍" | "❤️" | "🔥" | "😂" | "🚀" | "😡";

interface User {
    name: string;
    thumbnail: string;
}

interface Coords {
    x: number;
    y: number;
}

interface Reaction {
    emoji: Emoji;
    coords: Coords;
    comment: string;
    user: User;
}

interface CanvasState {
    canvasMediaRef: React.RefObject<HTMLImageElement>;
    reactions: Reaction[];
    setReactions: React.Dispatch<React.SetStateAction<Reaction[]>>;
    isComposing: boolean;
    setIsComposing: React.Dispatch<React.SetStateAction<boolean>>;
    composePosition: Coords | null;
    setComposePosition: React.Dispatch<React.SetStateAction<Coords | null>>;
    composeComment: string;
    setComposeComment: React.Dispatch<React.SetStateAction<string>>;
}

export type {
    Emoji,
    User,
    Coords,
    Reaction,
    CanvasState,
};