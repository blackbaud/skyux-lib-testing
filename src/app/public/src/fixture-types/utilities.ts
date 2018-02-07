function getNativeEl(el: any) {
  if (!el) {
    return undefined;
  }

  if (el.nativeElement) {
    return el.nativeElement;
  }

  return el;
}

export namespace SkyTestFixtureUtilities {

  export function isVisible(el: any): boolean {
    const nativeEl = getNativeEl(el);

    if (nativeEl) {
      return getComputedStyle(getNativeEl(el)).display !== 'none';
    }

    return undefined;
  }

  export function getText(el: any): string {
    const nativeEl = getNativeEl(el);

    if (nativeEl) {
      return getNativeEl(el).innerText.trim();
    }

    return undefined;
  }

  export function setInputValue(el: any, value: any) {
    let inputEvent = document.createEvent('Event');
    inputEvent.initEvent('input', false, false);

    let changeEvent = document.createEvent('Event');
    changeEvent.initEvent('change', false, false);

    el.value = value;

    el.dispatchEvent(inputEvent);
  }

  export function getBackgroundImageUrl(el: any): string {
    const nativeEl = getNativeEl(el);

    if (nativeEl) {
      const backgroundImageUrl = getComputedStyle(getNativeEl(el)).backgroundImage;

      /* istanbul ignore else */
      // Browser will likely not return an empty value for the computed style,
      // but leave the if statement here anyway as a sanity check.
      if (backgroundImageUrl) {
        const matches = /url\(('|")([^'"]+)('|")\)/gi.exec(backgroundImageUrl);

        if (matches && matches.length > 0) {
          return matches[2];
        }
      }
    }

    return undefined;
  }
}
