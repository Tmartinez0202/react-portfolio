import React from "react";
import { Container, Row, Col, Jumbotron } from "reactstrap";
import profile from "../images/profile.jpg";
import styled from "styled-components";
import codePic from "../images/codepicture.jpg"

const HomeWrapper = styled.div`
    text-align: center;
  
   
    
    img {
      width: 400px;
    }
    .jumbotron {
      background-color: black;
      color: white;
      height: 1300px;
    }
`
function Home() {
  return (
  <HomeWrapper>
        <Row>
          <Col>
              <div>
                <Jumbotron fluid>
                  <Container fluid>
                    <h1 className="display-3">Hello, I'm Travis Martinez.</h1>
                    <p className="lead">I am a full-stack web developer</p>
                    <img src={profile} alt="profile"/>
                  </Container>
                </Jumbotron>
              </div>
          </Col>
     </Row>
  </HomeWrapper>



           );
          }

export default Home;
