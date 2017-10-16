import expect from 'expect';
import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import SearchBox from './index.js';

describe('The SearchBox component', () => {
  const renderer = new ShallowRenderer();
  renderer.render(<SearchBox />);
  const result = renderer.getRenderOutput();

  it('is wrapped in a div', () => {    
    expect(result.type).toEqual('div');
  });

  it('is a Bootstrap form-group', () => {    
    expect(result.props.className).toEqual('form-group');
  });
});
