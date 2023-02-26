import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Heading from '../../../components/Heading';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import '../index.css';

function Navbar() {
  return (
    <Container fluid className="home--navbar">
      <Row className="navbar--content">
        <Col className="navbar--title">
          <Heading text="Image2Text" tier="primary" />
        </Col>
        <Col className="navbar--navigations">
          <FontAwesomeIcon icon={solid('bars')} color="white" size="2xl" />
          {/* <Row>
            <Col className="navigation">Home</Col>
            <Col className="navigation">Architecture</Col>
            <Col className="navigation">Convert</Col>
          </Row> */}
        </Col>
      </Row>
    </Container>
  );
}

export default Navbar
