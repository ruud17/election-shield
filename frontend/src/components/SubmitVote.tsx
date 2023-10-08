import { FC, useCallback } from "react";
import { Row, Col, Button, Form } from "react-bootstrap";
import { postVote } from "../utils/api";
import { CreateVoteRequest } from "../dto/Vote";

interface SubmitVoteProps {
  isTermsCheckboxConfirmed: boolean;
  handleChange: () => void;
  dataToPost: CreateVoteRequest;
}

const SubmitVote: FC<SubmitVoteProps> = ({
  isTermsCheckboxConfirmed,
  handleChange,
  dataToPost,
}) => {
  const saveVote = useCallback(async () => {
    try {
      const result = await postVote(dataToPost);
      // TO DO:
      // 1 show alert
      // 2. show thank you page
      // reset form
      console.log("SUCCESS");
    } catch (error) {
      console.error("Error in fetchDataMemoized:", error);
    }
  }, []);

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
        <Button variant="primary" size="sm" onClick={saveVote}>
          Submit
        </Button>
      </Col>
    </Row>
  );
};

export default SubmitVote;
