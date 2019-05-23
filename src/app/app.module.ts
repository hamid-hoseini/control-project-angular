import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoryListComponent } from './story-list/story-list.component';
import { StoryShowComponent } from './story-show/story-show.component';
import { StoryAddComponent } from './story-add/story-add.component';
import { StoryEditComponent } from './story-edit/story-edit.component';

const appRoutes: Routes = [
  {
    path: 'stories',
    component: StoryListComponent,
    data: { title: 'Stories List' }
  },
  {
    path: 'story-details/:id',
    component: StoryShowComponent,
    data: { title: 'Story Details' }
  },
  {
    path: 'story-create',
    component: StoryAddComponent,
    data: { title: 'Create Story' }
  },
  {
    path: 'story-edit/:id',
    component: StoryEditComponent,
    data: { title: 'Edit Story' }
  },
  { path: '',
    redirectTo: '/stories',
    pathMatch: 'full'
  }
];


@NgModule({
  declarations: [
    AppComponent,
    StoryListComponent,
    StoryShowComponent,
    StoryAddComponent,
    StoryEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
