import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
  import { FormsModule, ReactiveFormsModule } from '@angular/forms';
  import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
  import { Route, RouterModule,CanActivate } from '@angular/router';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatNativeDateModule, MatDatepickerModule} from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DefaultComponent } from './components/default/default.component';
import { AdminHomepageComponent } from './components/admin-homepage/admin-homepage.component';
import { AdmindetailsComponent } from './components/admindetails/admindetails.component';
import { EditQuestionComponent } from './components/edit-question/edit-question.component';
import { FirstpageComponent } from './components/firstpage/firstpage.component';
import { WelcomepageComponent } from './components/welcomepage/welcomepage.component';
import { HomeComponent } from './components/home/home.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { LoginComponent } from './components/login/login.component';
import { PaymentdetailsComponent } from './components/paymentdetails/paymentdetails.component';
import { QuestionComponent } from './components/question/question.component';
import { QuestionsComponent } from './components/questions/questions.component';
import { QuestionListComponent } from './components/question-list/question-list.component';
import { QuestionrenderComponent } from './components/questionrender/questionrender.component';
import { ResultpageComponent } from './components/resultpage/resultpage.component';
import { ScoredetailsComponent } from './components/scoredetails/scoredetails.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { TestpageComponent } from './components/testpage/testpage.component';
import { UserpageComponent } from './components/userpage/userpage.component';
import { UserdetailsComponent } from './components/userdetails/userdetails.component';
import { ExamenService } from './services/examen.service';
import { ToastrModule } from 'ngx-toastr';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { PaymentRegistrationComponent } from './components/payment-registration/payment-registration.component';
import { LoginSignUpComponent } from './components/login-sign-up/login-sign-up.component';
import { AuthGuard } from './auth/auth.guard';
import { AuthInterceptor } from './auth/auth.interceptor';
import { AdminService } from './services/admin.service';

const myRoutes: Route[] = [
  { path: '', redirectTo: 'welcomepage', pathMatch: 'full' },
  {
    path: 'firstpage', component: FirstpageComponent
  },
  {path:'userpage',component:UserpageComponent ,canActivate:[AuthGuard],
  children:
  [{
    path:'firstpage',component:FirstpageComponent
  },{
    path:'login',component:LoginComponent,canActivate:[AuthGuard]
  },{
    path:'homepage/:model/:id',component:HomepageComponent,canActivate:[AuthGuard]
  },
  {
    path:'paymentregistration',component:PaymentRegistrationComponent,canActivate:[AuthGuard]
},{
    path:'loginsignup',component:LoginSignUpComponent,canActivate:[AuthGuard]}
  ]
},
{
  path:'paymentregistration',component:PaymentRegistrationComponent,canActivate:[AuthGuard]
},
  {
    path: 'welcomepage', component: WelcomepageComponent
  },
  {
    path: 'homepage', component: HomepageComponent,canActivate:[AuthGuard]
  },
  {
    path:'login',component:LoginComponent,canActivate:[AuthGuard]
  },
  {path:'signup',component:SignUpComponent},
  {
    path: "testpage/:Testmodel", component: TestpageComponent,canActivate:[AuthGuard], children: [
      {
        path: "questionrender/:Testmodel/:Sno/:Qno", component: QuestionrenderComponent,canActivate:[AuthGuard]
      }
    ]
  },
  {
    path:'loginsignup',component:LoginSignUpComponent,canActivate:[AuthGuard]}
    ,
    {
     path:'sigin',component:SignInComponent,canActivate:[AuthGuard]
     },
  
  {
    path:"resultspage",component:ResultpageComponent,canActivate:[AuthGuard]
  },
  {path:'home',component:HomeComponent},{
path:'adminhomepage',component:AdminHomepageComponent,children:[
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
    {path:'admin',component:AdmindetailsComponent},
    {path:'users',component:UserdetailsComponent},
    {path:'payment',component:PaymentdetailsComponent},
    {path:'score',component:ScoredetailsComponent},
  {path:'edit',component:QuestionComponent},
  {path:'ques',component:EditQuestionComponent},
  {path:'quest',component:QuestionsComponent} 
  
]
  },                       
                 
  {
    path:"**", component:DefaultComponent
  }
];


@NgModule({
  declarations: [
    AppComponent,
    DefaultComponent,
    AdminHomepageComponent,
    AdmindetailsComponent,
    EditQuestionComponent,
    FirstpageComponent,
    WelcomepageComponent,
    HomeComponent,
    HomepageComponent,
    LoginComponent,
    PaymentdetailsComponent,
    QuestionComponent,
    QuestionsComponent,
    QuestionListComponent,
    QuestionrenderComponent,
    ResultpageComponent,
    ScoredetailsComponent,
    SignUpComponent,
    TestpageComponent,
    UserpageComponent,
    UserdetailsComponent,
    SignInComponent,
    PaymentRegistrationComponent,
    LoginSignUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(myRoutes),
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    MatDatepickerModule,
    MatNativeDateModule
 
  ],
  providers: [ExamenService,AuthGuard,AdminService,
  {
    provide:HTTP_INTERCEPTORS,
    useClass : AuthInterceptor,
    multi:true
  }],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
