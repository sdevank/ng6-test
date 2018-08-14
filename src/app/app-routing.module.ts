import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {CrawlerComponent} from './crawler/crawler.component';
import {CrawlerListComponent} from './crawler/crawler-list/crawler-list.component';
import {CrawlerDetailsComponent} from './crawler/crawler-details/crawler-details.component';
import {CrawlerDiffComponent} from './crawler/crawler-diff/crawler-diff.component';

const appRoutes: Routes = [
  {path: '', redirectTo: '/crawlers', pathMatch: 'full' },
  {path: 'crawlers', component: CrawlerComponent, children: [
    {path: ':name', component: CrawlerDetailsComponent},
    {path: ':name/crawlerDiff', component: CrawlerDiffComponent}
  ]}];

@NgModule ({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
