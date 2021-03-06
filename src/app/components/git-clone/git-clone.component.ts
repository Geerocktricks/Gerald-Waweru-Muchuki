import { Component, OnInit } from '@angular/core';
import { GitHubServiceService } from '../../git-hub-service.service';
import { faFile } from '@fortawesome/free-solid-svg-icons';
import { faBackspace } from '@fortawesome/free-solid-svg-icons';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-git-clone',
  templateUrl: './git-clone.component.html',
  styleUrls: ['./git-clone.component.css']
})
export class GitCloneComponent implements OnInit {
  data;
  repos;
  faFile = faFile;
  faBackspace = faBackspace;
  faExternalLinkAlt = faExternalLinkAlt;
  constructor(private profileService: GitHubServiceService) { }

  ngOnInit(): void {
    this.profileService.getMyProfile()
    .subscribe(data =>{
      console.log(data);
      this.data = data;
    })
    this.profileService.getRepos()
    .subscribe(repos => {
      console.log(repos);
      this.repos = repos;
    })
  }

}
