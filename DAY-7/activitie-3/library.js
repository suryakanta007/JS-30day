let library = {
  library1: {
    name: "Masti ki Patasala",
    books: ["C++", "DataStructer", "Javascript"],
  },
  library2: {
    name: "Chia aur books",
    books: ["Computer Networks", "You don't Know JavaScript"],
  },
  library3: {
    name: "THE Exielent",
    books: ["Java", "Oparating System", "C++"],
  },
};
console.log(library);
console.log("The Name of the 1st library is: " + library.library1.name);
console.log(
  "The books are presernt in that library :" + library.library1.books
);
