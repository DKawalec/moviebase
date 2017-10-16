import expect from 'expect';
import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import App from './app.js';
import Header from '../components/header';
import Footer from '../components/footer';
import { FOOTER_TEXT } from '../config/settings';

describe('The App component', () => {
  const renderer = new ShallowRenderer();
  renderer.render(<App><div/></App>);
  const result = renderer.getRenderOutput();

  it('contains a header', () => {    
    expect(result.props.children).toInclude(<Header/>);
  });
  it('has content inside', () => {    
    expect(result.props.children.length).toEqual(3);
  });
  it('contains a footer', () => {    
    expect(result.props.children).toInclude(<Footer text={FOOTER_TEXT}/>);
  });
});
