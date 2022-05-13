import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ComicsApiServiceService {

  PUBLIC_KEY = '79d5fcd6254ef126e8de3032036fc3f9';
  HASH = '316c2e3a4fad53fed7a1a8103a513085';

  BASE_URL = `http://gateway.marvel.com/v1/public/`;

  URL_COMICS = this.BASE_URL + `comics?ts=1&limit=100&apikey=${this.PUBLIC_KEY}&hash=${this.HASH}`;

  constructor(private httpClient: HttpClient) { }

  getAllComics(): Observable<any> {
       return this.httpClient.get<any>(this.URL_COMICS)
       .pipe(map((data: any) => data.data.results));
     }
}
