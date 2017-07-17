import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { AppRouterModule } from './app.router';

import { AppComponent } from './app.component';
import 'hammerjs';
import { ContentComponent } from './content/content.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TopbarComponent } from './topbar/topbar.component';
import { ArticleService } from './article.service';
import { SharedModule, DataTableModule, TreeModule } from 'primeng/primeng';
import { ArticleTabComponent } from './article-tab/article-tab.component';
import { ThemePickerComponent } from './theme-picker/theme-picker.component';
import { LangPickerComponent } from './lang-picker/lang-picker.component';

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    SidebarComponent,
    ContentComponent,
    ArticleTabComponent,
    ThemePickerComponent,
    LangPickerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    MaterialModule,
    SharedModule,
    TreeModule,
    AppRouterModule,
    DataTableModule
  ],
  providers: [ArticleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
