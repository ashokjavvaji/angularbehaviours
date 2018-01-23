import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent implements OnInit {

  user:string;
  newUser:string;
  constructor(private dataService:DataService) { }

  ngOnInit() {
    this.dataService.cast.subscribe(value => this.user = value);
  }

  updateUser() {
    this.dataService.changeUser(this.newUser);
  }

}
