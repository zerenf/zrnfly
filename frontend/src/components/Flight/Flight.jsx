import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import AirplanemodeActiveIcon from "@mui/icons-material/AirplanemodeActive";
import FlightLandIcon from "@mui/icons-material/FlightLand";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";

import { Typography } from "@mui/material";

const Flight = () => {
	return (
		<>
			<Box
				sx={{
					padding: "20px",
					borderRadius: "20px 20px 20px 0",
					backgroundColor: "#f9f9f9",
					margin: "70px 0",
					position: "relative",
				}}
			>
				<Box
					sx={{
						marginBottom: "30px",
					}}
				>
					<Typography
						sx={{
							fontWeight: "600",
						}}
					>
						Milano-Madrid
					</Typography>
				</Box>

				<Box
					sx={{
						display: "flex",
						alignItems: "center",
						justifyContent: "space-between",
					}}
				>
					<Grid
						container
						spacing={2}
						sx={{
							width: "100%",
						}}
					>
						<Grid
							sx={{
								display: "flex",
								flexDirection: "column",
								alignItems: "flex-start",
								justifyContent: "center",
							}}
							size={4}
						>
							<Box
								sx={{
									display: "flex",
									alignItems: "center",
								}}
							>
								<FlightTakeoffIcon
									sx={{
										color: "#686D76",
										marginRight: "6px",
									}}
								/>
								<Typography
									sx={{
										fontSize: "14px",
									}}
								>
									Departure
								</Typography>
							</Box>
							<Typography
								sx={{
									fontSize: "18px",
									fontWeight: "600",
								}}
							>
								07:00 AM
							</Typography>
							<Typography
								sx={{
									fontSize: "14px",
									fontWeight: "500",
									color: "#686D76",
								}}
							>
								Airport: XXX
							</Typography>
						</Grid>

						<Grid sx={{ textAlign: "center" }} size={4}>
							<Typography
								sx={{
									fontSize: "14px",
								}}
							>
								Turkish Airlines
							</Typography>
							<AirplanemodeActiveIcon sx={{ transform: "rotate(90deg)" }} />

							<Typography
								sx={{
									fontSize: "14px",
								}}
							>
								2h 25m (nonstop)
							</Typography>
						</Grid>

						<Grid
							sx={{
								display: "flex",
								flexDirection: "column",
								alignItems: "flex-end",
								justifyContent: "center",
							}}
							size={4}
						>
							<Box
								sx={{
									display: "flex",
								}}
							>
								<FlightLandIcon
									sx={{
										color: "#686D76",
									}}
								/>
								<Typography>Arrival</Typography>
							</Box>
							<Typography
								sx={{
									fontSize: "18px",
									fontWeight: "600",
								}}
							>
								07:00 AM
							</Typography>
							<Typography
								sx={{
									fontSize: "14px",
									fontWeight: "500",
									color: "#686D76",
								}}
							>
								Airport: XXX
							</Typography>
						</Grid>
					</Grid>
				</Box>

				<Box
					sx={{
						display: "flex",
						justifyContent: "space-between",
						position: "relative",
					}}
				>
					<Box>
						<Typography
							sx={{
								color: "#44329c",
								fontSize: "18px",
								fontWeight: "700",
								marginTop: "20px",
							}}
						>
							Price: 200$
						</Typography>
						<Typography>Round trip</Typography>
					</Box>
					<Button
						sx={{
							position: "absolute",
							right: "-20px",
							bottom: "-20px",
							backgroundColor: "#44329c",
							textTransform: "none",
							fontWeight: "700",
							boxShadow: "none",
							borderRadius: "10px 0 20px 0",
							overflow: "auto",
							height: "60px",
						}}
						variant="contained"
					>
						Book Flight
					</Button>
				</Box>
			</Box>

			<Button
				sx={{
					position: "absolute",
					backgroundColor: "#cdc1ff89",
					textTransform: "none",
					marginTop: "-70px",
					marginLeft: "0",
					borderRadius: "0px 0px 10px 10px",
					fontWeight: "700",
					boxShadow: "none",
				}}
				variant="contained"
			>
				<Link color="#44329c" href="#">
					Check the details
				</Link>
			</Button>
		</>
	);
};

