import expect from 'expect';
import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import MoviePage from './index.js';
import MovieDetails from '../../components/movie-details';

describe('The Movie page', () => {
  const renderer = new ShallowRenderer();
  renderer.render(<MoviePage params={{id: '15'}}/>);
  const result = renderer.getRenderOutput();

  it('contains a div', () => {    
    expect(result.type).toEqual('div');
  });

  it('contains a MovieDetails component', () => {    
    expect(result.props.children).toInclude(<MovieDetails id="15"/>);
  });
});
