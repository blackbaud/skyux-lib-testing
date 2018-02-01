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
 * Allows interaction with a SKY UX avatar component.
 */
export class SkyCardFixture {

  /**
   * The card's current title.
   */
  public get titleText(): string {
    return SkyTestFixtureUtilities.getText(
      this.debugEl.query(By.css('sky-card-title'))
    );
  }

  /**
   * The card's current content text.
   */
  public get contentText(): string {
    return SkyTestFixtureUtilities.getText(
      this.debugEl.query(By.css('sky-card-content'))
    );
  }

  /**
   * A flag indicating whether the user can select the card.
   */
  public get selectable(): boolean {
    return !!this.debugEl.query(By.css('.sky-card-check'));
  }

  /**
   * A flag indicating whether the card is currently selected.  If the card
   * is not selectable, an error is thrown.
   */
  public get selected(): boolean {
    if (this.selectable) {
      return this.getCheckInputEl().nativeElement.checked;
    }

    throw new Error('The card is not selectable.');
  }

  constructor(private debugEl: DebugElement) { }

  /**
   * Selects the card.
   */
  public select() {
    if (!this.selected) {
      this.clickCheckLabelEl();
    }
  }

  /**
   * Deselects the card.
   */
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
