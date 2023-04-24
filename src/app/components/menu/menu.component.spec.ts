import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MenuComponent } from './menu.component';
import { MenuColor, MenuTab } from 'src/app/Enums/menu-tabs.enum';

describe('MenuComponent', () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should change colors on tab select', () => {
    component.handleActiveTab({name: MenuTab.LiveAndReal, color: MenuColor.Blue})
    component.activeColor.subscribe(data => {
      expect(data).toEqual(MenuColor.Blue)
    })
  })
});
