import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit, OnDestroy {

  login_form!: FormGroup;

  // Subscription
  // private initiate_login_sub!: Subscription;

  constructor(
    private router: Router
    // private global_utilities: AppUtilityService
  ) { }

  ngOnInit(): void {
    this.login_form = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }

  initiateLogin() {
    this.router.navigate(['/home']);
    // this.initiate_login_sub = this.global_utilities.login(this.login_form.value).subscribe(
    //   (data)=>{
    //     this.global_utilities.navigateToURL('/secure');
    //   },
    //   (error)=>{
    //     this.global_utilities.showSnackbar();
    //   }
    // );
  }

  ngOnDestroy(): void {
    // this.global_utilities.unsubscribeAll([
    //   this.initiate_login_sub
    // ]);

  }

}

