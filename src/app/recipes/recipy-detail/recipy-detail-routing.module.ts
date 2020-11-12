import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecipyDetailPage } from './recipy-detail.page';

const routes: Routes = [
  {
    path: '',
    component: RecipyDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecipyDetailPageRoutingModule {}
