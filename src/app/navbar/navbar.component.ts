import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  admin;
  loggedIn;
  loggedREP;

  constructor(private translate: TranslateService, private router: Router, private toastr: ToastrService) {
    translate.setDefaultLang('fa_FA');
    translate.use('fa_FA');
    setInterval(() => {
      if (localStorage.getItem('loggedInAs') === 'admin'){
        this.admin = true;
        this.loggedIn = true;
      } else {
        this.admin = false;
        this.loggedIn = false;
      }

      if (localStorage.getItem('loggedInAs')) {
        this.loggedIn = true;
      }

      if (localStorage.getItem('loggedInAs') != 'rep') {
        this.loggedREP = false;
      } else {
        this.loggedREP = true;
      }
    }, 300);
  }

  ngOnInit() {}

  changeLang(lang) {
    this.translate.use(lang);
  }

  logout() {
    localStorage.removeItem('loggedInAs');
    this.router.navigate(['/login']);
    this.toastr.error('Logged out!');
  }
}
