import { RegisterService } from './../register/register service';
import { User } from './../../user';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {


  user: User = new User();
  constructor(private registerService: RegisterService) { }

  ngOnInit(): void {

  }

  submit(user: User) {
    console.log("OLAA");
    this.registerService.register(user).subscribe(data => {

      Swal.fire({
        animation: false,
        title: 'PLEASE Copy Your Verification CODE here!',
        imageUrl: './assets/images/client/verification.gif',
        imageAlt: 'original',
        width: 300,
        input: 'number',
        customClass: {
          popup: 'animated tada',
          validationMessage: 'my-validation-message'
        },

        imageHeight: 300,
        padding: '3em',
        // background: '#fff url(./assets/images/client/blanc.jpg)',
        confirmButtonText:
          '<i class="fa fa-thumbs-up"></i> Valider!',
        backdrop: `
              rgba(0,0,123,0.4)
              url("./assets/images/client/verification.gif")
              left top
              no-repeat
               
              
                <!-- Include the Material Ui theme --> `,
        html: `
                <form>
                <label for='phonenumber'>Entrer Votre code SVP!</label>
               
                <input required placeholder="CODE"  id="code" class="swal2-input">
                </form>
                `,
        focusConfirm: false,
        preConfirm: () => {
          this.user.code = (<HTMLInputElement>document.getElementById('code')).value;
          this.registerService.singUpverif(this.user).subscribe(data => {
            Swal.fire({
              customClass: { popup: 'animated tada' },
              animation: false,

              icon: 'success',
              title: 'Gongratulations!Your Registration has been saved',
              showConfirmButton: false,
              timer:200
            })
          })
        }









      })




    });
  }
}
