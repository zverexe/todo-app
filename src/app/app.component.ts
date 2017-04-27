import { Component } from '@angular/core';
import { AngularFire, AuthProviders } from 'angularfire2';
import {NgbModal, NgbActiveModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  isLoggedIn: boolean;
  user_displayName: any;
  user_email: string;
  user_logo: string;

  constructor(private af: AngularFire, private modalService: NgbModal) {
    /*this.af.auth.subscribe(
        (auth) => {
          if (auth == null) {
            console.log("Logged out");
            this.isLoggedIn = false;
            this.user_displayName = '';
            //this.user_email = '';
          } else if(auth.google) {
            this.isLoggedIn = true;
            this.user_displayName = auth.google.displayName;
            //this.user_email = auth.google.email;
            console.log("Logged in");
            console.log(auth);
          }

        }
    );*/
    this.af.auth.subscribe(auth => {
      if(auth) {
        this.isLoggedIn = true;
        this.user_displayName = auth;
        //this.user_email = auth.facebook.email;
        console.log(auth);
      }else{
        this.isLoggedIn = false;
      }
    });
  }





  login() {
    this.af.auth.login({
      provider: AuthProviders.Google
    });

  }

  loginFacebook(){
    this.af.auth.login({
      provider: AuthProviders.Facebook
    });
  }

  logout() {
    this.af.auth.logout();
  }
}
