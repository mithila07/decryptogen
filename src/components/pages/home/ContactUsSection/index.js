import { Button, ButtonGroup, Container } from "react-bootstrap";
import styles from "./contactUsSection.module.scss"

export const ContactUsSection = () => {
    return (
        <section className={styles.contactUsSection}>
            <Container className={`dg-container ${styles.wrapper}`} fluid="sm">
                <div className={`pb-4 ${styles.titleWrapper}`}>
                    <h5 className="mb-1">Talk to us</h5>
                    <h2>Right Now!</h2>
                    <p className="mt-4">Congue lacus erat amet pellentesque sapien. Lacus consequat dictumst sit commodo nunc a nec et. Faucibus maecenas tellus adipiscing ornare etiam tincidunt.</p>
                    <ButtonGroup className={`mt-5 ${styles.btnGroup}`} aria-label="Basic example">
                        <Button href="#" className="dg-btn outlined">don@decryptogen.com</Button>
                        <Button href="#" className="dg-btn outlined">+94 777 731 122</Button>
                    </ButtonGroup>
                </div>
            </Container>
        </section>
    );
}