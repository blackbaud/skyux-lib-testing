import { SkyMatchResult } from './match-result';

import {
  SkyA11yAnalyzer,
  SkyA11yAnalyzerConfig
} from '../a11y';

const windowRef: any = window;

const matchers: jasmine.CustomMatcherFactories = {
  toBeVisible() {
    return {
      compare(el: Element): SkyMatchResult {
        const result = {
          pass: false,
          message: ''
        };

        result.pass = getComputedStyle(el).display !== 'none';

        result.message = result.pass ?
          'Expected element to not be visible' :
          'Expected element to be visible';

        return result;
      }
    };
  },

  toHaveText() {
    return {
      compare(el: any, expectedText: string, trimWhitespace = true): SkyMatchResult {
        const result = {
          pass: false,
          message: ''
        };

        let actualText = el.textContent;

        if (trimWhitespace) {
          actualText = actualText.trim();
        }

        result.pass = actualText === expectedText;

        result.message = result.pass ?
          `Expected element's inner text not to be ${expectedText}` :
          `Expected element's inner text to be: "${expectedText}"\n` +
          `Actual element's inner text was: "${actualText}"`;

        return result;
      }
    };
  },

  toHaveCssClass() {
    return {
      compare(el: any, expectedClassName: string): SkyMatchResult {
        const result = {
          pass: false,
          message: ''
        };

        if (expectedClassName.indexOf('.') === 0) {
          throw new Error('Please remove the leading dot from your class name.');
        }

        result.pass = el.classList.contains(expectedClassName);

        result.message = result.pass ?
          `Expected element not to have CSS class "${expectedClassName}"` :
          `Expected element to have CSS class "${expectedClassName}"`;

        return result;
      }
    };
  },

  toHaveStyle() {
    return {
      compare(el: any, expectedStyles: any): SkyMatchResult {
        const message: string[] = [];

        let hasFailure = false;

        Object.keys(expectedStyles).forEach((styleName: string) => {
          const styles = windowRef.getComputedStyle(el);
          const actualStyle = styles[styleName];
          const expectedStyle = expectedStyles[styleName];

          if (actualStyle !== expectedStyle) {
            if (!hasFailure) {
              hasFailure = true;
            }

            message.push(
              `Expected element not to have CSS style "${styleName}: ${expectedStyle}"`
            );
          } else {
            message.push(
              `Expected element to have CSS style "${styleName}: ${expectedStyle}"`
            );
          }

          message.push(
            `Actual styles are: "${styleName}: ${actualStyle}"`
          );
        });

        const result = {
          pass: !hasFailure,
          message: message.join('\n')
        };

        return result;
      }
    };
  },

  toExist() {
    return {
      compare(el: any): SkyMatchResult {
        const result = {
          pass: false,
          message: ''
        };

        result.pass = !!el;

        result.message = result.pass ?
          'Expected element not to exist' :
          'Expected element to exist';

        return result;
      }
    };
  },

  toPassA11y() {
    return {
      compare(
        element: any,
        callback?: () => void,
        config?: SkyA11yAnalyzerConfig
      ): SkyMatchResult {

        const result: any = {
          message: '',
          pass: true
        };

        SkyA11yAnalyzer.run(element, config)
          .then(() => {
            if (callback) {
              callback();
            }
          })
          .catch((err) => {
            windowRef.fail(err.message);
          });

        // Since the returned result is always `true`, this matcher cannot be
        // paired with a `.not.` operator. In this particular case, there will more
        // than likely not be a requirement to check if something isn't accessible.
        return result;
      }
    };
  }
};

windowRef.beforeEach(() => {
  jasmine.addMatchers(matchers);
});

export const expect: Function = windowRef.expect;
