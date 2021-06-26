import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {
  email: any;
  password: any;
  nom: any;
  prenom: any;
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  register() {

    //creation d'un objet
    const curentRegestration = {
      nom: this.nom,
      prenom:this.prenom,
      email: this.email,
      password: this.password
    }

    //creation d'un tableau qui contient tous les enregistrements
    const registrations = JSON.parse(localStorage.getItem('registration') || '[]');
    registrations.push(curentRegestration);
    localStorage.setItem('registration', JSON.stringify(registrations));
    this.router.navigateByUrl('/user-list');

    return registrations;
  }
}
