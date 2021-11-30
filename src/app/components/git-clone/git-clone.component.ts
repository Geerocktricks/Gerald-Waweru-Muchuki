import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-git-clone',
  templateUrl: './git-clone.component.html',
  styleUrls: ['./git-clone.component.css']
})
export class GitCloneComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('https://api.github.com/users/geerocktricks')
    .subscribe(data =>{
      console.log(data);
    })
  }

}
