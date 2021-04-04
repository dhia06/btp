import { Component, OnInit, ElementRef } from '@angular/core';
import { EmailValidator } from '@angular/forms';
import { Router } from '@angular/router';

import Swal from 'sweetalert2';
import { User } from '../user';
import { RegisterService } from '../views/register/register service';



@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {
  private router: Router;
  private email: string;
  private phonenumber: String;
  private username: string;
  private password: String;
  private user: User = new User();
  constructor(private registerService: RegisterService) { }


  ngOnInit(): void { }
  async login() {


    Swal.fire({
      input: 'text',
      confirmButtonText: 'Next &rarr;',
      showCancelButton: true,
      animation: true,
      progressSteps: ['1', '2', '3']
  });

  var steps = [
      {
          title: 'sign up',
          
         
          html: `
        <form>
      
     
        <input   type="text"  placeholder="ENTRER VOTRE USERNAME " id="userName"   class="swal2-input" requiredinput>
       
       <input type="password" placeholder="ENTRER VOTRE PASSWORD" id="password"   class="swal2-input" required>
      
       <input  type: "email" placeholder="ENTRER UN EMAIL VALIDE" id="email"  type="email" 
        size="30" required class="swal2-input" pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$'>
       
       <input 
        type: "text" size placeholder="ENTRER VOTRE NUMERO DE TELEPHONE"   id="phoneNumber" class="swal2-input"  required minlength="12" maxlength="12">
       
       </form>
       `,
          preConfirm: function(value)
          {
              return new Promise<void>(function(resolve, reject)
              {
                  if (value) {
                      resolve();
                  } else {
                      reject('Please type something in the step 1!');
                  }
              });
          }
      },
      {
          title: 'Sales Person',
          text: 'Product sold by?',
          preConfirm: function(value)
          {
              return new Promise<void>(function(resolve, reject)
              {
                  if (value) {
                      resolve();
                  } else {
                      reject('Please type something in the step 2!');
                  }
              });
          }

      },
      {
          title: 'Additional Details',
          text: 'Coments or additional notes',
          preConfirm: function(value)
          {
              return new Promise<void>(function(resolve, reject)
              {
                  if (value) {
                      resolve();
                  } else {
                      reject('Please type something in the step 3!');
                  }
              });
          }
      },

  ];

  Swal.queue(steps).then(function (result) {
     // Swal.resetDefaults();
      Swal.fire({
          title: 'All done!',
          html:
              'Your answers: <pre>' +
              (result) +
              '</pre>',
          confirmButtonText: 'Lovely!',
          showCancelButton: false
      })
  }, function () {
      //Swal.resetDefaults()
  });

    // Swal.fire({
      
     
    //   html: `
    //   <form>
    // <input  required type="text" placeholder="ENTRER VOTRE USERNAME " id="userName"   class="swal2-input" >
    // <input  name="password" class="swal2-input" required type="password" placeholder="ENTRER VOTRE PASSWORD" id="password"   >
    //   </form>
    //  `,
    //   preConfirm: () => {
    //     this.user.username = (<HTMLInputElement>document.getElementById('userName')).value;
        
    //     this.user.password = (<HTMLInputElement>document.getElementById('password')).value;
 

    //     this.registerService.login(this.user).subscribe( res  => {
    //      // localStorage.setItem('token', Response.access_token);
    //      if (!this.username || !this.password) {
    //       Swal.showValidationMessage(`Please enter login and password`)
    //     }
        
    //       if (!res.accessToken) {
    //         console.log('login ghaaalet');
    //       }
    //       else
    //      // this.router.navigate(['Acceuil']);
    //         console.log('login shih');
    //     });





    //   }
    // })
    //   ;
  }

async signup() {
    //   Swal.fire({

    //     title: 'Register',
    //     imageUrl: './assets/images/client/bra.gif',
    //     imageAlt: 'original',
    //     width: '600px',
    //     imageHeight: 300,
    //     padding: '3em',
    //     input: 'email' || 'tel',


    //     confirmButtonText:
    //       '<i class="fa fa-thumbs-up"></i> Sign Up!',

    //    // background: '#fff url(./assets/images/client/blanc.jpg)',

    //     backdrop: `
    //              rgba(0,0,123,0.4)
    //              url("./assets/images/client/lap.gif")
    //              left top
    //              no-repeat
     
    
    //              <!-- Include the Material Ui theme --> `,
    //     html: `
    //     <form>
      
     
    //     <input   type="text"  placeholder="ENTRER VOTRE USERNAME " id="userName"   class="swal2-input" requiredinput>
       
    //    <input type="password" placeholder="ENTRER VOTRE PASSWORD" id="password"   class="swal2-input" required>
      
    //    <input  type: "email" placeholder="ENTRER UN EMAIL VALIDE" id="email"  type="email" 
    //     size="30" required class="swal2-input" pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$'>
       
    //    <input 
    //     type: "text" size placeholder="ENTRER VOTRE NUMERO DE TELEPHONE"   id="phoneNumber" class="swal2-input"  required minlength="12" maxlength="12">
       
    //    </form>
    //    `,

    //     preConfirm: () => {
    //       this.user.username = (<HTMLInputElement>document.getElementById('userName')).value;
    //       this.user.email = (<HTMLInputElement>document.getElementById('email')).value;
    //       this.user.password = (<HTMLInputElement>document.getElementById('password')).value;
    //       this.user.phonenumber = (<HTMLInputElement>document.getElementById('phoneNumber')).value;
    //       this.registerService.register(this.user).subscribe(data => {
    //         if (!data) {
    //           Swal.showValidationMessage(`Please enter login and password`)
    //           console.log('wiiiiiiiiiiiiw');
             
    //         }
    //         else

    //        // if ((!this.email) || (!this.phonenumber) || (!this.username) || (!this.password)) {
             
            
    //        // else
    //           Swal.fire({

    //             animation: false,
    //             title: 'Verification de code',
    //             imageUrl: './assets/images/client/verification.gif',
    //             imageAlt: 'original',
    //             width: 300,
    //            // input: 'email',
    //             customClass: {
    //               popup: 'animated tada',
    //               validationMessage: 'my-validation-message'
    //             },

    //             imageHeight: 300,
    //             padding: '3em',
    //            // background: '#fff url(./assets/images/client/blanc.jpg)',
    //             confirmButtonText:
    //               '<i class="fa fa-thumbs-up"></i> Valider!',
    //             backdrop: `
    //           rgba(0,0,123,0.4)
    //           url("./assets/images/client/verification.gif")
    //           left top
    //           no-repeat
               
              
    //             <!-- Include the Material Ui theme --> `,
    //             html: `
    //             <form>
    //             <label for='phonenumber'>Entrer Votre code SVP!</label>
               
    //             <input required placeholder="CODE"  id="code" class="swal2-input">
    //             </form>
    //             `,
    //             focusConfirm: false,
    //             preConfirm: () => {
    //               this.user.code = (<HTMLInputElement>document.getElementById('code')).value;

    //               this.registerService.singUpverif(this.user).subscribe(data => {

    //                 Swal.fire({

    //                   customClass: { popup: 'animated tada' },
    //                   animation: false,

    //                   icon: 'success',
    //                   title: 'Your Registration has been saved',
    //                   showConfirmButton: false,
    //                   timer: 1500
    //                 })

    //               })

    //             }
    //           })
    //       })

    //     }
    //   })
    }
  }
