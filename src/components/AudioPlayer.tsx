// src/components/AudioPlayer.tsx
import React, { useRef } from "react";
import { Box, IconButton } from "@mui/material";
import { PlayArrow, Pause, Replay10, Forward10 } from "@mui/icons-material";

type AudioPlayerProps = {
	audioUrl: string;
};

const AudioPlayer: React.FC<AudioPlayerProps> = ({ audioUrl }) => {
	const audioRef = useRef<HTMLAudioElement>(null);

	const play = () => audioRef.current?.play();
	const pause = () => audioRef.current?.pause();
	const seek = (seconds: number) => {
		if (audioRef.current) {
			audioRef.current.currentTime += seconds;
		}
	};

	return (
		<Box display="flex" alignItems="center">
			<audio ref={audioRef} src={audioUrl}></audio>
			<IconButton onClick={play}>
				<PlayArrow />
			</IconButton>
			<IconButton onClick={pause}>
				<Pause />
			</IconButton>
			<IconButton onClick={() => seek(-10)}>
				<Replay10 />
			</IconButton>
			<IconButton onClick={() => seek(10)}>
				<Forward10 />
			</IconButton>
		</Box>
	);
};

export default AudioPlayer;
