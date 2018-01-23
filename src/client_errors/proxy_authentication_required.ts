import {BaseError, ErrorCodes} from '../index';

export class ProxyAuthenticationRequiredError extends BaseError {

  constructor(message: string) {
    super(ErrorCodes.ProxyAuthenticationRequiredError, message);
  }

}
