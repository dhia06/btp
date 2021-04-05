import { RegisterService } from './../register/register service';
import { User } from './../../user';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {


  user:User = new User();
  constructor(private registerService:RegisterService) { }

  ngOnInit(): void {
    
  }

  submit(user:User){
    console.log("fi wost submit");
    this.registerService.register(user).subscribe();
  }
}
