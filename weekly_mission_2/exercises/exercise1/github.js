// Objeto repo
const repo = {
  name: "LaunchX",
  author: "carlogilmar",
  language: "JavaScript",
  numberOfCommits: 100,
  stars: 199,
  forks: 299,
  issues_open: 10,
  issues_close: 10,
  getTotalIssues: function () {
    return this.issues_open + this.issues_close;
  },
  getGeneralInfo: function () {
    return `This repository ${this.name} was created by ${this.author}`;
  },
};

console.log("Nombre del repo:" + repo.name);
console.log("Issues totales: " + repo.getTotalIssues());
console.log(repo.getGeneralInfo());

// Objeto issue
const issue = {
  title: "13 Live 1 Semana 5 [Martes 3 mayo 7 PM]",
  repositoryNameAssociated: "MissionNodeJS",
  status: "Open",
  numberOfComments: 0,
  labels: ["LIVE1", "Semana-5"],
  author: "carlogilmar",
  dateCreated: "May 1, 2022",
  lastUpdated: "9 hours ago",
  getTitleAndAutor: function () {
    return `This issue "${this.title}" is made by ${this.author}`;
  },
  getGeneralInfo: function () {
    return `${this.title}\t${this.labels}\n${this.lastUpdated} ${this.author}`;
  },
};

console.log(issue.dateCreated);
console.log(issue.getTitleAndAutor());
console.log(issue.getGeneralInfo());

// objeto pullRequest
const pullRequest = {
  title: "Cambio de nombres",
  branchName: "main",
  dateCreated: new Date(),
  status: "Open",
  repositoryNameAssociated: "MissionNodeJS",
  getStatus: function () {
    return this.status;
  },
  getTitleAndAutor: function (author) {
    return `This pull request "${this.title}" is made by ${author}`;
  },
};

console.log(`Status: ${pullRequest.getStatus()}`);
console.log(pullRequest.getTitleAndAutor("Juan"));