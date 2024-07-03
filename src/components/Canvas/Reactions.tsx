import React, { useEffect, useState } from 'react';
import { Coords, Reaction } from "@/types/types";
import { useCanvas } from "@/utils/hooks/useCanvas";
import * as HoverCard from '@radix-ui/react-hover-card';
import Avatar from '@/ui/Avatar';

const Reactions = () => {
    const { reactions, convertCoords } = useCanvas();
    const [updatedReactions, setUpdatedReactions] = useState<Reaction[]>(reactions);

    useEffect(() => {
        // Reactions should preserve their position on window resize
        const handleResize = () => {
            const newReactions: Reaction[] = reactions.map((reaction: Reaction) => {
                const { coords } = reaction;
                const { x, y }: Coords = convertCoords({
                    from: 'media',
                    coords: { x: coords.x, y: coords.y }
                });
                return { ...reaction, coords: { x, y } };
            });
            setUpdatedReactions(newReactions);
        };

        handleResize();

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [reactions]);

    return updatedReactions?.map((reaction: Reaction, idx: number) => {
        const { coords, emoji, comment, user } = reaction;
        const { x, y } = coords
        return (
            <div key={idx}>
                <HoverCard.Root openDelay={0} closeDelay={0}>
                    <HoverCard.Trigger asChild>
                        <div data-emoji={emoji} className="reaction absolute -translate-y-full hover:scale-150 duration-100" style={{ left: x, top: y }}>
                            <Avatar user={user} size="md" />
                        </div>
                    </HoverCard.Trigger>
                    <HoverCard.Portal>
                        <HoverCard.Content
                            className="w-40 bg-gray-800 shadow-lg rounded-xl rounded-bl-none p-3"
                            sideOffset={4}
                            side='right'
                            align="end">
                            <div className="flex flex-col">
                                <div className="text-gray-400 text-xs mb-1">{user.name}</div>
                                <div className="text-white text-sm">{comment}</div>
                            </div>
                        </HoverCard.Content>
                    </HoverCard.Portal>
                </HoverCard.Root>
            </div>
        )
    })
};

export default Reactions;