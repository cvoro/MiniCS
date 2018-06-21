import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  admin;
  loggedIn;

  constructor(private translate: TranslateService, private router: Router) {
    translate.setDefaultLang('fa_FA');
    setInterval(() => {
      if (localStorage.getItem('loggedInAs') === 'admin'){
        this.admin = true;
        this.loggedIn = true;
      } else {
        this.admin = false;
        this.loggedIn = false;
      }

      if(localStorage.getItem('loggedInAs')) {
        this.loggedIn = true;
      }
    }, 100);
  }

  ngOnInit() {}

  changeLang(lang) {
    this.translate.use(lang);
  }

  logout() {
    localStorage.removeItem('loggedInAs');
    this.router.navigate(['/login']);
  }
}
