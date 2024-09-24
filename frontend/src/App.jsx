import OtherContainer from "./components/Containers/OtherContainer/OtherContainer";
import BookingContainer from "./components/Containers/BookingContainer/BookingContainer";
import MainContainer from "./components/Containers/MainContainer/MainContainer";
import FlightsContainer from "./components/Containers/FlightsContainer/FlightsContainer";
import Sorting from "./components/Sorting/Sorting";
import "./App.css";
import Booking from "./components/booking/Booking";
import OtherServices from "./components/OtherServices/OtherServices";
import Flights from "./components/Flights/Flights";

function App() {
	return (
		<>
			<div className="appContainer">
				<h1 className="besmele">بسم الله الرحمن الرحيم</h1>
			</div>

			<MainContainer>
				<BookingContainer>
					<Booking />
					<FlightsContainer>
						<Flights />
						<Sorting />
					</FlightsContainer>
				</BookingContainer>
				<OtherContainer>
					<OtherServices />
				</OtherContainer>
			</MainContainer>
		</>
	);
}

export default App;
