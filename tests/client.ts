import { expect } from 'chai';
import 'mocha';

import { BaseError,
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
        URLTooLongError } from '../src/index';

import { ErrorCodes } from '../src/error_codes';

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
errorCode = ErrorCodes.TooManyRequestsError;
describe('UnauthorizedError', () => {
  it(`should return ${ErrorCodes.UnauthorizedError}`, () => {
    const unauthorizedError: UnauthorizedError = new UnauthorizedError('unauthorizedError');
    const result: number = unauthorizedError.code;
    expect(result).to.equal(ErrorCodes.UnauthorizedError);
  });
});

error = new UnavaliableForLegalReasonsError('UnavaliableForLegalReasonsError');
errorCode = ErrorCodes.TooManyRequestsError;
describe('UnavaliableForLegalReasonsError', () => {
  it(`should return ${ErrorCodes.UnavaliableForLegalReasonsError}`, () => {
    const unavaliableForLegalReasonsError: UnavaliableForLegalReasonsError = new UnavaliableForLegalReasonsError('unavaliableForLegalReasonsError');
    const result: number = unavaliableForLegalReasonsError.code;
    expect(result).to.equal(ErrorCodes.UnavaliableForLegalReasonsError);
  });
});

error = new UnprocessableEntityError('UnprocessableEntityError');
errorCode = ErrorCodes.TooManyRequestsError;
describe('UnprocessableEntityError', () => {
  it(`should return ${ErrorCodes.UnprocessableEntityError}`, () => {
    const unprocessableEntityError: UnprocessableEntityError = new UnprocessableEntityError('UnprocessableEntityError');
    const result: number = unprocessableEntityError.code;
    expect(result).to.equal(ErrorCodes.UnprocessableEntityError);
  });
});

error = new UnsupportedMediaTypeError('UnsupportedMediaTypeError');
errorCode = ErrorCodes.UnsupportedMediaTypeError;
describe('UnsupportedMediaTypeError', () => {
  it(`should return ${ErrorCodes.UnsupportedMediaTypeError}`, () => {
    const unsupportedMediaTypeError: UnsupportedMediaTypeError = new UnsupportedMediaTypeError('unsupportedMediaTypeError');
    const result: number = unsupportedMediaTypeError.code;
    expect(result).to.equal(ErrorCodes.UnsupportedMediaTypeError);
  });
});

error = new UpgradeRequiredError('UpgradeRequiredError');
errorCode = ErrorCodes.UpgradeRequiredError;
describe('UpgradeRequiredError', () => {
  it(`should return ${ErrorCodes.UpgradeRequiredError}`, () => {
    const upgradeRequiredError: UpgradeRequiredError = new UpgradeRequiredError('upgradeRequiredError');
    const result: number = upgradeRequiredError.code;
    expect(result).to.equal(ErrorCodes.UpgradeRequiredError);
  });
});

error = new URLTooLongError('URLTooLongError');
errorCode = ErrorCodes.URLTooLongError;
describe('URLTooLongError', () => {
  it(`should return ${ErrorCodes.URLTooLongError}`, () => {
    const urlTooLongError: URLTooLongError = new URLTooLongError('urlTooLongError');
    const result: number = urlTooLongError.code;
    expect(result).to.equal(ErrorCodes.URLTooLongError);
  });
});
