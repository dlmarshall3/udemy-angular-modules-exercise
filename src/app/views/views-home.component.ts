import { Component, OnInit } from '@angular/core';
import { iItem } from './item-list/item';

import { iStatistic } from './statistics/statistic';

@Component({
  selector: 'app-views-home',
  templateUrl: './views-home.component.html',
  styleUrls: ['./views-home.component.css']
})
export class ViewsHomeComponent implements OnInit {
  stats: iStatistic[] = [
    {value: 22, label: '# of Users'},
    {value: 900, label: 'Revenue'},
    {value: 50, label: 'Reviews'},
  ];

  items: iItem[] = [
    {image: '/assets/couch.jpeg', title: 'Couch', description: 'It is a couch.'},
    {image: '/assets/dresser.jpeg', title: 'Dresser', description: 'It is a dresser.'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
