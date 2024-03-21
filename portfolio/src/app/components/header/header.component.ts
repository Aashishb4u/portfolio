import { Component } from '@angular/core';
import {SharedService} from "../../services/shared.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  showMobileMenu: any = false;
  constructor(public shared: SharedService) {
  }

  changeTheme(mode: string) {
    console.log(mode);
    this.shared.toggleMode.next(mode);
  }
}
