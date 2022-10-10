import { Component, OnInit, Input } from '@angular/core';
import { iAccordionItem } from './accordion-item';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent implements OnInit {
  @Input() items: iAccordionItem[] = [];
  openedItemIndex: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  onClick(index: number){
    if(index === this.openedItemIndex){
      this.openedItemIndex = -1;
    } else {
      this.openedItemIndex = index;
    }
  }

}
