import {BaseError, ErrorCodes} from '../index';

export class PreconditionFailedError extends BaseError {

  constructor(message: string) {
    super(ErrorCodes.PreconditionFailedError, message);
  }

}
