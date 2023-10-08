import { FC, useState, ChangeEvent } from "react";
import { Container } from "react-bootstrap";
import VoterDetailsForm from "./VoterDetailsForm";
import CandidatesSelection from "./CandidatesSelection";
import SubmitVote from "./SubmitVote";
import { VoterDetails } from "../utils/interfaces";
import { initialVoterDetailsData } from "../utils/defaultStates";
import { Candidates } from "../utils/enum";

const PageContent: FC = () => {
  const [voterDetails, setVoterDetails] = useState<VoterDetails>(
    initialVoterDetailsData
  );

  const [selectedCandidate, setSelectedCandidate] = useState<string>(
    Candidates.DonaldTrump
  );

  const [isTermsCheckboxConfirmed, setIsTermsCheckboxConfirmed] =
    useState<boolean>(false);

  const handleVoterDetailChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setVoterDetails({
      ...voterDetails,
      [name]: value,
    });
  };

  const handleCandidateSelectionChange = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    setSelectedCandidate(event.target.value);
  };

  const handleTermsOfServiceOptionConfirmation = () => {
    setIsTermsCheckboxConfirmed(!isTermsCheckboxConfirmed);
  };

  return (
    <Container className="page-content">
      <VoterDetailsForm
        voterDetails={voterDetails}
        handleInputChange={handleVoterDetailChange}
      />
      <CandidatesSelection
        selectedCandidate={selectedCandidate}
        handleOptionChange={handleCandidateSelectionChange}
      />
      <SubmitVote
        isTermsCheckboxConfirmed={isTermsCheckboxConfirmed}
        handleChange={handleTermsOfServiceOptionConfirmation}
      />
    </Container>
  );
};

export default PageContent;
