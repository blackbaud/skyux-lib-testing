//#region Imports
import {
  Component
} from '@angular/core';

import {
  TestBed
} from '@angular/core/testing';

import {
  SkyAvatarModule
} from '@blackbaud/skyux/dist/core';

import {
  SkyTestComponentSelector
} from '../../component-selector';
//#endregion Imports

//#region Test component
@Component({
  selector: 'avatar-test',
  template: `
<sky-avatar
  [name]="name"
  [src]="src"
  [canChange]="true"
  (avatarChanged)="avatarChanged"
  data-sky-id="test-avatar"
>
</sky-avatar>
  `
})
class TestComponent {
  public name: string;

  public src: string;

  public canChange: false;

  public avatarChanged() { }
}
//#endregion Test component

describe('Action button fixture', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        TestComponent
      ],
      imports: [
        SkyAvatarModule
      ]
    });
  });

  it('should expose the expected properties', () => {
    const fixture = TestBed.createComponent(
      TestComponent
    );

    fixture.componentInstance.name = 'Robert Hernandez';

    fixture.detectChanges();

    const avatar = SkyTestComponentSelector.selectAvatar(
      fixture,
      'test-avatar'
    );

    expect(avatar.initials).toBe('RH');
    expect(avatar.imageUrl).toBeUndefined();

    fixture.componentInstance.src = 'https://example.com/img/';

    fixture.detectChanges();

    expect(avatar.initials).toBeUndefined();
    expect(avatar.imageUrl).toBe('https://example.com/img/');
  });

});
