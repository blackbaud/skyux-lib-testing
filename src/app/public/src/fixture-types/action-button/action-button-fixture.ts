import {
  DebugElement
} from '@angular/core';

import {
  By
} from '@angular/platform-browser';

import {
  SkyTestFixtureUtilities
} from '../utilities';

/**
 * Allows interaction with a SKY UX action button component.
 */
export class SkyActionButtonFixture {

  /**
   * The action button's current header text.
   */
  public get headerText(): string {
    return SkyTestFixtureUtilities.getText(
      this.debugEl.query(By.css('.sky-action-button-header'))
    );
  }

  /**
   * The action button's current details text.
   */
  public get detailsText(): string {
    return SkyTestFixtureUtilities.getText(
      this.debugEl.query(By.css('sky-action-button-details'))
    );
  }

  /**
   * The action button's current icon type.
   */
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

  /**
   * Clicks the action button.
   */
  public actionClick() {
    this.debugEl.query(By.css('.sky-action-button')).triggerEventHandler('click', {});
  }

}
