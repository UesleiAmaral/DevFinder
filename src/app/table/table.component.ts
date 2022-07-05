import { User } from './../model/user';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/userService.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  dataUser: User[];
  
  displayedColumns: any[] = [
    'repos',
    'followers',
    'following'
  ];

  constructor(private userService: UserService) {
    this.dataUser = this.userService.list();
  }

  ngOnInit(): void {
  }

}
