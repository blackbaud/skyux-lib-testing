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
 * Allows interaction with a SKY UX label component.
 */
export class SkyLabelFixture {

  /**
   * The label's current type.
   */
  public get labelType(): string {
    const clsList = this.getLabelEl().nativeElement.classList;

    if (clsList.contains('sky-label-danger')) {
      return 'danger';
    }

    if (clsList.contains('sky-label-info')) {
      return 'info';
    }

    if (clsList.contains('sky-label-success')) {
      return 'success';
    }

    if (clsList.contains('sky-label-warning')) {
      return 'warning';
    }

    return undefined;
  }

  /**
   * The label's current text.
   */
  public get text(): string {
    const labelEl = this.getLabelEl();

    return SkyTestFixtureUtilities.getText(labelEl);
  }

  constructor(private debugEl: DebugElement) { }

  private getLabelEl(): DebugElement {
    return this.debugEl.query(By.css('.sky-label'));
  }

}
