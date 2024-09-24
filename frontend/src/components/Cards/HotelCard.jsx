import { Card, CardMedia, Typography, Box } from "@mui/material";

import hotel from "../../images/hotel.png";
import ApartmentIcon from "@mui/icons-material/Apartment";

const HotelCard = () => {
	return (
		<Card
			sx={{
				maxWidth: 250,
				position: "relative",
				borderRadius: "20px",
				margin: "20px 0",
			}}
		>
			<CardMedia sx={{ height: "250px" }} image={hotel} title="hotel" />

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
					backgroundColor: "rgba(0,105,148,0.5)",
				}}
			>
				<Box
					sx={{
						marginLeft: "10px",
						marginBottom: "10px",
					}}
				>
					<ApartmentIcon sx={{ fontSize: 28 }} />

					<Typography variant="h6" sx={{ fontWeight: "bold", fontSize: 20 }}>
						HOTELS
					</Typography>
				</Box>
			</Box>
		</Card>
	);
};

export default HotelCard;
