import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ViewService } from '../view.service';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

enum AgentStatus {
  general =1 ,
  strategic = 2,
  organizational = 3,
  workculure = 4,
  communication=5,
  self = 6,
  others =7,

}

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.scss']
})
export class SurveyComponent implements OnInit {
  surveyForm: any;
  questionList: any;
  optionA: any;
  optionB: any;
  optionC: any;
  optionD: any;
  optionE: any;
  optionF: any;
  question: any;
  index: number=0;
  index1: number = 1;
  answer:any;
  username: any;
  Department: any;
  disabledNext: boolean =false;
  remark:any;
  list: any[] = [];
  listOther:any[] =[];
  questionId:any;
  sectionId:any;
  sectionNumber:any;
  displaySectionName:String;
  surveyData:any;
  mainQuestions:any;
  otherQuestion:any;
  index2: number = 0;
  displayOtherForm:boolean = false;
  displayMainForm:boolean = true;
  UserCategory: string;
  pagination:any;
  index4: number = 1;
  index5: number = 1;
  


 



  constructor(private fb: FormBuilder, private viewService:ViewService, private router: Router,private route: ActivatedRoute) { }

  ngOnInit() {
    // this.route.queryParamMap.subscribe(queryParams => {
    //   this.username = queryParams.get("username");
    //  this.Department = queryParams.get("department");
    //   // this.lname = queryParams.get("lastname");
    //   // this.email = queryParams.get("email");
      
    // })

   this.username =  localStorage.getItem('username');
    this.Department = localStorage.getItem('deparment');
    console.log('username', this.username);
    console.log('department', this.Department);
    
    if(this.Department == '7' || this.Department == '8'|| this.Department == '9'|| this.Department == '10'|| this.Department == '11' || this.Department == '13' || this.Department == '14'|| this.Department == '15' || this.Department == '16'|| this.Department == '17'|| this.Department == '12'|| this.Department == '18')
    {
      this.UserCategory = "FeedBack";
    }
    else{
      this.UserCategory = "Survey";
    }

    this.createInput();
    this.getQuestion();
    
  }


  createInput(){
    this.surveyForm =this.fb.group({
      optionControl : [''],
      //optionBControl : ['']      
    });
  }
  // getQuestion()
  // {
  //   this.viewService.GetSurveyQuestion().subscribe((response:any)=> {
  //   this.questionList = response.result;
  //   console.log("questionList", this.questionList);

  //   this.sectionNumber = this.questionList[this.index].SectionID;
  //   console.log("sectionNumber", this.sectionNumber);

    

  //   if(this.sectionNumber == AgentStatus.general){this.displaySectionName = "GENERAL SECTION"}
  //   else if(this.sectionNumber == AgentStatus.strategic){this.displaySectionName = "STRATEGIC SECTION"}
  //   else if(this.sectionNumber == AgentStatus.organizational){this.displaySectionName = "ORGANIZATIONAL SECTION"}
  //   else if(this.sectionNumber == AgentStatus.workculure){this.displaySectionName = "WORK CULTURE & ENVIRONMENT"}
  //   else if(this.sectionNumber == AgentStatus.communication){this.displaySectionName = "ORGANIZATIONAL COMMUNICATION"}
  //   else if(this.sectionNumber == AgentStatus.self){this.displaySectionName = "SELF SECTION"}
    
  //   console.log("AgentStatus.general",AgentStatus.general);
    
  //   console.log("sectionname", this.displaySectionName);

    
     
  //     // if(this.questionList.SectionID == 1)

  //   this.optionA = this.questionList[this.index].OptionA;
  //   console.log("optionA", this.optionA);
    
    
  //     this.optionB = this.questionList[this.index].OptionB;
  //     this.optionC = this.questionList[this.index].OptionC;
  //     this.optionD = this.questionList[this.index].OptionD;
  //     this.optionE = this.questionList[this.index].OptionE;
  //     this.optionF = this.questionList[this.index].OptionF;
  //     this.question =this.questionList[this.index].QuestionName;
  //     this.questionId = this.questionList[this.index].QuestionId;
  //     this.sectionId = this.questionList[this.index].SectionId;
      
      
  //   })
  // }

