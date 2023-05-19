import { Component } from '@angular/core';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styles: [
  ]
})
export class DataComponent {

  public contador: number = 0;

  public urlImg: string = "https://angular.io/assets/images/logos/angular/angular.svg";

  Incremente(){
    this.contador++;
  }
}
