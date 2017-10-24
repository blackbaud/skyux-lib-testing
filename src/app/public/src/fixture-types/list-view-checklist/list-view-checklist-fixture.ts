import {
  DebugElement
} from '@angular/core';

import {
  By
} from '@angular/platform-browser';

import {
  SkyTestFixtureUtilities
} from '../utilities';

import {
  SkyListViewChecklistItem
} from './list-view-checklist-item';

const CHECKBOX_SELECTOR = By.css('.sky-checkbox-wrapper > input');

export class SkyListViewChecklistFixture {

  constructor(private debugEl: DebugElement) { }

  public getItem(index: number): SkyListViewChecklistItem {
    const itemEl = this.getItemEl(index);

    return {
      label: SkyTestFixtureUtilities.getText(
        itemEl.query(By.css('sky-checkbox-label div.sky-emphasized'))
      ),
      description: SkyTestFixtureUtilities.getText(
        itemEl.query(By.css('sky-checkbox-label div:not(.sky-emphasized)'))
      ),
      selected: itemEl.query(CHECKBOX_SELECTOR).nativeElement.checked
    };
  }

  public selectItem(index: number) {
    const itemEl = this.getItemEl(index);

    const checkboxEl = itemEl.query(CHECKBOX_SELECTOR);

    if (!checkboxEl.nativeElement.checked) {
      checkboxEl.nativeElement.click();
    }
  }

  public deselectItem(index: number) {
    const itemEl = this.getItemEl(index);

    const checkboxEl = itemEl.query(CHECKBOX_SELECTOR);

    if (checkboxEl.nativeElement.checked) {
      checkboxEl.nativeElement.click();
    }
  }

  private getItemEl(index: number) {
    const itemEls = this.debugEl.queryAll(By.css('sky-list-view-checklist-item'));

    const itemEl = itemEls[index];

    if (!itemEl) {
      throw new Error(`No item exists at index ${index}.`);
    }

    return itemEl;
  }

}
