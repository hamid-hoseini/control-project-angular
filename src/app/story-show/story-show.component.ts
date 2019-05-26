import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FirestoreService } from '../firestore.service';

@Component({
  selector: 'app-story-show',
  templateUrl: './story-show.component.html',
  styleUrls: ['./story-show.component.css']
})
export class StoryShowComponent implements OnInit {

  story = {};  
  constructor(private route: ActivatedRoute, private router: Router, private fs: FirestoreService) { }

  ngOnInit() {
    this.getStoryDetails(this.route.snapshot.params['id']);
  }

  getStoryDetails(id) {
    this.fs.getStory(id)
      .subscribe(data => {
        console.log(data);
        this.story = data;
      });
  }
}
