import { FC, ChangeEvent } from "react";
import { Row, Col, Form, FloatingLabel } from "react-bootstrap";
import { VoterDetails } from "../utils/interfaces";

export interface VoterDetailsFormProps {
  voterDetails: VoterDetails;
  handleInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
  formErrors: any;
}

const VoterDetailsForm: FC<VoterDetailsFormProps> = ({
  voterDetails,
  handleInputChange,
  formErrors,
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
              type="text"
              placeholder="First Name"
              size="sm"
              name="firstName"
              value={voterDetails.firstName}
              onChange={handleInputChange}
            />
            <Form.Control.Feedback type="invalid">
              {formErrors.firstName}
            </Form.Control.Feedback>
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
            <Form.Control.Feedback type="invalid">
              {formErrors.lastName}
            </Form.Control.Feedback>
          </FloatingLabel>
        </Col>
      </Row>
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
            <Form.Control.Feedback type="invalid">
              {formErrors.email}
            </Form.Control.Feedback>
          </FloatingLabel>
        </Col>
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
            <Form.Control.Feedback type="invalid">
              {formErrors.identity_id}
            </Form.Control.Feedback>
          </FloatingLabel>
        </Col>
      </Row>
    </Form>
  );
};

export default VoterDetailsForm;
