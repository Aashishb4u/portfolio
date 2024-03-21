import { Component } from '@angular/core';
import {SharedService} from "../../services/shared.service";

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.scss'
})
export class UserCardComponent {
  constructor(public shared: SharedService) {
  }

  sendWhatsappMessage() {
    this.shared.initiateWhatsapp()
  }
}
