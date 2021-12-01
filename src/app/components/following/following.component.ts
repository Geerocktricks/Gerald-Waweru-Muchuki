import { Component, OnInit } from '@angular/core';
import { GitHubServiceService } from '../../git-hub-service.service';
import { faFile } from '@fortawesome/free-solid-svg-icons';
import { faBackspace } from '@fortawesome/free-solid-svg-icons';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-following',
  templateUrl: './following.component.html',
  styleUrls: ['./following.component.css']
})
export class FollowingComponent implements OnInit {
  users;
  data;
  faFile = faFile;
  faBackspace = faBackspace;
  faExternalLinkAlt = faExternalLinkAlt;
  constructor(private profileService: GitHubServiceService) { }

  ngOnInit(): void {
    this.profileService.getFollowing()
    .subscribe(users =>{
      console.log(users);
      this.users = users;
    })
    this.profileService.getFollowers()
    .subscribe(users =>{
      console.log(users);
      this.users = users;
    })
    this.profileService.getMyProfile()
    .subscribe(data =>{
      console.log(data);
      this.data = data;
    })
  }

}
