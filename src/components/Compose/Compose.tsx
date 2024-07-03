import React, { useState, useEffect } from 'react';
import { useCanvas } from '@/utils/hooks/useCanvas';
import { users } from '@/constants/data';
import { User } from "@/types/types";
import Avatar from '@/ui/Avatar';
import EmojisBar from './EmojisBar';
import CommentBox from './CommentBox';

const Compose: React.FC = () => {
    const { composeCoords, isComposing } = useCanvas();
    const [user, setUser] = useState<User>(users[0]);

    useEffect(() => {
        // Random user for each new comment
        setUser(users[Math.floor(Math.random() * users.length)]);
    }, [isComposing]);

    if (!isComposing) return null;

    return (
        <div className="w-64 flex items-end absolute -translate-y-full" style={{
            left: composeCoords?.x,
            top: composeCoords?.y
        }}>
            <div>
                <Avatar user={user} size="md" className='mr-2' />
            </div>
            <div className='bg-gray-800 shadow-lg rounded-xl rounded-bl-none overflow-hidden'>
                <CommentBox />
                <div className='p-1'>
                    <EmojisBar user={user} />
                </div>
            </div>
        </div>
    )
};

export default Compose;