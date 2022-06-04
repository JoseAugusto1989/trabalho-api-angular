import { SeriesApiService } from './serie/shared/series-api.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css'],
})
export class SeriesComponent implements OnInit {
  ListSeries: Observable<any>;

  constructor(private seriesService: SeriesApiService) {}

  ngOnInit(): void {
    this.getSeries();
  }

  getSeries() {
    this.ListSeries = this.seriesService.getAllSeries();
  }
}
