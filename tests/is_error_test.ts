import {isError, BadGatewayError, NotFoundError} from '../src/index';

import {expect} from 'chai';
import 'mocha';

const badGatewayError: Error = <any> new BadGatewayError('test');

describe('Bad Gateway Error', () => {
  it('should return true', () => {
    const badGate =  isError(badGatewayError, BadGatewayError);
    const result: any = badGate;
    expect(result).to.equal(true);
  });
});

describe('Bad Gateway Error', () => {
  it('should return false', () => {
    const badGate =  isError(badGatewayError, NotFoundError);
    const result: any = badGate;
    expect(result).to.equal(false);
  });
});