const user = {
  user: "Juan Camaron",
  account: "@juanBoss",
  bio: "Comerciante de mariscos",
  location: "Veracruz, MX",
  joined: "June 2012",
  following: 2599,
  followers: 428300,
  getUserPage: function () {
    return `${this.user}\n${this.account}\n${this.bio}\n${this.location}\tJoined ${this.joined}\nFollowing ${this.following}\tFollowers ${this.followers}`;
  },
};
console.log(user.getUserPage());
console.log();

const trending_topic = {
  place: 1,
  hashtag: "#GranFinalAllStar",
  tweet: {
    url: "https://twitter.com/ExatlonMx/status/1521000828248674304",
    user: "Exatlón México",
    verified: true,
    account: "@ExatlonMX",
    time: "11h",
    text: "La magia se hizo, el hechizo se concretó y KOKE alzó el trofeo más grande la historia. 🧙🏻‍♂️🏆🔵\n#GranFinalAllStar ⭐",
  },
  totalTweets: 40800,
  getTweet: function () {
    return `${this.tweet.user}\t${this.tweet.account}\t${this.tweet.time}
${this.tweet.text}`;
  },
  getTrendingTopic: function () {
    return `${this.place} - Trending
${this.hashtag}
${this.getTweet()}
${this.totalTweets} Tweets`;
  },
};
console.log(trending_topic.getTrendingTopic());
console.log();

const hashtag = {
  header: "Music - Trending",
  hashtag: "#NCT127",
  footer: "250K tweets",
  getHashtag: function () {
    return `${this.header}\n${this.hashtag}\n${this.footer}`;
  },
};

console.log(hashtag.getHashtag());