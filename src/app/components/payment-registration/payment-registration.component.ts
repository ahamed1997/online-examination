import { Component, OnInit } from '@angular/core';
import { ExamenService } from 'src/app/services/examen.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Firstpage } from 'src/app/models/firstpage.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-payment-registration',
  templateUrl: './payment-registration.component.html',
  styleUrls: ['./payment-registration.component.css']

})
export class PaymentRegistrationComponent implements OnInit {
  userdata: any;
  pay:any;
  users:any;
  today:Date;
  myDate = new Date();
 


  
  payment: Firstpage;

  submitted = false;
  valid: string;
  cancel: string;
  updatestatus:any;
  constructor(private examenService:ExamenService, private myRoutes: Router,private toastr: ToastrService, private myActiveRoute: ActivatedRoute) 
  {
    
   }
   onclick(model,date,id) {

    let today = new Date().toLocaleDateString()
        console.log(today)   
    console.log('paramtere',model)
    console.log('paramtere',date)
    console.log('paramtere',id)
    if (date > today) {
      console.log('date same');
      // localStorage.setItem('model',model);
      // localStorage.setItem('testid',id);

      this.myRoutes.navigate(["userpage/homepage",model,id],{skipLocationChange:true});
    }
    else {
      console.log('date not same');
      this.toastr.warning('Sorry! You are not Allow to attend the Test');
    }
  }
  TestCancel(Testid) {
    var r = confirm("Are sure wants to Cancel the Test?");
    if (r == true) {
      console.log("ok");
      // $('#TestCancel').attr("disabled", true);
      // $('#TakeTest').attr("disabled", true);
      this.cancel = "Canceled!!"
      console.log('t id',Testid);
      this.examenService.updatestatus(Testid)
      this.myRoutes.navigate(["/paymentdetail"]);
    }
  }
  ngOnInit() {
this.pay = localStorage.getItem('loggeduser');
console.log(this.pay);
    this.users = this.examenService.CheckStatus(this.pay).subscribe(res => {
      this.userdata = res;
      
    })
  }

}
