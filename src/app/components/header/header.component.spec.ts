import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { Dialog, DialogModule } from '@angular/cdk/dialog';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[DialogModule],
      declarations: [ HeaderComponent ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call openSignInDialog when clicked', waitForAsync(() => {
    spyOn(component, 'openSignInDialog');

    let button = component.signInButton.nativeElement
    button.click();
  
    fixture.whenStable().then(() => {
      expect(component.openSignInDialog).toHaveBeenCalled();
    });
  }));

  it('should call openSignUpDialog when clicked', waitForAsync(() => {
    spyOn(component, 'openSignUpDialog');

    let button = component.signUpButton.nativeElement
    button.click();
  
    fixture.whenStable().then(() => {
      expect(component.openSignUpDialog).toHaveBeenCalled();
    });
  }));
});
