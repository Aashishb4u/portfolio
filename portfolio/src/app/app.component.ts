import { Component } from '@angular/core';
import {SharedService} from "./services/shared.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor(public shared: SharedService) {}
  title = 'portfolio';
}
