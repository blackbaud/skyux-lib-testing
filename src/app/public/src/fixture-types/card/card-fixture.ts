import {
  DebugElement
} from '@angular/core';

import {
  By
} from '@angular/platform-browser';

import {
  SkyTestFixtureUtilities
} from '../utilities';

export class SkyCardFixture {

  public get titleText(): string {
    return SkyTestFixtureUtilities.getText(
      this.debugEl.query(By.css('sky-card-title'))
    );
  }

  public get contentText(): string {
    return SkyTestFixtureUtilities.getText(
      this.debugEl.query(By.css('sky-card-content'))
    );
  }

  public get selectable(): boolean {
    return !!this.debugEl.query(By.css('.sky-card-check'));
  }

  constructor(private debugEl: DebugElement) { }

  public toggleSelected() {
    if (this.selectable) {
      let labelEl = this.debugEl.query(
        By.css('.sky-card-check label.sky-checkbox-wrapper')
      );

      labelEl.nativeElement.click();
    } else {
      throw new Error('The card is not selectable.');
    }
  }

}
