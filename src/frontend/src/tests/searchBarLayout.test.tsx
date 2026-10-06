import { renderToStaticMarkup } from 'react-dom/server';
import { describe, expect, it } from 'vitest';

import { SearchBarLayout } from '../components/SearchBar';

describe('SearchBar layout', () => {
  it('keeps opened selector controls inside one vertical header flex item', () => {
    const markup = renderToStaticMarkup(
      <div className="flex items-center">
        <SearchBarLayout className="flex-1">
          <div data-testid="search-field" />
          <div id="search-bar-controls-panel" data-testid="selector-controls" />
        </SearchBarLayout>
      </div>,
    );

    expect(markup).toContain('class="flex min-w-0 flex-col flex-1"');
    expect(markup).toContain(
      '<div class="flex min-w-0 flex-col flex-1"><div data-testid="search-field"></div><div id="search-bar-controls-panel" data-testid="selector-controls"></div></div>',
    );
  });
});
