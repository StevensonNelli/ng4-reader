import { Component, OnInit } from '@angular/core';
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
    constructor(private articleService: ArticleService) {

    }
    
    ngOnInit() {
        this.articleService.getFiles().subscribe(files => this.files = files);
    }
    nodeSelect(event) {
        this.articleService.storeSelectedArticles(this.selectedArticle);
        this.articleService.storeRecentArticle(this.selectedArticle);
    }
    
    nodeUnselect(event) {
        this.msgs = [];
        this.msgs.push({severity: 'info', summary: 'Node Unselected', detail: event.node.label});
    }

}
