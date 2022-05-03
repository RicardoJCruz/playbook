export default class Hashtag {
    constructor(header, hashtag, footer) {
        this.header = header;
        this.hashtag = hashtag;
        this.footer = footer;
    }

    get getHeader() {  return this.header  };
    get getHashtag() {  return this.hashtag  };
    get getFooter() {  return this.footer  };

    set setHeader(header) {  this.header = header  };
    set setHashtag(hashtag) {  this.hashtag = hashtag  };
    set setFooter(footer) {  this.footer = footer  };

  getHashtagBody() {
    return `${this.header}\n${this.hashtag}\n${this.footer}`;
  }
}4