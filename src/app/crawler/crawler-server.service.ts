import {Injectable} from '@angular/core';
import {Headers, Http, Response} from '@angular/http';
import 'rxjs/Rx';

import {CompareCrawler} from './compareCrawler.model';

@Injectable()
export class CrawlerServerService {
  compareCrawler: CompareCrawler;

  constructor(private http: Http) { }

  getServerCrawlers() {
    return this.http.get('http://localhost:8085/crawlers/all').map(
      (response: Response) => {
        return response.json();
      }
    );
  }

  getHTMLData() {
    return this.http.post('http://localhost:8085/crawlers/diff', this.compareCrawler).map(
      (response: Response) => {
        return response.text();
    });
  }

}
