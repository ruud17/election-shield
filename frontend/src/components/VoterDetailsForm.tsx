import { FC, ChangeEvent } from "react";
import { Row, Col, Form, FloatingLabel } from "react-bootstrap";
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
          <FloatingLabel
            controlId="firstName"
            label="First Name"
            className="mb-3"
          >
            <Form.Control
              className="custom-input" // Add a custom CSS class
              type="text"
              placeholder="First Name"
              size="sm"
              name="firstName"
              value={voterDetails.firstName}
              onChange={handleInputChange}
            />
          </FloatingLabel>
        </Col>

        <Col>
          <FloatingLabel
            controlId="lastName"
            label="Last Name"
            className="mb-3"
          >
            <Form.Control
              type="text"
              placeholder="Last Name"
              size="sm"
              name="lastName"
              value={voterDetails.lastName}
              onChange={handleInputChange}
            />
          </FloatingLabel>
        </Col>
        <Row>
          <Col>
            <FloatingLabel controlId="email" label="Email" className="mb-3">
              <Form.Control
                type="email"
                placeholder="Email"
                size="sm"
                name="email"
                value={voterDetails.email}
                onChange={handleInputChange}
              />
            </FloatingLabel>
          </Col>
          <Col></Col>
        </Row>
        <Row>
          <Col>
            <FloatingLabel
              controlId="identity_id"
              label="Identity Id"
              className="mb-3"
            >
              <Form.Control
                type="string"
                placeholder="Identity Id"
                aria-describedby="idHelpBlock"
                size="sm"
                name="identity_id"
                value={voterDetails.identity_id}
                onChange={handleInputChange}
              />
              <Form.Text id="idHelpBlock" muted>
                Please enter your identity id from your ID card
              </Form.Text>
            </FloatingLabel>
          </Col>
        </Row>
      </Row>
    </Form>
  );
};

export default VoterDetailsForm;
