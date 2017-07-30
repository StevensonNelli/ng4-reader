import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { ArticleService } from './article.service';

@Injectable()
export class ArticleResolver implements Resolve<any> {
  
  constructor(private articleService: ArticleService) {}
  
  resolve(route: ActivatedRouteSnapshot) {
    return this.articleService.getArticleByID(route.params['id']);
  }
}