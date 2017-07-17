import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-article-tab',
  templateUrl: './article-tab.component.html',
  styleUrls: ['./article-tab.component.scss']
})
export class ArticleTabComponent implements OnInit {

  @Input() article:any;
  articleID:any;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(
			params => {
				this.articleID = params['id'];
				console.log(this.articleID);
			}
		);
  }

}
