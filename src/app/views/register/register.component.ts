import { Component, OnInit } from '@angular/core';
  import { NgForm } from '@angular/forms';
   import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ClientComponent } from '../../client/client.component';
import { User } from '../../user';
import { RegisterService } from './register service';


@Component({
  selector: 'app-dashboard',
  templateUrl: 'register.component.html',
  
})
export class RegisterComponent implements OnInit {

  constructor(   private register : RegisterService,
    private router: Router,public dialog: MatDialog) { }
  ngOnInit(): void {
  }
   add(formulaire: NgForm) {
      this.register.register(formulaire.value).subscribe(
        (success) =>{
          console.log(success)},
        //this.router.navigate(['/register']),
        (erreur) => console.log(erreur)
      );
    }
     clicSurBouton(){
      alert("Vous venez de cliquer sur le bouton");
    }
  }


