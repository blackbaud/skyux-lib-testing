import {
  DebugElement
} from '@angular/core';

import {
  By
} from '@angular/platform-browser';

import {
  SkyTestFixtureUtilities
} from '../utilities';

export class SkyLabelFixture {

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

  public get text(): string {
    const labelEl = this.getLabelEl();

    return SkyTestFixtureUtilities.getText(labelEl);
  }

  constructor(private debugEl: DebugElement) { }

  private getLabelEl(): DebugElement {
    return this.debugEl.query(By.css('.sky-label'));
  }

}
