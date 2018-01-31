import {
  DebugElement
} from '@angular/core';

import {
  By
} from '@angular/platform-browser';

import {
  SkyTestFixtureUtilities
} from '../utilities';

export class SkyPageSummaryFixture {

  public get titleText(): string {
    return SkyTestFixtureUtilities.getText(
      this.debugEl.query(By.css('sky-page-summary-title .sky-page-summary-title'))
    );
  }

  public get subtitleText(): string {
    return SkyTestFixtureUtilities.getText(
      this.debugEl.query(By.css('sky-page-summary-subtitle .sky-page-summary-subtitle'))
    );
  }

  public get contentText(): string {
    return SkyTestFixtureUtilities.getText(
      this.debugEl.query(By.css('sky-page-summary-content .sky-page-summary-content'))
    );
  }

  constructor(private debugEl: DebugElement) { }

}
