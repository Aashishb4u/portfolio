import {Inject, Injectable, PLATFORM_ID} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {MatSnackBar} from "@angular/material/snack-bar";
import { Clipboard } from '@angular/cdk/clipboard';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  toggleMode = new BehaviorSubject('light');
  constructor(@Inject(PLATFORM_ID) private platformId: object, public clipboard: Clipboard, public snackBar: MatSnackBar) { }
  websiteData: any = {
    socialMediaLinks: {
      instagram: 'https://www.instagram.com/aashu.bhagwat/',
      facebook: 'https://www.facebook.com/aashish.bhagwat.5/',
      linkedIn: 'https://www.linkedin.com/in/aashish-bhagwat/',
      github: 'https://github.com/Aashishb4u',
    },
    whatsappNumber: '+919403733265'
  }

  copyToClipboard(content: any) {
    this.clipboard.copy(content);
    this.showToast('Copied to Clipboard');
  }

  showToast(message: string): void {
    this.snackBar.open(message, 'Close', {
      duration: 3000,
      verticalPosition: 'top',
    });
  }

  sendMessage(message, whatsAppNumber) {
    const encodedMessage = encodeURI(message);
    const url = `https://api.whatsapp.com/send?phone=91${whatsAppNumber}&text=${encodedMessage}`;
    if (isPlatformBrowser(this.platformId) && typeof window !== 'undefined') {
      window.open(url, '_blank');
    }
  }

  onCallAction() {
    if (isPlatformBrowser(this.platformId) && typeof window !== 'undefined') {
      window.location.href = 'tel:' + this.websiteData.whatsappNumber;
    }
  }

  initiateWhatsapp() {
    const message = 'Hello, I want to send you a message.'; // The pre-filled message
    this.sendMessage(message, this.websiteData.whatsappNumber);
  }

  instagramLink() {
    if (isPlatformBrowser(this.platformId) && typeof window !== 'undefined') {
      const url = this.websiteData.socialMediaLinks.instagram;
      window.open(url, '_blank');
    }
  }

  facebookLink() {
    if (isPlatformBrowser(this.platformId) && typeof window !== 'undefined') {
      const url = this.websiteData.socialMediaLinks.facebook;
      window.open(url, '_blank');
    }
  }

  LinkedInLink() {
    if (isPlatformBrowser(this.platformId) && typeof window !== 'undefined') {
      const url = this.websiteData.socialMediaLinks.linkedIn;
      window.open(url, '_blank');
    }
  }

  githubLink() {
    if (isPlatformBrowser(this.platformId) && typeof window !== 'undefined') {
      const url = this.websiteData.socialMediaLinks.github;
      window.open(url, '_blank');
    }
  }

  scrollToTop() {
    console.log("here");
    window.scrollTo(0, 0);
  }
}
