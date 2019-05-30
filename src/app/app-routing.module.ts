import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StoryListComponent } from './story-list/story-list.component';
import { StoryShowComponent } from './story-show/story-show.component';
import { StoryAddComponent } from './story-add/story-add.component';
import { StoryEditComponent } from './story-edit/story-edit.component';

const routes: Routes = [
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
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
