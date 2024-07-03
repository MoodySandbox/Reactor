"use client"
import React from "react";
import { CanvasProvider } from "@/utils/context/CanvasContext";
import Compose from "@/components/Compose/Compose";
import CanvasMedia from "./CanvasMedia";
import Reactions from './Reactions';

const Canvas: React.FC = () => {
    return (
        <CanvasProvider>
            <div className="relative">
                <CanvasMedia />
                <Reactions />
                <Compose />
            </div>
        </CanvasProvider>
    );
};

export default Canvas;