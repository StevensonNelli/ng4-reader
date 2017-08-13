import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { ArticleService } from '../article.service';
import { Article } from '../app.model';
import { RouterModule, Router, NavigationEnd, ActivatedRoute } from '@angular/router';
@Component({
	selector: 'app-content',
	templateUrl: './content.component.html',
	styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

	article: any;
	articles: any[] = [];
	activeTabIndex: number;

	constructor(private articleService: ArticleService, private route: ActivatedRoute, private router: Router) { }

	ngOnInit() {
		this.article = this.route.snapshot.data['article'];
		this.articles.push(this.article);
		this.router.events
			.subscribe((event) => {
				if (event instanceof NavigationEnd) {
					let snap = this.route.snapshot;
					this.article = snap.data['article'];
					let id = snap.params['id'];
					let isStats = event.url.indexOf('stats') !== -1;
					let existingIndex = this.articles.map(s => s.id).indexOf(this.article.id);
					if (existingIndex === -1) {
						this.articles.push(this.article);
						this.activeTabIndex = this.articles.length - 1;
					} else {
						this.activeTabIndex = existingIndex;
					}

				}
			});
	}
	onTabChange(index: number) {
		this.article = this.articles[index];
		this.router.navigate(this.article.id === 'stats' ? ['stats'] : ['article', this.article.id]);
	}
}
