import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MenuColor } from 'src/app/Enums/menu-tabs.enum';
import { HelperService } from 'src/app/services/helper.service';

@Component({
  selector: 'app-cta',
  templateUrl: './cta.component.html',
  styleUrls: ['./cta.component.scss']
})
export class CtaComponent implements OnInit {

  constructor(
    private helper: HelperService,
    @Inject(DOCUMENT) private document: Document
  ) { }

  ngOnInit(): void {
  }

  doSomethingFun(){
    let count: number = 1
    const colors = [
      '#B8336A',
      '#726DA8',
      '#7D8CC4',
      '#A0D2DB',
      '#C490D1'
    ]
    this.document.body.classList.add('animate-spin')
    const interval = setInterval(() => {
      if(count <= 9){
        document.body.style.background = colors[Math.floor(Math.random()*colors.length)]
        count++
      } else {
        clearInterval(interval)
        this.document.body.classList.remove('animate-spin')
      }
    }, 100)
  }

  get activeColor(): Observable<MenuColor> {
    return this.helper.brandColor$
  }

}
