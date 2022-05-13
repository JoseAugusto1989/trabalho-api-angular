import { EventsApiService } from './shared-events/events-api.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  constructor(private eventsService: EventsApiService) { }

  allEvents: Observable<any> | undefined;

  ngOnInit(): void {
    this.getEvents();
  }

  getEvents() {
    this.allEvents = this.eventsService.getAllEvents();
  }

}
