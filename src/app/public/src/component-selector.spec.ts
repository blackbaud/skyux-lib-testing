//#region Imports
import {
  Component
} from '@angular/core';

import {
  TestBed
} from '@angular/core/testing';

import {
  SkyAlertModule
} from '@skyux/indicators';

import {
  SkyTestComponentSelector
} from './component-selector';
//#endregion Imports

//#region Test component
@Component({
  selector: 'alert-test',
  template: `
<sky-alert data-sky-id="test-alert">
  This is a sample alert.
</sky-alert>
  `
})
class TestComponent {
  public alertType = 'warning';

  public closeable = true;

  public closed = false;

  public closedChange() { }
}
//#endregion Test component

describe('Component selector', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        TestComponent
      ],
      imports: [
        SkyAlertModule
      ]
    });
  });

  it('should return undefined if no element is found with the specified ID', () => {
    const fixture = TestBed.createComponent(TestComponent);

    expect(
      SkyTestComponentSelector.selectAvatar(fixture, 'asdf')
    ).toBeUndefined();
  });

  it('should throw an error if the specified element is not of the expected type', () => {
    const fixture = TestBed.createComponent(TestComponent);

    expect(
      () => SkyTestComponentSelector.selectAvatar(fixture, 'test-alert')
    ).toThrowError(
      'The element with the test ID "test-alert" is not a component of type sky-avatar."'
    );
  });

});
