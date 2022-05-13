import { StoriesService } from './shared-stories/stories.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.scss']
})
export class StoriesComponent implements OnInit {

  constructor(private storiesService: StoriesService) { }

  allStories: Observable<any> | undefined;

  ngOnInit(): void {
    this.getStories();
  }

  getStories() {
    this.allStories = this.storiesService.getAllStories();
  }

}
