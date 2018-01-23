import {BaseError, ErrorCodes} from '../index';

export class GatewayTimeoutError extends BaseError {

  constructor(message: string) {
    super(ErrorCodes.GatewayTimeoutError, message);
  }

}
