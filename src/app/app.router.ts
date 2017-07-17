import { ContentComponent } from './content/content.component';
import { ArticleTabComponent } from './article-tab/article-tab.component';

import { RouterModule, Route } from '@angular/router';

let routes : Route[] = [{
    path:'',
    pathMatch:'full',
    redirectTo:'article'
},{
    path:'article',
    component:ContentComponent,
    children:[{
        path:'',
        pathMatch:'full',
        redirectTo:'all'
    },{
        path:':id',
        component:ArticleTabComponent
    }]
}];

export default RouterModule.forRoot(routes);