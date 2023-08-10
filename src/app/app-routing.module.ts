import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailViewComponent } from './detail-view/detail-view.component';
import { PhotosViewComponent } from './photos-view/photos-view.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'photos', pathMatch: 'full'
  },
  {
    path: 'photos', component: PhotosViewComponent
  },
  {
    path: 'photo', component: DetailViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
