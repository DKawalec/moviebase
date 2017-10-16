import expect from 'expect';
import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import Footer from './index';
import { FOOTER_TEXT } from '../../config/settings';

describe('The Footer component', () => {
  const renderer = new ShallowRenderer();
  renderer.render(<Footer text={FOOTER_TEXT} />);
  const result = renderer.getRenderOutput();

  it('has colorful background', () => {    
    expect(result.props.className).toEqual('undefined bg-info');
  });

  it('has proper content inside', () => {    
    expect(result.props.children.length).toEqual(FOOTER_TEXT.length);
  });
});
