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

describe('client_errors', () => {
  describe('PreconditionFailedError', () => {
    it(`should return ${ErrorCodes.PreconditionFailedError}`, () => {
      error = new PreconditionFailedError('PreconditionFailedError');
      const result: number = error.code;
      if (result !== ErrorCodes.PreconditionFailedError) {
        throw new Error(`Expected error Code ${ErrorCodes.PreconditionFailedError} but was ${result}.`);
      }
    });
  });

  describe('PreconditionRequiredError', () => {
    it(`should return ${ErrorCodes.PreconditionRequiredError}`, () => {
      error = new PreconditionRequiredError('PreconditionRequiredError');
      const result: number = error.code;
      if (result !== ErrorCodes.PreconditionRequiredError) {
        throw new Error(`Expected error Code ${ErrorCodes.PreconditionRequiredError} but was ${result}.`);
      }
    });
  });

  describe('ProxyAuthenticationRequiredError', () => {
    it(`should return ${ErrorCodes.ProxyAuthenticationRequiredError}`, () => {
      error = new ProxyAuthenticationRequiredError('ProxyAuthenticationRequiredError');
      const result: number = error.code;
      if (result !== ErrorCodes.ProxyAuthenticationRequiredError) {
        throw new Error(`Expected error Code ${ErrorCodes.ProxyAuthenticationRequiredError} but was ${result}.`);
      }
    });
  });

  describe('RequestHeaderTooLargeError', () => {
    it(`should return ${ErrorCodes.RequestHeaderTooLargeError}`, () => {
      error = new RequestHeaderTooLargeError('RequestHeaderTooLargeError');
      const result: number = error.code;
      if (result !== ErrorCodes.RequestHeaderTooLargeError) {
        throw new Error(`Expected error Code ${ErrorCodes.RequestHeaderTooLargeError} but was ${result}.`);
      }
    });
  });

  describe('RequestTimeoutError', () => {
    it(`should return ${ErrorCodes.RequestTimeoutError}`, () => {
      error = new RequestTimeoutError('RequestTimeoutError');
      const result: number = error.code;
      if (result !== ErrorCodes.RequestTimeoutError) {
        throw new Error(`Expected error Code ${ErrorCodes.RequestTimeoutError} but was ${result}.`);
      }
    });
  });

  describe('RequestTooLargeError', () => {
    it(`should return ${ErrorCodes.RequestTooLargeError}`, () => {
      error = new RequestTooLargeError('RequestTooLargeError');
      const result: number = error.code;
      if (result !== ErrorCodes.RequestTooLargeError) {
        throw new Error(`Expected error Code ${ErrorCodes.RequestTooLargeError} but was ${result}.`);
      }
    });
  });

  describe('RequestedRangeNotSatisfiableError', () => {
    it(`should return ${ErrorCodes.RequestedRangeNotSatisfiableError}`, () => {
      error = new RequestedRangeNotSatisfiableError('RequestedRangeNotSatisfiableError');
      const result: number = error.code;
      if (result !== ErrorCodes.RequestedRangeNotSatisfiableError) {
        throw new Error(`Expected error Code ${ErrorCodes.RequestedRangeNotSatisfiableError} but was ${result}.`);
      }
    });
  });

  describe('TooManyRequestsError', () => {
    it(`should return ${ErrorCodes.TooManyRequestsError}`, () => {
      error = new TooManyRequestsError('TooManyRequestsError');
      const result: number = error.code;
      if (result !== ErrorCodes.TooManyRequestsError) {
        throw new Error(`Expected error Code ${ErrorCodes.TooManyRequestsError} but was ${result}.`);
      }
    });
  });

  describe('UnauthorizedError', () => {
    it(`should return ${ErrorCodes.UnauthorizedError}`, () => {
      error = new UnauthorizedError('UnauthorizedError');
      const result: number = error.code;
      if (result !== ErrorCodes.UnauthorizedError) {
        throw new Error(`Expected error Code ${ErrorCodes.UnauthorizedError} but was ${result}.`);
      }
    });
  });

  describe('UnavaliableForLegalReasonsError', () => {
    it(`should return ${ErrorCodes.UnavaliableForLegalReasonsError}`, () => {
      error = new UnavaliableForLegalReasonsError('UnavaliableForLegalReasonsError');
      const result: number = error.code;
      if (result !== ErrorCodes.UnavaliableForLegalReasonsError) {
        throw new Error(`Expected error Code ${ErrorCodes.UnavaliableForLegalReasonsError} but was ${result}.`);
      }
    });
  });

  describe('UnprocessableEntityError', () => {
    it(`should return ${ErrorCodes.UnprocessableEntityError}`, () => {
      error = new UnprocessableEntityError('UnprocessableEntityError');
      const result: number = error.code;
      if (result !== ErrorCodes.UnprocessableEntityError) {
        throw new Error(`Expected error Code ${ErrorCodes.UnprocessableEntityError} but was ${result}.`);
    }
    });
  });

  describe('UnsupportedMediaTypeError', () => {
    it(`should return ${ErrorCodes.UnsupportedMediaTypeError}`, () => {
      error = new UnsupportedMediaTypeError('UnsupportedMediaTypeError');
      const result: number = error.code;
      if (result !== ErrorCodes.UnsupportedMediaTypeError) {
        throw new Error(`Expected error Code ${ErrorCodes.UnsupportedMediaTypeError} but was ${result}.`);
      }
    });
  });

  describe('UpgradeRequiredError', () => {
    it(`should return ${ErrorCodes.UpgradeRequiredError}`, () => {
      error = new UpgradeRequiredError('UpgradeRequiredError');
      const result: number = error.code;
      if (result !== ErrorCodes.UpgradeRequiredError) {
        throw new Error(`Expected error Code ${ErrorCodes.UpgradeRequiredError} but was ${result}.`);
      }
    });
  });

  describe('URLTooLongError', () => {
    it(`should return ${ErrorCodes.URLTooLongError}`, () => {
      error = new URLTooLongError('URLTooLongError');
      const result: number = error.code;
      if (result !== ErrorCodes.URLTooLongError) {
        throw new Error(`Expected error Code ${ErrorCodes.URLTooLongError} but was ${result}.`);
      }
    });
  });

  describe('Bad Request Error', () => {
    it(`should return ${ErrorCodes.BadRequestError}`, () => {
      error = new BadRequestError('BadRequestError');
      const result: number = error.code;
      if (result !== ErrorCodes.BadRequestError) {
        throw new Error(`Expected error Code ${ErrorCodes.BadRequestError} but was ${result}.`);
      }
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
