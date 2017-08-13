import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { ArticleService } from './article.service';

@Injectable()
export class ArticleResolver implements Resolve<any> {
  
  constructor(private articleService: ArticleService) {}
  
  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    let id = route.paramMap.get('id');
    if(id === 'stats')
      return Observable.of({
        id: 'stats',
        label: 'Stats'
      }).first();
    
    return this.articleService.getArticleByID(id).first();
  }
}