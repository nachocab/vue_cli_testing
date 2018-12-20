import { expect } from 'chai';
import { doSomething } from '@/helper';

describe('helper', function() {
  it('does something', function() {
    expect(doSomething()).to.eql(3);
  });
});
