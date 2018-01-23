import {BaseError, ErrorCodes} from '../index';

export class LengthRequiredError extends BaseError {

  constructor(message: string) {
    super(ErrorCodes.LengthRequiredError, message);
  }

}
