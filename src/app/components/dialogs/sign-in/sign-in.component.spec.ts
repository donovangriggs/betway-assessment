import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SignInComponent } from './sign-in.component';
import { DialogModule } from '@angular/cdk/dialog';
import { HttpClientModule } from '@angular/common/http';
import { HttpService } from 'src/app/services/http.service';
import { of } from 'rxjs';

describe('SignInComponent', () => {
  let component: SignInComponent;
  let fixture: ComponentFixture<SignInComponent>;

  const httpServiceStub: HttpService = jasmine.createSpyObj(HttpService, {
    login: of({}),
  });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogModule, HttpClientModule],
      declarations: [SignInComponent],
      providers: [
        {
          provide: HttpService,
          useValue: httpServiceStub,
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(SignInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call openSignUpDialog() when clicked', waitForAsync(() => {
    spyOn(component, 'openSignUpDialog');

    let button = fixture.debugElement.nativeElement.querySelector('#register');
    button.click();

    fixture.whenStable().then(() => {
      expect(component.openSignUpDialog).toHaveBeenCalled();
    });
  }));

  it('should call openForgotUserPassDialog() when clicked', waitForAsync(() => {
    spyOn(component, 'openForgotUserPassDialog');

    let button = fixture.debugElement.nativeElement.querySelector('#forgot');
    button.click();

    fixture.whenStable().then(() => {
      expect(component.openForgotUserPassDialog).toHaveBeenCalled();
    });
  }));

  it('should validate form correctly', waitForAsync(() => {

    component.loginForm.controls['username'].setValue('email@email.com');
    component.loginForm.controls['password'].setValue('password');

    expect(component.loginForm.valid).toBeTrue();

    component.loginForm.controls['username'].setValue('email');
    component.loginForm.controls['password'].setValue('p');

    expect(component.loginForm.valid).toBeFalse();

  }));

  it('should call login() on HttpService if form is valid', waitForAsync(() => {
    component.loginForm.controls['username'].setValue('email@email.com');
    component.loginForm.controls['password'].setValue('password');

    component.handleSubmitForm();

    expect(httpServiceStub.login).toHaveBeenCalled();
  }));
});
