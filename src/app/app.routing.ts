import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';

import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ServiceComponent } from './components/service/service.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { ForumsComponent } from './components/forums/forums.component';
import { ContactComponent } from './components/contact/contact.component';
import { DonationComponent } from './components/donation/donation.component';
import { RssfeedComponent } from './components/rssfeed/rssfeed.component';
import {MatrimonalComponent} from './components/matrimonal/matrimonal.component';
import { MembersComponent } from './components/members/members.component';
import { RegisterComponent } from './components/register/register.component';
import {EmploymentComponent} from './components/employment/employment.component'
import {EducationComponent} from './components/education/education.component'
import { FinancialComponent } from './components/financial/financial.component';
import { SpecialComponent } from './components/special/special.component';
import { MagazineComponent} from './components/magazine/magazine.component'

export const AppRoutes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'login', component:LoginComponent},
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'service', component: ServiceComponent },
    { path: 'gallery', component: GalleryComponent },
    { path: 'forums', component: ForumsComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'donation', component: DonationComponent },
    { path: 'rssfeed', component: RssfeedComponent },
    { path: 'matrimonal', component: MatrimonalComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'memberdir', component: MembersComponent },
    { path: 'employment', component: EmploymentComponent },
    { path: 'education', component: EducationComponent },
    { path: 'finance', component:FinancialComponent},
    {path:'special', component:SpecialComponent},
    {path: 'magazine', component:MagazineComponent}
];

export const ROUTING: ModuleWithProviders = RouterModule.forRoot(AppRoutes);
