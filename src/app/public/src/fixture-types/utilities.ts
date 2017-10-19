export class SkyTestFixtureUtilities {

  public static isVisible(el: any) {
    return getComputedStyle(this.nativeEl(el)).display !== 'none';
  }

  public static getText(el: any) {
    return this.nativeEl(el).innerText.trim();
  }

  public static getBackgroundImageUrl(el: any): string {
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

    return undefined;
  }

  private static nativeEl(el: any) {
    if (el.nativeElement) {
      return el.nativeElement;
    }

    return el;
  }
}
