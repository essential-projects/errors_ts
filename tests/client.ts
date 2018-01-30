import { expect } from 'chai';
import 'mocha';

import { ErrorCodes,
  BaseError,
  PreconditionFailedError,
  PreconditionRequiredError,
  ProxyAuthenticationRequiredError,
  RequestedRangeNotSatisfiableError,
  RequestHeaderTooLargeError,
  RequestTimeoutError,
  RequestTooLargeError,
  TooManyRequestsError,
  UnauthorizedError,
  UnavaliableForLegalReasonsError,
  UnprocessableEntityError,
  UnsupportedMediaTypeError,
  UpgradeRequiredError,
  URLTooLongError, 
  BadRequestError,
  ConflictError,
  ExpectationFailedError,
  FailedDependencyError,
  ForbiddenError,
  GoneError,
  ImATeapotError,
  LengthRequiredError,
  LockedError,
  MethodNotAllowedError,
  MisdirectedRequestError,
  NotAcceptableError,
  NotFoundError,
  PaymentRequiredError,
  PolicyNotFulfilledError} from '../src/index';

let error: BaseError;
let errorCode: number;

error = new PreconditionFailedError('PreconditionFailedError');
errorCode = ErrorCodes.PreconditionFailedError;
describe('PreconditionFailedError', () => {
  it(`should return ${errorCode}`, () => {
    const result: number = error.code;
    expect(result).to.equal(errorCode);
  });
});

error = new PreconditionRequiredError('PreconditionRequiredError');
errorCode = ErrorCodes.PreconditionRequiredError;
describe('PreconditionRequiredError', () => {
  it(`should return ${errorCode}`, () => {
    const result: number = error.code;
    expect(result).to.equal(errorCode);
  });
});

error = new ProxyAuthenticationRequiredError('ProxyAuthenticationRequiredError');
errorCode = ErrorCodes.ProxyAuthenticationRequiredError;
describe('ProxyAuthenticationRequiredError', () => {
  it(`should return ${errorCode}`, () => {
    const result: number = error.code;
    expect(result).to.equal(errorCode);
  });
});

error = new RequestHeaderTooLargeError('RequestHeaderTooLargeError');
errorCode = ErrorCodes.RequestHeaderTooLargeError;
describe('RequestHeaderTooLargeError', () => {
  it(`should return ${errorCode}`, () => {
    const result: number = error.code;
    expect(result).to.equal(errorCode);
  });
});

error = new RequestTimeoutError('RequestTimeoutError');
errorCode = ErrorCodes.RequestTimeoutError;
describe('RequestTimeoutError', () => {
  it(`should return ${errorCode}`, () => {
    const result: number = error.code;
    expect(result).to.equal(errorCode);
  });
});

error = new RequestTooLargeError('RequestTooLargeError');
errorCode = ErrorCodes.RequestTooLargeError;
describe('RequestTooLargeError', () => {
  it(`should return ${errorCode}`, () => {
    const result: number = error.code;
    expect(result).to.equal(errorCode);
  });
});

error = new RequestedRangeNotSatisfiableError('RequestedRangeNotSatisfiableError');
errorCode = ErrorCodes.RequestedRangeNotSatisfiableError;
describe('RequestedRangeNotSatisfiableError', () => {
  it(`should return ${errorCode}`, () => {
    const result: number = error.code;
    expect(result).to.equal(errorCode);
  });
});

error = new TooManyRequestsError('TooManyRequestsError');
errorCode = ErrorCodes.TooManyRequestsError;
describe('TooManyRequestsError', () => {
  it(`should return ${errorCode}`, () => {
    const result: number = error.code;
    expect(result).to.equal(errorCode);
  });
});

error = new UnauthorizedError('UnauthorizedError');
errorCode = ErrorCodes.UnauthorizedError;
describe('UnauthorizedError', () => {
  it(`should return ${errorCode}`, () => {
    const result: number = error.code;
    expect(result).to.equal(errorCode);
  });
});

error = new UnavaliableForLegalReasonsError('UnavaliableForLegalReasonsError');
errorCode = ErrorCodes.UnavaliableForLegalReasonsError;
describe('UnavaliableForLegalReasonsError', () => {
  it(`should return ${errorCode}`, () => {
    const result: number = error.code;
    expect(result).to.equal(errorCode);
  });
});

error = new UnprocessableEntityError('UnprocessableEntityError');
errorCode = ErrorCodes.UnprocessableEntityError;
describe('UnprocessableEntityError', () => {
  it(`should return ${errorCode}`, () => {
    const result: number = error.code;
    expect(result).to.equal(errorCode);
  });
});

error = new UnsupportedMediaTypeError('UnsupportedMediaTypeError');
errorCode = ErrorCodes.UnsupportedMediaTypeError;
describe('UnsupportedMediaTypeError', () => {
  it(`should return ${errorCode}`, () => {
    const result: number = error.code;
    expect(result).to.equal(errorCode);
  });
});

error = new UpgradeRequiredError('UpgradeRequiredError');
errorCode = ErrorCodes.UpgradeRequiredError;
describe('UpgradeRequiredError', () => {
  it(`should return ${errorCode}`, () => {
    const result: number = error.code;
    expect(result).to.equal(errorCode);
  });
});

