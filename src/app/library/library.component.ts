import { Component, OnInit } from '@angular/core';

import { LibraryService } from '../library.service'
import { UserInfoService } from '../user-info.service';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.scss']
})
export class LibraryComponent implements OnInit {

  booklist = [];
  user = [];
  createdOn = new Date().toISOString();
  constructor(private libraryService : LibraryService, private userService : UserInfoService) { }
  
  ngOnInit(): void {
    this.booklist = this.libraryService.books;
    this.user = this.userService.getList()[0];
  }

}
