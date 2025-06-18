import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

function Footer() {
  return (
    <footer
      className="text-white py-4"
      style={{
        background: "linear-gradient(to right, #D32F2F, #FF9800)",
      }}
    >
      <Container>
        <Row className="text-center">
          <Col md={4}>
            <h5>Foodie's Hub</h5>
            <p>Delicious meals at your fingertips.</p>
          </Col>
          <Col md={4}>
            <h5>Follow Us</h5>
            <div className="d-flex justify-content-center gap-4 fs-3">
              <FaFacebook className="cursor-pointer" />
              <FaInstagram className="cursor-pointer" />
              <FaTwitter className="cursor-pointer" />
            </div>
          </Col>
          <Col md={4}>
            <h5>Contact</h5>
            <p>Email: support@foodieshub.com</p>
            <p>Phone: +91 99988 77755</p>
          </Col>
        </Row>
        <hr className="bg-white" />
        <p className="text-center mb-0">© 2025 Foodie's Hub | All rights reserved</p>
      </Container>
    </footer>
  );
}

export default Footer;
