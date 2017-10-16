import expect from 'expect';
import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import HomePage from './index.js';

describe('The Home page', () => {
  const renderer = new ShallowRenderer();
  renderer.render(<HomePage />);
  const result = renderer.getRenderOutput();

  it('contains a div', () => {    
    expect(result.type).toEqual('div');
  });
});
