//#region Imports
import {
  Component
} from '@angular/core';

import {
  async,
  TestBed
} from '@angular/core/testing';

import {
  FormsModule
} from '@angular/forms';

import {
  SkyDatepickerModule
} from '@skyux/datetime';

import {
  SkyPopoverModule
} from '@skyux/popovers';

import {
  SkyTestComponentSelector
} from '../../component-selector';

import { expect } from '../../matchers';
//#endregion Imports

//#region Test component
@Component({
  selector: 'datepicker-test',
  template: `
  <sky-datepicker data-sky-id="test-datepicker">
    <input
      skyDatepickerInput
      [(ngModel)]="selectedDate"
    />
  </sky-datepicker>
  `
})
class TestComponent {
  public date = '01/01/2019';

  public selectedDate = new Date(this.date);

  public disabled = false;
}
//#endregion Test component

describe('Datepicker fixture', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        TestComponent
      ],
      imports: [
        FormsModule,
        SkyDatepickerModule,
        SkyPopoverModule
      ]
    });
  });

  it('should expose the provided properties', async(() => {
    const fixture = TestBed.createComponent(
      TestComponent
    );

    fixture.detectChanges();

    const datepicker = SkyTestComponentSelector.selectDatepicker(
      fixture,
      'test-datepicker'
    );

    fixture.whenStable().then(() => {
      expect(datepicker.disabled).toBe(false);
      expect(datepicker.date).toEqual(fixture.componentInstance.date);
    });
  }));

  it('should open and close the calendar when clicked', async(() => {
    const fixture = TestBed.createComponent(
      TestComponent
    );

    const validateVisiblity = (visibility: string) => {
      const calendarEl: HTMLElement =
        fixture.nativeElement.querySelector('sky-datepicker-calendar');

      expect(calendarEl).toHaveStyle({ visibility });
    };

    const datepicker = SkyTestComponentSelector.selectDatepicker(
      fixture,
      'test-datepicker');

    fixture.detectChanges();
    validateVisiblity('hidden');

    datepicker.clickDatepickerCalenderButtonEl();
    fixture.whenStable().then(() => {

      fixture.detectChanges();
      validateVisiblity('visible');

      datepicker.clickDatepickerCalenderButtonEl();

      fixture.detectChanges();
      validateVisiblity('hidden');
    });
  }));

  it('should select the day element at the given index', async(() => {
    const fixture = TestBed.createComponent(
      TestComponent
    );

    fixture.detectChanges();

    const datepicker = SkyTestComponentSelector.selectDatepicker(
      fixture,
      'test-datepicker'
    );

    fixture.whenStable().then(() => {
      fixture.detectChanges();

      expect(datepicker.date).toEqual(fixture.componentInstance.date);

      datepicker.clickDayEl(10);

      expect(datepicker.date).toEqual('01/09/2019');
    });
  }));

  it('should throw an error when trying selecting a day element that does not exist', async(() => {
    const fixture = TestBed.createComponent(
      TestComponent
    );

    fixture.detectChanges();

    const datepicker = SkyTestComponentSelector.selectDatepicker(
      fixture,
      'test-datepicker'
    );

    fixture.whenStable().then(() => {
      expect(() => datepicker.clickDayEl(100)).toThrowError('No day exists at index 100.');
    });
  }));
});
