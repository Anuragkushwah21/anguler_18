import { Component, signal } from '@angular/core';
import {FormsModule} from'@angular/forms'

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css',
})
export class DataBindingComponent {
  //variable declearation isi ke andr hoga
  //typescript me class yhi define hoti h
  //isme 4 datatype hote h
  // string,number,boolean,date

  courseName: string = 'Angular-18'; //direct variable declearation with initilization
  stateName:string="Maharashtra"
  inputType = 'checkbox'; //direct variable declearation
  inputTypes = 'radio';
  myClassName:string='bg-primary';
  RollNo: number = 122;
  isIndian: boolean = false; //true 2 hi value  hoti h
  currentDate: Date = new Date();

  //signal
  firstName = signal("Anurag Kushwah");

  constructor() {

  }
  changeClassName(){
    this.courseName="React Js"
    this.firstName.set("Kushwah Anurag")
  }

  showAlert(message:string){
    alert(message)
  }
}
