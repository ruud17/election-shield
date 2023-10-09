import { FC, ChangeEvent } from "react";
import { Row, Alert, Form, Card, Col } from "react-bootstrap";
import { Candidates } from "../utils/enum";
import DonaldImg from "../images/Donald.jpeg";
import JoeImg from "../images/Joe.jpeg";

export interface CandidatesSelectionProps {
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
        Please select your preferred presidential candidate
      </Alert>
      <Col>
        <Form.Group>
          <Card className="bg-light text-black">
            <Card.Img variant="top" src={DonaldImg} />
            <Card.Body>
              <Card.Title>
                <Form.Check
                  type="radio"
                  label={Candidates.DonaldTrump}
                  value={Candidates.DonaldTrump}
                  checked={selectedCandidate === Candidates.DonaldTrump}
                  onChange={handleOptionChange}
                />
              </Card.Title>
            </Card.Body>
          </Card>
        </Form.Group>
      </Col>
      <Col>
        <Form.Group>
          <Card className="bg-light text-black">
            <Card.Img variant="top" src={JoeImg} />
            <Card.Body>
              <Card.Title>
                <Form.Check
                  type="radio"
                  label={Candidates.JoeBiden}
                  value={Candidates.JoeBiden}
                  checked={selectedCandidate === Candidates.JoeBiden}
                  onChange={handleOptionChange}
                />
              </Card.Title>
            </Card.Body>
          </Card>
        </Form.Group>
      </Col>
    </Row>
  );
};

export default CandidatesSelection;
