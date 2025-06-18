import React, { useState } from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import { FaStar, FaQuoteLeft } from "react-icons/fa";

const reviews = [
  {
    name: "Dhaval",
    text: "Amazing food and fast delivery! Totally loved the packaging too.",
    img: "/images/user1.png",
    rating: 5,
  },
  {
    name: "Uttam",
    text: "Best pizza in town, love it! Would definitely recommend.",
    img: "/images/user2.png",
    rating: 4,
  },
  {
    name: "Bharat",
    text: "Affordable and tasty meals every time.",
    img: "/images/user3.png",
    rating: 5,
  },
  {
    name: "Mitesh",
    text: "Very quick service and food is always warm and fresh.",
    img: "/images/user4.png",
    rating: 4,
  },
  {
    name: "Himal",
    text: "Loved the hygiene and taste. Truly authentic.",
    img: "/images/user5.jpg",
    rating: 5,
  },
  {
    name: "Darshan",
    text: "South Indian meals taste like home!",
    img: "/images/user6.png",
    rating: 5,
  },
];

function Review() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const review = reviews[currentIndex];

  const showNext = () => {
    setCurrentIndex((currentIndex + 1) % reviews.length);
  };

  const showPrev = () => {
    setCurrentIndex((currentIndex - 1 + reviews.length) % reviews.length);
  };

  return (
    <div
      id="reviews"
      style={{
        background: "linear-gradient(to right,rgba(230, 169, 140, 0.23),rgb(223, 199, 165))",
        padding: "30px 20px",
        textAlign: "center",
      }}
    >
      <style>
        {`.hover-scale {
          transition: transform 0.3s ease;
        }                
        .hover-scale:hover {
        transform: scale(1.05);
        }`
        }
      </style>
      <Container>
        <h2 className="mb-5 fw-bold" style={{ fontFamily: "cursive" }}>
          What Customer's Say?
        </h2>
        <Row className="align-items-center">
          {/* Left: Review */}
          <Col md={7}>
            <Image
              src={review.img}
              roundedCircle
              width="120"
              height="120"
              
            />
            <h5 className="mt-2 fw-semibold">{review.name}</h5>
            <div className="text-warning">
              {[...Array(review.rating)].map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>
            <p
              className="mt-2 text-muted px-1"
              style={{ maxWidth: "400px", margin: "0 auto" }}
            >
              <FaQuoteLeft className="me-2 text-secondary" />
              {review.text}
            </p>

            <div className="mt-4 d-flex justify-content-center gap-3">
              <Button variant="outline-secondary" onClick={showPrev}>
                Previous
              </Button>
              <Button variant="outline-secondary" onClick={showNext}>
                Next
              </Button>
            </div>
          </Col>

          {/* Right: Fast food image */}
          <Col md={5}>
            <Image
              className="hover-scale"
              src="/images/fastfood.jpg"
              alt="Fast Food"
              fluid
              rounded
              
              style={{
                
                maxHeight: "400px",
                objectFit: "cover",
                boxShadow: "0 0 20px rgba(0,0,0,0.1)",
              }}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Review;
