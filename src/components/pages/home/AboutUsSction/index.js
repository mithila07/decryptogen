import { Button, Col, Container, Image, Row } from "react-bootstrap";
import "@fontsource/fira-code/500.css";
import "@fontsource/fira-code/600.css";
import styles from "./aboutUsSection.module.scss";
import ourStoryImg from "../../../../assets/img/our-story-img.jpg"
import ourTeamImg from "../../../../assets/img/our-team-img.jpg"

export const AboutUsSection = () => {
    return (
        <section className={styles.aboutUsSection}>
            <Container className={`dg-container ${styles.wrapper}`} fluid="sm">
                <div className={`border-bottom pb-4 ${styles.titleWrapper}`}>
                    <h5 className="text-light mb-1">In summary</h5>
                    <h2>Our Story</h2>
                </div>
                <Row className={styles.imageBlock}>
                    <Col md lg='5' xl='4'>
                        <div className={styles.imageBlockWrapper}>
                            <Image src={ourStoryImg} roundedCircle alt="Our team image" />
                            <span className={styles.imgOverlay}></span>
                        </div>
                    </Col>
                    <Col md lg='7' xl='8'>
                        <p>Drawing from the many years of expertise of our Consultants, Decryptogen focuses on
                            providing tailored, cutting-edge digital solutions for our clients. We facilitate our clients with an unparalleled
                            level of guidance throughout the complete maturity of a project’s lifecycle or provide
                            continuous unwavering support services.</p>
                        <Button className="dg-btn mt-5">Read More</Button>
                    </Col>
                </Row>

                <div className={`border-bottom pb-4 ${styles.titleWrapper} ${styles.marginTop10}`}>
                    <h5 className="text-light mb-1">Our strength is</h5>
                    <h2>Our team</h2>
                </div>
                <Row className={styles.imageBlock}>
                    <Col md lg='5' xl='4'>
                        <div className={styles.imageBlockWrapper}>
                            <Image src={ourTeamImg} roundedCircle alt="Our team image" />
                            <span className={styles.imgOverlay}></span>
                        </div>
                    </Col>
                    <Col md lg='7' xl='8'>
                        <p>We take pride in our ability to adapt our operating model to best suit our clients’ requirement. Whether your requirement is
                            to manage a project in its entirety from end-to-end, or to expand or
                            outsource your ICT resources for the extent of a project, Decryptogen is
                            here to meet your digital transformation goals!</p>
                        <Button className="dg-btn mt-5">Join With Us</Button>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}