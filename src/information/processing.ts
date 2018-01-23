import {BaseError, ErrorCodes} from '../index';

export class ProcessingError extends BaseError {

  constructor(message: string) {
    super(ErrorCodes.ProcessingError, message);
  }

}
