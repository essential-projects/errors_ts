import {BaseError, ErrorCodes} from '../index';

export class GoneError extends BaseError {

  constructor(message: string) {
    super(ErrorCodes.GoneError, message);
  }

}
