import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';


import { AppComponent } from './app.component';
import { CrawlerComponent } from './crawler/crawler.component';
import { HeaderComponent } from './header/header.component';
import { CrawlerListComponent } from './crawler/crawler-list/crawler-list.component';
import { CrawlerDetailsComponent } from './crawler/crawler-details/crawler-details.component';
import { CrawlerWebComponent } from './crawler/crawler-web/crawler-web.component';
import {CrawlerService} from './crawler/crawler.service';
import { CrawlerDiffComponent } from './crawler/crawler-diff/crawler-diff.component';
import {CrawlerServerService} from './crawler/crawler-server.service';
import {AppRoutingModule} from './app-routing.module';




@NgModule({
  declarations: [
    AppComponent,
    CrawlerComponent,
    HeaderComponent,
    CrawlerListComponent,
    CrawlerDetailsComponent,
    CrawlerWebComponent,
    CrawlerDiffComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [CrawlerServerService, CrawlerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
