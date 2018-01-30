import {BadGatewayError, isError, isEssentialProjectsError, NotFoundError} from '../src/index';

import {expect} from 'chai';
import 'mocha';

const badGatewayError: Error = <any> new BadGatewayError('test');

describe('Bad Gateway Error true', () => {
  it('should return true', () => {
    const badGate: boolean = isError(badGatewayError, BadGatewayError);
    const result: boolean = badGate;
    expect(result).to.equal(true);
  });
});

describe('Bad Gateway Error false', () => {
  it('should return false', () => {
    const badGate: boolean = isError(badGatewayError, NotFoundError);
    const result: boolean = badGate;
    expect(result).to.equal(false);
  });
});

describe('IsEssentialProjectsError true', () => {
  it('should return true', () => {
    const badGate: boolean = isEssentialProjectsError(badGatewayError);
    const result: boolean = badGate;
    expect(result).to.equal(true);
  });
});

describe('IsEssentialProjectsError false', () => {
  it('should return false', () => {
    const falseError: boolean = isEssentialProjectsError('test');
    const result: boolean = falseError;
    expect(result).to.equal(false);
  });
});
