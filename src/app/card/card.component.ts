import { UserService } from '../services/userService.service';
import { User } from './../model/user';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  dataUser: User[];

  constructor(private userService: UserService) {
    this.dataUser = this.userService.list();

   }

  ngOnInit(): void {
  }

}
