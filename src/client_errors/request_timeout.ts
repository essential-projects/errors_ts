import {BaseError, ErrorCodes} from '../index';

export class RequestTimeoutError extends BaseError {

  constructor(message: string) {
    super(ErrorCodes.RequestTimeoutError, message);
  }

}
