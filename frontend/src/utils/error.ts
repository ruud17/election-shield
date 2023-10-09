export const VOTE_API_ERROR = "An error occured when storing a document in Vault DB";
export const MISSING_API_KEY_ERROR = "API KEY is not defined";
export const HTTP_RESPONSE_ERROR = "HTTP ERROR! Response status: "

export class CustomError extends Error {
    public description?: unknown;

    constructor(message: string, description?: unknown ) {
      super(message);
      this.description = description
    }
}

export class ViewError {
  
    static makeNewErrorToDisplay(error: unknown): string {
      return `${error} ${JSON.stringify(error)}`
    }
}
  