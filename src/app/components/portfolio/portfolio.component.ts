import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  myImage: string = 'assets/images/me.jpg';
  opened = false;
  constructor() { }

  ngOnInit(): void {
  }

}
