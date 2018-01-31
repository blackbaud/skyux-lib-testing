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

export abstract class SkyTestComponentSelector {

  public static selectActionButton(
    fixture: ComponentFixture<any>,
    skyTestId: string
  ): SkyActionButtonFixture {
    return new SkyActionButtonFixture(getEl(fixture, skyTestId, 'sky-action-button'));
  }

  public static selectAlert(
    fixture: ComponentFixture<any>,
    skyTestId: string
  ): SkyAlertFixture {
    return new SkyAlertFixture(getEl(fixture, skyTestId, 'sky-alert'));
  }

  public static selectAvatar(
    fixture: ComponentFixture<any>,
    skyTestId: string
  ): SkyAvatarFixture {
    return new SkyAvatarFixture(getEl(fixture, skyTestId, 'sky-avatar'));
  }

  public static selectCard(
    fixture: ComponentFixture<any>,
    skyTestId: string
  ): SkyCardFixture {
    return new SkyCardFixture(getEl(fixture, skyTestId, 'sky-card'));
  }

  public static selectError(
    fixture: ComponentFixture<any>,
    skyTestId: string
  ): SkyErrorFixture {
    return new SkyErrorFixture(getEl(fixture, skyTestId, 'sky-error'));
  }

  public static selectLabel(
    fixture: ComponentFixture<any>,
    skyTestId: string
  ): SkyLabelFixture {
    return new SkyLabelFixture(getEl(fixture, skyTestId, 'sky-label'));
  }

  public static selectListViewChecklist(
    fixture: ComponentFixture<any>,
    skyTestId: string
  ): SkyListViewChecklistFixture {
    return new SkyListViewChecklistFixture(getEl(fixture, skyTestId, 'sky-list-view-checklist'));
  }

  public static selectPageSummary(
    fixture: ComponentFixture<any>,
    skyTestId: string
  ): SkyPageSummaryFixture {
    return new SkyPageSummaryFixture(getEl(fixture, skyTestId, 'sky-page-summary'));
  }

  public static selectSearch(
    fixture: ComponentFixture<any>,
    skyTestId: string
  ): SkySearchFixture {
    return new SkySearchFixture(getEl(fixture, skyTestId, 'sky-search'));
  }

}
