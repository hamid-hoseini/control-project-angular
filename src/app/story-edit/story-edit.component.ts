import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FirestoreService } from '../firestore.service';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-story-edit',
  templateUrl: './story-edit.component.html',
  styleUrls: ['./story-edit.component.css']
})
export class StoryEditComponent implements OnInit {

  id:string = '';
  storyForm: FormGroup;
  storyNo:string='';
  title:string='';
  description:string='';
  developer:string='';
  release:string='';
  status:string='';
  type:string='';
  branch:string='';
  date:string='';
  releaseDate:string='';
  commit:string='';

  constructor(private router: Router, private route: ActivatedRoute, private fs: FirestoreService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.getStory(this.route.snapshot.params['id']);
    this.storyForm = this.formBuilder.group({
      'storyNo' : [null, Validators.required],
      'title' : [null, Validators.required],
      'status' : [null, Validators.required],
      'type' : [null, Validators.required],
      'release' : [null, Validators.required],
      'developer' : [null, Validators.required],
      'branch' : [null, Validators.required],
      'commit' : [null],
      'date' : [null],
      'releaseDate' : [null],
      'description' : [null]
    });
  }

  getStory(id) {
    this.fs.getStory(id).subscribe(data => {
      this.id = data.key;
      this.storyForm.setValue({
        'storyNo' : data.storyNo,
        'title' : data.title,
        'status' : data.status,
        'type' : data.type,
        'release' : data.release,
        'developer' : data.developer,
        'branch' : data.branch,
        'commit' : data.commit,
        'date' : data.date,
        'releaseDate' : data.releaseDate,
        'description' : data.description
      });
    });
  }

  onFormSubmit(form:NgForm) {
    this.fs.updateStory(this.id, form)
      .subscribe(res => {
          this.router.navigate(['/stories']);
        }, (err) => {
          console.log(err);
        }
      );
  }

  storyDetails() {
    this.router.navigate(['/story-details', this.id]);
  }
}
