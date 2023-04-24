import { Dialog } from '@angular/cdk/dialog';
import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Observable, Subject, takeUntil } from 'rxjs'
import { MenuColor } from 'src/app/Enums/menu-tabs.enum';
import { HelperService } from 'src/app/services/helper.service';
import { HttpService } from 'src/app/services/http.service';
import { SignUpComponent } from '../sign-up/sign-up.component';
import { ForgotUserPassComponent } from '../forgot-user-pass/forgot-user-pass.component';

@Component({
  selector: 'app-dialog',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit, OnDestroy {

  destroyed$: Subject<void> = new Subject<void>

  loginForm: FormGroup = this.fb.group({
    username: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]],
  });

  @ViewChild('loginButton') loginButton!: ElementRef<HTMLButtonElement>

  constructor(
    private helper: HelperService,
    private fb: FormBuilder,
    private dialog: Dialog,
    private http: HttpService
  ){}

  ngOnInit(): void {
    this.helper.isLoading$
    .pipe(takeUntil(this.destroyed$))
    .subscribe(isLoading => {
      if(isLoading){
        this.username?.disable()
        this.password?.disable()
      } else {
        this.username?.enable()
        this.password?.enable()
      }
    })
  }

  get username() {
    return this.loginForm.get('username');
  }

  get password() {
    return this.loginForm.get('password');
  }

  get activeColor(): Observable<MenuColor> {
    return this.helper.brandColor$
  }

  get isLoading(): Observable<boolean>{
    return this.helper.isLoading$
  }

  get loggedInUser(): Observable<string>{
    return this.helper.username$
  }

  closeDialog() {
    this.dialog.closeAll();
  }

  openSignUpDialog() {
    this.closeDialog()
    this.dialog.open(SignUpComponent, {
    });
  }

  openForgotUserPassDialog() {
    this.closeDialog()
    this.dialog.open(ForgotUserPassComponent, {
    });
  }

  handleSubmitForm(): void {
    if (!this.loginForm.valid) return
    const {username, password} = this.loginForm.value
    this.http.login(username, password)
    .pipe(takeUntil(this.destroyed$))
    .subscribe(data => {
      console.log(`Welcome, ${data?.name}`)
      this.helper.username$.next(data?.name)
      this.closeDialog()
    })
      
  }

  ngOnDestroy(): void {
    this.destroyed$.next()
    this.destroyed$.complete()
  }

}
