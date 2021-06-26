import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { MaterialModule } from 'src/app/material/material.module';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [{ path: '', component: PageNotFoundComponent }];

@NgModule({
  declarations: [PageNotFoundComponent],
  imports: [CommonModule, RouterModule.forChild(routes), MaterialModule],
})
export class PageNotFoundModule {}
