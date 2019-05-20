import {BaseError} from '../base_error';
import {ErrorCodes} from '../error_codes';

export class PolicyNotFulfilledError extends BaseError {

  constructor(message: string) {
    super(ErrorCodes.PolicyNotFulfilledError, message);
  }

}
