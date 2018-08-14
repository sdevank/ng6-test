import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {CrawlerService} from '../crawler.service';
import {CrawlerServerService} from '../crawler-server.service';

@Component({
  selector: 'app-crawler-diff',
  templateUrl: './crawler-diff.component.html',
  styleUrls: ['./crawler-diff.component.css']
})
export class CrawlerDiffComponent implements OnInit {

  responseHTML = this.crawlerServer.getHTMLData();

  constructor(private route: ActivatedRoute, private router: Router, private crawlerServer: CrawlerServerService) {
  }

  ngOnInit() {

  }

}
