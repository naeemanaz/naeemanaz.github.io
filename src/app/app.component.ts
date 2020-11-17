import { Component } from '@angular/core';
import { Router, Event, NavigationEnd } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Abdul Manaf F';
  active=null;
  constructor(router: Router) {
    router.events.forEach((event: Event) => {
      if (event instanceof NavigationEnd ){
        this.active = event.url;
      }
    });
  }
}
