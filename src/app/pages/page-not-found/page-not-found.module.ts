import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

<<<<<<< HEAD
import { MaterialModule } from 'src/app/material/material.module';

=======
>>>>>>> 2d5685a1213de430b5d1f0e8e3d10221b75c1c6d
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [{ path: '', component: PageNotFoundComponent }];

@NgModule({
  declarations: [PageNotFoundComponent],
<<<<<<< HEAD
  imports: [CommonModule, RouterModule.forChild(routes), MaterialModule],
=======
  imports: [CommonModule, RouterModule.forChild(routes)],
>>>>>>> 2d5685a1213de430b5d1f0e8e3d10221b75c1c6d
})
export class PageNotFoundModule {}
