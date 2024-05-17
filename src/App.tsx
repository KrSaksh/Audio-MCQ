// src/App.tsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import QuizPage from "./pages/QuizPage";
import QuestionEditor from "./pages/QuestionEditor";

const App: React.FC = () => {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<QuizPage />} />
				<Route path="/question" element={<QuestionEditor />} />
			</Routes>
		</Router>
	);
};

export default App;
