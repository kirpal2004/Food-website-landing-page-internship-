import React from 'react';
import { Button } from 'react-bootstrap';

function Order() {
  return (
    <div
      className="text-start"
      id="home"
      style={{ position: "relative", width: "100%", overflow: "hidden",backgroundColor:"none" 
}}
    >
      {/* Make image responsive */}
      <img
        src="/images/back.jpg"
        alt="Pasta"
        style={{
          width: "100%",
          height: "auto",
          maxHeight: "800px", // here control height for better experience
          objectFit: "fill",
          display: "block",
          opacity:"40%"
        }}
      />

      {/* Add css for text Overlay */}
      <div
      
        style={{
          position:"absolute",
          top: "20%",
          left: "5%",
          color: "#000",
          maxWidth: "60%",
          right:"0%",
          padding: "20px",
          backdropFilter: "blur(2px)",
          
        }}
      >
        <h1 className="text-hover" style={{ fontFamily: "cursive",fontSize:"3.5rem" ,position:"centre"}}>Tasty Food at Your Doorstep</h1>
        <p
          
          style={{
            fontWeight: "600",
            fontSize: "2.1rem",
            letterSpacing: "1.5px",
          }}
        >
          Fresh • Fast • Delicious
        </p>
        <p
          className="fw-semibold"
          style={{
            fontSize: "1.4rem",
            marginBottom: "20px",
          }}
        >
          Experience the joy of authentic flavors made with the freshest ingredients,
          delivered quickly and safely right to your home.
        </p>
        <Button variant="dark" size="lg" style={{position:"translate-middle"}}>
          Order Now
        </Button>
      </div>
    </div>
  );
}

export default Order;
