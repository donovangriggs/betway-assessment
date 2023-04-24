import { Dialog } from '@angular/cdk/dialog';
import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs'
import { MenuColor } from 'src/app/Enums/menu-tabs.enum';
import { HelperService } from 'src/app/services/helper.service';
import { SignUpComponent } from '../sign-up/sign-up.component';

@Component({
  selector: 'app-forgot-user-pass',
  templateUrl: './forgot-user-pass.component.html',
  styleUrls: ['./forgot-user-pass.component.scss']
})
export class ForgotUserPassComponent {
  
  loginForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
  });

  constructor(
    private helper: HelperService,
    private fb: FormBuilder,
    private dialog: Dialog,
  ){}

  get email() {
    return this.loginForm.get('email');
  }

  get activeColor(): Observable<MenuColor> {
    return this.helper.brandColor$
  }

  closeDialog() {
    this.dialog.closeAll();
  }

  openSignUpDialog() {
    this.closeDialog()
    this.dialog.open(SignUpComponent, {
    });
  }

  handleSubmitForm(): void {
    if (!this.loginForm.valid) return
    this.closeDialog()
      
  }
}
