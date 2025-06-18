import React from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";

function Contact() {
  return (
    <div
      id="contact"
      style={{
        background: "linear-gradient(to right, #ffcc80, #ffab40)",
        padding: "60px 0",
      }}
    >
      <Container>
        <h2 className="text-center mb-4" style={{ fontWeight: "bold" }}>
          📞 Contact Us
        </h2>
        <Row className="justify-content-center">
          <Col md={8}>
            <Form>
              <Form.Group className="mb-3 " controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>Email Address</Form.Label>
                <Form.Control type="email" placeholder="anc@gmail.com" />
              </Form.Group>

              <Form.Group className="mb-4" controlId="formMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={4}
                  placeholder="Write your message here..."
                />
              </Form.Group>

              <div className="text-center">
                <Button variant="dark" type="submit">
                  📩 Send Message
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Contact;
