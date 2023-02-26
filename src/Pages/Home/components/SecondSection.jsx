import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Heading from '../../../components/Heading';
import "../index.css";

// images
import Architecture from '../../../assets/images/architecture_nn.png';

function SecondSection() {
  return (
    <section className="second section">
      <Container fluid>
        <Row>
          <Col>
            <Row>
              <Heading text="System Architecture" tier="secondary" />
            </Row>
            <Row>
              <p className="architecture--description">
                The words in the image are segmented accordingly with OpenCV python library into different image pieces which will be fed to the neural network to predict each word of the image pieces by pieces as the model is word-based that can only predict one English word at a time. After the prediction is completed, each word is joined together with space between them to form a complete sentence and the sentence is outputted to the users as text.
              </p>
            </Row>
          </Col>
          <Col>
            <img src={Architecture} alt="system architecture" className="architecture--image" />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default SecondSection
