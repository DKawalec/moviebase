import expect from 'expect';
import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import MovieDisplay from './index.js';
import SearchBox from '../search-box';
import { Link } from 'react-router';

describe('The MovieDisplay component', () => {
  const renderer = new ShallowRenderer();
  renderer.render(<MovieDisplay id="15" title="Citizen Kane" release="1941-04-30" overview="Newspaper magnate, Charles Foster Kane is taken from his mother as a boy and made the ward of a rich industrialist. As a result, every well-meaning, tyrannical or self-destructive move he makes for the rest of his life appears in some way to be a reaction to that deeply wounding event."/>);
  const result = renderer.getRenderOutput();

  it('is wrapped in a Link', () => {    
    expect(result.type).toEqual((<Link/>).type);
  });
});
