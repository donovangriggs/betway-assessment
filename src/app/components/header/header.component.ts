import { Dialog } from '@angular/cdk/dialog';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { MenuColor } from 'src/app/Enums/menu-tabs.enum';
import { HelperService } from 'src/app/services/helper.service';
import { SignInComponent } from '../dialogs/sign-in/sign-in.component';
import { SignUpComponent } from '../dialogs/sign-up/sign-up.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private helper: HelperService,
    private dialog: Dialog
  ) { }

  @ViewChild('signInButton') signInButton!: ElementRef<HTMLButtonElement>;
  @ViewChild('signUpButton') signUpButton!: ElementRef<HTMLButtonElement>;

  ngOnInit(): void {
  }

  openSignInDialog() {
    this.dialog.open(SignInComponent, {
    });
  }

  openSignUpDialog() {
    this.dialog.open(SignUpComponent, {
    });
  }

  get activeColor(): Observable<MenuColor> {
    return this.helper.brandColor$
  }

}
