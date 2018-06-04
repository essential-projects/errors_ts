import {
  AuthenticationTimeoutError,
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

import 'mocha';
import * as should from 'should';

let error: BaseError;

describe('client_errors', () => {
  describe('AuthenticationFailedError', () => {
    it(`should return ${ErrorCodes.AuthenticationTimeoutError}`, () => {
      error = new AuthenticationTimeoutError('AuthenticationTimeoutError');
      const result: number = error.code;
      should(result).be.equal(ErrorCodes.AuthenticationTimeoutError);
    });
  });

  describe('PreconditionFailedError', () => {
    it(`should return ${ErrorCodes.PreconditionFailedError}`, () => {
      error = new PreconditionFailedError('PreconditionFailedError');
      const result: number = error.code;
      should(result).be.equal(ErrorCodes.PreconditionFailedError);
    });
  });

  describe('PreconditionRequiredError', () => {
    it(`should return ${ErrorCodes.PreconditionRequiredError}`, () => {
      error = new PreconditionRequiredError('PreconditionRequiredError');
      const result: number = error.code;
      should(result).be.equal(ErrorCodes.PreconditionRequiredError);
    });
  });

  describe('ProxyAuthenticationRequiredError', () => {
    it(`should return ${ErrorCodes.ProxyAuthenticationRequiredError}`, () => {
      error = new ProxyAuthenticationRequiredError('ProxyAuthenticationRequiredError');
      const result: number = error.code;
      should(result).be.equal(ErrorCodes.ProxyAuthenticationRequiredError);
    });
  });

  describe('RequestHeaderTooLargeError', () => {
    it(`should return ${ErrorCodes.RequestHeaderTooLargeError}`, () => {
      error = new RequestHeaderTooLargeError('RequestHeaderTooLargeError');
      const result: number = error.code;
      should(result).be.equal(ErrorCodes.RequestHeaderTooLargeError);
    });
  });

  describe('RequestTimeoutError', () => {
    it(`should return ${ErrorCodes.RequestTimeoutError}`, () => {
      error = new RequestTimeoutError('RequestTimeoutError');
      const result: number = error.code;
      should(result).be.equal(ErrorCodes.RequestTimeoutError);
    });
  });

  describe('RequestTooLargeError', () => {
    it(`should return ${ErrorCodes.RequestTooLargeError}`, () => {
      error = new RequestTooLargeError('RequestTooLargeError');
      const result: number = error.code;
      should(result).be.equal(ErrorCodes.RequestTooLargeError);
    });
  });

  describe('RequestedRangeNotSatisfiableError', () => {
    it(`should return ${ErrorCodes.RequestedRangeNotSatisfiableError}`, () => {
      error = new RequestedRangeNotSatisfiableError('RequestedRangeNotSatisfiableError');
      const result: number = error.code;
      should(result).be.equal(ErrorCodes.RequestedRangeNotSatisfiableError);
    });
  });

  describe('TooManyRequestsError', () => {
    it(`should return ${ErrorCodes.TooManyRequestsError}`, () => {
      error = new TooManyRequestsError('TooManyRequestsError');
      const result: number = error.code;
      should(result).be.equal(ErrorCodes.TooManyRequestsError);
    });
  });

  describe('UnauthorizedError', () => {
    it(`should return ${ErrorCodes.UnauthorizedError}`, () => {
      error = new UnauthorizedError('UnauthorizedError');
      const result: number = error.code;
      should(result).be.equal(ErrorCodes.UnauthorizedError);
    });
  });

  describe('UnavaliableForLegalReasonsError', () => {
    it(`should return ${ErrorCodes.UnavaliableForLegalReasonsError}`, () => {
      error = new UnavaliableForLegalReasonsError('UnavaliableForLegalReasonsError');
      const result: number = error.code;
      should(result).be.equal(ErrorCodes.UnavaliableForLegalReasonsError);
    });
  });

  describe('UnprocessableEntityError', () => {
    it(`should return ${ErrorCodes.UnprocessableEntityError}`, () => {
      error = new UnprocessableEntityError('UnprocessableEntityError');
      const result: number = error.code;
      should(result).be.equal(ErrorCodes.UnprocessableEntityError);
    });
  });

  describe('UnsupportedMediaTypeError', () => {
    it(`should return ${ErrorCodes.UnsupportedMediaTypeError}`, () => {
      error = new UnsupportedMediaTypeError('UnsupportedMediaTypeError');
      const result: number = error.code;
      should(result).be.equal(ErrorCodes.UnsupportedMediaTypeError);
    });
  });

  describe('UpgradeRequiredError', () => {
    it(`should return ${ErrorCodes.UpgradeRequiredError}`, () => {
      error = new UpgradeRequiredError('UpgradeRequiredError');
      const result: number = error.code;
      should(result).be.equal(ErrorCodes.UpgradeRequiredError);
    });
  });

  describe('URLTooLongError', () => {
    it(`should return ${ErrorCodes.URLTooLongError}`, () => {
      error = new URLTooLongError('URLTooLongError');
      const result: number = error.code;
      should(result).be.equal(ErrorCodes.URLTooLongError);
    });
  });

  describe('Bad Request Error', () => {
    it(`should return ${ErrorCodes.BadRequestError}`, () => {
      error = new BadRequestError('BadRequestError');
      const result: number = error.code;
      should(result).be.equal(ErrorCodes.BadRequestError);
    });
  });

  describe('Conflict Error', () => {
    it(`should return ${ErrorCodes.ConflictError}`, () => {
      error = new ConflictError('ConflictError');
      const result: number = error.code;
      should(result).be.equal(ErrorCodes.ConflictError);
    });
  });

  describe('Expectation Failed Error', () => {
    it(`should return ${ErrorCodes.ExpectationFailedError}`, () => {
      error = new ExpectationFailedError('ExpectationFailedError');
      const result: number = error.code;
      should(result).be.equal(ErrorCodes.ExpectationFailedError);
    });
  });

  describe('Failed Dependency Error', () => {
    it(`should return ${ErrorCodes.FailedDependencyError}`, () => {
      error = new FailedDependencyError('FailedDependencyError');
      const result: number = error.code;
      should(result).be.equal(ErrorCodes.FailedDependencyError);
    });
  });

  describe('Forbidden Error', () => {
    it(`should return ${ErrorCodes.ForbiddenError}`, () => {
      error = new ForbiddenError('ForbiddenError');
      const result: number = error.code;
      should(result).be.equal(ErrorCodes.ForbiddenError);
    });
  });

  describe('Gone Error', () => {
    it(`should return ${ErrorCodes.GoneError}`, () => {
      error = new GoneError('GoneError');
      const result: number = error.code;
      should(result).be.equal(ErrorCodes.GoneError);
    });
  });

  describe('Im a Teapot Error', () => {
    it(`should return ${ErrorCodes.ImATeapotError}`, () => {
      error = new ImATeapotError('ImATeapotError');
      const result: number = error.code;
      should(result).be.equal(ErrorCodes.ImATeapotError);
    });
  });

  describe('Length Required Error', () => {
    it(`should return ${ErrorCodes.LengthRequiredError}`, () => {
      error = new LengthRequiredError('LengthRequiredError');
      const result: number = error.code;
      should(result).be.equal(ErrorCodes.LengthRequiredError);
    });
  });

  describe('Locked Error', () => {
    it(`should return ${ErrorCodes.LockedError}`, () => {
      error = new LockedError('LockedError');
      const result: number = error.code;
      should(result).be.equal(ErrorCodes.LockedError);
    });
  });

  describe('Method Not Allowed Error', () => {
    it(`should return ${ErrorCodes.MethodNotAllowedError}`, () => {
      error = new MethodNotAllowedError('MethodNotAllowedError');
      const result: number = error.code;
      should(result).be.equal(ErrorCodes.MethodNotAllowedError);
    });
  });

  describe('Misdirected Request Error', () => {
    it(`should return ${ErrorCodes.MisdirectedRequestError}`, () => {
      error = new MisdirectedRequestError('MisdirectedRequestError');
      const result: number = error.code;
      should(result).be.equal(ErrorCodes.MisdirectedRequestError);
    });
  });

  describe('Not Acceptable Error', () => {
    it(`should return ${ErrorCodes.NotAcceptableError}`, () => {
      error = new NotAcceptableError('NotAcceptableError');
      const result: number = error.code;
      should(result).be.equal(ErrorCodes.NotAcceptableError);
    });
  });

  describe('Not Found Error', () => {
    it(`should return ${ErrorCodes.NotFoundError}`, () => {
      error = new NotFoundError('NotFoundError');
      const result: number = error.code;
      should(result).be.equal(ErrorCodes.NotFoundError);
    });
  });

  describe('Payment Required Error', () => {
    it(`should return ${ErrorCodes.PaymentRequiredError}`, () => {
      error = new PaymentRequiredError('PaymentRequiredError');
      const result: number = error.code;
      should(result).be.equal(ErrorCodes.PaymentRequiredError);
    });
  });

  describe('Policy Not Fulfilled Error', () => {
    it(`should return ${ErrorCodes.PolicyNotFulfilledError}`, () => {
      error = new PolicyNotFulfilledError('PolicyNotFulfilledError');
      const result: number = error.code;
      should(result).be.equal(ErrorCodes.PolicyNotFulfilledError);
    });
  });

  describe('Precondition Failed Error', () => {
    it(`should return ${ErrorCodes.PreconditionFailedError}`, () => {
      error = new PreconditionFailedError('PreconditionFailedError');
      const result: number = error.code;
      should(result).be.equal(ErrorCodes.PreconditionFailedError);
    });
  });
});
