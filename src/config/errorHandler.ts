export enum httpStatusCode {
  NOT_FOUND = 404,
  FORBIDEN = 403,
  BAD_REQUEST = 401,
  INTERNAL_SERVER_ERROR = 500,
}
export default class httpError extends Error {
  httpStatusCode: httpStatusCode;
  constructor(message: string, httpStatusCode: httpStatusCode) {
    super(message);
    this.httpStatusCode = httpStatusCode;
  }
}
