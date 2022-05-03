export default class TrendingTopic {
    constructor(place, title, description, totalTweets) {
        this.place = place;
        this.title = title;
        this.totalTweets = totalTweets;
        this.description = description;
    }

    get getPlace() {  return this.place  };
    get getTitle() {  return this.title  };
    get getTotalTweets() {  return this.totalTweets  };
    get getDescription() {  return this.description  };

    set setPlace(place) {  this.place = place  };
    set setTitle(title) {  this.title = title  };
    set setDescription(description) {  this.description = description  };
    set setTotalTweets(totalTweets) {  this.totalTweets = totalTweets  };

    getTrendingTopic () {
      return `${this.place} - Trending\n${this.title}\n${this.description}\n${this.totalTweets} Tweets`;
    }
}