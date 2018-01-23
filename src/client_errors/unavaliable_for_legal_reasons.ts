import {BaseError, ErrorCodes} from '../index';

export class UnavaliableForLegalReasonsError extends BaseError {

  constructor(message: string) {
    super(ErrorCodes.UnavaliableForLegalReasonsError, message);
  }

}
