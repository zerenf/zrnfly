import { Box } from "@mui/material";
import Flight from "../Flight/Flight";

const Flights = () => {
	return (
		<Box
			sx={{
				width: "67%",
				margin: "0px",
			}}
		>
			<Flight />
			<Flight />
		</Box>
	);
};

export default Flights;
