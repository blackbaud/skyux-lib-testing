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
 * Allows interaction with a SKY UX checkbox component.
 */
export class SkyCheckboxFixture {

  constructor(private debugEl: DebugElement) { }

  /**
   * A flag indicating whether the checkbox is currently selected.
   */
  public get selected(): boolean {
      return this.getCheckboxInputEl().nativeElement.checked;
  }

  /**
   * The checkbox's label
   */
  public get labelText(): string {
    return SkyTestFixtureUtilities.getText(
      this.debugEl.query(By.css('label.sky-checkbox-wrapper'))
    );
  }

  /**
   * The checkbox's icon type
   */
  /**
   * The action button's current icon type.
   */
  public get iconType(): string {
    const classList = this.debugEl.query(
      By.css('.fa.sky-icon')
    ).nativeElement.classList;

    for (let i = 0, n = classList.length; i < n; i++) {
      const cls = classList.item(i);

      if (cls.indexOf('fa-') === 0) {
        return cls.substr(3);
      }
    }
  }

  /**
   * A flag indicating whether the checkbox is currently disabled.
   */
  public get disabled(): boolean {
    return this.getCheckboxInputEl().nativeElement.disabled;
}

  /**
   * Selects the checkbox.
   */
  public select() {
    if (!this.selected) {
      this.clickCheckboxLabelEl();
    }
  }

  /**
   * Deselects the checkbox.
   */
  public deselect() {
    if (this.selected) {
      this.clickCheckboxLabelEl();
    }
  }

  private clickCheckboxLabelEl() {
    this.debugEl.query(
      By.css('label.sky-checkbox-wrapper')
    ).nativeElement.click();
  }

  private getCheckboxInputEl() {
    return this.debugEl.query(
      By.css('.sky-checkbox-wrapper input')
    );
  }
}
