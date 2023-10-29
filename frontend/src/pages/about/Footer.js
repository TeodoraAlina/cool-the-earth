import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import logo from "../../assets/logov2.png";
import styles from "../../styles/Footer.module.css";

const Footer = () => {
  return (
    <Container fluid className={styles.FooterContainer}>
      <Container>
        <Row>
          <Col xs={12} md={3} lg={3} className={styles.Contact}>
            <h5 className={styles.FooterH5}>Contact</h5>
            <ul className="list-unstyled">
              <li>
                <a href="mailto:info@cooltheearth.com">
                  <i className="fa-solid fa-envelope"></i>Email:
                  info@cooltheearth.com
                </a>
              </li>
              <li>
                <a href="tel:06763459834">
                  <i className="fa-solid fa-phone"></i>Phone: 06763459834
                </a>
              </li>
            </ul>
          </Col>
          <Col xs={12} md={3} lg={3}>
            <h5 className={styles.FooterH5}>Follow Us</h5>
            <ul className="list-unstyled">
              <li>
                <a href="https://www.facebook.com/">
                  <i className="fa-brands fa-facebook"></i>Facebook
                </a>
              </li>
              <li>
                <a href="https://twitter.com/">
                  <i className="fa-brands fa-square-x-twitter"></i>Twitter
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/">
                  <i className="fa-brands fa-instagram"></i>Instagram
                </a>
              </li>
            </ul>
          </Col>
          <Col xs={12} md={3} lg={6} className="text-center text-md-right">
            <div className={styles.LogoCopyrightContainer}>
              <img src={logo} alt="logo2" className={styles.LogoFooter} />
              <p className={styles.CopyrightText}>
                &copy; {new Date().getFullYear()} Cool the Earth. All rights
                reserved.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Footer;
