import {Component, ElementRef, ViewChild} from '@angular/core';
import {SharedService} from "../../services/shared.service";

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrl: './work.component.scss'
})
export class WorkComponent {
  @ViewChild('header', { static: false }) header: ElementRef;
  constructor(public shared: SharedService) {
  }
  p: any = 1;
  projects: any = [
    {
      name: "URO ONE Web Application",
      category: "SaaS App | UI UX Design",
      img: "assets/projects/uro.png",
      url: ""
    },
    {
      name: "Creative Hand | Web App | PWA",
      category: "SaaS App | UI UX Design",
      img: "assets/projects/creativehand.png",
      url: ""
    },
    {
      name: "Sandhyadeep - Web | PWA | Mobile",
      category: "SaaS App | UI UX Design",
      img: "assets/projects/Sandhyadeep.png",
      url: ""
    },
    {
      name: "Indistays",
      category: "SaaS App | UI UX Design",
      img: "assets/projects/indistays.png",
      url: ""
    },
    {
      name: "Betting Application | Web",
      category: "SaaS App | UI UX Design",
      img: "assets/projects/betting_app.png",
      url: ""
    },
    {
      name: "Sandhyadeep - Web | PWA | Mobile",
      category: "SaaS App | UI UX Design",
      img: "assets/projects/Sandhyadeep.png",
      url: ""
    },
    {
      name: "URO ONE Web Application",
      category: "SaaS App | UI UX Design",
      img: "assets/projects/uro.png",
      url: ""
    },
    {
      name: "Creative Hand | Web App | PWA",
      category: "SaaS App | UI UX Design",
      img: "assets/projects/creativehand.png",
      url: ""
    },
    {
      name: "Sandhyadeep - Web | PWA | Mobile",
      category: "SaaS App | UI UX Design",
      img: "assets/projects/Sandhyadeep.png",
      url: ""
    }
  ];
  scrollToHeader() {
    this.header.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }
}
