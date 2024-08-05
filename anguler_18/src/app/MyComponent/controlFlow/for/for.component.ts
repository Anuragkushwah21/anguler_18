import { Component } from '@angular/core';

@Component({
  selector: 'app-for',
  standalone: true,
  imports: [],
  templateUrl: './for.component.html',
  styleUrl: './for.component.css',
})
export class ForComponent {
  cityArray: string[] = ['Pune', 'mumbai', 'nagpur', 'thane'];

  studentList: any[] = [
    { studId: 1, name: 'AA', city: 'Pune', isActive: true },
    { studId: 2, name: 'BB', city: 'Gujarat', isActive: false },
    { studId: 3, name: 'CC', city: 'Maharashtra', isActive: true },
    { studId: 4, name: 'DD', city: 'Nagpur', isActive: false },
    { studId: 5, name: 'EE', city: 'Punjab', isActive: false },
    { studId: 6, name: 'FF', city: 'Delhi', isActive: true },
  ];
}
