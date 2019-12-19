import { Component, OnInit } from '@angular/core';

import { NgForm,FormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/user.model';
import { ExamenService } from 'src/app/services/examen.service';
import { ToastrModule, ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  errormessage:any;
  user:User;
  angForm: FormGroup;
  userregister:any;
  constructor(private fb: FormBuilder,private examenService:ExamenService,private toastr: ToastrService) { this.createForm();
  
  this.user = new User();
  
  }
  createForm() {
    this.angForm = this.fb.group({
       name: ['', Validators.required ],
       email: ['', Validators.required ],
       phone: ['', Validators.required ],
       username: ['', Validators.required ],
       password: ['', Validators.required ]
      
    });
  }
  public get name()
  {
    return this.angForm.get("name");
  }
  public get email()
  {
    return this.angForm.get("email");
  }
  public get phone()
  {
    return this.angForm.get("phone");
  }
  public get username()
  {
    return this.angForm.get("username");
  }
  public get password()
  {
    return this.angForm.get("password");
  }
  register()
{
  if(this.angForm.valid)
  {
    this.user.Name=this.name.value;
    this.user.Email=this.email.value;
    this.user.Phone=this. phone.value;
    this.user.Username=this.username.value;
    this.user.Password=this.password.value;
    console.log(this.user);
    this.userregister = this.user;
    this.toastr.success('Registered Successfully');
    this.examenService.register(this.userregister);
  }
  else{
this.errormessage="Please Fill the Details"
  }
}
  ngOnInit() {
 this.resetForm();
  }
  
    resetForm(form? : NgForm){
if(form!=null){
  form.reset();
  this.user = {
    Username:"",
    Password:"",
    Name:"",
    Phone:"",
    Email:""
  }
}
    }


}
