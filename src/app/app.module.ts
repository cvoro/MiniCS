import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { AppComponent } from './app.component';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { MiniCSRoutingModule } from './app-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { SafeHtmlPipe } from './safeHTML.pipe';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { WelcomeComponent } from './welcome/welcome.component';
import { FilterPipe } from './filter.pipe';
import { FilterPipeModule } from 'ngx-filter-pipe';
import { ToastrModule } from 'ngx-toastr';
import { CommonModule } from '@angular/common';
import { LoginService } from './login/login.service';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AngularDateTimePickerModule } from 'angular2-datetimepicker';
import { UploadComponent } from './admin-panel/upload/upload.component';
import { LeisureConsultantsComponent } from './admin-panel/leisure-consultants/leisure-consultants.component';
import { TravelListComponent } from './navbar/travel-list/travel-list.component';
import { HotelsComponent } from './admin-panel/manage-hotels/hotels.component';
import { PassangersComponent } from './admin-panel/passenger-type/passengers-type.component';
import { FindPassangerComponent } from './navbar/find-passeanger/find-passenger.component';
import { CheckHotelComponent } from './navbar/check-hotel/check-hotel.component';
import { ButtonComponent } from './navbar/travel-list/button/button.component';
import { DropdownComponent } from './navbar/travel-list/dropdown/dropdown.component';
import { PasswordComponent } from './admin-panel/leisure-consultants/password/password.component';
import { UserStateComponent } from './navbar/travel-list/user-state/user-state.component';
import { UploadService } from './admin-panel/upload/upload.service';
import { PassengerTypeService } from './admin-panel/passenger-type/passenger-type.service';
import { LeisureConsultantsService } from './admin-panel/leisure-consultants/leisure-consultants.service';
import { HotelsService } from './admin-panel/manage-hotels/hotels.service';
import { DateTimeComponent } from './navbar/travel-list/datetime/datetime.component';
import { PickUpTimeComponent } from './navbar/travel-list/pick-up-time/pick-up-time.component';

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
    CheckHotelComponent,
    ButtonComponent,
    DropdownComponent,
    PasswordComponent,
    UserStateComponent,
    PickUpTimeComponent,
    DateTimeComponent
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
    NoopAnimationsModule,
    AngularDateTimePickerModule
  ],
  entryComponents: [
    ButtonComponent,
    DropdownComponent,
    PasswordComponent,
    UserStateComponent,
    DateTimeComponent,
    PickUpTimeComponent], // all components from ng2 smart table
  providers: [UploadService, LoginService, PassengerTypeService, LeisureConsultantsService, HotelsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
