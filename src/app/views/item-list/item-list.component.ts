import { Component, OnInit, Input } from '@angular/core';
import { iItem } from './item';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {

  @Input() data: iItem[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
