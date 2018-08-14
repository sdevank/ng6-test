import {CrawlerRun} from './crawler-run.model';

export class Crawler {
  constructor(public name: string,
              public description: string,
              public previousRuns: CrawlerRun[]
  ) {

  }
}
