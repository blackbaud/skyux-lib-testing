//#region Imports
import {
  Component,
  Input
} from '@angular/core';

import {
  TestBed
} from '@angular/core/testing';

import {
  SkyErrorModule
} from '@blackbaud/skyux/dist/core';

import {
  SkyTestComponentSelector
} from '../../component-selector';
//#endregion Imports

//#region Test component
@Component({
  selector: 'error-test',
  template: `
<sky-error [errorType]="errorType" data-sky-id="test-error"></sky-error>
<sky-error data-sky-id="test-error-custom">
  <sky-error-image>
  </sky-error-image>
</sky-error>
  `
})
class TestComponent {

  @Input()
  public errorType = 'broken';

}
//#endregion Test component

describe('Error fixture', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        TestComponent
      ],
      imports: [
        SkyErrorModule
      ]
    });
  });

  it('should expose the expected properties', () => {
    const fixture = TestBed.createComponent(
      TestComponent
    );

    fixture.detectChanges();

    const error = SkyTestComponentSelector.selectError(
      fixture,
      'test-error'
    );

    expect(error.errorType).toBe('broken');

    fixture.componentInstance.errorType = 'notfound';

    fixture.detectChanges();

    expect(error.errorType).toBe('notfound');

    const errorCustom = SkyTestComponentSelector.selectError(
      fixture,
      'test-error-custom'
    );

    expect(errorCustom.errorType).toBeUndefined();
  });

});
