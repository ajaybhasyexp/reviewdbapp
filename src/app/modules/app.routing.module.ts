import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from '../components/about/about.component';
import { ContactComponent } from '../components/contact/contact.component';
import { PageNotFoundComponent } from '../components/page-not-found/page-not-found.component'
import { HomeComponent } from '../components/home/home.component';
import { WriteReviewComponent } from '../components/write-review/write-review.component';
import {LoginComponent} from '../components/login/login.component';
import {SignupComponent} from '../components/signup/signup.component';

import { AuthGuard } from "../auth.guard";

const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home/:userName', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'write-review', component: WriteReviewComponent, canActivate: [AuthGuard] },
    { path: '', component: HomeComponent },
    { path: '*', component: PageNotFoundComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {

}