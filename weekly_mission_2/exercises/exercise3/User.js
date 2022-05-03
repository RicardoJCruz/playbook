export default class User {
  constructor(user, account, bio, location, joined, following, followers) {
    this.user = user;
    this.account = account;
    this.bio = bio;
    this.location = location;
    this.joined = joined;
    this.following = following;
    this.followers = followers;
  }

  get getUser() {  return this.user;  };
  get getAccount() {  return this.account  };
  get getBio() {  return this.bio  };
  get getLocation() {  this.location  };
  get getJoined() {  this.joined  };
  get getFollowing() {  this.following  };
  get getFollowers() {  this.followers  };

  set setUser(user) {  this.user = user  };
  set setAccount(account) {  this.account = account  };
  set setBio(bio) {  this.bio = bio  };
  set setLocation(location) {  this.location = location  };
  set setFollowing(following) {  this.following = following  };
  set setFollowers(followers) {  this.followers = followers  };

  getUserPage() {
    return `${this.user}\n${this.account}\n${this.bio}\n${this.location}\tJoined ${this.joined}\nFollowing ${this.following}\tFollowers ${this.followers}`;
  }
}
