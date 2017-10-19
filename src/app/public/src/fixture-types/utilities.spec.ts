import {
  DebugElement
} from '@angular/core';

import {
  SkyTestFixtureUtilities
} from './utilities';

describe('Utilities', () => {

  let bgEl: HTMLDivElement;

  beforeEach(() => {
    bgEl = document.createElement('div');

    document.body.appendChild(bgEl);

  });

  it('should provide a method for retrieving an element\'s background URL', () => {
    let imageUrl: string;

    imageUrl = SkyTestFixtureUtilities.getBackgroundImageUrl(bgEl);

    expect(imageUrl).toBeUndefined();

    bgEl.style.backgroundImage = 'url("https://example.com/bg/")';

    imageUrl = SkyTestFixtureUtilities.getBackgroundImageUrl(bgEl);

    expect(imageUrl).toBe('https://example.com/bg/');

    imageUrl = SkyTestFixtureUtilities.getBackgroundImageUrl(
      new DebugElement(bgEl, document.body, undefined)
    );

    expect(imageUrl).toBe('https://example.com/bg/');
  });

});
