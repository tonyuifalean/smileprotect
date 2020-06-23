import { Component, Output, EventEmitter } from '@angular/core';
import { User } from '../../models';
import { Router } from '@angular/router';
import { AuthenticationService } from '@app/services';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public currentUser: User;
  public showNotification: boolean;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
    public translate: TranslateService
  ) {
    this.showNotification = true;
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
  }

  public logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }

  public onCloseClick(): void {
    this.showNotification = false;
    const content = document.querySelector('.main-content');
    content.classList.add('notification-removed');
  }

  public switchLang(lang: string) {
    this.translate.use(lang);
  }
}
