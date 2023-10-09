import { FC, useCallback, useState } from "react";
import { Row, Col, Button, Form } from "react-bootstrap";
import { postVote } from "../utils/api";
import { CreateVoteRequest } from "../dto/Vote";
import { FormValidator } from "../utils/formValidator";
import ErrorPreviewBox from "./ErrorPreviewBox";

export interface SubmitVoteProps {
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
  const [apiErrors, setApiErrors] = useState<unknown[]>([]);

  const saveVote = useCallback(async () => {
    try {
      setApiErrors([]);

      await FormValidator.schema.validate(dataToPost.voterDetails, {
        abortEarly: false,
      });
    } catch (validationErrors: any) {
      const newErrors: Record<string, string> = {};

      validationErrors.inner.forEach((error: any) => {
        newErrors[error.path] = error.message;
      });

      setFormErrors(newErrors);
      return;
    }

    try {
      await postVote(dataToPost);
      setDisplaySuccessVotingMsg(true);
    } catch (error: unknown) {
      setApiErrors([...apiErrors, error]);
    }
  }, [
    dataToPost,
    setDisplaySuccessVotingMsg,
    setFormErrors,
    apiErrors,
    setApiErrors,
  ]);

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

      {apiErrors && (
        <Col>
          <ErrorPreviewBox errors={apiErrors} />
        </Col>
      )}
    </Row>
  );
};

export default SubmitVote;
