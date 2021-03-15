import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConfig } from '../Config/app.config';
import { AppCongifService } from '../Config/app-congif.service';
import { environment } from '../../environments/environment';

let AppConstant: any = environment.baseUrl;

@Injectable({
  providedIn: 'root'
})
export class ViewService {

  constructor(private http: HttpClient,private appConfig: AppCongifService) {

    //AppConstant = appConfig;
   }


  submitRegistration(data) {
    return this.http.post(`${AppConstant}register/user`,data);

  }
  
  getCategoryName()
  {
    return this.http.get(`${AppConstant}category`);

  }

  getSignUpDetails(data)
  {  
    return this.http.post(`${AppConstant}signup/student`,data);
  }

  getLMSDetails(data)
  {  
    return this.http.post(`${AppConstant}signup/student`,data);
  }

 

  validateOtp(data)
  {  
    return this.http.post(`${AppConstant}signup/otp`,data);
  }

  resendOtp(data)
  {  
    return this.http.post(`${AppConstant}signup/resend/otp`,data);
  }

  getCourse()
  {
    return this.http.get(`${AppConstant}signup/course`);
  }

  getState()
  {
    return this.http.get(`${AppConstant}signup/state`);
  }
  getNationality()
  {
    return this.http.get(`${AppConstant}signup/nationality`);
  }
  getSaturdays()
  {
    return this.http.get(`${AppConstant}signup/saturday`);
  }
  getSchools()
  {
    return this.http.get(`${AppConstant}signup/schoolList`)
  }

   getUserDetails()
   {
     return this.http.get(`${AppConstant}signup/userDetails`);
   } 
  

  getscoresheet(psid)
  {
    return this.http.get(`${AppConstant}Report/${psid}`);
  }

  updateCounsel(data)
  {
    return this.http.post(`${AppConstant}signup/counsel`, data);
  }

  createSchool(data)
  {
    return this.http.post(`${AppConstant}signup/school`, data)
  }

  AddQuestion(data) {
    return this.http.post(`${AppConstant}question`,data);
  }
 
  GetQuestion(questionBankId) {
    return this.http.get(`${AppConstant}question/${questionBankId}/questionBankId`);
  }

  getSendMail(data)
  {
    return this.http.post(`${AppConstant}question/mail`,data);
  }
  
  GetQuestions() {
    return this.http.get(`${AppConstant}question`);
  }

  GetTestQuestions() {
    return this.http.get(`${AppConstant}question/test`);
  }

  GetSurveyQuestion(departmentId)
  {
    return this.http.get(`${AppConstant}QuestionBank/${departmentId}/departmentId`);
  }

  SaveResult(data)
  {
    return this.http.post(`${AppConstant}Result`,data);

  }

  GetTestCategory() {
    return this.http.get(`${AppConstant}category`);
  }


  GetTestResult(data) {
    return this.http.post(`${AppConstant}result`,data);
  }



  AddResult(data) {
    return this.http.post(`${AppConstant}result`,data);
  }
  GetPreviousResult(testResultId) {
    return this.http.get(`${AppConstant}result/${testResultId}/testResultId`);
  }
  UdateResult(data) {
    return this.http.put(`${AppConstant}result`,data);
  }

  GetCoursesByID(Stud_ID)
  {
    return this.http.get(`${AppConstant}QuestionBank/${Stud_ID}/StudentID`);
  }

  GetFacultyrecord(facultyID)
  {
    return this.http.get(`${AppConstant}QuestionBank/${facultyID}/facultyID`);
  }


}
