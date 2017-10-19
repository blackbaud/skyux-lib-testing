//#region Imports
import {
  Component
} from '@angular/core';

import {
  TestBed
} from '@angular/core/testing';

import { Observable } from 'rxjs/Observable';

import {
  SkyListModule
} from '@blackbaud/skyux/dist/core';

import {
  SkyTestComponentSelector
} from '../component-selector';
//#endregion Imports

//#region Test component
@Component({
  selector: 'list-view-checklist-test',
  template: `
<sky-list [data]="items" (selectedIdsChange)="selectedItemsChange($event)">
  <sky-list-toolbar>
  </sky-list-toolbar>
  <sky-list-view-checklist
    label="column2"
    description="column3"
    [selectMode]="selectMode"
    data-sky-id="my-list-view-checklist"
  >
  </sky-list-view-checklist>
</sky-list>
  `
})
class TestComponent {
  public items: Observable<Array<any>> = Observable.of([
    { id: '1', column1: 101, column2: 'Apple', column3: 'Anne eats apples'},
    { id: '2', column1: 202, column2: 'Banana', column3: 'Ben eats bananas' },
    { id: '3', column1: 303, column2: 'Pear', column3: 'Patty eats pears' },
    { id: '4', column1: 404, column2: 'Grape', column3: 'George eats grapes' },
    { id: '5', column1: 505, column2: 'Banana', column3: 'Becky eats bananas' },
    { id: '6', column1: 606, column2: 'Lemon', column3: 'Larry eats lemons' },
    { id: '7', column1: 707, column2: 'Strawberry', column3: 'Sally eats strawberries' }
  ]);

  public selectedItems: Array<any> = [];

  public selectMode: string = 'multiple';

  public selectedItemsChange(selectedMap: Map<string, boolean>) {
    this.items.take(1).subscribe((items) => {
      this.selectedItems = items.filter((item) => {
        return selectedMap.get(item.id);
      });
    });
  }
}
//#endregion Test component

describe('Action button fixture', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        TestComponent
      ],
      imports: [
        SkyListModule
      ]
    });
  });

  it('should allow an item to be retrieved by index', () => {
    const fixture = TestBed.createComponent(
      TestComponent
    );

    fixture.detectChanges();

    const listViewChecklist = SkyTestComponentSelector.selectListViewChecklist(
      fixture,
      'my-list-view-checklist'
    );

    const item = listViewChecklist.getItem(1);

    expect(item).toEqual({
      label: 'Banana',
      description: 'Ben eats bananas'
    });

    expect(() => listViewChecklist.getItem(100)).toThrowError('No item exists at index 100.');
  });

  it('should allow an item to be selected by index', () => {
    const fixture = TestBed.createComponent(
      TestComponent
    );

    fixture.detectChanges();

    const listViewChecklist = SkyTestComponentSelector.selectListViewChecklist(
      fixture,
      'my-list-view-checklist'
    );

    listViewChecklist.selectItem(1);
    listViewChecklist.selectItem(3);
    listViewChecklist.selectItem(4);

    fixture.detectChanges();

    expect(fixture.componentInstance.selectedItems).toEqual([
      { id: '2', column1: 202, column2: 'Banana', column3: 'Ben eats bananas' },
      { id: '4', column1: 404, column2: 'Grape', column3: 'George eats grapes' },
      { id: '5', column1: 505, column2: 'Banana', column3: 'Becky eats bananas' }
    ]);

    expect(() => listViewChecklist.selectItem(100)).toThrowError('No item exists at index 100.');
  });

});
