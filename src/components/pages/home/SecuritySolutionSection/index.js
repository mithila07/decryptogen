import { Container, Image } from "react-bootstrap";
import "@fontsource/fira-code/600.css";
import styles from "./securitySolutionSection.module.scss";
import standardImg from "../../../../assets/img/standards.svg";
import complianceImg from "../../../../assets/img/target.svg";
import securityImg from "../../../../assets/img/security-lock.svg";
import cmsImg from "../../../../assets/img/data-encryption.svg";
import threatImg from "../../../../assets/img/grand-master-key.svg"

export const SecuritySolutionSection = () => {
    return (
        <section className={styles.securitySection}>
            <Container className={`dg-container text-center ${styles.wrapper}`} fluid="sm">
                <h1 className="mt-0 mx-auto">Security Solutions</h1>
                <p className={`mx-auto ${styles.subHeading}`}>We earmark security as one of our most important focal points and offer a comprehensive and reliable host of security testing services to our valuable clients with <span className="underline underline_sm">our systematic approach</span>.</p>

                <div className={styles.securityItemsWrapper}>
                    <div className={styles.securityItem}>
                        <div className={styles.securityItemIcon}>
                            <Image src={complianceImg} alt="Stadards-based security testing image" />
                        </div>
                        <div className={styles.securityItemDescription}>
                            <h5>Stadards-based<br />Security Testing</h5>
                            <p>Lorem ipsum dolor sit amet consectetur. Vulputate ut eu vestibulum tincidunt. Purus elit scelerisque tincidunt faucibus amet. Rhoncus molestie vitae risus quis. Integer.</p>
                        </div>
                    </div>
                    <div className={styles.securityItem}>
                        <div className={styles.securityItemIcon}>
                            <Image src={standardImg} alt="Stadards-based security testing image" />
                        </div>
                        <div className={styles.securityItemDescription}>
                            <h5>Compliance-Based<br/>Security Testing</h5>
                            <p>Lorem ipsum dolor sit amet consectetur. Volutpat venenatis leo quis volutpat convallis sapien. Integer massa fames sit pharetra habitasse scelerisque tortor tellus. Erat.</p>
                        </div>
                    </div>
                    <div className={styles.securityItem}>
                        <div className={styles.securityItemIcon}>
                            <Image src={securityImg} alt="Infrastructure Security Testing" />
                        </div>
                        <div className={styles.securityItemDescription}>
                            <h5>Infrastructure<br/>Security Testing</h5>
                            <p>Nulla in proin convallis malesuada. Pellentesque amet velit ultrices in. Sagittis at eget ut ut varius vitae. Aliquet a orci et sed.</p>
                        </div>
                    </div>
                    <div className={styles.securityItem}>
                        <div className={styles.securityItemIcon}>
                            <Image src={cmsImg} alt="Stadards-based security testing image" />
                        </div>
                        <div className={styles.securityItemDescription}>
                            <h5>CMS Security Testing</h5>
                            <p>Ultrices sagittis est risus luctus amet venenatis. Tincidunt posuere volutpat aenean non. Massa leo lobortis eget turpis ultrices tincidunt. Tempor aliquet et nunc nibh. Amet.</p>
                        </div>
                    </div>
                    <div className={styles.securityItem}>
                        <div className={styles.securityItemIcon}>
                            <Image src={threatImg} alt="Stadards-based security testing image" />
                        </div>
                        <div className={styles.securityItemDescription}>
                            <h5>Threat Modelling</h5>
                            <p>Lorem ipsum dolor sit amet consectetur. Volutpat venenatis leo quis volutpat convallis sapien. Integer massa fames sit pharetra habitasse scelerisque tortor tellus. Erat.</p>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}