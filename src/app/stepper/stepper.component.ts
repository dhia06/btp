import { Component, OnInit } from '@angular/core';

import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss']
})
export class StepperComponent implements OnInit {


 

/**
 * @title Stepper vertical
 */
// @Component({
//   selector: 'stepper-vertical-example',
//   templateUrl: 'stepper-vertical-example.html',
//   styleUrls: ['stepper-vertical-example.css']
// })
// export class StepperVerticalExample implements OnInit {
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  public signInEmail: string;
  public signuplastname : string;
  public signupfirstname: string;
  public   signunumber: string;

  constructor() {}

  ngOnInit() {}
  
}


