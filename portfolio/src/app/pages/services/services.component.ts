import {Component} from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {
  slideConfig = {
    "slidesToShow": 2,
    "slidesToScroll": 1,
    "autoplay": true,
    "autoplaySpeed": 2000,
    "pauseOnHover": false,
  };

  slides: any = [
    {}, {}, {}, {}
  ]

  blogs: any = [
    {
      img: 'assets/blogs/blog-img-1.jpg'
    },
    {
      img: 'assets/blogs/blog-img-2.jpg'
    },
    {
      img: 'assets/blogs/blog-img-3.jpg'
    }
  ]

  technologies: any = [
    {
      name: "Angular",
      img: "assets/expertise/angular.svg"
    },
    {
      name: "React Js",
      img: "assets/expertise/react.png"
    },
    {
      name: "Node Js",
      img: "assets/expertise/nodeJs.png"
    },
    {
      name: "Javascript",
      img: "assets/expertise/JavaScript-logo.png"
    },
    {
      name: "Laravel",
      img: "assets/expertise/laravel.webp"
    },
    {
      name: "Ionic",
      img: "assets/expertise/ionic.png"
    },
    {
      name: "Github",
      img: "assets/expertise/github.png"
    },
    {
      name: "HTML",
      img: "assets/expertise/html.webp"
    },
    {
      name: "CSS",
      img: "assets/expertise/css.png"
    },
    {
      name: "JQuery",
      img: "assets/expertise/jquery.png"
    },
    {
      name: "Mongo Db",
      img: "assets/expertise/mongo.png"
    },
    {
      name: "NGINX",
      img: "assets/expertise/nginx.svg"
    },
    {
      name: "PWA",
      img: "assets/expertise/pwa.webp"
    },
    {
      name: "Wordpress",
      img: "assets/expertise/wordpress.png"
    }
  ];


  faqs = [
    {
      "name": "What services do you offer?",
      "toggle": false,
      "content": "I offer a comprehensive range of web design, development, and deployment services tailored to your unique needs. Whether you need a simple brochure website or a complex ecommerce platform, I'm here to help."
    },
    {
      "name": "How do you approach website design and development projects?",
      "toggle": false,
      "content": "I approach each website design and development project with a focus on user experience, functionality, and visual appeal. I work closely with my clients to understand their goals and requirements, and then create a custom solution that meets their needs."
    },
    {
      "name": "Can you provide examples of your previous work?",
      "toggle": false,
      "content": "Yes, I can provide examples of my previous work upon request. I have worked on a variety of projects ranging from simple brochure websites to complex ecommerce platforms."
    },
    {
      "name": "What is your pricing structure?",
      "toggle": false,
      "content": "My pricing structure is flexible and depends on the scope and complexity of the project. I offer competitive rates and transparent pricing, with no hidden fees."
    },
    {
      "name": "How long does it take to complete a website project?",
      "toggle": false,
      "content": "The time it takes to complete a website project depends on the scope and complexity of the project. I work efficiently to deliver projects on time and within budget."
    },
    {
      "name": "Do you offer website maintenance services?",
      "toggle": false,
      "content": "Yes, I offer website maintenance services to ensure that your website remains up-to-date, secure, and performing optimally."
    },
    {
      "name": "Will my website be mobile-responsive?",
      "toggle": false,
      "content": "Yes, I ensure that all websites I design and develop are mobile-responsive, providing an optimal viewing experience across all devices."
    },
    {
      "name": "What platforms or technologies do you use for development?",
      "toggle": false,
      "content": "I am proficient in a variety of platforms and technologies, including WordPress, Shopify, Magento, HTML/CSS, JavaScript, and more."
    },
    {
      "name": "How do you ensure website security?",
      "toggle": false,
      "content": "I take website security seriously and employ industry best practices to ensure that your website is secure from potential threats and vulnerabilities."
    },
    {
      "name": "Do you provide support after the website is launched?",
      "toggle": false,
      "content": "Yes, I provide ongoing support and maintenance services to ensure that your website remains up-to-date, secure, and performing optimally even after it's launched."
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
}
