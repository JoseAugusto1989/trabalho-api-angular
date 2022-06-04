import { Observable } from 'rxjs';
import { ComicsApiService } from './comic/shared/comics-api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.css']
})
export class ComicsComponent implements OnInit {

  ListComics: Observable<any>

  constructor(private comicsService: ComicsApiService) { }

  ngOnInit(): void {
    this.getComics()
  }

  getComics() {
    this.ListComics = this.comicsService.getAllComics()
  }

}
