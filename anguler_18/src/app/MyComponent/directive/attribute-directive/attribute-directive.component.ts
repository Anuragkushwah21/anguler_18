import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-attribute-directive',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterLink],
  templateUrl: './attribute-directive.component.html',
  styleUrl: './attribute-directive.component.css'
})
export class AttributeDirectiveComponent {
  divBgColor:string='bg-primary'
  isDiv2Active:boolean=false
  num1:string=''
  num2:string=''
  isActive:boolean=false

  customerStyle:any={
    'color':'white',
    'background-color':'black',
    'width':'200px',
    'height':'200px',
    'border-radius':'50%',
    'text':'center',
    'justify':'center'

  }

  studentList:any[]=[
    {studId:1, gender:'male', totalmarks:'25', name:"AA",city:"Pune",isActive:true},
    {studId:2, gender:'male', totalmarks:'55', name:"BB",city:"Gujrat",isActive:false},
    {studId:3, gender:'female', totalmarks:'65', name:"CC",city:"Maharastra",isActive:true},
    {studId:4, gender:'male', totalmarks:'45', name:"DD",city:"Nagpur",isActive:false},
    {studId:5, gender:'male', totalmarks:'85', name:"EE",city:"Punjab",isActive:false},
    {studId:6, gender:'female', totalmarks:'58', name:"FF",city:"Delhi",isActive:true},
  ]

  adRedClass(){
    this.divBgColor='bg-danger'
  }
  adBlueClass(){
    this.divBgColor='bg-primary'
  }
  toggleDivClass(){
    this.isDiv2Active=!this.isDiv2Active
  }


}
