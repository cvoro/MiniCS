import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { AppComponent } from './app.component';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { MiniCSRoutingModule } from './app-routing.module';
import { UploadComponent } from './upload/upload.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LeisureConsultantsComponent } from './leisure-consultants/leisure-consultants.component';


import { FormsModule } from '@angular/forms';
import { SafeHtmlPipe } from './safeHTML.pipe';

import { Ng2SmartTableModule } from 'ng2-smart-table';
import { TravelListComponent } from './travel-list/travel-list.component';
import { HotelsComponent } from './hotels/hotels.component';
import { PassangersComponent } from './passangers/passangers.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { FindPassangerComponent } from './find-passanger/find-passanger.component';
import { FilterPipe } from './filter.pipe';

import { FilterPipeModule } from 'ngx-filter-pipe';
import { CheckHotelComponent } from './check-hotel/check-hotel.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UploadComponent,
    NavbarComponent,
    LeisureConsultantsComponent,
    SafeHtmlPipe,
    TravelListComponent,
    HotelsComponent,
    PassangersComponent,
    WelcomeComponent,
    FindPassangerComponent,
    FilterPipe,
    CheckHotelComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
    }),
    BrowserAnimationsModule,
    MiniCSRoutingModule,
    Ng2SmartTableModule,
    FormsModule,
    FilterPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
