import React, { useState } from "react";
import { Button, Form, Container, Row, Col } from "react-bootstrap";

function ContactUs({ onSubmit }) {
  //Form fields
  const [data, setData] = useState({
    FirstName: "",
    LastName: "",
    emailID: "",
    phoneNo: "",
    company: "",
    website: "",
    ExpainProj: "",
  });

  const {
    FirstName,
    LastName,
    emailID,
    phoneNo,
    company,
    website,
    ExpainProj,
  } = data;

  //inputhandler function
  const inputHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <Container>
        <Form onSubmit={onSubmit}>
          <Row className="mb-3">
            <Form.Group as={Col}>
              <Form.Label>First Name*</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your First Name"
                value={FirstName}
                onChange={inputHandler}
                name="FirstName"
                required={true}
              />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>Last Name*</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your Last Name"
                value={LastName}
                onChange={inputHandler}
                name="LastName"
                required={true}
              />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col}>
              <Form.Label>Phone Number*</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter your Ph Number"
                value={phoneNo}
                onChange={inputHandler}
                name="phoneNo"
                required={true}
              />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>Emai ID*</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your EmaiID"
                value={emailID}
                onChange={inputHandler}
                name="emailID"
                required={true}
              />
            </Form.Group>
          </Row>
          <Row>
            <Form.Group as={Col}>
              <Form.Label>Company Name*</Form.Label>

              <Form.Control
                type="text"
                placeholder="Enter your Company Name"
                value={company}
                onChange={inputHandler}
                name="company"
                required={true}
              />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>Website Link*</Form.Label>

              <Form.Control
                type="text"
                placeholder="Enter your Company Website"
                value={website}
                onChange={inputHandler}
                name="website"
                required={true}
              />
            </Form.Group>
          </Row>
          <Form.Group className="mb-3">
            <Form.Label>Project Details</Form.Label>
            <Form.Control
              as="textarea"
              rows="3"
              placeholder="Describe about your project"
              value={ExpainProj}
              onChange={inputHandler}
              name="ExpainProj"
            />
          </Form.Group>
          <div class="text-center">
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </div>
        </Form>
      </Container>
    </div>
  );
}

export default ContactUs;
