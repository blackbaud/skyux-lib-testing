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
 * Allows interaction with a SKY UX page summary component.
 */
export class SkyPageSummaryFixture {

  /**
   * The page summary's current title text.
   */
  public get titleText(): string {
    return SkyTestFixtureUtilities.getText(
      this.debugEl.query(By.css('sky-page-summary-title .sky-page-summary-title'))
    );
  }

  /**
   * The page summary's current subtitle text.
   */
  public get subtitleText(): string {
    return SkyTestFixtureUtilities.getText(
      this.debugEl.query(By.css('sky-page-summary-subtitle .sky-page-summary-subtitle'))
    );
  }

  /**
   * The page summary's current content text.
   */
  public get contentText(): string {
    return SkyTestFixtureUtilities.getText(
      this.debugEl.query(By.css('sky-page-summary-content .sky-page-summary-content'))
    );
  }

  constructor(private debugEl: DebugElement) { }

}
