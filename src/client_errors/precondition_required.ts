import {BaseError, ErrorCodes} from '../index';

export class PreconditionRequiredError extends BaseError {

  constructor(message: string) {
    super(ErrorCodes.PreconditionRequiredError, message);
  }

}
