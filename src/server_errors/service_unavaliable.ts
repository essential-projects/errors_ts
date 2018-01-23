import {BaseError, ErrorCodes} from '../index';

export class ServiceUnavaliableError extends BaseError {

  constructor(message: string) {
    super(ErrorCodes.ServiceUnavaliableError, message);
  }

}
