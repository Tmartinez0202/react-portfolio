import React from "react";
import { Container, Row, Col, Jumbotron } from "reactstrap";
import styled from "styled-components";
import codePic from "../images/codingpicture.jpg"

const ContactWrapper = styled.div`
    text-align: center;
  
    .jumbotron {
      background: url(${codePic});
      color: white;
      height: 1400px;
    }
    a {
      color: white;
      
    }
`

function Contact() {
  return (
    <ContactWrapper>
    <Row>
    <Col>
        <div>
          <Jumbotron fluid>
            <Container fluid>
              <h1 className="display-3">Contact me!</h1>
              <p className="lead">Feel free to reach me on Linkedin or through my email at travismartinez88@gmail.com</p>
              <a href= "https://www.linkedin.com/in/travis-martinez-6581b51a9/detail/recent-activity/">Linkedin</a>
            </Container>
          </Jumbotron>
        </div>
    </Col>
</Row>
    </ContactWrapper>
  );
}

export default Contact;
