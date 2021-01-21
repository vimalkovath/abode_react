import React from "react";
import { Modal } from "react-bootstrap";
import "./modal.css";
export const BigModal = ({
  show,
  modalHandle,
  heading,
  data,
  full = false,
}) => {
  return (
    <Modal
      style={{ maxWidth: "100vw !important" }}
      show={show}
      onHide={modalHandle}
      dialogClassName="your-dialog-classname"
      backdrop={false}
    >
      <Modal.Header closeButton>
        <Modal.Title>{heading}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{data}</Modal.Body>
    </Modal>
  );
};
