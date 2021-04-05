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
        apiKey: 'AIzaSyAAR7FmxXhxFDmJd36Aw--ULes4pYBDMvY'
    }),
    RouterModule.forChild(routes)
  ]
})
export class UserLocationModule { }
