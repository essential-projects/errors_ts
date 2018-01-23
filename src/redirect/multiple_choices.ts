import {BaseError, ErrorCodes} from '../index';

export class MultipleChoicesError extends BaseError {

  constructor(message: string) {
    super(ErrorCodes.MultipleChoicesError, message);
  }

}
