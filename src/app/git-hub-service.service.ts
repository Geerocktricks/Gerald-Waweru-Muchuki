import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GitHubServiceService {
  myApiurl = 'https://api.github.com/users/geerocktricks';
  myReposUrl = 'https://api.github.com/users/Geerocktricks/repos';
  followersUrl = 'https://api.github.com/users/Geerocktricks/followers';
  followingUrl = 'https://api.github.com/users/Geerocktricks/following';
  constructor(private http: HttpClient) { }

  // Get my profile
  getMyProfile() {
    return this.http.get(`${this.myApiurl}`)
  }
// Get repos
  getRepos() {
    return this.http.get(`${this.myReposUrl}`)
  }

// Get Followers
getFollowers() {
  return this.http.get(`${this.followersUrl}`)
}

// Get Following
getFollowing() {
  return this.http.get(`${this.followingUrl}`)
}

 
}
