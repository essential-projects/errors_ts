import { expect } from 'chai';
import 'mocha';

import { BaseError,
        FoundError,
        MovedError,
        MultipleChoicesError,
        NotModifiedError,
        PermanentRedirectError,
        SeeOtherError,
        TemporaryRedirectError,
        UseProxyError } from '../src/index';

import { ErrorCodes } from '../src/error_codes';

let error: BaseError;
let errorCode: number;

error = new FoundError('FoundError');
errorCode = ErrorCodes.FoundError;
describe('FoundError', () => {
  it(`should return ${errorCode}`, () => {
    const result: number = error.code;
    expect(result).to.equal(errorCode);
  });
});

error = new MovedError('MovedError');
errorCode = ErrorCodes.MovedError;
describe('MovedError', () => {
  it(`should return ${errorCode}`, () => {
    const result: number = error.code;
    expect(result).to.equal(errorCode);
  });
});

error = new MultipleChoicesError('MultipleChoicesError');
errorCode = ErrorCodes.MultipleChoicesError;
describe('MultipleChoicesError', () => {
  it(`should return ${errorCode}`, () => {
    const result: number = error.code;
    expect(result).to.equal(errorCode);
  });
});

error = new NotModifiedError('NotModifiedError');
errorCode = ErrorCodes.NotModifiedError;
describe('NotModifiedError', () => {
  it(`should return ${errorCode}`, () => {
    const result: number = error.code;
    expect(result).to.equal(errorCode);
  });
});

error = new PermanentRedirectError('PermanentRedirectError');
errorCode = ErrorCodes.PermanentRedirectError;
describe('PermanentRedirectError', () => {
  it(`should return ${errorCode}`, () => {
    const result: number = error.code;
    expect(result).to.equal(errorCode);
  });
});

error = new SeeOtherError('SeeOtherError');
errorCode = ErrorCodes.SeeOtherError;
describe('SeeOtherError', () => {
  it(`should return ${errorCode}`, () => {
    const result: number = error.code;
    expect(result).to.equal(errorCode);
  });
});

error = new TemporaryRedirectError('TemporaryRedirectError');
errorCode = ErrorCodes.TemporaryRedirectError;
describe('TemporaryRedirectError', () => {
  it(`should return ${errorCode}`, () => {
    const result: number = error.code;
    expect(result).to.equal(errorCode);
  });
});

error = new UseProxyError('UseProxyError');
errorCode = ErrorCodes.UseProxyError;
describe('UseProxyError', () => {
  it(`should return ${errorCode}`, () => {
    const result: number = error.code;
    expect(result).to.equal(errorCode);
  });
});
