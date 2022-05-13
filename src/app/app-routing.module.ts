import { AppComponent } from './app.component';
import { StoriesComponent } from './characters/stories/stories.component';
import { SerieComponent } from './characters/series/serie.component';
import { EventsComponent } from './characters/events/events.component';
import { ComicsComponent } from './characters/comics/comics.component';
import { CharactersComponent } from './characters/characters.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'characters', component: CharactersComponent },
  { path: 'comics', component: ComicsComponent },
  { path: 'events', component: EventsComponent },
  { path: 'series', component: SerieComponent },
  { path: 'stories', component: StoriesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