  getQuestion()
  {
    this.viewService.GetSurveyQuestion(this.Department).subscribe((response:any)=> {
    this.questionList = response.result;
    this.pagination = '(' + this.index4 + ')' + '  ' +  'of' + '  ' + '(' + this.questionList.length + ')';
    console.log("questionList", this.questionList);

     this.mainQuestions = this.questionList.filter(x=>x.SectionID != 7)
      console.log("filter", this.mainQuestions);
      this.otherQuestion = this.questionList.filter(x=>x.SectionID == 7)
      console.log("other Question", this.otherQuestion);
      
      

    // this.sectionNumber = this.mainQuestions[this.index].SectionID;
    // console.log("sectionNumber", this.sectionNumber);

    // if(this.sectionNumber == AgentStatus.general){this.displaySectionName = "GENERAL SECTION"}
    // else if(this.sectionNumber == AgentStatus.strategic){this.displaySectionName = "STRATEGIC SECTION"}
    // else if(this.sectionNumber == AgentStatus.organizational){this.displaySectionName = "ORGANIZATIONAL SECTION"}
    // else if(this.sectionNumber == AgentStatus.workculure){this.displaySectionName = "WORK CULTURE & ENVIRONMENT"}
    // else if(this.sectionNumber == AgentStatus.communication){this.displaySectionName = "ORGANIZATIONAL COMMUNICATION"}
    // else if(this.sectionNumber == AgentStatus.self){this.displaySectionName = "SELF SECTION"}
    
    // console.log("AgentStatus.general",AgentStatus.general);
    
    // console.log("sectionname", this.displaySectionName);

    
     
      // if(this.questionList.SectionID == 1)

    this.optionA = this.mainQuestions[this.index].OptionA;
    console.log("optionA", this.optionA);
    
    this.displaySectionName = this.mainQuestions[this.index].SectionName;
      this.optionB = this.mainQuestions[this.index].OptionB;
      this.optionC = this.mainQuestions[this.index].OptionC;
      this.optionD = this.mainQuestions[this.index].OptionD;
      this.optionE = this.mainQuestions[this.index].OptionE;
      this.optionF = this.mainQuestions[this.index].OptionF;
      this.question =this.mainQuestions[this.index].QuestionName;
      this.questionId = this.mainQuestions[this.index].QuestionId;
      this.sectionId = this.mainQuestions[this.index].SectionId;
      
    })
  }

  Next()
  {

    if(this.answer != null || this.answer == 'undefined')
    {
      if(this.index == this.mainQuestions.length - 1)
      {
        // JSON.stringify(this.list);
        // console.log("listrecent", this.list);
        this.index4 +=1;
        this.list.push({
          UserName: this.username,
          QuestionId:this.questionId,
          Answer:this.answer,
          remark: this.remark,
          DepartmentId: this.Department,
          UserCategory : this.UserCategory,
          FacultyName: localStorage.getItem('FacultyName'),
          CourseName: localStorage.getItem('course')
          
         })
    
         if(this.otherQuestion.length > 0){
        this.sectionNumber = this.otherQuestion[this.index2].SectionID;
        if(this.sectionNumber == AgentStatus.others){this.displaySectionName = "OTHERS";}
        this.remark = null;

        this.question =this.otherQuestion[this.index2].QuestionName;
         this.questionId = this.otherQuestion[this.index2].QuestionId;
         this.sectionId = this.otherQuestion[this.index2].SectionId;
         }
        

        this.displayMainForm = false;
        this.displayOtherForm = true;
        if(this.otherQuestion == 0)
        {
        Swal.fire(
          
          'Thank you',
          '<b>' + this.username + '</b>' + ' ' + 'for taking the survey',
          'success',
        ).then((result)=>
        {
          if (result.value) {

            this.viewService.SaveResult(this.list).subscribe((response:any)=> {
            this.surveyData = response.result;

            if(this.surveyData == true)
            {
              Swal.fire(
          
                'Saved',
              
                'success',
              )

            }
            })

            window.location.href = 'http://lms.sun.edu.ng/login/index.php';

        }
        })
      }
      
        

      }

      else{
    
       this.index += 1;

      this.list.push({
       UserName: this.username,
       QuestionId:this.questionId,
       Answer:this.answer,
       remark: this.remark,
       DepartmentId: this.Department,
       UserCategory : this.UserCategory,
       FacultyName: localStorage.getItem('FacultyName'),
       CourseName: localStorage.getItem('course')
      
      })

      console.log("list", this.list);
     
      

      this.surveyForm.reset();
      this.answer = null;
      this.remark = null;
      this.sectionNumber = this.questionList[this.index].SectionID;



      // if(this.sectionNumber == AgentStatus.general){this.displaySectionName = "GENERAL SECTION"}
      // else if(this.sectionNumber == AgentStatus.strategic){this.displaySectionName = "STRATEGIC SECTION"}
      // else if(this.sectionNumber == AgentStatus.organizational){this.displaySectionName = "ORGANIZATIONAL SECTION"}
      // else if(this.sectionNumber == AgentStatus.workculure){this.displaySectionName = "WORK CULTURE & ENVIRONMENT"}
      // else if(this.sectionNumber == AgentStatus.communication){this.displaySectionName = "ORGANIZATIONAL COMMUNICATION"}
      // else if(this.sectionNumber == AgentStatus.self){this.displaySectionName = "SELF SECTION"}

      // console.log("sectionname", this.displaySectionName);
      
      this.displaySectionName = this.mainQuestions[this.index].SectionName;
      this.optionA = this.mainQuestions[this.index].OptionA;
      this.optionB = this.mainQuestions[this.index].OptionB;
      this.optionC = this.mainQuestions[this.index].OptionC;
      this.optionD = this.mainQuestions[this.index].OptionD;
      this.optionE = this.mainQuestions[this.index].OptionE;
      this.optionF = this.mainQuestions[this.index].OptionF;
      this.question =this.mainQuestions[this.index].QuestionName;
      this.questionId = this.mainQuestions[this.index].QuestionId;
      this.sectionId = this.mainQuestions[this.index].SectionId;

  this.index4 += 1;
      this.pagination = '(' + this.index4 + ')' + '  ' +  'of' + '  ' + '(' + this.questionList.length + ')';

    }

   

    }

    
       
  }

