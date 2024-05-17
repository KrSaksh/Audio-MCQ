// src/components/ResultScreens.tsx
import React from "react";
import { Box, Button, Typography } from "@mui/material";

type ResultScreensProps = {
	score: number;
	totalQuestions: number;
};

export const TimeUpScreen: React.FC = () => (
	<Box textAlign="center">
		<Typography variant="h4">Time's up!</Typography>
		<Button variant="contained" onClick={() => window.location.reload()}>
			Retry
		</Button>
	</Box>
);

export const QuizCompletedScreen: React.FC<ResultScreensProps> = ({ score, totalQuestions }) => (
	<Box textAlign="center">
		<Typography variant="h4">Quiz Completed</Typography>
		<Typography variant="h6">
			Your Score: {score} / {totalQuestions}
		</Typography>
	</Box>
);
