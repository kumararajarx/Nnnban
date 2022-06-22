import React, { useState } from "react";
import { Modal, Button, Col, Row } from "react-bootstrap";
import BackGroundImage from "../dist/nn.png";
import Ln from "../dist/ln.png";

import "bootstrap/dist/css/bootstrap.css";
import ContactUs from "../pages/ContactUs";

//Below bgDivStyle  is for Background Image
const bgDivStyle = {
  backgroundImage: `url(${BackGroundImage})`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  height: "100vh",
};

const Rule = ({ color }) => (
  <hr
    style={{
      borderColor: color,
      width: "50%",
      marginTop: "1%",
      alignItems: "center",
      justifyContent: "center",
    }}
  />
);

function ModalComp() {
  //Modal state
  const [show, setShow] = useState(false);

  //handlemodal logic
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const onLoginFormSubmit = (e) => {
    e.preventDefault();
    handleClose();
  };

  return (
    <div>
      <div className="content">
        <img
          src={BackGroundImage}
          alt="none"
          style={{
            width: "20%",
          }}
        />
        <Rule color="blue" />
        <h2>INTERLOCK RELATONSHIPS TO UNLOCK VALUE</h2>
        <Rule color="blue" />

        <div
          style={{
            position: "relative",
            alignItems: "center",
            justifyContent: "center",
            left: "-1%",
            marginBottom: "-12em",
          }}
        >
          <Button variant="info" onClick={handleShow}>
            Contact US
          </Button>
          <h4 style={{ position: "relative", top: "270px" }}>
            UNDER CONSTRUCTION BUT OPEN FOR BUSINESS
          </h4>
        </div>
        <Modal show={show} onHide={() => setShow(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Contact Form</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <ContactUs onSubmit={onLoginFormSubmit} />
          </Modal.Body>
        </Modal>
      </div>
    </div>
  );
}

export default ModalComp;
