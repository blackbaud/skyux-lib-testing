import {
  DebugElement
} from '@angular/core';

import {
  By
} from '@angular/platform-browser';

const SKY_ERROR_IMAGE_CLS_REGEX = /^sky-error-(\w*)-image$/;

export class SkyErrorFixture {

  public get errorType(): string {
    const imageEl = this.debugEl.query(By.css('.sky-error-image-container > div'));

    if (imageEl) {
      const classList = imageEl.nativeElement.classList;

      for (let i = 0, n = classList.length; i < n; i++) {
        const cls = classList.item(i);
        const matches = SKY_ERROR_IMAGE_CLS_REGEX.exec(cls);

        /* istanbul ignore else */
        if (matches) {
          return matches[1];
        }
      }
    }

    return undefined;
  }

  constructor(private debugEl: DebugElement) { }

}
