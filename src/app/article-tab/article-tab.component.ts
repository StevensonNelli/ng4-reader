import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-article-tab',
  templateUrl: './article-tab.component.html',
  styleUrls: ['./article-tab.component.scss']
})
export class ArticleTabComponent implements OnInit {

  @Input() article:any;
  articleList:any = [];
  articleID:any;
  isListView:boolean = false;
  isCardView:boolean = true;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(
			params => {
				this.articleID = params['id'];
				console.log(this.articleID);
			}
		);
  }
  ngOnChanges(changes:SimpleChanges) {
    let currentRec;
    let prevRec;
    for (let propName in changes) {
      let chng = changes[propName];
      currentRec  = chng.currentValue;
      prevRec = chng.previousValue;
    }
    if(currentRec.hasOwnProperty("children") && !currentRec.hasOwnProperty("type")){
      this.isListView = false;
      this.isCardView = true;
      this.articleList = currentRec.children;
    }else{
      this.isListView = true;
      this.isCardView = false;
      this.article = currentRec;
    }
  }

}
