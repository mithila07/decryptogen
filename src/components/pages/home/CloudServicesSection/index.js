import { Button, ButtonGroup, Container, Image } from "react-bootstrap";
import "@fontsource/fira-code/600.css";
import "@fontsource/fira-code/500.css";
import styles from "./cloudServicesSection.module.scss"
import illustration from "../../../../assets/img/cloud-services-illustration.svg"

export const CloudServiceSection = () => {
    return (
        <section className={styles.cloudSection}>
            <Container className={`dg-container text-center ${styles.wrapper}`} fluid="sm">
                <h1 className="mt-0 mx-auto">Cloud Management Solutions</h1>
                <p className={`mx-auto ${styles.subHeading}`}>Our cloud services offer a planned approach to develop, deploy, and manage cloud
                    platforms that addresses IT infrastructure needs</p>
                <Image className="mt-5" src={illustration} alt="cloud services illustration" fluid />
                <p className={`mt-5 mx-auto ${styles.descriptionText}`}>One of the most significant decisions nowadays is adoption of cloud computing into the
                    operational model of any forward-thinking organization. At Decryptogen , we provide
                    cloud consulting and management services to help our clients capitalize on the infinite possibilities brought about by the selecting the precise cloud computing variant to fulfil
                    specific business requirements.</p>
                <ButtonGroup className={`mt-5 ${styles.btnGroup}`} aria-label="Basic example">
                    <Button className="dg-btn">Explore More</Button>
                    <Button className="dg-btn outlined">Let's Talk</Button>
                </ButtonGroup>
            </Container>
        </section>
    );
}