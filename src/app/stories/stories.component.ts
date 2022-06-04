import { StoriesApiService } from './storie/shared/stories-api.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.css'],
})
export class StoriesComponent implements OnInit {
  ListStories: Observable<any>;
  constructor(private storiesService: StoriesApiService) {}

  ngOnInit(): void {
    this.getStories();
  }

  getStories() {
    this.ListStories = this.storiesService.getAllStories();
  }
}
