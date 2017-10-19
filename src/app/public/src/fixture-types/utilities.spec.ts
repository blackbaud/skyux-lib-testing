import {
  DebugElement
} from '@angular/core';

import {
  SkyTestFixtureUtilities
} from './utilities';

describe('Utilities', () => {

  let bgEl: HTMLDivElement;
  let textEl: HTMLSpanElement;

  beforeEach(() => {
    bgEl = document.createElement('div');
    textEl = document.createElement('span');

    document.body.appendChild(bgEl);
    document.body.appendChild(textEl);
  });

  afterEach(() => {
    document.body.removeChild(bgEl);
    document.body.removeChild(textEl);
  });

  it('should provide a method for determining if an element is visible', () => {
    expect(SkyTestFixtureUtilities.isVisible(textEl)).toBe(true);

    textEl.style.display = 'none';

    expect(SkyTestFixtureUtilities.isVisible(textEl)).toBe(false);

    expect(SkyTestFixtureUtilities.isVisible(undefined)).toBeUndefined();
  });

  it('should provide a method for retrieving an element\'s inner text', () => {
    expect(SkyTestFixtureUtilities.getText(textEl)).toBe('');

    textEl.innerText = '    test   ';

    expect(SkyTestFixtureUtilities.getText(textEl)).toBe('test');

    expect(SkyTestFixtureUtilities.getText(undefined)).toBeUndefined();
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

    imageUrl = SkyTestFixtureUtilities.getBackgroundImageUrl(undefined);

    expect(imageUrl).toBeUndefined();
  });

});
