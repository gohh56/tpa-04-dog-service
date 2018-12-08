/**
 * parsePathParameters
 *
 * この関数は二つの文字列を与えられます。
 * path parameters を見極めてオブジェクトを返しましょう。
 * path parameters は pathWithParams 文字列の/の間にある:xxx がパラメターとなります。
 * 下記の例をご覧ください：
 *
 * 入力: '/posts/3/comments/4', '/posts/:postId/comments/:commentId'
 * 出力: {
 *   postId: 3,
 *   commentId: 4
 * }
 */
const parsePathParameters = function(originalPath, pathWithParams) {
  //
  // TODO
  //
  // /で文字列を区切る
  // 正規表現で:始まりの要素を取得
  // 同じindexのoriginalPathの要素を取得
  // パラメータを返す
  const pathWithParamsArray = pathWithParams.split('/');
  const originalPathArray = originalPath.split('/');
  console.log(pathWithParamsArray);
  const pathParameters = {};
  pathWithParamsArray.forEach((element, index) => {
    if (element.match(/^:/)) pathParameters[element.slice(1)] = originalPathArray[index];
  });
  console.log(pathParameters);
  return pathParameters;
};

module.exports = {
  parsePathParameters,
};
