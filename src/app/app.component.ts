import { Component } from '@angular/core';
import { Counter } from './models/counter';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-counter-group';
  public counter = new Counter();
}
