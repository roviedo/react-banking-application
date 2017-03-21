import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';

import Bank from '../js/components/Bank.js';

var assert = require('assert');
describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal(-1, [1,2,3].indexOf(4));
    });
  });
});

describe('<Bank/>', function () {
  it('should have an image to display', function () {
    const wrapper = shallow(<Bank/>);
    expect(wrapper.find('img')).to.have.length(1);
  });
});
