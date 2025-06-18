import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';

function About() {
  return (
    <>
      <style>
        {`
          .hover-scale {
            transition: transform 0.3s ease;
          }
          .hover-scale:hover {
            transform: scale(1.05);
          }
        `}
      </style>

      <div
        className="py-5"
        id="about"
        style={{
          background: 'linear-gradient(135deg, #fdfcfb 0%, #e2d1c3 100%)',
        }}
      >
        <Container>
          <Row className="align-items-center">
            <Col md={6} className="mb-4 text-center">
  <div className="position-relative">
    <img
      src="/images/About.jpg"
      alt="Chef"
      className="hover-scale img-fluid rounded-4 shadow"
      style={{
        maxHeight: '400px',
        objectFit: 'cover',
        border: '5px solid #fff',
      }}
    />
    
  </div>
  <small className="text-muted fst-italic d-block mt-2">
    “Flavors that touch your soul.”
  </small>
</Col>

            <Col md={6}>
              <h2 className="fw-bold display-5 text-dark mb-3">About Us</h2>
              <p className="lead text-secondary">
                At <strong>Tasty South</strong>, we serve real South Indian meals, rooted in tradition and made fresh daily.
              </p>

              <blockquote className="fst-italic text-muted">
                “Cooking is an art, and every dish we serve is a masterpiece.”
                <br />— Our Head Chef
              </blockquote>

              <h4 className="fw-semibold mt-4 text-dark">Why Choose Us?</h4>
              <ul className="text-secondary">
                <li>100% Authentic South Indian Recipes</li>
                <li>Fresh Organic Ingredients</li>
                <li>Strict Hygiene Standards</li>
                <li>Experienced Chefs With Passion</li>
              </ul>

              <Row className="mt-4">
                {['idli.jpg', 'menduvada.jpg', 'dhosa.jpg'].map((img, i) => (
                  <Col xs={4} key={i}>
                    <img
                      src={`/images/${img}`}
                      alt={`dish-${i}`}
                      className="img-fluid rounded-4 hover-scale shadow-sm"
                      style={{ height: '140px', width: '100%', objectFit: 'cover' }}
                    />
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
      
    </>
  );
}

export default About;
