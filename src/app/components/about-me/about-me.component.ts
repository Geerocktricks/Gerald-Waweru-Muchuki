import { Component, OnInit } from '@angular/core';
import { faDesktop } from '@fortawesome/free-solid-svg-icons';
import { faMobileAlt } from '@fortawesome/free-solid-svg-icons';
import { faChalkboardTeacher } from '@fortawesome/free-solid-svg-icons';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import { faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {
  myImage: string = 'assets/images/me.jpg';
  cikuImage: string = 'assets/images/ciku-Mock.jpeg';
  annImage: string = 'assets/images/Anne.jpg';
  benImage: string = 'assets/images/ben.jpeg';
  faDesktop = faDesktop;
  faMobile = faMobileAlt;
  faChalkboardTeacher = faChalkboardTeacher;
  faQuoteLeft = faQuoteLeft;
  faQuoteRight = faQuoteRight;
  btn = document.querySelector('.restartButton');
  constructor() { }


  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 600,
    navText: ['&#8249', '&#8250;'],
    responsive: {
      0: {
        items: 1 
      },
      400: {
        items: 2
      },
      760: {
        items: 3
      },
      1000: {
        items: 1
      }
    },
    nav: true
  }


  ngOnInit(): void {
  }

  openNav() {
    document.getElementById("mySidenav").style.width = "100%";
  }
  

}
