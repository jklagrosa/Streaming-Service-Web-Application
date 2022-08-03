import React, { useState } from "react";
import { Modal as Drawer } from "react-bootstrap";

const Modal = ({ show, handleClose }: any) => {
  //   const [show, setShow] = useState(false);

  //   const handleClose = () => setShow(false);
  //   const handleShow = () => setShow(true);

  return (
    <>
      <Drawer show={show} onHide={handleClose}>
        <Drawer.Header closeButton>
          <Drawer.Title>Modal heading</Drawer.Title>
        </Drawer.Header>
        <Drawer.Body>Woohoo, you're reading this text in a modal!</Drawer.Body>
        {/* <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer> */}
      </Drawer>
    </>
  );
};

export default Modal;
