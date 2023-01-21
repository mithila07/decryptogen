import { Card, Col, Container, Row } from "react-bootstrap";
import "@fontsource/fira-code/600.css";
import styles from "./softwareServicesSection.module.scss";
import developmentImg from "../../../../assets/img/developer-mode.svg";
import uiuxImg from "../../../../assets/img/paint-palette.svg";
import crossPlatformImg from "../../../../assets/img/responsive.svg";
import IntractiveImg from "../../../../assets/img/workflow.svg";

export const SoftwareServicesSection = () => {
    return (
        <section className={styles.cloudSection}>
            <Container className={`dg-container text-center ${styles.wrapper}`} fluid="sm">
                <h1 className="mt-0 mx-auto">Software & Product Solutions</h1>
                <p className={`mx-auto ${styles.subHeading}`}>Our holistic and structured approach empowers our
                    clients to improve and enhance quality of their software products and fast-track their product launch.</p>

                <Row className="mt-5">
                    <Col className={styles.centerBorder} xs={12} md={6}>
                        <Card className={styles.card}>
                            <Card.Header className={styles.cardHeader}>
                                <Card.Img className={styles.cardImg} src={developmentImg} />
                            </Card.Header>
                            <Card.Body className={styles.cardBody}>
                                <Card.Title className={styles.cardTitle}>App Development & Support</Card.Title>
                                <Card.Text className={styles.cardText}>Id aliquam interdum elementum mus egestas massa. Cras interdum ac vitae morbi aliquet nunc. Nulla in elementum aliquam at tristique. Nisl amet morbi adipiscing lectus. Pretium nulla leo amet quis ac. Nunc morbi leo leo malesuada sagittis eu. Sit sit blandit volutpat sit ullamcorper morbi.</Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className={`mt-5 ${styles.card}`}>
                            <Card.Header className={styles.cardHeader}>
                                <Card.Img className={styles.cardImg} src={IntractiveImg} />
                            </Card.Header>
                            <Card.Body className={styles.cardBody}>
                                <Card.Title className={styles.cardTitle}>Seamless Interactive Bridging</Card.Title>
                                <Card.Text className={styles.cardText}>Id aliquam interdum elementum mus egestas massa. Cras interdum ac vitae morbi aliquet nunc. Nulla in elementum aliquam at tristique. Nisl amet morbi adipiscing lectus. Pretium nulla leo amet quis ac. Nunc morbi leo leo malesuada sagittis eu. Sit sit blandit volutpat sit ullamcorper morbi.</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className="d-flex flex-column pt-5 align-items-end" xs={12} md={6}>
                        <Card className={`mt-md-4 ${styles.card}`}>
                            <Card.Header className={styles.cardHeader}>
                                <Card.Img className={styles.cardImg} src={crossPlatformImg} />
                            </Card.Header>
                            <Card.Body className={styles.cardBody}>
                                <Card.Title className={styles.cardTitle}>Cross-Platform Integration</Card.Title>
                                <Card.Text className={styles.cardText}>Id aliquam interdum elementum mus egestas massa. Cras interdum ac vitae morbi aliquet nunc. Nulla in elementum aliquam at tristique. Nisl amet morbi adipiscing lectus. Pretium nulla leo amet quis ac. Nunc morbi leo leo malesuada sagittis eu. Sit sit blandit volutpat sit ullamcorper morbi.</Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className={`mt-5 ${styles.card}`}>
                            <Card.Header className={styles.cardHeader}>
                                <Card.Img className={styles.cardImg} src={uiuxImg} />
                            </Card.Header>
                            <Card.Body className={styles.cardBody}>
                                <Card.Title className={styles.cardTitle}>UI/UX Design</Card.Title>
                                <Card.Text className={styles.cardText}>Id aliquam interdum elementum mus egestas massa. Cras interdum ac vitae morbi aliquet nunc. Nulla in elementum aliquam at tristique. Nisl amet morbi adipiscing lectus. Pretium nulla leo amet quis ac. Nunc morbi leo leo malesuada sagittis eu. Sit sit blandit volutpat sit ullamcorper morbi.</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}