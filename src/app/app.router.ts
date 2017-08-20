import { ContentComponent } from './content/content.component';
import { ArticleTabComponent } from './article-tab/article-tab.component';
import { StatsTabComponent } from './stats-tab/stats-tab.component';
import { ArticleResolver } from './article.resolve';

import { RouterModule, Route } from '@angular/router';

let routes: Route[] = [{
    path: '',
    pathMatch: 'full',
    redirectTo: 'article/all'
}, {
    path: 'article/:id',
    component: ContentComponent,
    resolve: {
        article: ArticleResolver
    }
}];

export const AppRouterModule = RouterModule.forRoot(routes);
//Getting issue with below line #Refs https://github.com/angular/angular-cli/issues/3826
///export default RouterModule.forRoot(routes);