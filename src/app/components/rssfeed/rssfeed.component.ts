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
  
    public feedUrl1 = "http://rss.cnn.com/rss/cnn_latest.rss";
    public feedUrl2 = "http://rss.nytimes.com/services/xml/rss/nyt/Technology.xml"; 
    public feedUrl3 = "http://www.thehindu.com/news/national/tamil-nadu/feeder/default.rss";
    public feedUrl4 = "http://rss.cnn.com/rss/money_latest.rss";
    public feedUrl5 = "http://rss.cnn.com/rss/cnn_health.rss";    
    public feedUrl6 = "http://rss.cnn.com/rss/cnn_world.rss";

  
  feeds1: Array<FeedEntry> = [];
  feeds2: Array<FeedEntry> = [];
  feeds3: Array<FeedEntry> = [];
  feeds4: Array<FeedEntry> = [];
  feeds5: Array<FeedEntry> = [];
  feeds6: Array<FeedEntry> = [];

  constructor(public http: Http, public service: NewsService) { }

  ngOnInit() {
    this.refreshFeed();
   
  }

  public refreshFeed() {   
    this.service.getFeedContent(this.feedUrl1)
        .subscribe(
            feed => this.feeds1 = feed.items,            
            error => console.log(error));
    
    this.service.getFeedContent(this.feedUrl2)
        .subscribe(
            feed => this.feeds2 = feed.items,           
            error => console.log(error));
    
    this.service.getFeedContent(this.feedUrl3)
        .subscribe(
            feed => this.feeds3 = feed.items,           
            error => console.log(error));
    
    this.service.getFeedContent(this.feedUrl4)
        .subscribe(
            feed => this.feeds4 = feed.items,         
            error => console.log(error));

    this.service.getFeedContent(this.feedUrl5)
        .subscribe(
            feed => this.feeds5 = feed.items,         
            error => console.log(error)); 
        
    this.service.getFeedContent(this.feedUrl6)
        .subscribe(
            feed => this.feeds6 = feed.items,         
            error => console.log(error));  

  }
  
 
 

}
