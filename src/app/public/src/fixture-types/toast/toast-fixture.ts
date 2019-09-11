//#region imports

import {
  DebugElement
} from '@angular/core';

import {
  By
} from '@angular/platform-browser';

import {
  SkyTestFixtureUtilities
} from '../utilities';

//#endregion

/**
 * Allows interaction with a SKY UX toast component.
 */
export class SkyToastFixture {

  /**
   * The toast's current text.
   */
  public get text(): string {
    return SkyTestFixtureUtilities.getText(this.debugEl);
  }

  /**
   * The toast's current type.
   */
  public get toastType(): string {
    const clsList = this.getToastEl().nativeElement.classList;

    if (clsList.contains('sky-toast-danger')) {
      return 'danger';
    }

    if (clsList.contains('sky-toast-info')) {
      return 'info';
    }

    if (clsList.contains('sky-toast-success')) {
      return 'success';
    }

    /* istanbul ignore else */
    if (clsList.contains('sky-toast-warning')) {
      return 'warning';
    }

    // This line can't currently be hit because toast's internal implementation falls
    // back to "info" if no toast type is defined by the consuming component.
    /* istanbul ignore next */
    return undefined;
  }

  constructor(private debugEl: DebugElement) { }

  /**
   * Clicks the toast's close button.
   */
  public clickCloseButton(): void {
    const closeBtnEl = this.getCloseBtnEl();

    closeBtnEl.triggerEventHandler('click', {});
  }

  private getToastEl(): DebugElement {
    return this.debugEl.query(By.css('.sky-toast'));
  }

  private getCloseBtnEl(): DebugElement {
    return this.debugEl.query(By.css('.sky-toast-btn-close'));
  }

}
