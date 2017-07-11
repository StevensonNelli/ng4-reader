import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
	
	selectedArticle : any = [];

   constructor(private articleService: ArticleService) { }

   ngOnInit() {
   		this.selectedArticle = this.articleService.getRecentArticles();
   }

}
