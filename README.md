# SKY UX Testing

### Provides methods for interacting with SKY UX components during Karma tests

## Installation

Install the library by running the following command from the directory where your SKY UX application resides:

```
npm install @blackbaud/skyux-lib-testing --save-dev --save-exact
```

## Usage

- In your component's HTML, add a `data-sky-id` attribute to SKY UX components you want to examine in your tests.  Example:

```
<sky-action-button
  (actionClick)="filterActionClick()"
  data-sky-id="filter-button"
>
  <sky-action-button-icon [iconType]="iconType"></sky-action-button-icon>
  <sky-action-button-header>
    Build a new list
  </sky-action-button-header>
  <sky-action-button-details>
    Start from scratch and fine-tune with filters
  </sky-action-button-details>
</sky-action-button>
```

- In your component's `.spec.ts` file, add this code to the top of the file to import the component selector class:

```
import {
  SkyTestComponentSelector
} from '@blackbaud/skyux-lib-testing';
```

- In your test, call the appropriate `select` method to a fixture representing the instance of your SKY UX component.  Each `select` method takes a `fixture` argument that represents the test fixture for the component you're testing and a `skyId` parameter that is the value of the `data-sky-id` attribute you added to the SKY UX component.

```
// Create the test fixture for your component that contains the SKY UX component.
const fixture = TestBed.createComponent(YourComponentType);

fixture.detectChanges();

// Get the SKY UX component.
const filterButton = SkyTestComponentSelector.selectActionButton(
  fixture,
  'filter-button'
);

```

- Now you can examine properties and invoke methods on the component:

```
// Validate content inside the SKY UX component
expect(filterButton.headerText).toBe('Build a new list');

// Validate that interacting with the SKY UX component makes the expected changes
// to your component.
filterButton.actionClick();

fixture.detectChanges();

expect(fixture.componentInstance.someProperty).toBe(
  'value after clicking action button'
);
```
