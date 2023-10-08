import { FC, ChangeEvent } from "react";
import { Row, Col, Button, Form } from "react-bootstrap";

interface SubmitVoteProps {
  isTermsCheckboxConfirmed: boolean;
  handleChange: () => void;
}

const SubmitVote: FC<SubmitVoteProps> = ({
  isTermsCheckboxConfirmed,
  handleChange,
}) => {
  return (
    <Row className="submit-vote">
      <Col>
        <Form.Check type="checkbox">
          <Form.Check.Input
            type="checkbox"
            checked={isTermsCheckboxConfirmed}
            onChange={handleChange}
          />
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
