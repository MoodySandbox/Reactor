import React from 'react';
import { Emoji } from '@/types/types';

const ReactButton = ({ children }: { children: Emoji }) => (
    <button className='w-6 h-6 hover:text-4xl duration-200 flex items-center justify-center px-1'>
        {children}
    </button>
);

export default ReactButton;