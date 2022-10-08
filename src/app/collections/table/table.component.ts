import { Component, Input, OnInit } from '@angular/core';

import { iData } from 'src/app/shared/data';
import { iHeaders } from 'src/app/shared/headers';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Input() classNames: string = '';
  @Input() data: iData[]  = [];
  @Input() headers: iHeaders[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
