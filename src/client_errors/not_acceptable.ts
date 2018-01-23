import {BaseError, ErrorCodes} from '../index';

export class NotAcceptableError extends BaseError {

  constructor(message: string) {
    super(ErrorCodes.NotAcceptableError, message);
  }

}
