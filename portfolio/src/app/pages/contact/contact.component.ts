import { Component } from '@angular/core';
import {SharedService} from "../../services/shared.service";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  constructor(public shared: SharedService) {
  }
  faqs: any = [
    {
      name: "What does a product designer need to know?",
      toggle: false,
      content: "I'm here to help if you're searching for a product designer to bring your idea to life or a design partner to help take your business to the next level."
    },
    {
      name: "What does a product designer need to know?",
      toggle: false,
      content: "I'm here to help if you're searching for a product designer to bring your idea to life or a design partner to help take your business to the next level."
    },
    {
      name: "What does a product designer need to know?",
      toggle: false,
      content: "I'm here to help if you're searching for a product designer to bring your idea to life or a design partner to help take your business to the next level."
    },
    {
      name: "What does a product designer need to know?",
      toggle: false,
      content: "I'm here to help if you're searching for a product designer to bring your idea to life or a design partner to help take your business to the next level."
    },
    {
      name: "What does a product designer need to know?",
      toggle: false,
      content: "I'm here to help if you're searching for a product designer to bring your idea to life or a design partner to help take your business to the next level."
    }
  ]
}
