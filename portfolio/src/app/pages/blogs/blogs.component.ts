import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrl: './blogs.component.scss'
})
export class BlogsComponent {
  constructor(public router: Router) {
  }
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


  checkBlog(id) {
    console.log(id);
    this.router.navigate(['/blog', id]);
  }
}
