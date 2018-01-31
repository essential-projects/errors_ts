import 'mocha';

import {
  BaseError,
  FoundError,
  MovedError,
  MultipleChoicesError,
  NotModifiedError,
  PermanentRedirectError,
  SeeOtherError,
  TemporaryRedirectError,
  UseProxyError,
} from '../src/index';

import {ErrorCodes} from '../src/error_codes';

let error: BaseError;
describe('FoundError', () => {
  it(`should return ${ErrorCodes.FoundError}`, () => {
    error = new FoundError('FoundError');
    const result: number = error.code;
    if (result !== ErrorCodes.FoundError) {
      throw new Error(`Expected error Code ${ErrorCodes.FoundError} but was ${result}.`);
    }
  });
});

describe('MovedError', () => {
  it(`should return ${ErrorCodes.MovedError}`, () => {
    error = new MovedError('MovedError');
    const result: number = error.code;
    if (result !== ErrorCodes.MovedError) {
      throw new Error(`Expected error Code ${ErrorCodes.MovedError} but was ${result}.`);
    }
  });
});

describe('MultipleChoicesError', () => {
  it(`should return ${ErrorCodes.MultipleChoicesError}`, () => {
    error = new MultipleChoicesError('MultipleChoicesError');
    const result: number = error.code;
    if (result !== ErrorCodes.MultipleChoicesError) {
      throw new Error(`Expected error Code ${ErrorCodes.MultipleChoicesError} but was ${result}.`);
    }
  });
});

describe('NotModifiedError', () => {
  it(`should return ${ErrorCodes.NotModifiedError}`, () => {
    error = new NotModifiedError('NotModifiedError');
    const result: number = error.code;
    if (result !== ErrorCodes.NotModifiedError) {
      throw new Error(`Expected error Code ${ErrorCodes.NotModifiedError} but was ${result}.`);
    }
  });
});

describe('PermanentRedirectError', () => {
  it(`should return ${ErrorCodes.PermanentRedirectError}`, () => {
    error = new PermanentRedirectError('PermanentRedirectError');
    const result: number = error.code;
    if (result !== ErrorCodes.PermanentRedirectError) {
      throw new Error(`Expected error Code ${ErrorCodes.PermanentRedirectError} but was ${result}.`);
    }
  });
});

describe('SeeOtherError', () => {
  it(`should return ${ErrorCodes.SeeOtherError}`, () => {
    error = new SeeOtherError('SeeOtherError');
    const result: number = error.code;
    if (result !== ErrorCodes.SeeOtherError) {
      throw new Error(`Expected error Code ${ErrorCodes.SeeOtherError} but was ${result}.`);
    }
  });
});

describe('TemporaryRedirectError', () => {
  it(`should return ${ErrorCodes.TemporaryRedirectError}`, () => {
    error = new TemporaryRedirectError('TemporaryRedirectError');
    const result: number = error.code;
    if (result !== ErrorCodes.TemporaryRedirectError) {
      throw new Error(`Expected error Code ${ErrorCodes.TemporaryRedirectError} but was ${result}.`);
    }
  });
});

describe('UseProxyError', () => {
  it(`should return ${ErrorCodes.UseProxyError}`, () => {
    error = new UseProxyError('UseProxyError');
    const result: number = error.code;
    if (result !== ErrorCodes.UseProxyError) {
      throw new Error(`Expected error Code ${ErrorCodes.UseProxyError} but was ${result}.`);
    }
  });
});
