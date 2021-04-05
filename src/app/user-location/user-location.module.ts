import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { UserLocationComponent } from './user-location.component';
import { AgmCoreModule } from '@agm/core';
import { environment } from '../../environments/environment';


const routes: Routes = [
  { path: '', component: UserLocationComponent }
];

@NgModule({
  declarations: [UserLocationComponent],
  imports: [
    CommonModule,
    AgmCoreModule.forRoot({
        apiKey: environment.googleApiKey
    }),
    RouterModule.forChild(routes)
  ]
})
export class UserLocationModule { }
