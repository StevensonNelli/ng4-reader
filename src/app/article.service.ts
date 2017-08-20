import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { ReplaySubject, Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class ArticleService {

	public selectedArticles:any = [];

    public recentSelectedArticle:Object;
    
    private articles$: ReplaySubject<any>;
    articlesMap: any ={};
    articleLabels:any = [];
    articlePostCount:any = [];
    
    constructor(private http: Http) {
        this.getFiles().subscribe(articles => {
            //Stats chart data
            articles[0].children.forEach(element => {
                this.articleLabels.push(element.label);
                this.articlePostCount.push(element.post_count)
            });
            let myFun = (articles:any) => {

                for (let i = 0; i < articles.length; i++) {
                    //let obj = {};
                    if (articles[i].children) {
                        if (articles[i].id !== 0 && !articles[i].id) {
                            articles[i].id = Math.floor(Math.random() * 2000);
                        }
                        this.articlesMap[articles[i].id] = articles[i]
                        //articlesArray.push(obj);
                        myFun(articles[i].children);
                    } else {
                        if (articles[i].id !== 0 && !articles[i].id) {
                            articles[i].id = Math.floor(Math.random() * 4000);
                        }
                        this.articlesMap[articles[i].id] = articles[i]
                        //articlesArray.push(obj);
                    }
                    
                }
           }
            myFun(articles);
        });
    }

    getFiles() {
        if(!this.articles$)
            this._getFiles();
        return this.articles$;
    }
    _getFiles() {
        this.articles$ = new ReplaySubject(1);
        this.http.get('http://localhost:4200/assets/data/articles.json')
        .map(res => res.json().data)
        .subscribe(articles => this.articles$.next(articles));
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
    getArticleByID(id: string){
        return this.getFiles().flatMap(articles => {
            let selectedArticle;
            if(id === 'all') {
                selectedArticle = this.articlesMap[0];
            } else {
                selectedArticle = this.articlesMap[id];
            }
            return Observable.of(selectedArticle);
        });
    }
    getArticleLabels(){
        return this.articleLabels;
    }
    getArticlePostCount(){
        return this.articlePostCount;
    }
}
