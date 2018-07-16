import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { AppComponent } from './app.component';
import {HttpClientModule, HttpClient} from '@angular/common/http';
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

import { WelcomeComponent } from './welcome/welcome.component';
import { FilterPipe } from './filter.pipe';

import { FilterPipeModule } from 'ngx-filter-pipe';
import { CheckHotelComponent } from './check-hotel/check-hotel.component';


import { ToastrModule } from 'ngx-toastr';
import { CommonModule } from '@angular/common';
import { UploadService } from './upload/upload.service';
import { LoginService } from './login/login.service';
import { PassengerTypeService } from './passenger-type/passenger-type.service';
import { PassangersComponent } from './passenger-type/passengers-type.component';
import { LeisureConsultantsService } from './leisure-consultants/leisure-consultants.service';
import { HotelsService } from './hotels/hotels.service';
import { ButtonComponent } from './travel-list/button/button.component';
import { FindPassangerComponent } from './find-passeanger/find-passenger.component';
import { DropdownComponent } from './travel-list/dropdown/dropdown.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

import { NoopAnimationsModule } from '@angular/platform-browser/animations';



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
    CheckHotelComponent,
    ButtonComponent,
    DropdownComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    NgbModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
    }),
    ToastrModule.forRoot(),
    MiniCSRoutingModule,
    Ng2SmartTableModule,
    FormsModule,
    FilterPipeModule,
    NoopAnimationsModule
  ],
  entryComponents: [ButtonComponent, DropdownComponent],
  providers: [UploadService, LoginService, PassengerTypeService, LeisureConsultantsService, HotelsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
