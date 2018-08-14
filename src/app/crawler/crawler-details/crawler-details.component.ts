import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';

import {CrawlerService} from '../crawler.service';
import {CrawlerServerService} from '../crawler-server.service';
import {Crawler} from '../crawler.model';
import {CompareCrawler} from '../compareCrawler.model';
import {Response} from '@angular/http';



@Component({
  selector: 'app-crawler-details',
  templateUrl: './crawler-details.component.html',
  styleUrls: ['./crawler-details.component.css']
})
export class CrawlerDetailsComponent implements OnInit {
 crawler: Crawler;
 submitForm: FormGroup;
 compareCrawler: CompareCrawler;

 constructor(private route: ActivatedRoute, private router: Router, private crawlerService: CrawlerService,
 private crawlerServer: CrawlerServerService) {

   this.route.params.subscribe(
     (params: Params) => {
       this.crawler = this.crawlerService.crawlerRunDetails(params['name']);
     }
   );

   this.submitForm = new FormGroup(
     {
       'lastestrun': new FormControl('Currently Not Available!'),
       'previousruns' : new FormControl(null),
       'compareruns' : new FormGroup(
         {
           'starttime': new FormControl(null),
           'endtime': new FormControl(null)
         }
       )
     });
  }

  ngOnInit() {

  }

  onSubmit() {
   console.log(this.submitForm.get('compareruns.starttime'));
  this.compareCrawler = new CompareCrawler(this.crawler.name,
                                            this.submitForm.get('compareruns.starttime').value,
                                            this.submitForm.get('compareruns.endtime').value);
  this.crawlerServer.compareCrawler = this.compareCrawler;
    this.router.navigate(['crawlerDiff'], {relativeTo: this.route} );
  }


}
