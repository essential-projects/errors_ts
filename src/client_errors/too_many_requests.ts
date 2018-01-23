import {BaseError, ErrorCodes} from '../index';

export class TooManyRequestsError extends BaseError {

  constructor(message: string) {
    super(ErrorCodes.TooManyRequestsError, message);
  }

}
