import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private translate: TranslateService, private router: Router) {
    translate.setDefaultLang('fa_FA');
  }

  ngOnInit() {}

  changeLang(lang) {
    this.translate.use(lang);
  }

  logout() {
    this.router.navigate(['/login']);
  }
}
