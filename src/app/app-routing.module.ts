import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from './admin.guard';
import { RouteGuard } from './route.guard';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { UploadComponent } from './admin-panel/upload/upload.component';
import { LeisureConsultantsComponent } from './admin-panel/leisure-consultants/leisure-consultants.component';
import { TravelListComponent } from './navbar/travel-list/travel-list.component';
import { HotelsComponent } from './admin-panel/manage-hotels/hotels.component';
import { PassangersComponent } from './admin-panel/passenger-type/passengers-type.component';
import { FindPassangerComponent } from './navbar/find-passeanger/find-passenger.component';
import { CheckHotelComponent } from './navbar/check-hotel/check-hotel.component';

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
