import { CreateVoteRequest, CreateVoteResponse } from "../dto/Vote";
import { CustomError, HTTP_RESPONSE_ERROR, MISSING_API_KEY_ERROR } from "./error";

const API_KEY = process.env.REACT_APP_API_KEY;
const API_URL = process.env.REACT_APP_API_URL;

export const postVote = async (dataToPost: CreateVoteRequest): Promise<CreateVoteResponse> => {
    if (!API_KEY) {
      throw new CustomError(MISSING_API_KEY_ERROR)
    }
  
    try {
      const response = await fetch(`${API_URL}`, {
        method: 'PUT',
        headers: {
          'X-API-Key': `${API_KEY}`,
          'Content-Type':'application/json'
        },
        body: JSON.stringify(dataToPost),
      });
  
        if (!response.ok) {
          const errorMessage = await response.text();
          throw new CustomError(`${HTTP_RESPONSE_ERROR} = ${response.status}`, JSON.parse(errorMessage));
        }
  
      const data = await response.json();
      return data;
    } 
    catch (error) {
      throw(error);
    }
  }