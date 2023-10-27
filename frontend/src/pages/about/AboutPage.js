
import styles from "../../styles/AboutPage.module.css";
import btnStyles from "../../styles/Button.module.css";
import React, { useState } from 'react';
import { Container, Row, Col, Button, Collapse, Carousel } from 'react-bootstrap';
import logo from "../../assets/logov2.png";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Footer from "./Footer";

const AboutPage = () => {
  const [openMission, setOpenMission] = useState(false);
  const [openWhy, setOpenWhy] = useState(false);
  const [openCommitment, setOpenCommitment] = useState(false);
  const [openJoin, setOpenJoin] = useState(false);

  return (
    <>
    <Container className={styles.Container}>
      <Row className="d-flex justify-content-center">
        <Col xs={12} md={8} className="text-center">
          <img src={logo} alt="logo2" className={styles.Logo2} />
        </Col>
      </Row>
            <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://res.cloudinary.com/dxajyjfpw/image/upload/v1698413586/pexels-tom-balabaud-3404361_hxj0b1.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3 className={styles.AboutH3} style={{ color: "#ffff" }}>Embrace Nature's Majesty</h3>
            <p className="d-none d-sm-block" style={{ color: "#ffff" }}>Discover the tranquil beauty of untouched landscapes. 
              Our mission at Cool the Earth is to protect and preserve these natural wonders. 
              Join us in experiencing the awe of Earth’s majestic scenery.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://res.cloudinary.com/dxajyjfpw/image/upload/v1698410867/pexels-inna-rabotyagina-8018592_Large_rpe3mn.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3 className={styles.AboutH3}>Join our Environmental Cleanup Efforts</h3>
            <p className="d-none d-sm-block">At Cool the Earth, we believe in the power of collective action. 
              Be part of our mission to preserve our planet. Join our dedicated community in cleaning up beaches, 
              one step closer to a greener world.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://res.cloudinary.com/dxajyjfpw/image/upload/v1698410867/pexels-thirdman-7656721_Large_bnpt3h.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3 className={styles.AboutH3}>Grow a Greener Tomorrow</h3>
            <p className="d-none d-sm-block" style={{ color: "#ffff" }}>Each tree we plant is a step towards a healthier planet. 
              Join our mission to combat climate change, one tree at a time. 
              Together, we can create a sustainable future filled with lush forests and cleaner air.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <Row className="mt-4 d-flex align-items-center justify-content-center">
        <Col xs={12} md={8} className="text-center">
          <Button
            onClick={() => setOpenMission(!openMission)}
            aria-controls="mission-collapse-text"
            aria-expanded={openMission}
            className={`${btnStyles.Button} ${btnStyles.Green} ${styles.AboutButtons}`}
          >
            Mission
          </Button>
          <Collapse in={openMission} dimension="width">
            <div className={styles.AboutText}>
              <p>
                At Cool the Earth, our mission is clear: to empower people to take
                meaningful actions that reduce their carbon footprint, preserve
                natural resources, and promote environmental awareness. We believe
                that change begins with each one of us, and together, we can make a
                real difference.
              </p>
            </div>
          </Collapse>
        </Col>
        <Col xs={12} md={8} className="text-center">
          <Button
            onClick={() => setOpenWhy(!openWhy)}
            aria-controls="why-collapse-text"
            aria-expanded={openWhy}
            className={`${btnStyles.Button} ${btnStyles.Green} ${styles.AboutButtons}`}
          >
            Why Cool the Earth?
          </Button>
          <Collapse in={openWhy} dimension="width">
            <div className={styles.AboutText}>
              <p>
                In a world facing pressing environmental challenges, Cool the Earth
                stands out as a platform where you can connect, share, and learn. We
                provide a safe and supportive space for:
              </p>
              <ul>
                <li>
                  <strong>Connecting:</strong> Connect with individuals, organizations,
                  and experts who share your passion for the environment. Join groups,
                  make friends, and collaborate on projects that matter.
                </li>
                <li>
                  <strong>Sharing:</strong> Share your stories, experiences, and knowledge
                  about sustainability. Inspire others by showcasing your eco-friendly
                  lifestyle and the positive changes you're making.
                </li>
                <li>
                  <strong>Learning:</strong> Stay informed about the latest environmental
                  trends, solutions, and innovations. Our community is a place for ongoing
                  education and a source of inspiration.
                </li>
              </ul>
            </div>
          </Collapse>
        </Col>
        <Col xs={12} md={8} className="text-center">
          <Button
            onClick={() => setOpenCommitment(!openCommitment)}
            aria-controls="commitment-collapse-text"
            aria-expanded={openCommitment}
            className={`${btnStyles.Button} ${btnStyles.Green} ${styles.AboutButtons}`}
          >
            Our Commitment
          </Button>
          <Collapse in={openCommitment} dimension="width">
            <div className={styles.AboutText}>
              <p>
                Cool the Earth is committed to promoting sustainable living, conservation
                efforts, and eco-friendly practices. We prioritize:
              </p>
              <ul>
                <li>
                  <strong>Positive Impact:</strong> We encourage and celebrate every small
                  step and big leap taken towards a more sustainable lifestyle.
                </li>
                <li>
                  <strong>Inclusivity:</strong> Our platform is open to people of all backgrounds,
                  ages, and beliefs. We believe diversity is key to creating real change.
                </li>
                <li>
                  <strong>Safety:</strong> We maintain a respectful and secure environment where
                  members can interact without fear of harassment or discrimination.
                </li>
              </ul>
            </div>
          </Collapse>
        </Col>
        <Col xs={12} md={8} className="text-center">
          <Button
            onClick={() => setOpenJoin(!openJoin)}
            aria-controls="join-collapse-text"
            aria-expanded={openJoin}
            className={`${btnStyles.Button} ${btnStyles.Green} ${styles.AboutButtons}`}
          >
            Ready to make a difference?
          </Button>
          <Collapse in={openJoin} dimension="width">
            <div className={styles.AboutText}>
              <p>
                Join Cool the Earth today and become a part of a
                global community dedicated to preserving our planet. Together, we can create
                a cooler, greener, and more sustainable world.
              </p>
              <Link to="/signup" className="btn-link">
                <Button className={`${btnStyles.Button} ${btnStyles.Green} ${styles.AboutJoin}`}>
                  Join the movement
                </Button>
              </Link>
            </div>
          </Collapse>
        </Col>
      </Row>
    </Container>
      <Footer />
    </>
  );
};

export default AboutPage;

