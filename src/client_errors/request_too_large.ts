import {BaseError, ErrorCodes} from '../index';

export class RequestTooLargeError extends BaseError {

  constructor(message: string) {
    super(ErrorCodes.RequestTooLargeError, message);
  }

}
