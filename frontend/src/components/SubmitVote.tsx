import { FC, useCallback } from "react";
import { Row, Col, Button, Form } from "react-bootstrap";
import { postVote } from "../utils/api";
import { CreateVoteRequest } from "../dto/Vote";
import { FormValidator } from "../utils/formValidator";

interface SubmitVoteProps {
  isTermsCheckboxConfirmed: boolean;
  handleChange: () => void;
  dataToPost: CreateVoteRequest;
  setDisplaySuccessVotingMsg: (status: boolean) => void;
  setFormErrors: (error: Record<string, string>) => void;
}

const SubmitVote: FC<SubmitVoteProps> = ({
  isTermsCheckboxConfirmed,
  handleChange,
  dataToPost,
  setDisplaySuccessVotingMsg,
  setFormErrors,
}) => {
  const saveVote = useCallback(async () => {
    try {
      await FormValidator.schema.validate(dataToPost.voterDetails, {
        abortEarly: false,
      });

      await postVote(dataToPost);
      setDisplaySuccessVotingMsg(true);
    } catch (validationErrors: any) {
      const newErrors: Record<string, string> = {};

      validationErrors.inner.forEach((error: any) => {
        newErrors[error.path] = error.message;
      });

      setFormErrors(newErrors);
    }
  }, [dataToPost, setDisplaySuccessVotingMsg, setFormErrors]);

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
        <Button
          variant="primary"
          size="sm"
          onClick={saveVote}
          disabled={!isTermsCheckboxConfirmed}
        >
          Submit
        </Button>
      </Col>
    </Row>
  );
};

export default SubmitVote;
