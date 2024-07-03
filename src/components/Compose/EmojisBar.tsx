import React, { useMemo } from 'react';
import { useCanvas } from '@/utils/hooks/useCanvas';
import { emojis } from '@/constants/data';
import { Emoji, User } from "@/types/types";
import ReactButton from '@/ui/ReactButton';

const EmojisBar = ({ user }: { user: User }) => {
    const { addReaction } = useCanvas();

    const EmojiList: React.FC = () => useMemo(() => emojis.map((emoji: Emoji, idx: number) => (
        <div key={idx} onClick={() => addReaction(emoji, user)}>
            <ReactButton>{emoji}</ReactButton>
        </div>
    )), [emojis]);

    return (
        <div className='bg-slate-700 rounded-full w-full p-1 px-2 flex justify-between items-center'>
            <EmojiList />
        </div>
    )
};

export default EmojisBar;