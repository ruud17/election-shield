import { FC, useState, ChangeEvent } from "react";
import { Row, Alert, Form } from "react-bootstrap";
import { Candidates } from "../utils/enum";

interface CandidatesSelectionProps {
  selectedCandidate: string;
  handleOptionChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const CandidatesSelection: FC<CandidatesSelectionProps> = ({
  selectedCandidate,
  handleOptionChange,
}) => {
  return (
    <Row className="candidate">
      <Alert variant="info">
        Select the presidential candidate you'd like to vote for.
      </Alert>
      <Form.Group>
        <Form.Check
          type="radio"
          label={Candidates.DonaldTrump}
          value={Candidates.DonaldTrump}
          checked={selectedCandidate === Candidates.DonaldTrump}
          onChange={handleOptionChange}
        />

        <Form.Check
          type="radio"
          label={Candidates.JoeBiden}
          value={Candidates.JoeBiden}
          checked={selectedCandidate === Candidates.JoeBiden}
          onChange={handleOptionChange}
        />
      </Form.Group>
    </Row>
  );
};

export default CandidatesSelection;
