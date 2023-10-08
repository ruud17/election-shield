import { FC } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";

interface VoterDetailsFormProps {
  // name: string;
}

const VoterDetailsForm: FC<VoterDetailsFormProps> = () => {
  return (
    <Form className="voter-details-form">
      <Row>
        <Col>
          <Form.Group className="mb-3">
            <Form.Label>First Name</Form.Label>
            <Form.Control type="text" placeholder="First Name" size="sm" />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group className="mb-3">
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="text" placeholder="Last Name" size="sm" />
          </Form.Group>
        </Col>

        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Email" size="sm" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Identity Id</Form.Label>
          <Form.Control
            type="number"
            aria-describedby="idHelpBlock"
            size="sm"
          />
          <Form.Text id="idHelpBlock" muted>
            Please enter your identity id from your ID card
          </Form.Text>
        </Form.Group>
      </Row>
    </Form>
  );
};

export default VoterDetailsForm;
