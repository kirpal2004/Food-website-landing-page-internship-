import React from "react";
import {
  
  Card,
  Carousel,
  Row,
  Col,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";

const menuItems = [
  {
    title: "Pizza",
    image: "/images/pizza.jpg",
    description: "Delicious cheesy pizza with fresh toppings.",
    price: "₹99",
  },
  {
    title: "Burger",
    image: "/images/burgur.jpg",
    description: "Juicy burger served with crispy fries.",
    price: "₹60",
  },
  {
    title: "Pasta",
    image: "/images/pasta.jpg",
    description: "Creamy Italian pasta with herbs.",
    price: "₹35",
  },
  {
    title: "Idli",
    image: "/images/idli.jpg",
    description: "Soft steamed idlis with coconut chutney.",
    price: "₹30",
  },
  {
    title: "Menduvada",
    image: "/images/menduvada.jpg",
    description: "Crispy vadas served with sambhar.",
    price: "₹40",
  },
  {
    title: "Dosa",
    image: "/images/dhosa.jpg",
    description: "Thin crispy dosa rolled with potato filling.",
    price: "₹135",
  },
];

// Function to chunk items into groups of 3
const menu = (arr, size) => {
  const chunks = [];
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
  }
  return chunks;
};

function Menu() {
  const slides = menu(menuItems, 3);

  return (
    <div className="" id="menu"
    
     style={{
  background: "linear-gradient(to right,rgb(185, 228, 248),rgb(161, 239, 252))"
,
  
    padding: "20px",
    color: "#333",
  }}
>
      <h2 className="text-center mb-4 text-white">Our Menu</h2>

      <Carousel indicators={false} controls={true} interval={3000}> 
        {slides.map((group, index) => (
          <Carousel.Item key={index}>
            <Row className="justify-content-center">
              {group.map((item, idx) => (
                <Col md={3} key={idx} className="d-flex justify-content-center">
                  <Card style={{ width: "17rem" }} className="mb-3">
                    <Card.Img
                      variant="top"
                      src={item.image}
                      style={{ height: "200px", objectFit: "cover" }}
                    />
                    <Card.Body>
                      <Card.Title>{item.title}</Card.Title>

                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>{item.description}</Tooltip>}
                      >
                        <span
                          style={{
                            width: "100%",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                            display: "block",
                            cursor: "pointer",
                          }}
                        >
                          Try our tasty {item.title.toLowerCase()}!{" "}
                          {item.description}
                        </span>
                      </OverlayTrigger>

                      
                      <h5 className="mt-1 text-dark fw-bold">
                        {item.price}
                      </h5>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default Menu;
