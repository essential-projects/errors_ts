import {BaseError, ErrorCodes} from '../index';

export class TemporaryRedirectError extends BaseError {

  constructor(message: string) {
    super(ErrorCodes.TemporaryRedirectError, message);
  }

}
