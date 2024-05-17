// src/components/LoadingScreen.tsx
import React, { useEffect, useState } from "react";
import { CircularProgress, Box, Typography } from "@mui/material";

const LoadingScreen: React.FC = () => {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const timer = setTimeout(() => setLoading(false), 2000);
		return () => clearTimeout(timer);
	}, []);

	return loading ? (
		<Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" height="100vh">
			<CircularProgress />
			<Typography variant="h6" mt={2}>
				Loading...
			</Typography>
		</Box>
	) : null;
};

export default LoadingScreen;
