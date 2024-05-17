// src/api/questions.ts
import { useEffect, useState } from "react";
import { Question } from "../types";

const mockQuestions: Question[] = [
	{
		question: "What is the capital of France?",
		audioUrl: "path/to/audio1.mp3",
		options: ["Paris", "London", "Berlin", "Madrid"],
		correctOption: "Paris",
	},
	{
		question: "What is 2 + 2?",
		audioUrl: "path/to/audio2.mp3",
		options: ["3", "4", "5", "6"],
		correctOption: "4",
	},
	// Add more questions as needed
];

export const useQuestions = () => {
	const [questions, setQuestions] = useState<Question[]>([]);
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchQuestions = async () => {
			try {
				// Simulating a fetch call
				await new Promise((res) => setTimeout(res, 1000));
				setQuestions(mockQuestions);
			} catch (err) {
				setError("Failed to load questions");
			} finally {
				setLoading(false);
			}
		};

		fetchQuestions();
	}, []);

	return { questions, loading, error };
};
