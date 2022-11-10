import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import * as moment from 'moment';
@Component({
  selector: 'app-pass-obj-card',
  templateUrl: './pass-obj-card.component.html',
  styleUrls: ['./pass-obj-card.component.scss']
})
export class PassObjCardComponent implements OnInit {
  @Input() getObj! : any;
  @Output() sendObj : EventEmitter<any> =new EventEmitter<any>();
  public flag :boolean =  true
  constructor() { }

  ngOnInit(): void {
    // if(this.getObj.checkInDate === null){
    //   this.getObj.checkInDate = 'Not cheked In'
    // }else{
    //   moment(this.getObj.checkInDate,  "YYYYMMDD")
    // }
    // // console.log(this.getObj.children)
    // this.sendObj.emit(this.getObj.checkInDate)

    // if(this.getObj.children=== null){
    //   this.getObj.children = 0;
    // }else{
    //   console.log(this.getObj.children.length)
    // }
    // this.sendObj.emit(this.getObj.children.length)
  }
  onKeyup(event : any){
    console.log(event.target.value)
    let input = event.target.value;
    this.getObj.fullname = input
  }
  onEdit(event:Event){
    this.flag = !this.flag; 
    
  }
  onRemove(){
    this.sendObj.emit(this.getObj);
  }
  onUpdate(event:Event){
    this.flag = !this.flag
  }
 
}
