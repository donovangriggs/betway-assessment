import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs'
import { MenuColor } from '../Enums/menu-tabs.enum';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  brandColor$: BehaviorSubject<any> = new BehaviorSubject<any>(MenuColor.Green)
  isLoading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)
  username$: Subject<string> = new Subject<string>
  
  constructor() { }
}
