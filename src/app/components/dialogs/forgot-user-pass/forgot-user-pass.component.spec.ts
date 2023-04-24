import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ForgotUserPassComponent } from './forgot-user-pass.component';
import { DialogModule } from '@angular/cdk/dialog';

describe('ForgotUserPassComponent', () => {
  let component: ForgotUserPassComponent;
  let fixture: ComponentFixture<ForgotUserPassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[DialogModule],
      declarations: [ ForgotUserPassComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForgotUserPassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should validate form correctly', waitForAsync(() => {
    component.loginForm.controls['email'].setValue('email@email.com');
    expect(component.loginForm.valid).toBeTrue();

    component.loginForm.controls['email'].setValue('email');
    expect(component.loginForm.valid).toBeFalse();
  }));
});
