import {BaseError, ErrorCodes} from '../index';

export class ConflictError extends BaseError {

  constructor(message: string) {
    super(ErrorCodes.ConflictError, message);
  }

}
