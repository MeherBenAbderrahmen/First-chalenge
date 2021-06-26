import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  email: any;
  password: any;
  constructor() { }

  ngOnInit(): void {
  }
  
  register(){
    
      //creation d'un objet
      const curentRegestration={
        email:this.email,
        password:this.password
      }  

      //creation d'un tableau qui contient tous les enregistrements
      const registrations = JSON.parse(localStorage.getItem('registration') || '[]');
        registrations.push(curentRegestration);
        localStorage.setItem('registration', JSON.stringify(registrations));
         
      return registrations;
  }


}
