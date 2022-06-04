import { StoriesComponent } from './stories/stories.component';
import { SeriesComponent } from './series/series.component';
import { EventsComponent } from './events/events.component';
import { ComicsComponent } from './comics/comics.component';
import { CharactersComponent } from './characters/characters.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'characters',
    component: CharactersComponent,
  },
  {
    path: 'comics',
    component: ComicsComponent,
  },
  {
    path: 'events',
    component: EventsComponent,
  },
  {
    path: 'series',
    component: SeriesComponent,
  },
  {
    path: 'stories',
    component: StoriesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
