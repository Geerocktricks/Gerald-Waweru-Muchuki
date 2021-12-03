import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { GitHubServiceService } from './git-hub-service.service';
import { FormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { MatSliderModule } from '@angular/material/slider';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatTabsModule} from '@angular/material/tabs';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ResumeComponent } from './components/resume/resume.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ContactComponent } from './components/contact/contact.component';
import { GitCloneComponent } from './components/git-clone/git-clone.component';
import { FollowersComponent } from './components/followers/followers.component';
import { FollowingComponent } from './components/following/following.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AboutMeComponent,
    PageNotFoundComponent,
    ResumeComponent,
    PortfolioComponent,
    ContactComponent,
    GitCloneComponent,
    FollowersComponent,
    FollowingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path: 'home-page', component: HomePageComponent},
      {path: 'about-me', component: AboutMeComponent},
      {path: 'resume', component:ResumeComponent},
      {path: 'portfolio', component:PortfolioComponent},
      {path: 'contact', component:ContactComponent},
      {path: 'github', component:GitCloneComponent},
      {path: 'followers', component:FollowersComponent},
      {path: 'following', component:FollowingComponent},
      {path: '', redirectTo: '/home-page', pathMatch: 'full'},
      {path: '**', component: PageNotFoundComponent},
    ]),
    FontAwesomeModule,
    BrowserAnimationsModule,
    CarouselModule,
    HttpClientModule,
    MatSliderModule,
    MatSidenavModule,
    FormsModule,
    MatTabsModule
  ],
  providers: [
    GitHubServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
