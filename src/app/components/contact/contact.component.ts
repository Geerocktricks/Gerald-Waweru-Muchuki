import { Component, OnInit } from '@angular/core';
import { faEnvelope }  from '@fortawesome/free-solid-svg-icons';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  myImage: string = 'assets/images/me.jpg';
  faEnvelope = faEnvelope;
  faCheckCircle = faCheckCircle;
  opened = false;
  constructor() { }

  ngOnInit(): void {
  }

}
