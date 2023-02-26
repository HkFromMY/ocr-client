import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';
import Heading from '../../../components/Heading';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import '../index.css';
import apiServices from '../../../services/api.service';

function ImageToText() {
  const [image, setImage] = useState();
  const [dragActive, setDragActive] = useState(false);
  const [isRequestPending, setIsRequestPending] = useState(false);
  const [convertedText, setConvertedText] = useState("");

  // drag and drop functions
  function handleDragEnter(event) {
    event.stopPropagation();
    event.preventDefault();
    setDragActive(true);
  }

  function handleDragOver(event) {
    event.stopPropagation();
    event.preventDefault();
    setDragActive(true);
  }

  function handleDragLeave(event) {
    event.stopPropagation();
    event.preventDefault();
    setDragActive(false);
  }

  function handleDrop(event) {
    event.stopPropagation();
    event.preventDefault();
    setDragActive(false);

    const file = event.dataTransfer.files[0];
    setImage(file);
  }

  // file upload functions
  function handleChange(event) {
    // upload image
    const file = event.target.files[0];
    setImage(file);
  }

  function cancelUpload(event) {
    // de-select the image uploaded
    setImage(null);
  }

  async function convertImage(event) {
    if (!isRequestPending) {
      event.preventDefault();
      setIsRequestPending(true);

      try {
        const response = await apiServices.convertImageToText(image);
        if (response.status === "success") {
          const textConverted = response.data.text;
          setConvertedText(textConverted);
        }
      } catch {
        setIsRequestPending(false);

      }

      setIsRequestPending(false);
      setImage(null);
    }
  }

  return (
    <section className="image--converter section">
      <Container fluid>
        <Col>
          <Row className="converter--title">
            <Heading text="CONVERT YOUR IMAGE TO TEXT HERE" tier="secondary" />
          </Row>
          <Row>
            {/* Drag & Drop Upload File */}
            <Container
              className={dragActive ? "drag-drop-zone drag-active" : "drag-drop-zone"}
              onDragEnter={(event) => handleDragEnter(event)}
              onDragLeave={(event) => handleDragLeave(event)}
              onDragOver={(event) => handleDragOver(event)}
              onDrop={(event) => handleDrop(event)}
            >
              <FontAwesomeIcon icon={solid('cloud-arrow-up')} size="5x" />
              <p>Drag and Drop Your Images Here</p>
              <hr />
              <label htmlFor="upload-image" className="upload--button">Upload</label>
              <input onChange={(event) => handleChange(event)} type="file" name="upload-image" id="upload-image" hidden accept="image/*" />
              {
                image ?
                <div className="uploaded">
                  <p className="uploaded--image">Uploaded:</p>
                  <p className="uploaded--filename">{ image.name }</p>
                  <div className="cancel--upload" onClick={(event) => cancelUpload(event)}>
                    <FontAwesomeIcon icon={solid('xmark')} color="var(--white)" />
                  </div>
                </div>
                :
                ""
              }
            </Container>
          </Row>
          <div className="button--area">
              {/* Convert Button */}
              <button onClick={(event) => convertImage(event)} type="button" className="convert--button">Convert</button>
              {
                isRequestPending ?
                <FontAwesomeIcon className="loading--spinner" icon={solid("spinner")} size="lg" />
                :
                ""
              }
          </div>
        </Col>
      </Container>

      <Modal show={convertedText} onHide={() => setConvertedText("")} centered>
        <Modal.Header>
          This is the text converted.
        </Modal.Header>
        <Modal.Body>
          { convertedText }
        </Modal.Body>
      </Modal>
    </section>
  );
}

export default ImageToText
