import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {
  myImage: string = 'assets/images/me.jpg';
  constructor() { }

  ngOnInit(): void {
  }

}
