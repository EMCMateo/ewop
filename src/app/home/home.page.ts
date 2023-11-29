import { Component, OnInit, HostListener, ViewChild } from '@angular/core';
import { IonicSlides } from '@ionic/angular';
import { SwiperOptions } from 'swiper/types/swiper-options';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  slideOpts: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 10,
  };
  constructor() { }

  ngOnInit() {
  }
  swiperSlideChanged(e: any) {
    console.log('changed: ', e);
  }
  

}
