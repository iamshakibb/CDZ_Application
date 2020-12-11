import React from "react";
import { Form, Modal, Row, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { CloseFormModal } from "../../Redux/Actions/FormModalAction";

export default function FormModal(props) {
  const dispatch = useDispatch();
  return (
    <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="p-2"
      >
        <Modal.Body
          className="p-5 d-flex align-items-center justify-content-center"
          style={{ height: "50vh" }}
        >
          <form>
            <Row>
              <div className="col-lg-6 py-2">
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter Full Name" />
                </Form.Group>
              </div>
              <div className="col-lg-6 py-2">
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
              </div>
              <div className="col-lg-12 py-2">
                <Form.Group controlId="exampleForm.ControlTextarea1">
                  <Form.Label>Example textarea</Form.Label>
                  <Form.Control as="textarea" rows={4} />
                </Form.Group>
              </div>
              <div className="col-12 p-3 d-flex align-items-center justify-content-end">
                <Button
                  onClick={() => dispatch(CloseFormModal())}
                  style={{ backgroundColor: "#000434" }}
                >
                  Send
                </Button>
              </div>
            </Row>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}
