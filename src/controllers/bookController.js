const BookModel = require("../models/bookModel");

const createBook = async function (req, res) {
  let data = req.body;
  let savedData = await BookModel.create(data);
  res.send({ msg: savedData });
};

const getBooksData = async function (req, res) {
  let allBooks = await BookModel.find();
  res.send({ msg: allBooks });
};

const bookList = async function (req, res) {
  let allBookNameAuthor = await BookModel.find().select({bookName: 1, authorName: 1 });
  res.send({ msg: allBookNameAuthor });
};

const getBooksInYear = async function (req, res) {
  let year = req.query.year;
  console.log(year);
  let allbooks = await BookModel.find({ year: year });
  res.send({ msg: allbooks });
};

const getParticularBooks = async function (req, res) {
  let allBook= req.body
  console.log(tofind)
  let allbooks= await BookModel.find(tofind)
  res.send({ msg: allBooks});
};

const getXINRBooks = async function (req, res) {
  let INDPrice = await BookModel.find({
    "prices.indianprice": { $in: ["Rs400", "Rs500", "Rs600"] },
  });
  res.send({ msg: INDPrice });
};

const getRandomBooks = async function (req, res) {
  let GT500 = await BookModel.find({
    $or: [{ stockAvailable: true }, { totalPages: { $gt: 500 } }],
  });
  res.send({ msg: GT500 });
};

module.exports.createBook = createBook;
module.exports.getBooksData = getBooksData;
module.exports.bookList = bookList;
module.exports.getBooksInYear = getBooksInYear;
module.exports.getParticularBooks = getParticularBooks;
module.exports.getXINRBooks = getXINRBooks;
module.exports.getRandomBooks = getRandomBooks;
