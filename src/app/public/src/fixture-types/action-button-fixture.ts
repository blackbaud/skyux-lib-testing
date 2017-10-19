import {
  DebugElement
} from '@angular/core';

import {
  By
} from '@angular/platform-browser';

import {
  SkyTestFixtureUtilities
} from './utilities';

export class SkyActionButtonFixture {

  public get headerText(): string {
    return SkyTestFixtureUtilities.getText(
      this.debugEl.query(By.css('.sky-action-button-header'))
    );
  }

  public get detialsText(): string {
    return SkyTestFixtureUtilities.getText(
      this.debugEl.query(By.css('sky-action-button-details'))
    );
  }

  public get iconType(): string {
    const classList = this.debugEl.query(
      By.css('.sky-action-button-icon')
    ).nativeElement.classList;

    for (let i = 0, n = classList.length; i < n; i++) {
      const cls = classList.item(i);

      if (cls.indexOf('fa-') === 0) {
        return cls.substr(3);
      }
    }
  }

  constructor(private debugEl: DebugElement) { }

  public actionClick() {
    this.debugEl.query(By.css('.sky-action-button')).triggerEventHandler('click', {});
  }

}
