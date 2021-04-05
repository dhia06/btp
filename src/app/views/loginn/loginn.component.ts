import { Component, OnInit } from '@angular/core';
import { User } from '../../user';
import { RegisterService } from '../register/register service';

@Component({
  selector: 'app-loginn',
  templateUrl: './loginn.component.html',
  styleUrls: ['./loginn.component.scss']
})
export class LoginnComponent implements OnInit {

  user: User = new User();
  constructor(private registerService: RegisterService) { }

  ngOnInit(): void {
  }
  Loginn(user:User){
      console.log("okeyy");
      this.registerService.login(user).subscribe()
    }

}
