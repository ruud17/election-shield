import { VoterDetails } from "../utils/interfaces";

export interface CreateVoteRequest {
    voterDetails: VoterDetails;
    selectedCandidate: string;
}

export interface CreateVoteResponse {
    documentId: string;
    transactionId: string;
}