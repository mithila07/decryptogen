import { Navbar, Container, Nav, Image } from "react-bootstrap"
import logo from "../../../assets/img/logo.svg";
import "@fontsource/fira-code/500.css";
import "@fontsource/fira-sans";
import styles from "./headerNavigation.module.scss";

export const HeaderNavigation = () => {
    return (
        <Navbar className="py-3" expand="md" variant="dark">
            <Container>
                <Navbar.Brand href="#home">
                    <Image fluid src={logo} alt="Decryptogen logo" />
                </Navbar.Brand>
                <Navbar.Toggle className={`text-white ${styles.toggleBtn}`} aria-controls="navbar" />
                <Navbar.Collapse className="justify-content-end position-relative" id="navbar">
                    <Nav className={styles.navbarItems}>
                        <Nav.Link href="#about">Why Us</Nav.Link>
                        <Nav.Link href="#services">Services</Nav.Link>
                        <Nav.Link href="#blog">Blog</Nav.Link>

                        <div className={styles.contactBtn}>
                            <Nav.Link href="#contact">Contact Us</Nav.Link>
                        </div>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}