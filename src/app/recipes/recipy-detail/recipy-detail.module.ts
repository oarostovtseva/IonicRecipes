import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecipyDetailPageRoutingModule } from './recipy-detail-routing.module';

import { RecipyDetailPage } from './recipy-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecipyDetailPageRoutingModule
  ],
  declarations: [RecipyDetailPage]
})
export class RecipyDetailPageModule {}
