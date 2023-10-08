import { FC } from "react";
import { Container } from "react-bootstrap";

interface VoteConfirmationMessageProps {
  // name: string;
}

const VoteConfirmationMessage: FC<VoteConfirmationMessageProps> = () => {
  return <Container>Thank you for successfull voting!!!</Container>;
};

export default VoteConfirmationMessage;
