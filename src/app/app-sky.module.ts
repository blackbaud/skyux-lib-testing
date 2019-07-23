import {
  NgModule
} from '@angular/core';

import {
  SkyAvatarModule
} from '@skyux/avatar';

import {
  SkyDatepickerModule
} from '@skyux/datetime';

import {
  SkyErrorModule
} from '@skyux/errors';

import {
  SkyCheckboxModule
} from '@skyux/forms';

import {
  SkyGridModule
} from '@skyux/grids';

import {
  SkyLabelModule,
  SkyAlertModule,
  SkyIconModule
} from '@skyux/indicators';

import {
  SkyPageSummaryModule,
  SkyCardModule,
  SkyActionButtonModule
} from '@skyux/layout';

import {
  SkyListModule,
  SkyListToolbarModule
} from '@skyux/list-builder';

import {
  SkyListViewChecklistModule
} from '@skyux/list-builder-view-checklist';

import {
  SkyListViewGridModule
} from '@skyux/list-builder-view-grids';

import {
  SkySearchModule
} from '@skyux/lookup';

import {
  SkyPopoverModule
} from '@skyux/popovers';

@NgModule({
  exports: [
    SkyActionButtonModule,
    SkyAlertModule,
    SkyAvatarModule,
    SkyCardModule,
    SkyCheckboxModule,
    SkyDatepickerModule,
    SkyErrorModule,
    SkyGridModule,
    SkyIconModule,
    SkyLabelModule,
    SkyListModule,
    SkyListToolbarModule,
    SkyListViewChecklistModule,
    SkyListViewGridModule,
    SkyPageSummaryModule,
    SkyPopoverModule,
    SkySearchModule
  ]
})
export class AppSkyModule { }
