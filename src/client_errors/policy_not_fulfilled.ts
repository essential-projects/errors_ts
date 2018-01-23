import {BaseError, ErrorCodes} from '../index';

export class PolicyNotFulfilledError extends BaseError {

  constructor(message: string) {
    super(ErrorCodes.PolicyNotFulfilledError, message);
  }

}
