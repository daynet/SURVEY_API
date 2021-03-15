import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EvaluateService } from '../Evaluate.service';
import { ViewService } from '../view.service';

@Component({
  selector: 'app-MainPage',
  templateUrl: './MainPage.component.html',
  styleUrls: ['./MainPage.component.scss']
})
export class MainPageComponent implements OnInit {

  courseList: any;
  studentId: any;
  CourseForm: any;


  constructor(private fb: FormBuilder, private evaluateServ: EvaluateService,private router: Router, private route: ActivatedRoute, private viewService: ViewService) { }

  ngOnInit() {

    let details = null;
    console.log('this.route.snapshot',this.route.snapshot);
    const url = window.location.href;
    this.route.queryParamMap.subscribe(queryParams => {
      this.studentId = queryParams.get("studentid");
     
     console.log("username", this.studentId);
   
     localStorage.setItem("studentID", this.studentId);
   
   
  })

  this.getCourseByID( this.studentId);
}


InitialiseInput() {
  this.CourseForm = this.fb.group({
    Faculty_id: [0, Validators.required],
    Cdd_Description: [0, Validators.required],
    priorityId: [0],
    complaint: ['', Validators.required],
    title: ['', Validators.required]
  })

     // this.conplaintDetail = " ";
}

get f() { return this.CourseForm.controls; }


  getCourseByID(studID)
  {
    this.viewService.GetCoursesByID(studID).subscribe((res) => {

      this.courseList = res;

      console.log('Courselist',this.courseList);
      
    })
  }






}
