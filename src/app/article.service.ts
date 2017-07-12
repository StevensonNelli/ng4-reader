import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ArticleService {

	public selectedArticles:any = [];

	public recentSelectedArticle:Object;

    constructor(private http: Http) {}

    getFiles() {
        return this.http.get('http://localhost:4200/assets/data/articles.json')
                    .map(res => res.json().data);
    }
    storeSelectedArticles(records:any) {
    	this.selectedArticles.push(records);
    }
    getSelectedArticles(){
    	return this.selectedArticles;
    }
    getRecentArticle(){
    	return this.recentSelectedArticle;
    }
    storeRecentArticle(records:any) {
    	this.recentSelectedArticle = records;
    }
}
