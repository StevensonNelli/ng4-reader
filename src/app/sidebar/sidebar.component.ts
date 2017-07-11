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
    constructor(private articleService: ArticleService) {

    }
    
    ngOnInit() {
        this.articleService.getFiles().subscribe(files => this.files = files);
    }
    nodeSelect(event) {
        this.msgs = [];
        this.msgs.push({severity: 'info', summary: 'Node Selected', detail: event.node.label});
    }
    
    nodeUnselect(event) {
        this.msgs = [];
        this.msgs.push({severity: 'info', summary: 'Node Unselected', detail: event.node.label});
    }

}
