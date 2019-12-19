import { Component, OnInit } from '@angular/core';
import { ExamenService } from 'src/app/services/examen.service';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { Validate } from 'src/app/models/validate.model';
import { Login } from 'src/app/models/Login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
user:Login;
users:any;
profile:any;
  constructor(private examenService:ExamenService,private myRoutes:Router) { 

  }

  ngOnInit() {
    this.examenService.getUserClaims().subscribe((data)=>{
       this.users =data;
       this.user = this.users;
      console.log(data);
      console.log(this.user.Username);

      localStorage.setItem('loggeduser',this.user.Username);
      this.profile=localStorage.getItem('loggeduser');
    })
  }

}
