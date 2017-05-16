import {Component} from '@angular/core';
import {environment} from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  url = '';

  constructor() {
    environment.then(environment=> {
        this.url = environment["some_api_url"]
      }
    );
  }
}
