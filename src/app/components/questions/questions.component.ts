import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';
import { Question } from 'src/app/models/question.model';
import { ExamenService } from 'src/app/services/examen.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  quest:Question;
  ids:any = [];
  constructor(private services:ExamenService,private toastr : ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }
resetForm(form?: NgForm){
  if(form != null)
  form.resetForm();
  this.services.formData = {
    Sno:null,
    Testmodel:'',
    Question:'',
    Answers:'',
    Option1:'',
    Option2:'',
    Option3:'',
    Option4:'',
    Mark:null
  }
}
}
