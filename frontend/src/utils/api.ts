import { CreateVoteRequest } from "../dto/Vote";

const API_KEY = process.env.REACT_APP_API_KEY;
const API_URL = process.env.REACT_API_URL;

export const postVote = async (dataToPost: CreateVoteRequest): Promise<any> => {
    if (!API_KEY) {
      console.error('API KEY is not defined');
      throw new Error('API KEY is not defined')
    }
  
    try {
      const response = await fetch(`${API_URL}`, {
        method: 'POST',
        headers: {
          'X-API-Key': `${API_KEY}`
        },
        body: JSON.stringify(dataToPost), // Convert data to JSON string
      });
  
      if (!response.ok) {
        throw new Error('API request failed');
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error while saving record into the DB', error);
      throw error;
    }
  }