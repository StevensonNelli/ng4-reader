import { Component, OnInit, Input } from '@angular/core';
import { ArticleService } from '../article.service';
import { Article } from '../app.model';
import { RouterModule, Router, NavigationEnd } from '@angular/router';
@Component({
	selector: 'app-content',
	templateUrl: './content.component.html',
	styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

	@Input() article: any;
	articles: any = [];
	recentArticle: Article = {};
	activatedTab: any = 0;

	constructor(private articleService: ArticleService, private router: Router) { }

	ngOnInit() { 
		let me = this;
		this.router.events
			.subscribe((event) => {
				if (event instanceof NavigationEnd) {
					let url = event.url;
					let idIndex = url.lastIndexOf("/")
					let id = url.substring(idIndex+1);
					let element;
					// for (let index = this.articles.length; index >= this.articles.length; index--) {
					// 	if(id == this.articles[index].id){
					// 		element = this.articles[index];
					// 	}
					// }
					// var el = this.articles.indexOf(element);
					console.log('NavigationEnd:', this.articles.length);
					
				}
			});
	}
	onTabChange(event) {
		this.router.navigate(['article', this.recentArticle.id]);
	}
	getnavLinks() {
		//let selectedArticles = this.articleService.getSelectedArticles();
		this.recentArticle = this.articleService.getRecentArticle();
		let matched = false;
		if (this.recentArticle) {
			if (this.articles.length == 0) {
				this.articles.push(this.recentArticle);
			} else {

				for (let i = 0; this.articles.length > i; i++) {
					if (this.recentArticle["id"] == this.articles[i].id) {
						matched = true;
					}
				}
				if (!matched) {
					this.articles.push(this.recentArticle);
				}
			}
		}
		return this.articles;
	}
}
