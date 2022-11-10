import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';



@Component({
  selector: 'app-air-line-pass-dashbord',
  templateUrl: './air-line-pass-dashbord.component.html',
  styleUrls: ['./air-line-pass-dashbord.component.scss']
})
export class AirLinePassDashbordComponent implements OnInit {
  @Input() gotArrayFromApp! : any;
  @Output() sendIdObj : EventEmitter<any> =new EventEmitter<any>()
  constructor() { }

  ngOnInit(): void {
    console.log(this.gotArrayFromApp.length)
  }

  onsendData(eve : any){
    this.sendIdObj.emit(eve);
    console.log(eve)
  }

  
}
