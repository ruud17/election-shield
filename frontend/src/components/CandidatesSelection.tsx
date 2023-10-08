import { FC, useState, ChangeEvent } from "react";
import { Row, Alert, Form } from "react-bootstrap";

interface CandidatesSelectionProps {
  // name: string;
}

const CandidatesSelection: FC<CandidatesSelectionProps> = () => {
  const [selectedOption, setSelectedOption] = useState<number>();

  const handleOptionChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(parseInt(event.target.value));
  };

  return (
    <Row className="candidate">
      <Alert variant="info">
        Select the presidential candidate you'd like to vote for.
      </Alert>
      <Form.Group>
        <Form.Check
          type="radio"
          label="Donald Trump"
          value={1}
          checked={selectedOption === 1}
          onChange={handleOptionChange}
        />

        <Form.Check
          type="radio"
          label="Joe Biden"
          value={2}
          checked={selectedOption === 2}
          onChange={handleOptionChange}
        />
      </Form.Group>
    </Row>
  );
};

export default CandidatesSelection;
