import React from 'react';
import { useCanvas } from '@/utils/hooks/useCanvas';
import { useAutoFocus } from '@/utils/hooks/useAutoFocus';

const CommentBox: React.FC = () => {
    const { composeComment, setComposeComment } = useCanvas();
    const commentRef = useAutoFocus();

    return (
        <textarea
            required
            ref={commentRef}
            className="w-full bg-transparent appearance-none text-sm text-white outline-none resize-none p-2"
            placeholder='Write a comment...'
            rows={2}
            value={composeComment}
            onChange={(e) => setComposeComment(e.target.value)}
        />
    )
};

export default CommentBox;