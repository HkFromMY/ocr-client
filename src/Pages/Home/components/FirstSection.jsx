import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Heading from '../../../components/Heading';
import "../index.css";

// images
import Architecture from '../../../assets/images/architecture_nn.png';

function FirstSection() {
  return (
    <section className="section">
      <Container fluid>
        <Row>
          <Col>
            <img src={Architecture} alt="neural network architecture" className="architecture--image" />
          </Col>
          <Col className="architecture--text">
            <Row>
              <Heading text="Image2Text OCR Deep Learning Model with TensorFlow Python" tier="secondary" />
            </Row>
            <Row>
              <p className="architecture--description" style={{ color: 'var(--white)' }}>
                Built with CRNN architecture which consists of Convolutional and Recurrent Neural Network Layer. The images are converted to gray scale and resized to the same size of 32x128 before proceeding to the next layer. Convolutional layers extract the key feature from the images where the images are then pooled with Max Pooling layer to reduce the dimension of the images. Then, Batch Normalization layers normalize the images so that the model can fit the data better. Key features extracted from the images are then squeezed and flatten to one-dimensional array and fed to the Long Short Term Memory (LSTM) layers to predict the single English word.
              </p>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default FirstSection
