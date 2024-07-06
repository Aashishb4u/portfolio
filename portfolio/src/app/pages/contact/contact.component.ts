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
      name: "What services do you offer?",
      toggle: false,
      content: "We offer a range of services including web development, mobile app development, UI/UX design, and digital marketing solutions."
    },
    {
      name: "How long does it take to develop a website?",
      toggle: false,
      content: "The timeline for developing a website depends on the complexity and requirements of the project. On average, it can take anywhere from 4 to 12 weeks from initial consultation to launch."
    },
    {
      name: "Do you provide ongoing maintenance and support?",
      toggle: false,
      content: "Yes, we offer ongoing maintenance and support services to ensure your website remains up-to-date, secure, and functioning smoothly."
    },
    {
      name: "Can you help with SEO for my website?",
      toggle: false,
      content: "Absolutely! We provide SEO services to improve your website's visibility on search engines and drive organic traffic to your site."
    },
    {
      name: "What is the cost of developing a mobile app?",
      toggle: false,
      content: "The cost of developing a mobile app varies based on the app's features, platform, and complexity. We offer a detailed consultation to provide an accurate estimate based on your specific requirements."
    },
    {
      name: "Do you work with all types of businesses?",
      toggle: false,
      content: "Yes, we work with a variety of businesses, from startups to large enterprises, across different industries to deliver tailored solutions that meet their unique needs."
    },
    {
      name: "What technologies do you use for web development?",
      toggle: false,
      content: "We use a range of modern technologies and frameworks such as HTML5, CSS3, JavaScript, React, Angular, Vue.js, Node.js, and more, depending on the project's requirements."
    },
    {
      name: "How do you ensure the security of the websites you develop?",
      toggle: false,
      content: "We implement best practices for web security, including regular updates, secure coding standards, SSL certificates, and thorough testing to ensure your website is protected against vulnerabilities."
    },
    {
      name: "Can you redesign my existing website?",
      toggle: false,
      content: "Yes, we offer website redesign services to update and improve the design, functionality, and performance of your existing site."
    },
    {
      name: "How do we get started?",
      toggle: false,
      content: "To get started, you can contact us through our website's contact form or give us a call. We'll discuss your project requirements and provide a customized solution tailored to your needs."
    }
  ];

}
