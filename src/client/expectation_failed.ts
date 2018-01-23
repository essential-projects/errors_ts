import {BaseError, ErrorCodes} from '../index';

export class ExpectationFailedError extends BaseError {

  constructor(message: string) {
    super(ErrorCodes.ExpectationFailedError, message);
  }

}
