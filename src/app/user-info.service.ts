import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserInfoService {

  list : any= [];

  listObserve = new Subject<[]>();

  constructor() { }

  add(user)
    {
      this.list.push(user);
      this.listObserve.next(this.list);
    }

  getList()
    {
        return this.listObserve;
    }

}
