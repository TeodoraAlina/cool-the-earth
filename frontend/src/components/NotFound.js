import PageNotFound from "../assets/not-found.png";
import Asset from "./Asset";
import styles from "../styles/NotFound.module.css";
import btnStyles from "../styles/Button.module.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { Button, Container } from "react-bootstrap";

const NotFound = () => {
  return (
    <>
      <Container className={`${styles.NotFound}`}>
        <Asset
            src={PageNotFound}
            message={"Sorry, but the page that you requested doesn't exist."}
        />
        <Button
            className={`${btnStyles.Button} ${btnStyles.Green} ${styles.ReturnButton}`}
            as={Link}
            to="/"
        >
            Back Home
        </Button>
      </Container>
    </>
  );
};

export default NotFound;
