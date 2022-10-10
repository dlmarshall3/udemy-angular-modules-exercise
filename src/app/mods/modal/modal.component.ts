import { Component, OnInit, ElementRef, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  @Output() close = new EventEmitter();
  MODAL = this.elementRef.nativeElement;

  constructor(private elementRef: ElementRef) { }

  ngOnInit(): void {
    document.body.appendChild(this.MODAL);
  }

  ngOnDestroy(){
    this.MODAL.remove();
  }

  onCloseClick(){
    this.close.emit();
  }

}
