import {BaseError, ErrorCodes} from '../index';

export class LockedError extends BaseError {

  constructor(message: string) {
    super(ErrorCodes.LockedError, message);
  }

}
