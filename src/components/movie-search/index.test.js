import expect from 'expect';
import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import MovieSearch from './index.js';
import SearchBox from '../search-box';

describe('The MovieSearch component', () => {
  const renderer = new ShallowRenderer();
  renderer.render(<MovieSearch />);
  const result = renderer.getRenderOutput();

  it('is wrapped in a div', () => {    
    expect(result.type).toEqual('div');
  });

  it('contains a SearchBox', () => {
    expect(result.props.children[0].type).toEqual((<SearchBox/>).type);
  });

  it('contains an encouragement prompt', () => {
    expect(result.props.children).toInclude(<div className="center-block"><h3> Nothing to show here... Get searching! </h3></div>);
  });
});
