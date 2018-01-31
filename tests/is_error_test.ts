import {BadGatewayError, isError, isEssentialProjectsError, NotFoundError} from '../src/index';

import 'mocha';

const badGatewayError: Error = <any> new BadGatewayError('test');

describe('Bad Gateway Error true', () => {
  it('should return true', () => {
    const badGate: boolean = isError(badGatewayError, BadGatewayError);
    const result: boolean = badGate;
    if (result !== true) {
      throw new Error(`Expected return to be true but was ${result}.`);
    }
  });
});

describe('Bad Gateway Error false', () => {
  it('should return false', () => {
    const badGate: boolean = isError(badGatewayError, NotFoundError);
    const result: boolean = badGate;
    if (result !== false) {
      throw new Error(`Expected return to be false but was ${result}.`);
    }
  });
});

describe('IsEssentialProjectsError true', () => {
  it('should return true', () => {
    const badGate: boolean = isEssentialProjectsError(badGatewayError);
    const result: boolean = badGate;
    if (result !== true) {
      throw new Error(`Expected return to be true but was ${result}.`);
    }
  });
});

describe('IsEssentialProjectsError false', () => {
  it('should return false', () => {
    const falseError: boolean = isEssentialProjectsError('test');
    const result: boolean = falseError;
    if (result !== false) {
      throw new Error(`Expected return to be false but was ${result}.`);
    }
  });
});
