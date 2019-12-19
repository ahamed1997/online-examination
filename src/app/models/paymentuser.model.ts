export class PaymentUser{
 Username:string;
 name:string;
    email:string;
    mobile:string;
    aadharcardNumber:string;
    TestModel:string;
    Testdate:Date;
   // paymentmode:string;
    constructor(bname?,bemail?,bmobile?,baadharcardNumber?,btestModel?,bdate?)
    {
        this.name=bname;
        this.email=bemail;
        this.mobile=bmobile;
        this.aadharcardNumber=baadharcardNumber;
        this.TestModel=btestModel;
        this.Testdate=bdate;
        //this.paymentmode=bpaymentmode;


    }
   
}