export default Flight;

// import { useEffect, useState } from "react";
// import Box from "@mui/material/Box";
// import Grid from "@mui/material/Grid2";
// import AirplanemodeActiveIcon from "@mui/icons-material/AirplanemodeActive";
// import FlightLandIcon from "@mui/icons-material/FlightLand";
// import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
// import Button from "@mui/material/Button";
// import Link from "@mui/material/Link";
// import { Typography } from "@mui/material";
// import axios from "axios";

// const Flight = () => {
// 	const [flights, setFlights] = useState([]);
// 	const [loading, setLoading] = useState(true);
// 	const [error, setError] = useState("");

// 	const api_key = "dd175434a62eba09ead4421748b6bf9a";
// 	const api_id = "b0f88e8d";

// 	useEffect(() => {
// 		const fetchFlights = async () => {
// 			try {
// 				const response = await axios.get(
// 					"https://api.schiphol.nl/public-flights",
// 					{
// 						headers: {
// 							app_id: api_id,
// 							app_key: api_key,
// 							Accept: "application/json",
// 							ResourceVersion: "v4",
// 						},

// 						withCredentials: true,
// 					}
// 				);
// 				setFlights(response.data);
// 				setLoading(false);
// 			} catch (err) {
// 				setError("Uçuş verileri alınırken bir hata oluştu.");
// 				setLoading(false);
// 			}
// 		};

// 		fetchFlights();
// 	}, [api_key]);

// 	if (loading) return <p>Yükleniyor...</p>;
// 	if (error) return <p>{error}</p>;

// 	return (
// 		<>
// 			{flights.map((flight, index) => (
// 				<Box
// 					key={index}
// 					sx={{
// 						padding: "20px",
// 						borderRadius: "20px 20px 20px 0",
// 						backgroundColor: "#f9f9f9",
// 						margin: "70px 0",
// 						position: "relative",
// 					}}
// 				>
// 					<Typography sx={{ fontWeight: "600" }}>
// 						{flight.route[0].airport} - {flight.route[1].airport}
// 					</Typography>

// 					<Grid container spacing={2} sx={{ width: "100%", marginTop: "20px" }}>
// 						<Grid item xs={4}>
// 							<Box display="flex" alignItems="center">
// 								<FlightTakeoffIcon
// 									sx={{ color: "#686D76", marginRight: "6px" }}
// 								/>
// 								<Typography>Departure: {flight.departure.time}</Typography>
// 							</Box>
// 						</Grid>
// 						<Grid item xs={4} textAlign="center">
// 							<Typography>{flight.airline.name}</Typography>
// 							<AirplanemodeActiveIcon sx={{ transform: "rotate(90deg)" }} />
// 							<Typography>{flight.duration}</Typography>
// 						</Grid>
// 						<Grid item xs={4} textAlign="right">
// 							<Box display="flex" alignItems="center">
// 								<FlightLandIcon sx={{ color: "#686D76" }} />
// 								<Typography>Arrival: {flight.arrival.time}</Typography>
// 							</Box>
// 						</Grid>
// 					</Grid>

// 					<Box display="flex" justifyContent="space-between" marginTop="20px">
// 						<Typography
// 							sx={{ color: "#44329c", fontSize: "18px", fontWeight: "700" }}
// 						>
// 							Price: {flight.price}
// 						</Typography>
// 						<Button
// 							variant="contained"
// 							sx={{ backgroundColor: "#44329c", textTransform: "none" }}
// 						>
// 							Book Flight
// 						</Button>
// 					</Box>

// 					<Button
// 						sx={{
// 							position: "absolute",
// 							backgroundColor: "#cdc1ff89",
// 							textTransform: "none",
// 							marginTop: "-70px",
// 							marginLeft: "0",
// 							borderRadius: "0px 0px 10px 10px",
// 							fontWeight: "700",
// 							boxShadow: "none",
// 						}}
// 						variant="contained"
// 					>
// 						<Link color="#44329c" href="#">
// 							Check the details
// 						</Link>
// 					</Button>
// 				</Box>
// 			))}
// 		</>
// 	);
// };

// export default Flight;
