import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-total-passanger-cheak-in',
  templateUrl: './total-passanger-cheak-in.component.html',
  styleUrls: ['./total-passanger-cheak-in.component.scss']
})
export class TotalPassangerCheakInComponent implements OnInit {
  @Input() getTotalCheakInArr! : any;
  @Input() getObjFromParent! : any;
  countPassanger: any;
  constructor() { }

  ngOnInit(): void {
    console.log(this.getObjFromParent)
    console.log(this.getTotalCheakInArr.length)

    let count = this.getTotalCheakInArr.filter((element :any) =>{
        return element.checkedIn
    })

    this.countPassanger = count.length
  }


 
}
