import {expect} from 'chai';
import 'mocha';

import {
  BadRequestError,
  BaseError,
  ConflictError,
  ErrorCodes,
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
  PolicyNotFulfilledError,
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
} from '../src/index';

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

error = new BadRequestError('BadRequestError');
errorCode = ErrorCodes.BadRequestError;
describe('Bad Request Error', () => {
  it(`should return ${errorCode}`, () => {
    const result: number = error.code;
    expect(result).to.equal(errorCode);
  });
});

error = new ConflictError('ConflictError');
errorCode = ErrorCodes.ConflictError;
describe('Conflict Error', () => {
  it(`should return ${errorCode}`, () => {
    const result: number = error.code;
    expect(result).to.equal(errorCode);
  });
});

error = new ExpectationFailedError('ExpectationFailedError');
errorCode = ErrorCodes.ExpectationFailedError;
describe('Expectation Failed Error', () => {
  it(`should return ${errorCode}`, () => {
    const result: number = error.code;
    expect(result).to.equal(errorCode);
  });
});

error = new FailedDependencyError('FailedDependencyError');
errorCode = ErrorCodes.FailedDependencyError;
describe('Failed Dependency Error', () => {
  it(`should return ${errorCode}`, () => {
    const result: number = error.code;
    expect(result).to.equal(errorCode);
  });
});

error = new ForbiddenError('ForbiddenError');
errorCode = ErrorCodes.ForbiddenError;
describe('Forbidden Error', () => {
  it(`should return ${errorCode}`, () => {
    const result: number = error.code;
    expect(result).to.equal(errorCode);
  });
});

error = new GoneError('GoneError');
errorCode = ErrorCodes.GoneError;
describe('Gone Error', () => {
  it(`should return ${errorCode}`, () => {
    const result: number = error.code;
    expect(result).to.equal(errorCode);
  });
});

error = new ImATeapotError('ImATeapotError');
errorCode = ErrorCodes.ImATeapotError;
describe('Im a Teapot Error', () => {
  it(`should return ${errorCode}`, () => {
    const result: number = error.code;
    expect(result).to.equal(errorCode);
  });
});

error = new LengthRequiredError('LengthRequiredError');
errorCode = ErrorCodes.LengthRequiredError;
describe('Length Required Error', () => {
  it(`should return ${errorCode}`, () => {
    const result: number = error.code;
    expect(result).to.equal(errorCode);
  });
});

error = new LockedError('LockedError');
errorCode = ErrorCodes.LockedError;
describe('Locked Error', () => {
  it(`should return ${errorCode}`, () => {
    const result: number = error.code;
    expect(result).to.equal(errorCode);
  });
});

error = new MethodNotAllowedError('MethodNotAllowedError');
errorCode = ErrorCodes.MethodNotAllowedError;
describe('Method Not Allowed Error', () => {
  it(`should return ${errorCode}`, () => {
    const result: number = error.code;
    expect(result).to.equal(errorCode);
  });
});

error = new MisdirectedRequestError('MisdirectedRequestError');
errorCode = ErrorCodes.MisdirectedRequestError;
describe('Misdirected Request Error', () => {
  it(`should return ${errorCode}`, () => {
    const result: number = error.code;
    expect(result).to.equal(errorCode);
  });
});

error = new NotAcceptableError('NotAcceptableError');
errorCode = ErrorCodes.NotAcceptableError;
describe('Not Acceptable Error', () => {
  it(`should return ${errorCode}`, () => {
    const result: number = error.code;
    expect(result).to.equal(errorCode);
  });
});

error = new NotFoundError('NotFoundError');
errorCode = ErrorCodes.NotFoundError;
describe('Not Found Error', () => {
  it(`should return ${errorCode}`, () => {
    const result: number = error.code;
    expect(result).to.equal(errorCode);
  });
});

error = new PaymentRequiredError('PaymentRequiredError');
errorCode = ErrorCodes.PaymentRequiredError;
describe('Payment Required Error', () => {
  it(`should return ${errorCode}`, () => {
    const result: number = error.code;
    expect(result).to.equal(errorCode);
  });
});

error = new PolicyNotFulfilledError('PolicyNotFulfilledError');
errorCode = ErrorCodes.PolicyNotFulfilledError;
describe('Policy Not Fulfilled Error', () => {
  it(`should return ${errorCode}`, () => {
    const result: number = error.code;
    expect(result).to.equal(errorCode);
  });
});

error = new PreconditionFailedError('PreconditionFailedError');
errorCode = ErrorCodes.PreconditionFailedError;
describe('Precondition Failed Error', () => {
  it(`should return ${errorCode}`, () => {
    const result: number = error.code;
    expect(result).to.equal(errorCode);
  });
});
