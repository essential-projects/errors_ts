import {BaseError, ErrorCodes} from '../index';

export class AuthenticationTimeoutError extends BaseError {

  constructor(message: string) {
    super(ErrorCodes.AuthenticationTimeoutError, message);
  }

}
