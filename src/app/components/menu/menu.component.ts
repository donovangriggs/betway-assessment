import { Component, OnInit } from '@angular/core';
import { MenuColor, MenuTab } from 'src/app/Enums/menu-tabs.enum';
import { MenuItem, menuData } from './menu-data';
import { HelperService } from 'src/app/services/helper.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  activeTab: MenuTab = MenuTab.Sports

  constructor(
    private helper: HelperService
  ) { }

  ngOnInit(): void {
  }

  get tabs(): MenuItem[] {
    return menuData
  }

  get activeColor(): Observable<MenuColor> {
    return this.helper.brandColor$
  }

  handleActiveTab(selectedTab: MenuItem): void {
    this.activeTab = selectedTab.name
    this.helper.brandColor$.next(selectedTab.color)
  }

}
