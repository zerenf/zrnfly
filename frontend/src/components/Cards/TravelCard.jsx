import { Card, CardMedia, Typography, Box } from "@mui/material";

import BeachAccessIcon from "@mui/icons-material/BeachAccess";

import travel from "../../images/travel.png";

const RentalCard = () => {
	return (
		<Card sx={{ maxWidth: 250, position: "relative", borderRadius: "20px" }}>
			<CardMedia sx={{ height: "250px" }} image={travel} title="Travel" />

			<Box
				sx={{
					position: "absolute",
					top: 0,
					left: 0,
					width: "100%",
					height: "100%",
					display: "flex",
					justifyContent: "flex-start",
					alignItems: "end",
					color: "white",
					backgroundColor: "rgba(34,193,195,0.5)",
				}}
			>
				<Box
					sx={{
						marginLeft: "10px",
						marginBottom: "10px",
					}}
				>
					<BeachAccessIcon sx={{ fontSize: 28 }} />

					<Typography variant="h6" sx={{ fontWeight: "bold", fontSize: 20 }}>
						TRAVEL PACKAGES
					</Typography>
				</Box>
			</Box>
		</Card>
	);
};

export default RentalCard;
