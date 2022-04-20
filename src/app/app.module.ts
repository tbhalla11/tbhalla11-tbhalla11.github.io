import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AboutComponent } from './about/about.component';
import {Routes} from "@angular/router";
import { ContactComponent } from './contact/contact.component';
import { ProjectsComponent } from './projects/projects.component';
import { FooterComponent } from './footer/footer.component';
import { SocialWidgetsComponent } from './social-widgets/social-widgets.component';
import {ReactiveFormsModule} from "@angular/forms";
import {ContactService} from "./contact.service";
import {HttpClientModule} from "@angular/common/http";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'About', component:AboutComponent},
  {path: 'Projects', component: ProjectsComponent},
  {path: 'Contact', component: ContactComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ProjectsComponent,
    FooterComponent,
    SocialWidgetsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
