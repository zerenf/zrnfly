import { Card, CardMedia, Typography, Box } from "@mui/material";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";

import carRental from "../../images/car-rental.png";

const RentalCard = () => {
	return (
		<Card sx={{ maxWidth: 250, position: "relative", borderRadius: "20px" }}>
			<CardMedia
				sx={{ height: "250px" }}
				image={carRental}
				title="Car Rental"
			/>

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
					backgroundColor: "rgba(255,165,0,0.5)",
				}}
			>
				<Box
					sx={{
						marginLeft: "10px",
						marginBottom: "10px",
					}}
				>
					<DirectionsCarIcon sx={{ fontSize: 28 }} />

					<Typography variant="h6" sx={{ fontWeight: "bold", fontSize: 20 }}>
						CAR RENTALS
					</Typography>
				</Box>
			</Box>
		</Card>
	);
};

export default RentalCard;
