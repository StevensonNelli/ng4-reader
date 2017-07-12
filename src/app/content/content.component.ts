import { Component, OnInit, Input } from '@angular/core';
import { ArticleService } from '../article.service';
import { Article } from '../app.models';
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
	
	@Input() article :any ;
	articles: any = [];
	recentArticle:Article = {};
	selectedTab:any = 0;
	constructor(private articleService: ArticleService) { }

	ngOnInit() {
		
	}

	getnavLinks(){
		//let selectedArticles = this.articleService.getSelectedArticles();
		this.recentArticle = this.articleService.getRecentArticle();
		let matched = false;
		if(this.recentArticle) {
			if( this.articles.length == 0) {
				this.articles.push(this.recentArticle);
				this.selectedTab = 0;

			} else {

				for(let i = 0; this.articles.length > i; i++){
					if(this.recentArticle["id"] == this.articles[i].id){
						matched = true;
						this.selectedTab = i
					}
				}
				if(!matched){
					this.articles.push(this.recentArticle);
					this.selectedTab = this.articles.length;
				}
			}
			
			//this.selectedTab = this.recentArticle.id || 0;
		}
		return this.articles;
	}
}
