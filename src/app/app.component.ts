import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <app-navigation>
      <div>
          AppComponent
          <router-outlet></router-outlet>
      </div>
  </app-navigation>
  `,
  styles: []
})
export class AppComponent {
  title = 'angular-material-app';
}
