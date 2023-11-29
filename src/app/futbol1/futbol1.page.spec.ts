import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Futbol1Page } from './futbol1.page';

describe('Futbol1Page', () => {
  let component: Futbol1Page;
  let fixture: ComponentFixture<Futbol1Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Futbol1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
