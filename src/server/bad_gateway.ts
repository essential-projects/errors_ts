import {BaseError, ErrorCodes} from '../index';

export class BadGatewayError extends BaseError {

  constructor(message: string) {
    super(ErrorCodes.BadGatewayError, message);
  }

}
