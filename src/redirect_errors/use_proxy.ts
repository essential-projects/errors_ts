import {BaseError, ErrorCodes} from '../index';

export class UseProxyError extends BaseError {

  constructor(message: string) {
    super(ErrorCodes.UseProxyError, message);
  }

}
