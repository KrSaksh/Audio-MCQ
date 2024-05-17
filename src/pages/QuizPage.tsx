// src/pages/QuizPage.tsx
import React, { useState } from "react";
import { Box } from "@mui/material";
import QuestionCard from "../components/QuestionCard";
import { useQuestions } from "../api/questions";
import { QuizCompletedScreen } from "../components/ResultScreens";

const QuizPage: React.FC = () => {
	const { questions, loading, error } = useQuestions();
	const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
	const [score, setScore] = useState<number>(0);

	if (loading) return <div>Loading...</div>;
	if (error) return <div>Error loading questions</div>;

	const handleAnswerSubmit = (answer: string) => {
		if (questions[currentQuestionIndex].correctOption === answer) {
			setScore(score + 1);
		}

		if (currentQuestionIndex < questions.length - 1) {
			setCurrentQuestionIndex(currentQuestionIndex + 1);
		} else {
			// All questions answered
			setCurrentQuestionIndex(-1); // To indicate quiz completion
		}
	};

	return <Box>{currentQuestionIndex === -1 ? <QuizCompletedScreen score={score} totalQuestions={questions.length} /> : <QuestionCard question={questions[currentQuestionIndex].question} audioUrl={questions[currentQuestionIndex].audioUrl} options={questions[currentQuestionIndex].options} onSubmit={handleAnswerSubmit} />}</Box>;
};

export default QuizPage;
