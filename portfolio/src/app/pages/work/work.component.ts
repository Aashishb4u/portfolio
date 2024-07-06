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
      name: "LinkedIn Auto Commenter - Bot",
      category: "Chrome Web Extension | Scrapper",
      img: "assets/projects/linkedinbot.png",
      url: "https://chromewebstore.google.com/detail/linkedin-auto-commenter/pagjldpgebbhhfekjghppoajdmdhbpee"
    },
    {
      name: "Faxoc",
      category: "SaaS App | Front End Development",
      img: "assets/projects/faxoc.png",
      url: "https://www.faxoc.com"
    },
    {
      name: "URO ONE Web Application",
      category: "SaaS App | UI UX Design",
      img: "assets/projects/uro.png",
      url: "https://uro-one.com/home"
    },
    {
      name: "Creative Hand | Web App | PWA",
      category: "SaaS App | UI UX Design",
      img: "assets/projects/creativehand.png",
      url: "https://creativehand.co.in/"
    },
    {
      name: "Sandhyadeep - Web | PWA | Mobile",
      category: "SaaS App | UI UX Design",
      img: "assets/projects/Sandhyadeep.png",
      url: "https://app.sandhyadeep.in/feed"
    },
    {
      name: "Indistays",
      category: "SaaS App | UI UX Design",
      img: "assets/projects/indistays.png",
      url: "https://indistays.com/home"
    },
    {
      name: "Betting Application | Web",
      category: "SaaS App | UI UX Design",
      img: "assets/projects/betting_app.png",
      url: "https://betting-user.creativehand.co.in/  "
    },
    {
      name: "Pune Municipal Corp | GOV",
      category: "SaaS App | UI UX Design",
      img: "assets/projects/pune_municipal.png",
      url: "http://intbi.punecorporation.org"
    },
    {
      name: "Standard Chartered Bank",
      category: "SaaS App | UI UX Design",
      img: "assets/projects/standard_chartered.png",
      url: "https://www.sc.com/en"
    },
    {
      name: "Woliba IO",
      category: "SaaS App | UI UX Design",
      img: "assets/projects/woliba.png",
      url: "https://woliba.io/"
    },
    {
      name: "Cercacor E-commerce",
      category: "SaaS App | UI UX Design",
      img: "assets/projects/cercacor.png",
      url: "https://www.cercacor.com/"
    }
  ];
  scrollToHeader() {
    this.header.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }
}
