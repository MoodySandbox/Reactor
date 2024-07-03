import React from 'react';
import * as AspectRatio from '@radix-ui/react-aspect-ratio';
import { useCanvas } from "@/utils/hooks/useCanvas";
import { Coords } from '@/types/types';

const CanvasMedia = ({
    src = "https://images.unsplash.com/photo-1535025183041-0991a977e25b?w=1200&dpr=2&q=80"
}: {
    src?: string
}) => {
    const { canvasMediaRef, convertCoords, setComposePosition, setIsComposing } = useCanvas();

    const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
        const { x, y }: Coords = convertCoords({
            from: 'client',
            coords: { x: e.clientX, y: e.clientY }
        });

        setComposePosition({ x, y });
        setIsComposing(prev => !prev);
    };

    return (
        <div onClick={(e) => handleClick(e)} className="shadow-lg w-full overflow-hidden rounded-xl">
            <AspectRatio.Root ratio={16 / 9}>
                <img
                    ref={canvasMediaRef}
                    src={src}
                    alt="Canvas media"
                    className="h-full w-full object-cover"
                />
            </AspectRatio.Root>
        </div>
    )
};

export default CanvasMedia;