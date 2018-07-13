import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UploadComponent } from './upload/upload.component';
import { LeisureConsultantsComponent } from './leisure-consultants/leisure-consultants.component';
import { TravelListComponent } from './travel-list/travel-list.component';
import { HotelsComponent } from './hotels/hotels.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { CheckHotelComponent } from './check-hotel/check-hotel.component';
import { AdminGuard } from './admin.guard';
import { PassangersComponent } from './passenger-type/passengers-type.component';
import { FindPassangerComponent } from './find-paseanger/find-passenger.component';
import { RouteGuard } from './route.guard';

const routes: Routes = [
    { path: 'login', component: LoginComponent},
    { path: 'upload', component: UploadComponent, canActivate: [AdminGuard]},
    { path: 'consultants', component: LeisureConsultantsComponent, canActivate: [AdminGuard]},
    { path: 'travel-list', component: TravelListComponent, canActivate: [RouteGuard]},
    { path: 'hotels', component: HotelsComponent, canActivate: [AdminGuard]},
    { path: 'passenger-type', component: PassangersComponent, canActivate: [AdminGuard]},
    { path: 'wellcome', component: WelcomeComponent, canActivate: [RouteGuard]},
    { path: 'find-passenger', component: FindPassangerComponent, canActivate: [RouteGuard]},
    { path: 'check-hotel', component: CheckHotelComponent, canActivate: [RouteGuard]},
    { path: '**', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes)],
    exports: [ RouterModule ]
})
export class MiniCSRoutingModule {}
