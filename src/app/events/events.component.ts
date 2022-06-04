import { EventsApiService } from './event/shared/events-api.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css'],
})
export class EventsComponent implements OnInit {
  ListaEvents: Observable<any>;

  constructor(private eventsService: EventsApiService) {}

  ngOnInit(): void {
    this.getEvents();
  }

  getEvents() {
    this.ListaEvents = this.eventsService.getAllEvents();
  }
}
