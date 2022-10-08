import { Component, OnInit } from '@angular/core';
import { iData } from 'src/app/shared/data';
import { iHeaders } from 'src/app/shared/headers';

@Component({
  selector: 'app-collections-home',
  templateUrl: './collections-home.component.html',
  styleUrls: ['./collections-home.component.css']
})
export class CollectionsHomeComponent implements OnInit {
  data: iData[] = [
    {name: 'Ultraman', host: 'Shin Hayata', attack: 'Specium Ray'},
    {name: 'Ultraseven', host: 'Dan Moroboshi', attack: 'Emerium Beam'},
    {name: 'Ultraman Decker', host: 'Kanata Asumi', attack: 'Triple Decker Scram'},
  ];

  headers: iHeaders[] = [
    {key: 'name', label: 'Name'},
    {key: 'host', label: 'Host'},
    {key: 'attack', label: 'Attack'},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
