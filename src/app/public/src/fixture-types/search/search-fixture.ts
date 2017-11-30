import {
  DebugElement
} from '@angular/core';

import {
  By
} from '@angular/platform-browser';

import {
  SkyTestFixtureUtilities
} from '../utilities';

export class SkySearchFixture {

  public get searchText(): string {
    return this.getInputEl().nativeElement.value;
  }

  public get placeholderText(): string {
    return this.getInputEl().nativeElement.placeholder;
  }

  constructor(private debugEl: DebugElement) { }

  public apply(searchText?: string) {
    if (searchText) {
      SkyTestFixtureUtilities.setInputValue(this.getInputEl().nativeElement, searchText);
    }

    const btnEl = this.getApplyBtnEl();

    btnEl.triggerEventHandler('click', {});
  }

  public clear() {
    const clearEl = this.debugEl.query(By.css('.sky-input-group-clear'));

    if (!SkyTestFixtureUtilities.isVisible(clearEl)) {
      throw new Error(
        'There currently is no search text or the current search text has not been applied, ' +
        'so the clear button is not visible.'
      );
    }

    const btnEl = this.getClearBtnEl();

    btnEl.triggerEventHandler('click', {});
  }

  private getApplyBtnEl(): DebugElement {
    return this.debugEl.query(By.css('.sky-search-btn-apply'));
  }

  private getClearBtnEl(): DebugElement {
    return this.debugEl.query(By.css('.sky-search-btn-clear'));
  }

  private getInputEl(): DebugElement {
    return this.debugEl.query(By.css('.sky-search-input'));
  }

}
