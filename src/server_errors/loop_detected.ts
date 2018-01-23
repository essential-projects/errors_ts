import {BaseError, ErrorCodes} from '../index';

export class LoopDetectedError extends BaseError {

  constructor(message: string) {
    super(ErrorCodes.LoopDetectedError, message);
  }

}
