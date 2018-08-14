import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import {Crawler} from '../crawler.model';

@Component({
  selector: 'app-crawler-web',
  templateUrl: './crawler-web.component.html',
  styleUrls: ['./crawler-web.component.css']
})
export class CrawlerWebComponent implements OnInit {
@Input('crawlerWeb') crawler: Crawler;

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
  }

  OnCrawlerClick() {
    this.router.navigate([this.crawler.name], {relativeTo: this.route});
  }

}
