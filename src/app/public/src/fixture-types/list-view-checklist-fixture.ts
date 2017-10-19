import {
  DebugElement
} from '@angular/core';

import {
  By
} from '@angular/platform-browser';

import {
  SkyTestFixtureUtilities
} from './utilities';

export class SkyListViewChecklistFixture {

  constructor(private debugEl: DebugElement) { }

  public getItem(index: number): {label: string, description: string} {
    const labelEls = this.debugEl.queryAll(By.css('sky-checkbox-label'));

    const labelEl = labelEls[index];

    if (labelEl) {
      return {
        label: SkyTestFixtureUtilities.getText(
          labelEl.query(By.css('div.sky-emphasized'))
        ),
        description: SkyTestFixtureUtilities.getText(
          labelEl.query(By.css('div:not(.sky-emphasized)'))
        )
      };
    }

    throw new Error(`No item exists at index ${index}.`);
  }

  public selectItem(index: number) {
    const checkboxEls = this.debugEl.queryAll(By.css('.sky-checkbox-wrapper > input'));

    const checkboxEl = checkboxEls[index];

    if (checkboxEl) {
      checkboxEl.nativeElement.click();
    } else {
      throw new Error(`No item exists at index ${index}.`);
    }
  }

}
