import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {SharedService} from "../../services/shared.service";

@Component({
  selector: 'app-single-blog',
  templateUrl: './single-blog.component.html',
  styleUrl: './single-blog.component.scss'
})
export class SingleBlogComponent implements OnInit {
  @ViewChild('articleImage', { static: false }) articleImage: ElementRef;
  constructor(public router: Router, public route: ActivatedRoute, public shared: SharedService) {

  }
  slideConfig = {"slidesToShow": 2,
    "slidesToScroll": 1,
    "autoplay": true,
    "autoplaySpeed": 2000,
    "pauseOnHover": false,
  };
  blogId: any;
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
  blogDetails: any;

  ngOnInit() {
    this.route.params.subscribe((params: any) => {
      this.blogId = +params['id'];
      this.blogDetails = this.blogs.find(v => v.id === +this.blogId);
      this.articleImage.nativeElement.scrollIntoView({ behavior: 'smooth' });
    });
  }

  checkBlog(id) {
    console.log(id);
    this.router.navigate(['/blog', id]);
  }
}
