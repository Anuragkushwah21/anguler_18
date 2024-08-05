import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-structural-directive',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './structural-directive.component.html',
  styleUrl: './structural-directive.component.css',
})
export class StructuralDirectiveComponent {
  isdiv1Visiable: boolean = true;
  idDiv2Visiable:boolean=false

  num1:string='';
  num2:string='';
  isActive:boolean=false
  selectedState:string=""

  constructor (private router:Router){

  }
  cityArray:string[]=['Pune','mumbai','nagpur','thane']

  studentList:any[]=[
    {studId:1, name:"AA",city:"Pune",isActive:true},
    {studId:2, name:"BB",city:"Gujrat",isActive:false},
    {studId:3, name:"CC",city:"Maharastra",isActive:true},
    {studId:4, name:"DD",city:"Nagpur",isActive:false},
    {studId:5, name:"EE",city:"Punjab",isActive:false},
    {studId:6, name:"FF",city:"Delhi",isActive:true},
  ]
  navigateToAttribute(){
    this.router.navigateByUrl("attribute-dir")
  }



  showDiv1() {
    this.isdiv1Visiable = true;
  }

  hideDiv1() {
    this.isdiv1Visiable = false;
  }

  toggleDiv2() {
    this.idDiv2Visiable = !this.idDiv2Visiable;

    // if (this.idDiv2Visiable == true) {
    //   this.idDiv2Visiable = false;
    // } else {
    //   this.idDiv2Visiable = true;
    // }
  }
}
