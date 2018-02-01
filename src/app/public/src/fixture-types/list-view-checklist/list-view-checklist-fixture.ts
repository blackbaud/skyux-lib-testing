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

/**
 * Allows interaction with a SKY UX list view checklist component.
 */
export class SkyListViewChecklistFixture {

  constructor(private debugEl: DebugElement) { }

  /**
   * Gets an item at the specified index.
   * @param index The item's index.
   */
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

  /**
   * Selects the item at the specified index.
   * @param index The item's index.
   */
  public selectItem(index: number) {
    const itemEl = this.getItemEl(index);

    const checkboxEl = itemEl.query(CHECKBOX_SELECTOR);

    if (!checkboxEl.nativeElement.checked) {
      checkboxEl.nativeElement.click();
    }
  }

  /**
   * Deselects the item at the specified index.
   * @param index The item's index.
   */
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
