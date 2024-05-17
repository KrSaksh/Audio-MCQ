// src/pages/QuestionEditor.tsx
import React, { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { Question } from "../types";

const QuestionEditor: React.FC = () => {
	const [questions, setQuestions] = useState<Question[]>([]);

	const addQuestion = () => {
		setQuestions([...questions, { question: "", audioUrl: "", options: ["", "", "", ""], correctOption: "" }]);
	};

	const updateQuestion = (index: number, updatedQuestion: Question) => {
		const newQuestions = [...questions];
		newQuestions[index] = updatedQuestion;
		setQuestions(newQuestions);
	};

	return (
		<Box>
			<Typography variant="h4">Edit Questions</Typography>
			{questions.map((question, index) => (
				<Box key={index} mb={2}>
					<TextField fullWidth label="Question" value={question.question} onChange={(e) => updateQuestion(index, { ...question, question: e.target.value })} />
					<TextField fullWidth label="Audio URL" value={question.audioUrl} onChange={(e) => updateQuestion(index, { ...question, audioUrl: e.target.value })} />
					{question.options.map((option, optionIndex) => (
						<TextField
							key={optionIndex}
							fullWidth
							label={`Option ${optionIndex + 1}`}
							value={option}
							onChange={(e) => {
								const newOptions = [...question.options];
								newOptions[optionIndex] = e.target.value;
								updateQuestion(index, { ...question, options: newOptions });
							}}
						/>
					))}
					<TextField fullWidth label="Correct Option" value={question.correctOption} onChange={(e) => updateQuestion(index, { ...question, correctOption: e.target.value })} />
				</Box>
			))}
			<Button variant="contained" onClick={addQuestion}>
				Add Question
			</Button>
		</Box>
	);
};

export default QuestionEditor;
