import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UploadComponent } from './upload/upload.component';
import { LeisureConsultantsComponent } from './leisure-consultants/leisure-consultants.component';
import { TravelListComponent } from './travel-list/travel-list.component';
import { HotelsComponent } from './hotels/hotels.component';
import { PassangersComponent } from './passangers/passangers.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { FindPassangerComponent } from './find-passanger/find-passanger.component';
import { CheckHotelComponent } from './check-hotel/check-hotel.component';
import { AdminGuard } from './admin.guard';

const routes: Routes = [
    { path: 'login', component: LoginComponent},
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'upload', component: UploadComponent, canActivate: [AdminGuard]},
    { path: 'consultants', component: LeisureConsultantsComponent, canActivate: [AdminGuard]},
    { path: 'travel-list', component: TravelListComponent},
    { path: 'hotels', component: HotelsComponent, canActivate: [AdminGuard]},
    { path: 'passangers', component: PassangersComponent, canActivate: [AdminGuard]},
    { path: 'wellcome', component: WelcomeComponent},
    { path: 'find-passanger', component: FindPassangerComponent},
    { path: 'check-hotel', component: CheckHotelComponent}
];

@NgModule({
    imports: [ RouterModule.forRoot(routes)],
    exports: [ RouterModule ]
})
export class MiniCSRoutingModule {}
