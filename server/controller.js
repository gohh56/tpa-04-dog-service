const dog = require('./dog');

const fetchDogById = (req, res) => {
  // myParams は middleware の parsePathForParameters関数内で定義されます。
  const { id } = req.myParams;
  //
  // TODO
  //

  // if dog exists 犬のデータをJSONとして返す
  // if dog does NOT exist ステータスを400に定義して、空のJSONを返す
  const dogData = dog.getDogById(id);
  console.log(dogData);
  if (dogData !== undefined) {
    res.send(dogData);
  } else {
    res.status(400).send({});
  }

//  res.json({
//    id: -1,
//    name: 'Tim',
//    quote: 'Not a real dog',
//    imageUrl: 'https://fortunedotcom.files.wordpress.com/2015/03/9826_01_0153.jpg',
//  });
};

module.exports = {
  fetchDogById,
};
