import React, { useMemo } from 'react';
import * as RXAvatar from '@radix-ui/react-avatar';
import { User } from '@/types/types';

interface AvatarProps {
    user: User,
    size?: "sm" | "md" | "lg" | "xl",
    className?: string
};

const Avatar = ({
    user,
    size = "sm",
    className = ""
}: AvatarProps) => useMemo(() => {
    const initials = user.name.split(' ').map((n) => n[0]).slice(0, 2).join('');

    const sizeClass = {
        sm: "w-6 h-6",
        md: "w-8 h-8",
        lg: "w-12 h-12",
        xl: "w-16 h-16",
    }[size];

    return (
        <RXAvatar.Root asChild>
            <div className={`bg-black ${sizeClass} select-none overflow-hidden rounded-full ${className}`}>
                <RXAvatar.Image
                    className="h-full w-full object-cover"
                    src={user.thumbnail}
                    alt={user.name}
                />
                <RXAvatar.Fallback
                    className="text-violet-500 leading-1 flex h-full w-full items-center justify-center bg-white text-base font-medium uppercase"
                    delayMs={100}
                >
                    {initials}
                </RXAvatar.Fallback>
            </div>
        </RXAvatar.Root>
    )
}, [user, size]);

export default Avatar;