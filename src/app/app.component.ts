import { Component } from '@angular/core';
import { User } from './user';
import {EnrollmentService } from './enrollment.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo';
  topics=['Angular','Vue','React'];
  topicHasError=true;
  submitted=false;
  errorMsg='';
  userModel= new User('rob','rob@test.com',5555555556,'default','morning',true);
  constructor(private _enrollmentService: EnrollmentService){}
  validateTopic(value){
    if (value =="default"){
      this.topicHasError=true;
    }else{
      this.topicHasError=false;
    }
  } 
  onSubmit(){
    this.submitted=true;
    this._enrollmentService.enroll(this.userModel)
    .subscribe(
      data =>console.log('Sucess!',data),
      error =>this.errorMsg=error.statusText
    )
  }
}
