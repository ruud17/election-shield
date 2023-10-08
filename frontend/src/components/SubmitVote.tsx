import { FC } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";

const SubmitVote: FC = () => {
  return (
    <Row className="submit-vote">
      <Col>
        <Form.Check type="checkbox">
          <Form.Check.Input type="checkbox" />
          <Form.Check.Label>
            Accept Terms of Service and Data Collection Consent
          </Form.Check.Label>
        </Form.Check>
      </Col>
      <Col className="d-flex justify-content-end">
        <Button variant="primary" size="sm">
          Submit
        </Button>
      </Col>
    </Row>
  );
};

export default SubmitVote;
