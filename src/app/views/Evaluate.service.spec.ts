import { HttpClient } from '@angular/common/http';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { environment } from '../../environments/environment';
import { AppCongifService } from '../Config/app-congif.service';
import { EvaluateService } from './Evaluate.service';

// describe('Service: Evaluate', () => {
//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       providers: [EvaluateService]
//     });
//   });

//   it('should ...', inject([EvaluateService], (service: EvaluateService) => {
//     expect(service).toBeTruthy();
//   }));
// });

let AppConstant: any = environment.baseUrl;

export class ViewService {

  constructor(private http: HttpClient,private appConfig: AppCongifService) {

    //AppConstant = appConfig;
   }


   GetCoursesByID(studID)
   {
     return this.http.get(`${AppConstant}course/{{studID}}/StudentID`);
   }

  }