error = new URLTooLongError('URLTooLongError');
errorCode = ErrorCodes.URLTooLongError;
describe('URLTooLongError', () => {
  it(`should return ${errorCode}`, () => {
    const result: number = error.code;
    expect(result).to.equal(errorCode);
  });
});


describe('Bad Request Error', () => {
  it('should return ' + ErrorCodes.BadRequestError, () => {
    const badRequestError = new BadRequestError('Errororororoor');
    const result: number = badRequestError.code;
    expect(result).to.equal(ErrorCodes.BadRequestError);
  });
});

describe('Conflict Error', () => {
  it('should return ' + ErrorCodes.ConflictError, () => {
    const conflictError = new ConflictError('Errororororoor');
    const result: number = conflictError.code;
    expect(result).to.equal(ErrorCodes.ConflictError);
  });
});

describe('Expectation Failed Error', () => {
  it('should return ' + ErrorCodes.ExpectationFailedError, () => {
    const expectationFailedError = new ExpectationFailedError('Errororororoor');
    const result: number = expectationFailedError.code;
    expect(result).to.equal(ErrorCodes.ExpectationFailedError);
  });
});

describe('Failed Dependency Error', () => {
  it('should return ' + ErrorCodes.FailedDependencyError, () => {
    const failedDependencyError = new FailedDependencyError('Errororororoor');
    const result: number = failedDependencyError.code;
    expect(result).to.equal(ErrorCodes.FailedDependencyError);
  });
});

describe('Forbidden Error', () => {
  it('should return ' + ErrorCodes.ForbiddenError, () => {
    const forbiddenError = new ForbiddenError('Errororororoor');
    const result: number = forbiddenError.code;
    expect(result).to.equal(ErrorCodes.ForbiddenError);
  });
});

describe('Gone Error', () => {
  it('should return ' + ErrorCodes.GoneError, () => {
    const goneError = new GoneError('Errororororoor');
    const result: number = goneError.code;
    expect(result).to.equal(ErrorCodes.GoneError);
  });
});

describe('Im a Teapot Error', () => {
  it('should return ' + ErrorCodes.ImATeapotError, () => {
    const imATeapotError = new ImATeapotError('Errororororoor');
    const result: number = imATeapotError.code;
    expect(result).to.equal(ErrorCodes.ImATeapotError);
  });
});

describe('Length Required Error', () => {
  it('should return ' + ErrorCodes.LengthRequiredError, () => {
    const lengthRequiredError = new LengthRequiredError('Errororororoor');
    const result: number = lengthRequiredError.code;
    expect(result).to.equal(ErrorCodes.LengthRequiredError);
  });
});

describe('Locked Error', () => {
  it('should return ' + ErrorCodes.LockedError, () => {
    const lockedError = new LockedError('Errororororoor');
    const result: number = lockedError.code;
    expect(result).to.equal(ErrorCodes.LockedError);
  });
});

describe('Method Not Allowed Error', () => {
  it('should return ' + ErrorCodes.MethodNotAllowedError, () => {
    const methodNotAllowedError = new MethodNotAllowedError('Errororororoor');
    const result: number = methodNotAllowedError.code;
    expect(result).to.equal(ErrorCodes.MethodNotAllowedError);
  });
});

describe('Misdirected Request Error', () => {
  it('should return ' + ErrorCodes.MisdirectedRequestError, () => {
    const misdirectedRequestError = new MisdirectedRequestError('Errororororoor');
    const result: number = misdirectedRequestError.code;
    expect(result).to.equal(ErrorCodes.MisdirectedRequestError);
  });
});

describe('Not Acceptable Error', () => {
  it('should return ' + ErrorCodes.NotAcceptableError, () => {
    const notAcceptableError = new NotAcceptableError('Errororororoor');
    const result: number = notAcceptableError.code;
    expect(result).to.equal(ErrorCodes.NotAcceptableError);
  });
});

describe('Not Found Error', () => {
  it('should return ' + ErrorCodes.NotFoundError, () => {
    const notFoundError = new NotFoundError('Errororororoor');
    const result: number = notFoundError.code;
    expect(result).to.equal(ErrorCodes.NotFoundError);
  });
});

describe('Payment Required Error', () => {
  it('should return ' + ErrorCodes.PaymentRequiredError, () => {
    const paymentRequiredError = new PaymentRequiredError('Errororororoor');
    const result: number = paymentRequiredError.code;
    expect(result).to.equal(ErrorCodes.PaymentRequiredError);
  });
});

describe('Policy Not Fulfilled Error', () => {
  it('should return ' + ErrorCodes.PolicyNotFulfilledError, () => {
    const policyNotFulfilledError = new PolicyNotFulfilledError('Errororororoor');
    const result: number = policyNotFulfilledError.code;
    expect(result).to.equal(ErrorCodes.PolicyNotFulfilledError);
  });
});

describe('Precondition Failed Error', () => {
  it('should return ' + ErrorCodes.PreconditionFailedError, () => {
    const preconditionFailedError = new PreconditionFailedError('Errororororoor');
    const result: number = preconditionFailedError.code;
    expect(result).to.equal(ErrorCodes.PreconditionFailedError);
  });
});

describe('Precondition Required Error', () => {
  it('should return ' + ErrorCodes.PreconditionRequiredError, () => {
    const preconditionRequiredError = new PreconditionRequiredError('Errororororoor');
    const result: number = preconditionRequiredError.code;
    expect(result).to.equal(ErrorCodes.PreconditionRequiredError);
  });
});