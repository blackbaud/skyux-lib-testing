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

  public get selected(): boolean {
    if (this.selectable) {
      return this.getCheckInputEl().nativeElement.checked;
    }

    throw new Error('The card is not selectable.');
  }

  constructor(private debugEl: DebugElement) { }

  public select() {
    if (!this.selected) {
      this.clickCheckLabelEl();
    }
  }

  public deselect() {
    if (this.selected) {
      this.clickCheckLabelEl();
    }
  }

  private clickCheckLabelEl() {
    this.debugEl.query(
      By.css('.sky-card-check label.sky-checkbox-wrapper')
    ).nativeElement.click();
  }

  private getCheckInputEl() {
    return this.debugEl.query(
      By.css('.sky-card-check .sky-checkbox-wrapper input')
    );
  }

}
