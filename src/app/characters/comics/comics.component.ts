import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ComicsApiServiceService } from './shared-comics/comics-api-service.';

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.scss']
})
export class ComicsComponent implements OnInit {

  constructor(private comicService: ComicsApiServiceService) { }

  allComics: Observable<any> | undefined;

  ngOnInit(): void {
    this.getComics();
  }

  getComics() {
    this.allComics = this.comicService.getAllComics();
  }

}
