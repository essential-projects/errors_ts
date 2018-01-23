import {BaseError, ErrorCodes} from '../index';

export class FoundError extends BaseError {

  constructor(message: string) {
    super(ErrorCodes.FoundError, message);
  }

}
