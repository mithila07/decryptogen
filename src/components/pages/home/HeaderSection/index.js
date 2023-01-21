import { Button, ButtonGroup, Container } from "react-bootstrap";
import "@fontsource/fira-code/500.css";
import "@fontsource/fira-code/600.css";
import styles from "./headerSection.module.scss";

export const HeaderSection = () => {
    return (
        <section className={styles.headerSection}>
            <Container className={`dg-container ${styles.wrapper}`} fluid="sm">
                <h1>Let's <span className="underline">execute</span> succesful digtal products</h1>
                <p>At a time of exponentially growing dependency on digital services, We are your trusted independent digital transformation specialists</p>
                <ButtonGroup className={`mt-5 ${styles.btnGroup}`} aria-label="Basic example">
                    <Button className="dg-btn">See Our Solutions</Button>
                    <Button className="dg-btn outlined light">Let's Talk</Button>
                </ButtonGroup>

            </Container>
        </section>
    );
}