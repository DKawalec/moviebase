import expect from 'expect';
import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import Header from './index';

describe('The Header component', () => {
  const renderer = new ShallowRenderer();
  renderer.render(<Header />);
  const result = renderer.getRenderOutput();

  it('is wrapped in a div', () => {    
    expect(result.type).toEqual('div');
  });

  it('has the jumbotron class', () => {    
    expect(result.props.className).toEqual('jumbotron jumbotron-fluid undefined'); // no Sass processing!
  });
 
});
