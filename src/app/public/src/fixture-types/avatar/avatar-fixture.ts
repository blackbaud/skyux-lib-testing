import {
  DebugElement
} from '@angular/core';

import {
  By
} from '@angular/platform-browser';

import {
  SkyTestFixtureUtilities
} from '../utilities';

export class SkyAvatarFixture {

  public get initials(): string {
    const initialsEl = this.debugEl.query(By.css('.sky-avatar-initials'));

    if (SkyTestFixtureUtilities.isVisible(initialsEl)) {
      return SkyTestFixtureUtilities.getText(
        initialsEl.query(By.css('.sky-avatar-initials-inner'))
      );
    }

    return undefined;
  }

  public get imageUrl(): string {
    const imageEl = this.debugEl.query(By.css('.sky-avatar-image'));

    if (SkyTestFixtureUtilities.isVisible(imageEl)) {
      return SkyTestFixtureUtilities.getBackgroundImageUrl(imageEl);
    }

    return undefined;
  }

  constructor(private debugEl: DebugElement) { }

}
