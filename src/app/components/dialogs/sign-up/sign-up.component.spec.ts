import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SignUpComponent } from './sign-up.component';
import { DialogModule } from '@angular/cdk/dialog';

describe('SignUpComponent', () => {
  let component: SignUpComponent;
  let fixture: ComponentFixture<SignUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[DialogModule],
      declarations: [ SignUpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call openSignInDialog() on click', () => {
    spyOn(component, 'openSignInDialog');

    let button = fixture.debugElement.nativeElement.querySelector('#signIn');
    button.click();

    fixture.whenStable().then(() => {
      expect(component.openSignInDialog).toHaveBeenCalled();
    });
  });

  it('should validate form correctly', waitForAsync(() => {

    component.signUpForm.controls['username'].setValue('email@email.com');
    component.signUpForm.controls['password'].setValue('password');
    component.signUpForm.controls['confirmPassword'].setValue('password');

    expect(component.signUpForm.valid).toBeTrue();

    component.signUpForm.controls['username'].setValue('email');
    component.signUpForm.controls['password'].setValue('p');
    component.signUpForm.controls['confirmPassword'].setValue('password');

    expect(component.signUpForm.valid).toBeFalse();

  }));

  
});
