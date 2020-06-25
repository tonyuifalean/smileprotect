import { Component, HostListener } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @HostListener('window:scroll', ['$event'])
  public onWindowScroll(e: any) {
    const element = document.querySelector('.navbar');
    const notification = document.querySelector('.notification');
    if ((!!notification && window.pageYOffset > notification.clientHeight) ||
      (!notification && window.pageYOffset > element.clientHeight)) {
      element.classList.add('navbar-layer');
      if (!!notification) {
        notification.classList.add('notification-layer');
      }
    } else {
      element.classList.remove('navbar-layer');
      if (!!notification) {
        notification.classList.remove('notification-layer');
      }
    }
  }

  constructor(protected translate: TranslateService) {
    translate.addLangs(['en', 'ro']);
    translate.setDefaultLang('en');
  }
}
