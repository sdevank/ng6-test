import {Injectable} from '@angular/core';
import {Crawler} from './crawler.model';
import {CrawlerServerService} from './crawler-server.service';
import {Router} from '@angular/router';


@Injectable()
export class CrawlerService {
  private crawlers: Crawler[] = [];
  public responseHTML: any;

  constructor(private crawlerServer: CrawlerServerService, private router: Router) {
  }

  getCrawlers() {
    this.crawlerServer.getServerCrawlers().subscribe(
      (crawlers: Crawler[]) => {
        let index = 0;
        for (const data of crawlers) {
         this.crawlers.push(new Crawler(data.name, data.description, data.previousRuns));
          index++;
        }
      }
    );
    return this.crawlers;
  }

  crawlerRunDetails(crawlerName: string) {
    let crawler: Crawler;
    this.crawlers.forEach(
      (item, index) => {
        if (crawlerName === item.name) {
          crawler = this.crawlers[index];
        }
      }
    );
    return crawler;
  }

}
