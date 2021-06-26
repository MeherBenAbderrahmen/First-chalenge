import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users = JSON.parse(localStorage.getItem('registration') || '[]');
  
  constructor() { }
  
  ngOnInit(): void {
  }
  
  supprimerElement(nb: any){
    this.users.splice(nb,1);
    localStorage.setItem('registration', JSON.stringify(this.users));
  }
}
