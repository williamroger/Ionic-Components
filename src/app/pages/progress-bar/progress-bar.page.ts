import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.page.html',
  styleUrls: ['./progress-bar.page.scss'],
})
export class ProgressBarPage implements OnInit {
  porcentagem = 0;

  constructor() { }

  ngOnInit() {
  }

  mudarRange(event) {
    this.porcentagem = event.detail.value / 100;
  }
}
