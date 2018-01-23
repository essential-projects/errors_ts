import {BaseError, ErrorCodes} from '../index';

export class NetworkAuthenticationRequiredError extends BaseError {

  constructor(message: string) {
    super(ErrorCodes.NetworkAuthenticationRequiredError, message);
  }

}
