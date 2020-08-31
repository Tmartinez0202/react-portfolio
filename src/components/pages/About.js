import React from "react";
import { Container, Row, Col, Jumbotron } from "reactstrap";
import styled from "styled-components";
import codePic from "../images/codingpicture.jpg"

const AboutWrapper = styled.div`
    text-align: center;
  
    .jumbotron {
      background: url(${codePic});
      color: white;
      height: 1400px;
    }
    a {
      color: white
    }
`

function About() {
  return (
    <AboutWrapper>
        <Row>
              <Col>
                  <div>
                    <Jumbotron fluid>
                      <Container fluid>
                        <h1 className="display-3">A little about me!</h1>
                        <p className="lead">I am a recent graduate from the University of Denver coding boot-camp! My work experience has been primarily in the food and beverage industry. I plan to take everything I have learned and incorporate that knowledge into my development. </p>
                        <ul>
                          <li><a href= "https://www.facebook.com/travis.martinez.393"> Facebook</a></li>
                          <li><a href= "https://www.linkedin.com/in/travis-martinez-6581b51a9/detail/recent-activity/">Linkedin</a></li>
                          <li><a href= "https://github.com/Tmartinez0202">Github</a></li>
                          <li><a href= "https://docs.google.com/document/d/1vWgeAqrVSewbRqgZRu-_GsTZHIeqUrNPF6O7ikMjmec/edit?usp=sharing">Resume</a></li>
                        </ul>
                      </Container>
                    </Jumbotron>
                  </div>
              </Col>
        </Row>
    </AboutWrapper>
    
  );
}

export default About;
