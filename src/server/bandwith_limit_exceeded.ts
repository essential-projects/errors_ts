import {BaseError, ErrorCodes} from '../index';

export class BandwithLimitExceededError extends BaseError {

  constructor(message: string) {
    super(ErrorCodes.BandwithLimitExceededError, message);
  }

}
