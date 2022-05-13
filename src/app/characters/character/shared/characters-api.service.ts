import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CharactersApiService {

  PUBLIC_KEY = '79d5fcd6254ef126e8de3032036fc3f9';
  HASH = '316c2e3a4fad53fed7a1a8103a513085';

  BASE_URL = `http://gateway.marvel.com/v1/public/`;

  URL_CHARACTERS = this.BASE_URL + `characters?ts=1&limit=100&apikey=${this.PUBLIC_KEY}&hash=${this.HASH}`;

  constructor(private httpClient: HttpClient) { }

  getAllCharacters(): Observable<any> {
    return this.httpClient.get<any>(this.URL_CHARACTERS)
    .pipe(map((data: any) => data.data.results));
  }

}
