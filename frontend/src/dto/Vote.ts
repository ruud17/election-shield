import { VoterDetails } from "../utils/interfaces";

export interface CreateVoteRequest {
    voterDetails: VoterDetails;
    selectedCandidate: string;
}