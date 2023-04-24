import { Dialog } from '@angular/cdk/dialog';
import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs'
import { MenuColor } from 'src/app/Enums/menu-tabs.enum';
import { HelperService } from 'src/app/services/helper.service';
import { SignInComponent } from '../sign-in/sign-in.component';
import { ConfirmPasswordValidator } from 'src/app/validators/passwordMatch.validator';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
  
  signUpForm: FormGroup = this.fb.group({
    username: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]],
    confirmPassword: ['', [Validators.required]]
  },
  {
    validator: ConfirmPasswordValidator('password', 'confirmPassword'),
  });

  constructor(
    private helper: HelperService,
    private fb: FormBuilder,
    private dialog: Dialog,
  ){}

  get username() {
    return this.signUpForm.get('username');
  }

  get password() {
    return this.signUpForm.get('password');
  }

  get confirmPassword() {
    return this.signUpForm.get('confirmPassword');
  }

  get activeColor(): Observable<MenuColor> {
    return this.helper.brandColor$
  }

  closeDialog() {
    this.dialog.closeAll();
  }

  openSignInDialog() {
    this.closeDialog()
    this.dialog.open(SignInComponent, {
    });
  }

  handleSubmitForm(): void {
    if (!this.signUpForm.valid) return
    this.closeDialog()    
  }
}
