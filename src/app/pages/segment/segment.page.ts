import { DataService } from 'src/app/services/data.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSegment } from '@ionic/angular';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.page.html',
  styleUrls: ['./segment.page.scss'],
})
export class SegmentPage implements OnInit {
  @ViewChild(IonSegment) segment: IonSegment;
  superHeroes: Observable<any>;
  publisher = '';

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.segment.value = 'todos';
    this.superHeroes = this.dataService.getHeroes();
  }

  segmentChanged(event) {
    const valorSegment = event.detail.value;
    
    if (valorSegment === 'todos') {
      this.publisher = '';
      return;
    }

    this.publisher = valorSegment;
  }
}
