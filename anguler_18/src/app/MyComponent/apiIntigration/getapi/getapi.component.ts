import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-getapi',
  standalone: true,
  imports: [],
  templateUrl: './getapi.component.html',
  styleUrl: './getapi.component.css',
})
export class GetapiComponent {
  userList: any[] = [];

  constructor(private http: HttpClient) {}
  getAllUser() {
    debugger;
    this.http
      .get('https://jsonplaceholder.typicode.com/posts')
      .subscribe((res: any) => {
        this.userList = res;
      });
  }
}
