import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TreeModule,TreeNode } from 'primeng/primeng';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
	files: TreeNode[];
	selectedFiles: TreeNode[];
	msgs: any;
	selectedArticle: any;
    constructor(
        private articleService: ArticleService,
        private router: Router
        ) { }
    
    ngOnInit() {
        this.articleService.getFiles().subscribe(files => this.files = files);
    }
    nodeSelect(event) {
        this.articleService.storeSelectedArticles(this.selectedArticle);
        this.articleService.storeRecentArticle(this.selectedArticle);
        this.router.navigate(['article', this.selectedArticle.id]);
    }
    
    nodeUnselect(event) {
        this.msgs = [];
        this.msgs.push({severity: 'info', summary: 'Node Unselected', detail: event.node.label});
    }

}
