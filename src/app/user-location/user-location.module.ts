import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { UserLocationComponent } from './user-location.component';
import { AgmCoreModule } from '@agm/core';


const routes: Routes = [
  { path: '', component: UserLocationComponent }
];

@NgModule({
  declarations: [UserLocationComponent],
  imports: [
    CommonModule,
    AgmCoreModule.forRoot({
        apiKey: 'AIzaSyBKJGh1LQRqZ6CTr4Dx-A_P2ZNrn60VmKs'
    }),
    RouterModule.forChild(routes)
  ]
})
export class UserLocationModule { }
