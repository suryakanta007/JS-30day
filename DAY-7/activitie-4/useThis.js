let book = {
  title: "chai aur Javascript",
  author: "Hitesh sir",
  year: 2023,
  getDetails: function () {
    return `${this.title} is publiced in ${this.year}`;
  },
};
console.log(book.getDetails());
