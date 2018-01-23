import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class DataService {

  private user = new BehaviorSubject<string>('default'); //shared attribute across the componnets
  cast = this.user.asObservable();//channel for the value changes

  constructor() { }

  changeUser(value) {
    this.user.next(value);//change the behaviour subject value
  }

}
