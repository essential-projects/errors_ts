import {BaseError, ErrorCodes} from '../index';

export class RequestedRangeNotSatisfiableError extends BaseError {

  constructor(message: string) {
    super(ErrorCodes.RequestedRangeNotSatisfiableError, message);
  }

}
