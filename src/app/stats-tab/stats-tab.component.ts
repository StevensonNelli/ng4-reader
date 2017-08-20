import { ArticleService } from './../article.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stats-tab',
  templateUrl: './stats-tab.component.html',
  styleUrls: ['./stats-tab.component.scss']
})
export class StatsTabComponent implements OnInit {

  data: any;

    constructor(public articleService: ArticleService) {
        // this.articleService.getFiles().subscribe();
    }

  ngOnInit() {
      this.data = {
            labels: this.articleService.getArticleLabels(),
            datasets: [
                {
                    data: this.articleService.getArticlePostCount(),
                    backgroundColor: [
                        "#FF6384",
                        "#4caa20",
                        "#FFCE56",
                        "#4286f4",
                        "#ad10b2",
                        "#ad850c",
                        "#fc6e2d"
                    ],
                    hoverBackgroundColor: [
                        "#FF6384",
                        "#4caa20",
                        "#FFCE56",
                        "#4286f4",
                        "#ad10b2",
                        "#ad850c",
                        "#fc6e2d"
                    ]
                }]    
            };
  }

}
