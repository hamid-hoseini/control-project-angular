import { Component, OnInit } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { FirestoreService } from '../firestore.service';

@Component({
  selector: 'app-story-list',
  templateUrl: './story-list.component.html',
  styleUrls: ['./story-list.component.css']
})
export class StoryListComponent implements OnInit {

  displayedColumns = ['storyNo', 'title', 'release', 'status'];
  dataSource = new StoryDataSource(this.fs);

  constructor(private fs: FirestoreService) { }

  ngOnInit() {
  }

}
export class StoryDataSource extends DataSource<any> {

  constructor(private fs: FirestoreService) {
    super()
  }

  connect() {
    return this.fs.getStories();
  }

  disconnect() {

  }
}
