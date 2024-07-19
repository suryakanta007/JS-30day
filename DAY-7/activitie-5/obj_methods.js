let book = {
  title: "chai aur Javascript",
  author: "Hitesh sir",
  year: 2023,
};
for (let ele in book) {
  console.log(ele + ":" + book.ele);
}

console.log(Object.keys(book));
console.log(Object.values(book));
