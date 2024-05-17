// src/components/Timer.tsx
import React, { useEffect, useState } from "react";
import { Typography } from "@mui/material";

type TimerProps = {
	duration: number;
	onTimeUp: () => void;
};

const Timer: React.FC<TimerProps> = ({ duration, onTimeUp }) => {
	const [timeLeft, setTimeLeft] = useState<number>(duration);

	useEffect(() => {
		if (timeLeft === 0) {
			onTimeUp();
			return;
		}

		const timerId = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
		return () => clearTimeout(timerId);
	}, [timeLeft, onTimeUp]);

	return <Typography variant="h6">{timeLeft} seconds remaining</Typography>;
};

export default Timer;
