import { CharactersApiService } from './character/shared/characters-api.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  ListCharacters: Observable<any>

  constructor(private characterService: CharactersApiService) { }

  /* 
  Será carregada a lista logo que a página for acessada
   */
  ngOnInit(): void {
    this.getCharacters();
  }

  /* 
  Alimentando a variável ListCharacters que é uma lista de personagens, 
  através do método getAllCharacters que se encontrada na apiservice
   */
  getCharacters() {
    this.ListCharacters = this.characterService.getAllCharacters()
  }
}
