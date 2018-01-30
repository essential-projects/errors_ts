import { expect } from 'chai';
import 'mocha';

import { ErrorCodes,
        FoundError,
        MovedError,
        MultipleChoicesError,
        NotModifiedError,
        PermanentRedirectError,
        SeeOtherError,
        TemporaryRedirectError,
        UseProxyError } from '../src/index';

describe('FoundError', () => {
  it(`should return ${ErrorCodes.FoundError}`, () => {
    const foundError: FoundError = new FoundError('foundError');
    const result: number = foundError.code;
    expect(result).to.equal(ErrorCodes.FoundError);
  });
});

describe('MovedError', () => {
  it(`should return ${ErrorCodes.MovedError}`, () => {
    const movedError: MovedError = new MovedError('movedError');
    const result: number = movedError.code;
    expect(result).to.equal(ErrorCodes.MovedError);
  });
});

describe('MultipleChoicesError', () => {
  it(`should return ${ErrorCodes.MultipleChoicesError}`, () => {
    const multipleChoicesError: MultipleChoicesError = new MultipleChoicesError('multipleChoicesError');
    const result: number = multipleChoicesError.code;
    expect(result).to.equal(ErrorCodes.MultipleChoicesError);
  });
});

describe('NotModifiedError', () => {
  it(`should return ${ErrorCodes.NotModifiedError}`, () => {
    const notModifiedError: NotModifiedError = new NotModifiedError('notModifiedError');
    const result: number = notModifiedError.code;
    expect(result).to.equal(ErrorCodes.NotModifiedError);
  });
});

describe('PermanentRedirectError', () => {
  it(`should return ${ErrorCodes.PermanentRedirectError}`, () => {
    const permanentRedirectError: PermanentRedirectError = new PermanentRedirectError('permanentRedirectError');
    const result: number = permanentRedirectError.code;
    expect(result).to.equal(ErrorCodes.PermanentRedirectError);
  });
});

describe('SeeOtherError', () => {
  it(`should return ${ErrorCodes.SeeOtherError}`, () => {
    const seeOtherError: SeeOtherError = new SeeOtherError('seeOtherError');
    const result: number = seeOtherError.code;
    expect(result).to.equal(ErrorCodes.SeeOtherError);
  });
});

describe('TemporaryRedirectError', () => {
  it(`should return ${ErrorCodes.TemporaryRedirectError}`, () => {
    const temporaryRedirectError: TemporaryRedirectError = new TemporaryRedirectError('temporaryRedirectError');
    const result: number = temporaryRedirectError.code;
    expect(result).to.equal(ErrorCodes.TemporaryRedirectError);
  });
});

describe('UseProxyError', () => {
  it(`should return ${ErrorCodes.UseProxyError}`, () => {
    const useProxyError: UseProxyError = new UseProxyError('useProxyError');
    const result: number = useProxyError.code;
    expect(result).to.equal(ErrorCodes.UseProxyError);
  });
});
