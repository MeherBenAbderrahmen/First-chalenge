import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css']
})
export class UserUpdateComponent implements OnInit {
index: any;
nom: any;
prenom: any;
email: any;
password: any;
users = JSON.parse(localStorage.getItem('registration') || '[]');
  constructor(private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.index=this.activatedRoute.snapshot.params.index;
    console.log(this.index);
    
    this.nom=this.users[this.index].nom;
    this.prenom=this.users[this.index].prenom;
    this.email=this.users[this.index].email;
    this.password=this.users[this.index].password;
  }
  update(){
    const updatedUser={
      nom: this.nom,
      prenom: this.prenom,
      email: this.email,
      password:this.password
    }
    this.users.splice(this.index, 1,updatedUser);
    localStorage.setItem('registration', JSON.stringify(this.users));
    this.router.navigateByUrl('/user-list');
  }

}
