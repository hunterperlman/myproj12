import { Component, OnInit } from '@angular/core';

import { LibraryService } from '../library.service'
import { UserInfoService } from '../employee.service';

@Component({
  selector: 'app-library',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class LibraryComponent implements OnInit {
  
  // gets current date
  creationDate = new Date().toISOString();

  booklist = [];
  user = [];
  constructor(private libraryService : LibraryService, private userService : UserInfoService) { }
  
  ngOnInit(): void {
    this.booklist = this.libraryService.books;
    this.user = this.userService.getList()[0];
  }

  getClasses(index)
  {
    return { active : false, even : index % 2 !== 0, odd : index % 2 === 0}
  }

}
