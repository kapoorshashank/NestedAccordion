import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent {

  flag: boolean = false;
  @Input() data: any;

  open() {
    this.flag = !this.flag;
    console.log(this.flag)
  }

}
