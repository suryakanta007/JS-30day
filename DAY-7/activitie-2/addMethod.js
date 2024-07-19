let book = {
  title: "chai aur Javascript",
  author: "Hitesh sir",
  year: 2023,
  show: function () {
    console.log(`Wellcome to ${book.title} by ${book.author} `);
  },
  //added a method that take year and update the year property.
  changeYear: function (date) {
    book.year = date;
  },
};
book.show();
book.changeYear(2024);
console.log(book);
