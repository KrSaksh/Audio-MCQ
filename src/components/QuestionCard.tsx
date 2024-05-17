// src/components/QuestionCard.tsx
import React, { useState } from "react";
import { Box, Button, RadioGroup, Radio, FormControlLabel, Typography } from "@mui/material";
import AudioPlayer from "./AudioPlayer";
import Timer from "./Timer";

type QuestionProps = {
	question: string;
	audioUrl: string;
	options: string[];
	onSubmit: (answer: string) => void;
};

const QuestionCard: React.FC<QuestionProps> = ({ question, audioUrl, options, onSubmit }) => {
	const [selectedOption, setSelectedOption] = useState<string>("");
	const [timeUp, setTimeUp] = useState<boolean>(false);

	const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSelectedOption((event.target as HTMLInputElement).value);
	};

	const handleSubmit = () => {
		onSubmit(selectedOption);
	};

	if (timeUp) {
		return (
			<Box>
				<Typography variant="h4">Time's up!</Typography>
				<Button variant="contained" onClick={() => window.location.reload()}>
					Retry
				</Button>
			</Box>
		);
	}

	return (
		<Box>
			<Typography variant="h5">{question}</Typography>
			<AudioPlayer audioUrl={audioUrl} />
			<RadioGroup value={selectedOption} onChange={handleOptionChange}>
				{options.map((option, index) => (
					<FormControlLabel key={index} value={option} control={<Radio />} label={option} />
				))}
			</RadioGroup>
			<Timer duration={15} onTimeUp={() => setTimeUp(true)} />
			<Button variant="contained" onClick={handleSubmit} disabled={!selectedOption}>
				Submit
			</Button>
		</Box>
	);
};

export default QuestionCard;
