import {BadGatewayError, isError, NotFoundError} from '../src/index';

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
