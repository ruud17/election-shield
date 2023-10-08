import { FC, ChangeEvent } from "react";
import { Row, Col, Form } from "react-bootstrap";
import { VoterDetails } from "../utils/interfaces";

interface VoterDetailsFormProps {
  voterDetails: VoterDetails;
  handleInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const VoterDetailsForm: FC<VoterDetailsFormProps> = ({
  voterDetails,
  handleInputChange,
}) => {
  return (
    <Form className="voter-details-form">
      <Row>
        <Col>
          <Form.Group className="mb-3">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="First Name"
              size="sm"
              name="firstName"
              value={voterDetails.firstName}
              onChange={handleInputChange}
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group className="mb-3">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Last Name"
              size="sm"
              name="lastName"
              value={voterDetails.lastName}
              onChange={handleInputChange}
            />
          </Form.Group>
        </Col>

        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Email"
            size="sm"
            name="email"
            value={voterDetails.email}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Identity Id</Form.Label>
          <Form.Control
            type="number"
            aria-describedby="idHelpBlock"
            size="sm"
            name="identity_id"
            value={voterDetails.identity_id || ""}
            onChange={handleInputChange}
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
