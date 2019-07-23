import {
  DebugElement
} from '@angular/core';

import {
  By
} from '@angular/platform-browser';

/**
 * Allows interaction with a SKY UX datepicker component.
 */
export class SkyDatepickerFixture {

  constructor(private debugEl: DebugElement) { }

  /**
   * The datepicker's currently selected date.
   */
  public get date(): string {
    return this.getDatepickerInputEl().nativeElement.value;
  }

  /**
   * Flag indicating if datepicker input is disabled.
   */
  public get disabled(): boolean {
    return this.getDatepickerInputEl().nativeElement.disabled;
  }

  /**
   * Click the calendar button to open or close calendar.
   */
  public clickDatepickerCalenderButtonEl() {
    this.debugEl.query(
      By.css('.sky-datepicker .sky-dropdown-button-type-calendar')
      ).nativeElement.click();
  }

  public clickDayEl(dayIndex: number) {
    this.clickDatepickerCalenderButtonEl();

    const dayEls = this.debugEl.queryAll(
      By.css('.sky-datepicker .sky-datepicker-calendar .sky-datepicker-btn-date')
    );

    const dayEl = dayEls[dayIndex];

    if (!dayEl) {
      throw new Error(`No day exists at index ${dayIndex}.`);
    }

    dayEl.nativeElement.click();
  }

  private getDatepickerInputEl(): DebugElement {
    return this.debugEl.query(
      By.css('.sky-datepicker input')
    );
  }
}