  NextOther()
  
  {

    if(this.otherQuestion == 0)
    {

      Swal.fire(
          
        'Thank you',
       '<b>' + this.username + '</b>' + ' ' + 'for taking the survey',
        'success',
        ).then((result)=>{

          window.location.href = 'http://lms.sun.edu.ng/login/index.php';

        })
      
    }
   console.log("remark", this.remark);
   
    if(this.remark != null )
    {
      if(this.index2 == this.otherQuestion.length -1)
      {
        this.listOther.push({
          UserName: this.username,
          QuestionId:this.questionId,
          DepartmentId: this.Department,
          remark: this.remark,
          UserCategory : this.UserCategory

         })
         console.log("listother", this.listOther);

         
         Swal.fire(
          
           'Thank you',
          '<b>' + this.username + '</b>' + ' ' + 'for taking the survey',
           'success',
         ).then((result)=>
         {
           if (result.value) {

        this.viewService.SaveResult(this.listOther).subscribe((response:any)=> {
          this.surveyData = response.result;

          if(this.surveyData == 1)
          {
            Swal.fire(
        
              'Saved',
            
              'success',
            ).then((result)=>{

              window.location.href = 'http://lms.sun.edu.ng/login/index.php';

            })

          }
          })
        }
      })

     // window.location.href = 'http://lms.sun.edu.ng/login/index.php';
  
      }
      else {

        this.index2 += 1;
        this.sectionNumber = this.otherQuestion[this.index2].SectionID;
        if(this.sectionNumber == AgentStatus.others){this.displaySectionName = "OTHERS";}

        this.listOther.push({
          UserName: this.username,
          QuestionId:this.questionId,
          DepartmentId: this.Department,
          remark: this.remark,
          UserCategory : this.UserCategory
         })
         console.log("listother", this.listOther);
         

         this.remark = null;
   
              this.question =this.otherQuestion[this.index2].QuestionName;
              this.questionId = this.otherQuestion[this.index2].QuestionId;
              this.sectionId = this.otherQuestion[this.index2].SectionId;
           }
    }
  
   


  }

  handleAChange(event){
    this.answer = 'STRONGLY AGREE';}
    handleBChange(event){
      this.answer = 'AGREE';}
      handleCChange(event){
        this.answer = 'UNSURE';}
        handleDChange(event){
          this.answer = 'DISAGREE';}
          handleEChange(event){
            this.answer = 'STRONGLY DISAGREE';}
            handleFChange(event){
              this.answer = 'NOT APPLICABLE';}
         

}
