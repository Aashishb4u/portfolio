import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  constructor(public router: Router) {

  }

  slideConfig = {"slidesToShow": 2,
    "slidesToScroll": 1,
    "autoplay": true,
    "autoplaySpeed": 2000,
    "pauseOnHover": false,
  };

  slides : any  = [
    {}, {}, {}, {}
  ]

  blogs: any = [
    {
      id: 1,
      name: 'Want To Upgrade Your Brain? Stop Doing These 7 Things',
      time: "15 min",
      datePosted: "Nov 6, 2023",
      category: "development",
      img: "assets/blogs/blog-img-1.jpg"
    },
    {
      id: 2,
      name: 'Want To Upgrade Your Brain? Stop Doing These 7 Things',
      time: "15 min",
      datePosted: "Nov 6, 2023",
      category: "development",
      img: "assets/blogs/blog-img-2.jpg"
    },
    {
      id: 3,
      name: 'Want To Upgrade Your Brain? Stop Doing These 7 Things',
      time: "15 min",
      datePosted: "Nov 6, 2023",
      category: "development",
      img: "assets/blogs/blog-img-3.jpg"
    }
  ];

  educationDetails: any = [
    {
      name: "Bachelor of Engineering (Computers)",
      duration: "2011 - 2016",
      grade: "5.3",
      collegeName: "JSPM College"
    },
    {
      name: "HSC",
      duration: "2009 - 2011",
      grade: "77.83%",
      collegeName: "Pune University"
    },
    {
      name: "SSC",
      duration: "2009",
      grade: "91.76%",
      collegeName: "Pune University"
    },
  ];

  checkBlog(id) {
    console.log(id);
    this.router.navigate(['/blog', id]);
  }
}
