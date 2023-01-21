import { Button, ButtonGroup, Container } from "react-bootstrap";
import "@fontsource/fira-code/500.css";
import styles from "./moreSolutionSection.module.scss";

export const MoreSolutionSection = () => {
    return (
        <section className={styles.solutionSection}>
            <Container className={`dg-container text-center ${styles.wrapper}`} fluid="sm">
                <h4 className="mt-0 mx-auto">Our company offers range of IT services, expanding from QA and Application Testing, Cloud Management, to Digital Marketing and E-Commerce Services. Our team of skilled professionals has the expertise and experience to deliver high-quality services that meet the needs of our clients.</h4>
                <ButtonGroup className={`mt-5 ${styles.btnGroup}`} aria-label="Basic example">
                    <Button className="dg-btn">Explore Out Services</Button>
                    <Button className="dg-btn outlined">Let's Talk</Button>
                </ButtonGroup>
            </Container>
        </section>
    );
}