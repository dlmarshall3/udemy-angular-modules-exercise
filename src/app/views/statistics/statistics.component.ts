import { Component, Input, OnInit } from '@angular/core';
import { iStatistic } from './statistic';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {
  @Input() data: iStatistic[] = []

  constructor() { }

  ngOnInit(): void {
  }

}
