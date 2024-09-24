import { useState } from "react";
import {
	MenuItem,
	Select,
	FormControl,
	RadioGroup,
	FormControlLabel,
	Radio,
	Box,
	Container,
	Typography,
} from "@mui/material";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import CircleIcon from "@mui/icons-material/Circle";

const Sorting = () => {
	const [num, setNum] = useState("");
	const handleChange = (event) => {
		setNum(event.target.value);
	};
	return (
		<Container
			sx={{
				width: "27%",
			}}
		>
			<Box
				sx={{
					padding: "20px",
				}}
			>
				<Typography
					sx={{
						marginBottom: "10px",
					}}
				>
					Sort by:
				</Typography>
				<FormControl
					sx={{
						m: 1,
						height: 30,
						width: "100%",
					}}
				>
					<Select
						value={num}
						onChange={handleChange}
						displayEmpty
						inputProps={{ "aria-label": "Without label" }}
						sx={{
							height: 30,
							width: "100%",
						}}
					>
						<MenuItem value="">
							<em>Lowest Price</em>
						</MenuItem>
						<MenuItem value={1}>Filter 1</MenuItem>
						<MenuItem value={2}>Filter 2</MenuItem>
						<MenuItem value={3}>Filter 3</MenuItem>
						<MenuItem value={4}>Filter 4</MenuItem>
						<MenuItem value={5}>Filter 5</MenuItem>
					</Select>
				</FormControl>
			</Box>
			<Box
				sx={{
					padding: "20px",
				}}
			>
				<Typography>Stops</Typography>
				<RadioGroup
					aria-labelledby="demo-radio-buttons-group-label"
					defaultValue="female"
					name="radio-buttons-group"
				>
					<FormControlLabel
						value="Nonestop"
						control={
							<Radio
								icon={<RadioButtonUncheckedIcon />}
								checkedIcon={<CircleIcon />}
								sx={{
									color: "#44329c",
									"& .MuiSvgIcon-root": {
										fontSize: 18,
									},
									"&.Mui-checked": {
										color: "#44329c",
									},
								}}
							/>
						}
						label="Nonestop"
					/>
					<FormControlLabel
						value="1 stop"
						control={
							<Radio
								icon={<RadioButtonUncheckedIcon />}
								checkedIcon={<CircleIcon />}
								sx={{
									color: "#44329c",
									"& .MuiSvgIcon-root": {
										fontSize: 18,
									},
									"&.Mui-checked": {
										color: "#44329c",
									},
								}}
							/>
						}
						label="1 Stop"
					/>
					<FormControlLabel
						value="2 stop"
						control={
							<Radio
								icon={<RadioButtonUncheckedIcon />}
								checkedIcon={<CircleIcon />}
								sx={{
									color: "#44329c",
									"& .MuiSvgIcon-root": {
										fontSize: 18,
									},
									"&.Mui-checked": {
										color: "#44329c",
									},
								}}
							/>
						}
						label="2 Stop"
					/>
				</RadioGroup>
			</Box>
			<Box
				sx={{
					padding: "20px",
				}}
			>
				<Typography>Arrival Time</Typography>
				<RadioGroup
					aria-labelledby="demo-radio-buttons-group-label"
					defaultValue="female"
					name="radio-buttons-group"
				>
					<FormControlLabel
						value="12:00-14:00"
						control={
							<Radio
								icon={<RadioButtonUncheckedIcon />}
								checkedIcon={<CircleIcon />}
								sx={{
									color: "#44329c",
									"& .MuiSvgIcon-root": {
										fontSize: 18,
									},
									"&.Mui-checked": {
										color: "#44329c",
									},
								}}
							/>
						}
						label="12:00-14:00"
					/>
					<FormControlLabel
						value="12:00-15:00"
						control={
							<Radio
								icon={<RadioButtonUncheckedIcon />}
								checkedIcon={<CircleIcon />}
								sx={{
									color: "#44329c",
									"& .MuiSvgIcon-root": {
										fontSize: 18,
									},
									"&.Mui-checked": {
										color: "#44329c",
									},
								}}
							/>
						}
						label="12:00-15:00"
					/>
					<FormControlLabel
						value="12:00-16:00"
						control={
							<Radio
								icon={<RadioButtonUncheckedIcon />}
								checkedIcon={<CircleIcon />}
								sx={{
									color: "#44329c",
									"& .MuiSvgIcon-root": {
										fontSize: 18,
									},
									"&.Mui-checked": {
										color: "#44329c",
									},
								}}
							/>
						}
						label="12:00-16:00"
					/>
				</RadioGroup>
			</Box>
			<Box
				sx={{
					padding: "20px",
				}}
			>
				<Typography>Airlines Included</Typography>
				<RadioGroup
					aria-labelledby="demo-radio-buttons-group-label"
					defaultValue="female"
					name="radio-buttons-group"
				>
					<Box
						sx={{
							display: "flex",
							justifyContent: "space-between",
							alignItems: "center",
						}}
					>
						<FormControlLabel
							value="thy"
							control={
								<Radio
									icon={<RadioButtonUncheckedIcon />}
									checkedIcon={<CircleIcon />}
									sx={{
										color: "#44329c",
										"& .MuiSvgIcon-root": {
											fontSize: 18,
										},
										"&.Mui-checked": {
											color: "#44329c",
										},
									}}
								/>
							}
							label="THY"
						/>
						<Typography>234$</Typography>
					</Box>
					<Box
						sx={{
							display: "flex",
							justifyContent: "space-between",
							alignItems: "center",
						}}
					>
						<FormControlLabel
							value="alitalia"
							control={
								<Radio
									icon={<RadioButtonUncheckedIcon />}
									checkedIcon={<CircleIcon />}
									sx={{
										color: "#44329c",
										"& .MuiSvgIcon-root": {
											fontSize: 18,
										},
										"&.Mui-checked": {
											color: "#44329c",
										},
									}}
								/>
							}
							label="Alitalia"
						/>
						<Typography>234$</Typography>
					</Box>
					<Box
						sx={{
							display: "flex",
							justifyContent: "space-between",
							alignItems: "center",
						}}
					>
						<FormControlLabel
							value="kuwait"
							control={
								<Radio
									icon={<RadioButtonUncheckedIcon />}
									checkedIcon={<CircleIcon />}
									sx={{
										color: "#44329c",
										"& .MuiSvgIcon-root": {
											fontSize: 18,
										},
										"&.Mui-checked": {
											color: "#44329c",
										},
									}}
								/>
							}
							label="Kuwait"
						/>
						<Typography>234$</Typography>
					</Box>

					<Box
						sx={{
							display: "flex",
							justifyContent: "space-between",
							alignItems: "center",
						}}
					>
						<FormControlLabel
							value="qatar"
							control={
								<Radio
									icon={<RadioButtonUncheckedIcon />}
									checkedIcon={<CircleIcon />}
									sx={{
										color: "#44329c",
										"& .MuiSvgIcon-root": {
											fontSize: 18,
										},
										"&.Mui-checked": {
											color: "#44329c",
										},
									}}
								/>
							}
							label="Qatar Air"
						/>
						<Typography>234$</Typography>
					</Box>
				</RadioGroup>
			</Box>
		</Container>
	);
};

export default Sorting;
