import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AirLinePassDashbordComponent } from './shared/component/air-line-pass-dashbord/air-line-pass-dashbord.component';
import { PassangerListComponent } from './shared/component/passanger-list/passanger-list.component';
import { PassObjCardComponent } from './shared/component/pass-obj-card/pass-obj-card.component';
import { TotalPassangerCheakInComponent } from './shared/component/total-passanger-cheak-in/total-passanger-cheak-in.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    AirLinePassDashbordComponent,
    PassangerListComponent,
    PassObjCardComponent,
    TotalPassangerCheakInComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
