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

import 'mocha';
import * as should from 'should';

let error: BaseError;

describe('client_errors', () => {
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
      if (result !== ErrorCodes.ConflictError) {
        throw new Error(`Expected error Code ${ErrorCodes.ConflictError} but was ${result}.`);
      }
    });
  });

  describe('Expectation Failed Error', () => {
    it(`should return ${ErrorCodes.ExpectationFailedError}`, () => {
      error = new ExpectationFailedError('ExpectationFailedError');
      const result: number = error.code;
      if (result !== ErrorCodes.ExpectationFailedError) {
        throw new Error(`Expected error Code ${ErrorCodes.ExpectationFailedError} but was ${result}.`);
      }
    });
  });

  describe('Failed Dependency Error', () => {
    it(`should return ${ErrorCodes.FailedDependencyError}`, () => {
      error = new FailedDependencyError('FailedDependencyError');
      const result: number = error.code;
      if (result !== ErrorCodes.FailedDependencyError) {
        throw new Error(`Expected error Code ${ErrorCodes.FailedDependencyError} but was ${result}.`);
      }
    });
  });

  describe('Forbidden Error', () => {
    it(`should return ${ErrorCodes.ForbiddenError}`, () => {
      error = new ForbiddenError('ForbiddenError');
      const result: number = error.code;
      if (result !== ErrorCodes.ForbiddenError) {
        throw new Error(`Expected error Code ${ErrorCodes.ForbiddenError} but was ${result}.`);
      }
    });
  });

  describe('Gone Error', () => {
    it(`should return ${ErrorCodes.GoneError}`, () => {
      error = new GoneError('GoneError');
      const result: number = error.code;
      if (result !== ErrorCodes.GoneError) {
        throw new Error(`Expected error Code ${ErrorCodes.GoneError} but was ${result}.`);
      }
    });
  });

  describe('Im a Teapot Error', () => {
    it(`should return ${ErrorCodes.ImATeapotError}`, () => {
      error = new ImATeapotError('ImATeapotError');
      const result: number = error.code;
      if (result !== ErrorCodes.ImATeapotError) {
        throw new Error(`Expected error Code ${ErrorCodes.ImATeapotError} but was ${result}.`);
      }
    });
  });

  describe('Length Required Error', () => {
    it(`should return ${ErrorCodes.LengthRequiredError}`, () => {
      error = new LengthRequiredError('LengthRequiredError');
      const result: number = error.code;
      if (result !== ErrorCodes.LengthRequiredError) {
        throw new Error(`Expected error Code ${ErrorCodes.LengthRequiredError} but was ${result}.`);
      }
    });
  });

  describe('Locked Error', () => {
    it(`should return ${ErrorCodes.LockedError}`, () => {
      error = new LockedError('LockedError');
      const result: number = error.code;
      if (result !== ErrorCodes.LockedError) {
        throw new Error(`Expected error Code ${ErrorCodes.LockedError} but was ${result}.`);
      }
    });
  });

  describe('Method Not Allowed Error', () => {
    it(`should return ${ErrorCodes.MethodNotAllowedError}`, () => {
      error = new MethodNotAllowedError('MethodNotAllowedError');
      const result: number = error.code;
      if (result !== ErrorCodes.MethodNotAllowedError) {
        throw new Error(`Expected error Code ${ErrorCodes.MethodNotAllowedError} but was ${result}.`);
      }
    });
  });

  describe('Misdirected Request Error', () => {
    it(`should return ${ErrorCodes.MisdirectedRequestError}`, () => {
      error = new MisdirectedRequestError('MisdirectedRequestError');
      const result: number = error.code;
      if (result !== ErrorCodes.MisdirectedRequestError) {
        throw new Error(`Expected error Code ${ErrorCodes.MisdirectedRequestError} but was ${result}.`);
      }
    });
  });

  describe('Not Acceptable Error', () => {
    it(`should return ${ErrorCodes.NotAcceptableError}`, () => {
      error = new NotAcceptableError('NotAcceptableError');
      const result: number = error.code;
      if (result !== ErrorCodes.NotAcceptableError) {
        throw new Error(`Expected error Code ${ErrorCodes.NotAcceptableError} but was ${result}.`);
      }
    });
  });

  describe('Not Found Error', () => {
    it(`should return ${ErrorCodes.NotFoundError}`, () => {
      error = new NotFoundError('NotFoundError');
      const result: number = error.code;
      if (result !== ErrorCodes.NotFoundError) {
        throw new Error(`Expected error Code ${ErrorCodes.NotFoundError} but was ${result}.`);
      }
    });
  });

  describe('Payment Required Error', () => {
    it(`should return ${ErrorCodes.PaymentRequiredError}`, () => {
      error = new PaymentRequiredError('PaymentRequiredError');
      const result: number = error.code;
      if (result !== ErrorCodes.PaymentRequiredError) {
        throw new Error(`Expected error Code ${ErrorCodes.PaymentRequiredError} but was ${result}.`);
      }
    });
  });

  describe('Policy Not Fulfilled Error', () => {
    it(`should return ${ErrorCodes.PolicyNotFulfilledError}`, () => {
      error = new PolicyNotFulfilledError('PolicyNotFulfilledError');
      const result: number = error.code;
      if (result !== ErrorCodes.PolicyNotFulfilledError) {
        throw new Error(`Expected error Code ${ErrorCodes.PolicyNotFulfilledError} but was ${result}.`);
      }
    });
  });

  describe('Precondition Failed Error', () => {
    it(`should return ${ErrorCodes.PreconditionFailedError}`, () => {
      error = new PreconditionFailedError('PreconditionFailedError');
      const result: number = error.code;
      if (result !== ErrorCodes.PreconditionFailedError) {
        throw new Error(`Expected error Code ${ErrorCodes.PreconditionFailedError} but was ${result}.`);
      }
    });
  });
});
