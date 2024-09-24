import HotelCard from "../Cards/HotelCard";
import RentalCard from "../Cards/RentalCard";
import TravelCard from "../Cards/TravelCard";

const OtherServices = () => {
	return (
		<div
			style={{
				width: "80%",
				margin: "0 auto",
			}}
		>
			<RentalCard />
			<HotelCard />
			<TravelCard />
		</div>
	);
};

export default OtherServices;
