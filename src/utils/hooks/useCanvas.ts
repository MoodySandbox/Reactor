import { useContext, useEffect, useState } from "react";
import { CanvasContext } from "@/utils/context/CanvasContext";
import { Reaction, Coords, Emoji, User, CanvasState } from "@/types/types";
import { users } from "@/constants/data";

export const useCanvas = () => {
	const {
		canvasMediaRef,
		reactions,
		setReactions,
		isComposing,
		setIsComposing,
		composePosition,
		setComposePosition,
		composeComment,
		setComposeComment,
	} = useContext<CanvasState>(CanvasContext);
	const [composeCoords, setComposeCoords] = useState<Coords | null>(null);

	useEffect(() => {
		if (!composePosition) return;
		const { x, y } = convertCoords({
			from: 'media',
			coords: { x: composePosition.x, y: composePosition.y }
		});
		setComposeCoords({ x, y });
	}, [composePosition]);

	const addReaction = (emoji: Emoji, user?: User) => {
		if (!composePosition) return;
		const reaction: Reaction = {
			emoji,
			coords: composePosition,
			comment: composeComment,
			user: user ?? users[Math.floor(Math.random() * users.length)]
		};
		setReactions((prevReactions) => [...prevReactions, reaction]);
		setComposeComment('');
		setIsComposing(false);
	}

	const convertCoords = ({
		from,
		coords
	}: {
		from: 'client' | 'media';
		coords: Coords;
	}): Coords => {
		if (!canvasMediaRef.current) return { x: 0, y: 0 };

		const rect = canvasMediaRef.current.getBoundingClientRect();
		const scaleX = canvasMediaRef.current.naturalWidth / rect.width;
		const scaleY = canvasMediaRef.current.naturalHeight / rect.height;

		if (from === 'client') {
			// Calculate click position relative to the image's natural size
			const x = (coords.x - rect.left) * scaleX;
			const y = (coords.y - rect.top) * scaleY;

			return { x, y };
		}

		if (from === 'media') {
			// Calculate client position by reversing the scaling operation
			const x = (coords.x / scaleX);
			const y = (coords.y / scaleY);

			return { x, y };
		}

		return { x: 0, y: 0 };
	}

	return {
		canvasMediaRef,
		reactions,
		isComposing,
		setIsComposing,
		composeCoords,
		setComposePosition,
		composeComment,
		setComposeComment,
		convertCoords,
		addReaction,
	};
};