import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirestoreService } from '../firestore.service';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-story-add',
  templateUrl: './story-add.component.html',
  styleUrls: ['./story-add.component.css']
})
export class StoryAddComponent implements OnInit {

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

  constructor(private router: Router, private fs: FirestoreService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.storyForm = this.formBuilder.group({
      'storyNo' : [null, Validators.required],
      'title' : [null, Validators.required],
      'developer' : [null, Validators.required],
      'release' : [null, Validators.required],
      'status' : [null, Validators.required],
      'type' : [null, Validators.required],
      'branch' : [null, Validators.required],
      'commit' : [null],
      'date' : [null],
      'releaseDate' : [null],
      'description' : [null, Validators.required]
    });
  }

  onFormSubmit(form:NgForm) {
    this.fs.postStory(form)
      .subscribe(res => {
          let id = res['key'];
          this.router.navigate(['/story-details', id]);
        }, (err) => {
          console.log(err);
        });
  }

}
