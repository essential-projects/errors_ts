import {BaseError, ErrorCodes} from '../index';

export class MovedError extends BaseError {

  constructor(message: string) {
    super(ErrorCodes.MovedError, message);
  }

}
