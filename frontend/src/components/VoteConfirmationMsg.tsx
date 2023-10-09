import { FC } from "react";
import { Row, Alert, Image } from "react-bootstrap";
import SuccessVoteIcon from "../images/success_vote.svg";

const VoteConfirmationMsg: FC = () => {
  return (
    <div className="success-vote">
      <Row>
        <Image src={SuccessVoteIcon} />
      </Row>
      <Row>
        <Alert variant="success">
          <Alert.Heading>You have successfully voted</Alert.Heading>
          <hr />
          <p className="mb-0">Thank you!</p>
        </Alert>
      </Row>
    </div>
  );
};

export default VoteConfirmationMsg;
