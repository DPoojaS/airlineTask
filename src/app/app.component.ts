import { Component, OnInit } from '@angular/core';
import { Ipassanger } from './shared/models/passanger';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
 public  newArr : Ipassanger[]  = []
  arr: any;
  ngOnInit(): void {
    
  }
  title = 'airlinePassangerTask';

  passengersList : Ipassanger[]= [{
    id: 1,
    fullname: 'Stephen',
    checkedIn: true,
    checkInDate: 1490742000000,
    children: null
  }, {
    id: 2,
    fullname: 'Rose',
    checkedIn: false,
    checkInDate: null,
    children  : [{ name: 'Ted', age: 12 },{ name: 'Chloe', age: 7 }]
  }, {
    id: 3,
    fullname: 'James',
    checkedIn: true,
    checkInDate: 1491606000000,
    children: null
  }, {
    id: 4,
    fullname: 'Louise',
    checkedIn: true,
    checkInDate: 1488412800000,
    children: [{ name: 'Jessica', age: 1 }]
  }, {
    id: 5,
    fullname: 'Tina',
    checkedIn: false,
    checkInDate: null,
    children: null
  },
  {
    id: 6,
    fullname: 'jiya',
    checkedIn: false,
    checkInDate: null,
    children:  [{ name: 'deny', age: 7 }]
  }
]

gotIdFrompass(event :any){
   this.passengersList.forEach((ele,index) =>{
    if(ele == event){
      // delete this.passengersList[event]
      console.log(index)
      console.log(ele.id)
      this.passengersList.splice(index,1)
    }
  })
  // // console.log(event.id-1)
  // // console.log(this.passengersList.splice(event.id-1,1))
  // this.arr.splice(event,1);
  // console.log(event.id)
  // console.log(event)

 
}
}
