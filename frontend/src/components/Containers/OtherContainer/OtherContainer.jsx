import styles from "./othercontainer.module.css";

const OtherContainer = ({ children }) => {
	return <div className={styles.otherContainer}>{children}</div>;
};

export default OtherContainer;
