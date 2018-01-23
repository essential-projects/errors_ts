import {BaseError, ErrorCodes} from '../index';

export class MisdirectedRequestError extends BaseError {

  constructor(message: string) {
    super(ErrorCodes.MisdirectedRequestError, message);
  }

}
