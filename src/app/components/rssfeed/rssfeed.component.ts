import { Component, OnInit, Input } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { NewsService } from './../../services/news.service';
import { FeedEntry } from './../../model/feed-entry';

@Component({
  selector: 'app-rssfeed',
  templateUrl: './rssfeed.component.html',
  styleUrls: ['./rssfeed.component.css']
})
export class RssfeedComponent implements OnInit {
 
  private feedUrl = "http://feeds.feedburner.com/dinamalar/Front_page_news?format=xml";
  

  feeds: Array<FeedEntry> = [];

  constructor(private http: Http, private service: NewsService) { }

  ngOnInit() {
    this.refreshFeed();
   
  }

  private refreshFeed() {
    this.service.getFeedContent(this.feedUrl)
        .subscribe(
            feed => this.feeds = feed.items,           
            error => console.log(error));
  }
  
 
 

}
