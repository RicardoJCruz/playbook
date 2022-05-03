import User from "./User.js";
import TrendingTopic from "./TrendingTopic.js";
import Hashtag from "./Hashtag.js";

const user = new User(
  "Jared Leto",
  "@JaredLeto",
  "",
  "IG/NAPCHAT/TIK TOK: JaredLeto",
  "March 2009",
  4,
  4200000
);
console.log("Twitter user:\n" + user.getUserPage() + "\n");

const tt = new TrendingTopic(
  7,
  "Bad Bunny",
  "Bad Bunny anunció que este 6 de mayo se estrena 'Un Verano Sin Ti' 🌞",
  124000
);
tt.setTweet;
console.log("Trending topic:\n" + tt.getTrendingTopic() + "\n");

const ht = new Hashtag("Trending in Mexico", "#DoctorStrange", "Trending with #MultiverOfMadness, #ScarletWitch")
console.log("Hashtag:\n" + ht.getHashtagBody());