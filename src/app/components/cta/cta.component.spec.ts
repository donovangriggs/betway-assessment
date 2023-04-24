import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CtaComponent } from './cta.component';

describe('CtaComponent', () => {
  let component: CtaComponent;
  let fixture: ComponentFixture<CtaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CtaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CtaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call doSomethingFun() when clicked', waitForAsync(() => {
    spyOn(component, 'doSomethingFun');

    let button = fixture.debugElement.nativeElement.querySelector('button')
    button.click();
  
    fixture.whenStable().then(() => {
      expect(component.doSomethingFun).toHaveBeenCalled();
    });
  }));
});
