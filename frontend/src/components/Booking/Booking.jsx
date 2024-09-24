import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import AirplanemodeActiveIcon from "@mui/icons-material/AirplanemodeActive";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import EventIcon from "@mui/icons-material/Event";
import FlightLandIcon from "@mui/icons-material/FlightLand";
import Button from "@mui/material/Button";
import { InputAdornment, Container, Typography } from "@mui/material";
const Booking = () => {
	return (
		<>
			<Container>
				<Box
					sx={{
						borderRadius: "20px",
						backgroundColor: "#f9f9f9",
						padding: "20px",
					}}
				>
					<Box
						sx={{
							display: "flex",
							justifyContent: "space-between",
							alignItems: "center",
						}}
					>
						<Box
							sx={{
								display: "flex",
								alignItems: "center",
							}}
						>
							<AirplanemodeActiveIcon
								sx={{
									transform: "rotate(90deg)",
									fontSize: "26px",
								}}
							/>
							<Typography
								sx={{
									marginLeft: "10px",
									fontWeight: "700",
								}}
							>
								BOOK YOUR FLIGHT
							</Typography>
						</Box>
						<Box
							sx={{
								display: "flex",
								alignItems: "center",
							}}
						>
							<Button
								sx={{
									backgroundColor: "#44329c",
									textTransform: "none",
									fontWeight: "700",
									borderRadius: "20px 0 0 20px",
									boxShadow: "none",
								}}
								variant="contained"
							>
								Round trip
							</Button>
							<Button
								sx={{
									backgroundColor: "#cdc1ff",
									textTransform: "none",
									fontWeight: "700",
									borderRadius: "0 20px 20px 0",

									boxShadow: "none",
								}}
								variant="contained"
							>
								One way
							</Button>
						</Box>
					</Box>

					<Box
						sx={{
							width: "100%",
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							marginTop: "20px",
						}}
					>
						<Box sx={{ flex: 1, marginRight: "5px" }}>
							{" "}
							{/* Departure */}
							<TextField
								id="outlined-basic"
								variant="outlined"
								size="small"
								fullWidth
								sx={{
									"& .MuiOutlinedInput-root": {
										borderTopLeftRadius: "20px",
										borderBottomLeftRadius: "20px",
									},
								}}
								InputProps={{
									startAdornment: (
										<InputAdornment position="start">
											<FlightTakeoffIcon />
										</InputAdornment>
									),
								}}
							/>
						</Box>

						<Box sx={{ flex: 1, marginRight: "30px" }}>
							{" "}
							{/* Arrive */}
							<TextField
								id="outlined-basic"
								variant="outlined"
								size="small"
								fullWidth
								sx={{
									"& .MuiOutlinedInput-root": {
										borderTopRightRadius: "20px",
										borderBottomRightRadius: "20px",
									},
								}}
								InputProps={{
									startAdornment: (
										<InputAdornment position="start">
											<FlightLandIcon />
										</InputAdornment>
									),
								}}
							/>
						</Box>

						<Box sx={{ flex: 1, marginRight: "5px" }}>
							{" "}
							{/* Date-d */}
							<TextField
								id="outlined-basic"
								variant="outlined"
								size="small"
								fullWidth
								sx={{
									"& .MuiOutlinedInput-root": {
										borderTopLeftRadius: "20px",
										borderBottomLeftRadius: "20px",
									},
								}}
								InputProps={{
									startAdornment: (
										<InputAdornment position="start">
											<EventIcon />
										</InputAdornment>
									),
								}}
							/>
						</Box>

						<Box sx={{ flex: 1 }}>
							{" "}
							{/* Date-a */}
							<TextField
								id="outlined-basic"
								variant="outlined"
								size="small"
								fullWidth
								sx={{
									"& .MuiOutlinedInput-root": {
										borderTopRightRadius: "20px",
										borderBottomRightRadius: "20px",
									},
								}}
								InputProps={{
									startAdornment: (
										<InputAdornment position="start">
											<EventIcon />
										</InputAdornment>
									),
								}}
							/>
						</Box>
					</Box>

					<Button
						sx={{
							backgroundColor: "#44329c",
							textTransform: "none",
							marginTop: "20px",
							fontWeight: "700",
						}}
						variant="contained"
					>
						Show flights
					</Button>
				</Box>
			</Container>
		</>
	);
};

export default Booking;
