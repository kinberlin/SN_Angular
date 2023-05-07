export interface Region{
  id: number;
  label: string;

}


import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  regions: Region[] = [
    {'id':1,'label':'ouest'},
    {'id':2,'label':'North'},
    {'id':3,'label':'ouest'},
    {'id':4,'label':'ouest'},
    {'id':5,'label':'ouest'},
    {'id':6,'label':'ouest'},
  ]

}
