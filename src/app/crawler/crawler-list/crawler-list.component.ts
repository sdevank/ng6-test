import { Component, OnInit } from '@angular/core';

import {Crawler} from '../crawler.model';
import {CrawlerService} from '../crawler.service';

@Component({
  selector: 'app-crawler-list',
  templateUrl: './crawler-list.component.html',
  styleUrls: ['./crawler-list.component.css']
})
export class CrawlerListComponent implements OnInit {
  public crawlers: Crawler[];

  constructor(private crawlerService: CrawlerService) {
    this.crawlers = this.crawlerService.getCrawlers();
  }

  ngOnInit() {
  }

  OnClick() {

  }

}
