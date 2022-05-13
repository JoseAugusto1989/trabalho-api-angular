import { SeriesApiService } from './shared-series/series-api.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html',
  styleUrls: ['./serie.component.scss']
})
export class SerieComponent implements OnInit {

  constructor(private seriesApiService: SeriesApiService) { }

  allSeries: Observable<any> | undefined;

  ngOnInit(): void {
    this.getSeries();
  }

  getSeries() {
    this.allSeries = this.seriesApiService.getAllSeries();
  }

}
