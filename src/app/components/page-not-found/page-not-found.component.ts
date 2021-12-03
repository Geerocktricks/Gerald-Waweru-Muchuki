import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent implements OnInit {
  myImage: string = 'assets/images/me.jpg';
  opened = false;
  constructor() { }

  ngOnInit(): void {
  }

}
