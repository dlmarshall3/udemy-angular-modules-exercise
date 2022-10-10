import { Component, OnInit } from '@angular/core';
import { iAccordionItem } from './accordion/accordion-item';

@Component({
  selector: 'app-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrls: ['./mods-home.component.css']
})
export class ModsHomeComponent implements OnInit {
  modalOpen = false;
  items: iAccordionItem[] = [
    {title: 'What does Ultraman like to wear on his wrist?', content: 'A schuwatch.'},
    {title: 'Why is everyone scared of Ultraseven?', content: 'Because Ultraseven is incredibly strong. What, did you think I was going to make a seven-eight-nine joke?'},
  ]

  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    this.modalOpen = !this.modalOpen;
  }

}
