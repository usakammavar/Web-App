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
  
  private feedUrl1 = "http://rss.vikatan.com/?cat=aval";  
  private feedUrl2 = "http://rss.vikatan.com/?cat=sakthi";
  private feedUrl3 = "http://rss.cnn.com/rss/edition.rss";
  private feedUrl4 = "http://rss.vikatan.com/?cat=nanayam";
  private feedUrl5 = "http://rss.vikatan.com/?cat=avalkitchen";
  private feedUrl6 = "http://rss.vikatan.com/?cat=news_health";
  
  feeds1: Array<FeedEntry> = [];
  feeds2: Array<FeedEntry> = [];
  feeds3: Array<FeedEntry> = [];
  feeds4: Array<FeedEntry> = [];
  feeds5: Array<FeedEntry> = [];
  feeds6: Array<FeedEntry> = [];

  constructor(private http: Http, private service: NewsService) { }

  ngOnInit() {
    this.refreshFeed();
   
  }

  private refreshFeed() {   
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
