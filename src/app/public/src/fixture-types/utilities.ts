export class SkyTestFixtureUtilities {

  public static isVisible(el: any): boolean {
    const nativeEl = this.nativeEl(el);

    if (nativeEl) {
      return getComputedStyle(this.nativeEl(el)).display !== 'none';
    }

    return undefined;
  }

  public static getText(el: any): string {
    const nativeEl = this.nativeEl(el);

    if (nativeEl) {
      return this.nativeEl(el).innerText.trim();
    }

    return undefined;
  }

  public static getBackgroundImageUrl(el: any): string {
    const nativeEl = this.nativeEl(el);

    if (nativeEl) {
      const backgroundImageUrl = getComputedStyle(this.nativeEl(el)).backgroundImage;

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

  private static nativeEl(el: any) {
    if (!el) {
      return undefined;
    }

    if (el.nativeElement) {
      return el.nativeElement;
    }

    return el;
  }
}
