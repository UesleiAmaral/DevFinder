import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  list() {
    return [
      {
        _id: '1',
        avatar: '../assets/img/fotoperfil.jpg',
        name: 'Ueslei',
        nameUser: 'UesleiAmaral',
        bio: 'Ola meu nome é ueslei e sou desenvolvedor fullstack',
        repos: '20',
        followers: '2',
        following: '10',
        linkLinkedin:'https://www.linkedin.com/feed/'

      }
    ]
  }
}
