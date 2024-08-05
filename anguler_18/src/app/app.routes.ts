import { Routes } from '@angular/router';
import { AddEmployeeComponent } from './MyComponent/add-employee/add-employee.component';
import { DataBindingComponent } from './MyComponent/data-binding/data-binding.component';
import { EmployeeListComponent } from './MyComponent/employee-list/employee-list.component';
import { StructuralDirectiveComponent } from './MyComponent/directive/structural-directive/structural-directive.component';
import { AttributeDirectiveComponent } from './MyComponent/directive/attribute-directive/attribute-directive.component';
import { IfelseComponent } from './MyComponent/controlFlow/ifelse/ifelse.component';
import { ForComponent } from './MyComponent/controlFlow/for/for.component';
import { SwitchComponent } from './MyComponent/controlFlow/switch/switch.component';
import { PipeComponent } from './MyComponent/pipe/pipe.component';

export const routes: Routes = [
  {
    path: 'add-emp',
    component: AddEmployeeComponent,
  },
  {
    path: 'data-binding',
    component: DataBindingComponent,
  },
  {
    path: 'emp-list',
    component: EmployeeListComponent,
  },
  {
    path: 'structural-dir',
    component: StructuralDirectiveComponent,
  },
  {
    path: 'attribute-dir',
    component: AttributeDirectiveComponent,
  },
  {
    path:'if-else',
    component:IfelseComponent
  },
  {
    path:'for',
    component:ForComponent
  },
  {
    path:'switch',
    component:SwitchComponent
  },
  {
    path:'pipe',
    component:PipeComponent
  }
];
