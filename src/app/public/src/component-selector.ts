import {
  ComponentFixture
} from '@angular/core/testing';

import {
  By
} from '@angular/platform-browser';

import {
  SkyActionButtonFixture,
  SkyAlertFixture,
  SkyAvatarFixture,
  SkyCardFixture,
  SkyErrorFixture,
  SkyLabelFixture,
  SkyListViewChecklistFixture,
  SkyListViewGridFixture,
  SkyPageSummaryFixture,
  SkySearchFixture
} from './fixture-types';

function getEl(
  fixture: ComponentFixture<any>,
  skyTestId: string,
  elType: string
) {
  const skyEl = fixture.debugElement.query(
    By.css(`[data-sky-id="${skyTestId}"]`)
  );

  if (!skyEl) {
    throw new Error(`No element was found with a test ID of "${skyTestId}".`);
  }

  if (skyEl.name !== elType) {
    throw new Error(
      `The element with the test ID "${skyTestId}" is not a component of type ${elType}."`
    );
  }

  return skyEl;
}

/**
 * Provides methods for selecting SKY UX elements so their properties can be accessed
 * for testing.
 */
export namespace SkyTestComponentSelector {

  /**
   * Selects an action button component.
   * @param fixture The ComponentFixture where the SKY UX component resides.
   * @param skyTestId The value of the `data-sky-id` property specified on the SKY UX component.
   */
  export function selectActionButton(
    fixture: ComponentFixture<any>,
    skyTestId: string
  ): SkyActionButtonFixture {
    return new SkyActionButtonFixture(getEl(fixture, skyTestId, 'sky-action-button'));
  }

  /**
   * Selects an alert component.
   * @param fixture The ComponentFixture where the SKY UX component resides.
   * @param skyTestId The value of the `data-sky-id` property specified on the SKY UX component.
   */
  export function selectAlert(
    fixture: ComponentFixture<any>,
    skyTestId: string
  ): SkyAlertFixture {
    return new SkyAlertFixture(getEl(fixture, skyTestId, 'sky-alert'));
  }

  /**
   * Selects an avatar component.
   * @param fixture The ComponentFixture where the SKY UX component resides.
   * @param skyTestId The value of the `data-sky-id` property specified on the SKY UX component.
   */
  export function selectAvatar(
    fixture: ComponentFixture<any>,
    skyTestId: string
  ): SkyAvatarFixture {
    return new SkyAvatarFixture(getEl(fixture, skyTestId, 'sky-avatar'));
  }

  /**
   * Selects a card component.
   * @param fixture The ComponentFixture where the SKY UX component resides.
   * @param skyTestId The value of the `data-sky-id` property specified on the SKY UX component.
   */
  export function selectCard(
    fixture: ComponentFixture<any>,
    skyTestId: string
  ): SkyCardFixture {
    return new SkyCardFixture(getEl(fixture, skyTestId, 'sky-card'));
  }

  /**
   * Selects an error component.
   * @param fixture The ComponentFixture where the SKY UX component resides.
   * @param skyTestId The value of the `data-sky-id` property specified on the SKY UX component.
   */
  export function selectError(
    fixture: ComponentFixture<any>,
    skyTestId: string
  ): SkyErrorFixture {
    return new SkyErrorFixture(getEl(fixture, skyTestId, 'sky-error'));
  }

  /**
   * Selects a label component.
   * @param fixture The ComponentFixture where the SKY UX component resides.
   * @param skyTestId The value of the `data-sky-id` property specified on the SKY UX component.
   */
  export function selectLabel(
    fixture: ComponentFixture<any>,
    skyTestId: string
  ): SkyLabelFixture {
    return new SkyLabelFixture(getEl(fixture, skyTestId, 'sky-label'));
  }

  /**
   * Selects a list view checklist component.
   * @param fixture The ComponentFixture where the SKY UX component resides.
   * @param skyTestId The value of the `data-sky-id` property specified on the SKY UX component.
   */
  export function selectListViewChecklist(
    fixture: ComponentFixture<any>,
    skyTestId: string
  ): SkyListViewChecklistFixture {
    return new SkyListViewChecklistFixture(getEl(fixture, skyTestId, 'sky-list-view-checklist'));
  }

  /**
   * Selects a list view grid component.
   * @param fixture The ComponentFixture where the SKY UX component resides.
   * @param skyTestId The value of the `data-sky-id` property specified on the SKY UX component.
   */
  export function selectListViewGrid(
    fixture: ComponentFixture<any>,
    skyTestId: string
  ): SkyListViewGridFixture {
    return new SkyListViewGridFixture(getEl(fixture, skyTestId, 'sky-list-view-grid'));
  }

  /**
   * Selects a page summary component.
   * @param fixture The ComponentFixture where the SKY UX component resides.
   * @param skyTestId The value of the `data-sky-id` property specified on the SKY UX component.
   */
  export function selectPageSummary(
    fixture: ComponentFixture<any>,
    skyTestId: string
  ): SkyPageSummaryFixture {
    return new SkyPageSummaryFixture(getEl(fixture, skyTestId, 'sky-page-summary'));
  }

  /**
   * Selects a search component.
   * @param fixture The ComponentFixture where the SKY UX component resides.
   * @param skyTestId The value of the `data-sky-id` property specified on the SKY UX component.
   */
  export function selectSearch(
    fixture: ComponentFixture<any>,
    skyTestId: string
  ): SkySearchFixture {
    return new SkySearchFixture(getEl(fixture, skyTestId, 'sky-search'));
  }

}
