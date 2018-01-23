import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css']
})
export class TwoComponent implements OnInit {

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
