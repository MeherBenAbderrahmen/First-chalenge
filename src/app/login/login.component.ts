import { registerLocaleData } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { RegisterComponent } from '../register/register.component';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: any;
  password: any;
  mail: any;

  //@Input() reg: RegisterComponent;
  constructor() {
    //  this.reg = new RegisterComponent;
  }

  ngOnInit(): void {
  }


  loginFunction() {

    const emailVerify = this.email;
    const pwdVerify = this.password;
    console.log(emailVerify);
    const registr = JSON.parse(localStorage.getItem('registration') || '[]');
    //fonctionFleché (arrow function)
    function isEmail(element: any) {
      return element.email === emailVerify && element.password === pwdVerify;
    }
    

    const result = registr.find(isEmail);
    console.log(result);
    if (result != undefined) {
      window.location.href = "/welcom";
    } else {
      alert("Veillez verifier vos informations!!!");
    }
  }
}
 


  
  /*
    loginFunction() {
      var enteredEmail = this.email;
      var enteredPass = this.password;
  
      var storedEmail = localStorage.getItem("n1");
      var storedPass = localStorage.getItem("p1");
      console.log("ok");
      if (enteredEmail == storedEmail && enteredPass == storedPass) {
        window.location.href = "page1.html";
      }
      else {
        alert("Username and Password do not match!");
      }
      console.log(this.email);
    }
    */

