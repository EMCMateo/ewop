import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-futbol1',
  templateUrl: './futbol1.page.html',
  styleUrls: ['./futbol1.page.scss'],
})
export class Futbol1Page implements OnInit {

  constructor() { 
    
  }

  ngOnInit() {
    
  }
  public ocultar1: boolean = false;
  accion1(){
  this.ocultar1 = !this.ocultar1;
}}
