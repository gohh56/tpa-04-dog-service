const dog = require('./dog');

const fetchDogById = (req, res) => {
  // myParams は middleware の parsePathForParameters関数内で定義されます。
  const { id } = req.myParams;
  // if dog exists 犬のデータをJSONとして返す
  // if dog does NOT exist ステータスを400に定義して、空のJSONを返す
  const dogData = dog.getDogById(id);
  if (dogData !== undefined) {
    res.send(dogData);
  } else {
    res.status(400).send('Bad Request');
  }
};

module.exports = {
  fetchDogById,
};
