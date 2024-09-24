import { Container } from "@mui/material";

const FlightsContainer = ({ children }) => {
	return (
		<Container
			sx={{
				display: "flex",
				margin: "30px 0",
			}}
		>
			{children}
		</Container>
	);
};

export default FlightsContainer;
