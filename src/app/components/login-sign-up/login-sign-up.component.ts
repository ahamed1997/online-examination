
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ExamenService } from 'src/app/services/examen.service';
import { Paymentmode } from 'src/app/models/paymentmode.model';
import { PaymentUser } from 'src/app/models/paymentuser.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login-sign-up',
  templateUrl: './login-sign-up.component.html',
  styleUrls: ['./login-sign-up.component.css']
})
export class LoginSignUpComponent implements OnInit {
  exampaymentRegisters: PaymentUser;
  result: string;
  myForm: FormGroup;
  paymenttype: string;
  list: PaymentUser;
  dummy: any;
  paymentmode: any;
  val: PaymentUser;
  minDate = new Date();
  maxDate = new Date(2022, 0, 1);
  paymentForm: FormGroup;
  paymentcredit:Paymentmode;
  res: string;
  constructor(private examenService:ExamenService, private myRoutes: Router,private toastr: ToastrService, private myActiveRoute: ActivatedRoute) 
  {
    this.exampaymentRegisters = new PaymentUser();
    this.paymentcredit = new Paymentmode();
    this.myForm = new FormGroup(
      {
        name: new FormControl(null, [Validators.required]),
        email: new FormControl(null, [Validators.required]),
        mobile: new FormControl(null, [Validators.required]),
        aadharcardNumber: new FormControl(null, [Validators.required]),
        testModel: new FormControl(null, [Validators.required]),
        date: new FormControl(null, [Validators.required]),


      });
      this.paymentForm = new FormGroup(
        {
          cardHolderName: new FormControl(null, [Validators.required]),
          cardnumber: new FormControl(null, [Validators.required]),
          cvv: new FormControl(null, [Validators.required]),
          expiration: new FormControl(null, [Validators.required]),
          expirations: new FormControl(null, [Validators.required])
        });
   }
   public get name() {
    return this.myForm.get("name");

  }

  public get email() {
    return this.myForm.get("email");
  }

  public get mobile() {
    return this.myForm.get("mobile");
  }

  public get aadharcardNumber() {
    return this.myForm.get("aadharcardNumber");
  }
  public get testModel() {
    return this.myForm.get("testModel");
  }
  public get date() {
    return this.myForm.get("date");
  }
  showDetails() {
    console.log(this.name.value);
    console.log(this.email.value);
    if (this.myForm.valid) {

      this.exampaymentRegisters.name = this.name.value;
      this.exampaymentRegisters.email = this.email.value;

      this.exampaymentRegisters.mobile = this.mobile.value;

      this.exampaymentRegisters.aadharcardNumber = this.aadharcardNumber.value;

      this.exampaymentRegisters.TestModel = this.testModel.value;

      this.exampaymentRegisters.Testdate = this.date.value;
      this.exampaymentRegisters.Username = localStorage.getItem('loggeduser');

      this.dummy = 1;
      this.list = this.exampaymentRegisters;
      console.log(' first list ', this.list)
     
    } else {
      this.result = "please fill  all the details";
    }
  }
  clickcredit() {
   

    this.paymentmode = 2;
    this.paymenttype = "credit";
    
  }
  clickDebit() {
    this.paymentmode = 2;
    this.paymenttype = "debit";
  }
  

  creditpayment(exampaymentRegisters) {

    if (this.paymentForm.valid) {

      this.paymentcredit.cardHolderName = this.cardHolderName.value;

      this.paymentcredit.cardnumber = this.cardnumber.value;

      this.paymentcredit.cvv = this.cvv.value;

      this.paymentcredit.expiration = this.expiration.value;
      this.paymentcredit.expirations=this.expirations.value;
      this.examenService.addExamRegister(this.paymenttype, this.list).subscribe(data => {
        console.log('REGISTER RESULT', data);
        this.myRoutes.navigate(['userpage/login']);
        this.toastr.success('Test Registered Successfully');
      });

    }
    else {
      this.res = "please fill all the details"
    }

  }

  public get cardHolderName() {
    return this.paymentForm.get("cardHolderName");
  }

  public get cardnumber() {
    return this.paymentForm.get("cardnumber");
  }

  public get cvv() {
    return this.paymentForm.get("cvv");
  }
  public get expiration() {
    return this.paymentForm.get("expiration");
  }
  public get expirations() {
    return this.paymentForm.get("expirations");
  }


  ngOnInit() {
    
  }

}
