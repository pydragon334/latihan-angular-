import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  i = 0;
  first = 0;
  second = 0;
  jumlah = this.first;
  Hitungan(){
    while(this.i < this.second){
      this.jumlah = this.jumlah * this.first;
    }
  }
}
