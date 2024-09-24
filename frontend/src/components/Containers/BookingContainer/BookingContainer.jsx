import styles from "./bookingcontainer.module.css";

const BookingContainer = ({ children }) => {
	return <div className={styles.bookingContainer}>{children}</div>;
};

export default BookingContainer;
