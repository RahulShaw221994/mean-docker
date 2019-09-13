import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  API = 'http://localhost:3000';
  data: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getAllPeople();
  }
  addPerson(name, age) {
    this.http.post(`${this.API}/users`, {name, age})
      .subscribe(() => {
        this.getAllPeople();
      })
  }
  getAllPeople() {
    this.http.get(`${this.API}/users`)
      .subscribe((data: any) => {
        console.log(data)
        this.data = data
      })
  }
}
