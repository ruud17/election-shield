import { FC } from "react";
import { Container } from "react-bootstrap";
import VoterDetailsForm from "./VoterDetailsForm";
import CandidatesSelection from "./CandidatesSelection";
import SubmitVote from "./SubmitVote";

const PageContent: FC = () => {
  return (
    <Container className="page-content">
      <VoterDetailsForm />
      <CandidatesSelection />
      <SubmitVote />
    </Container>
  );
};

export default PageContent;
