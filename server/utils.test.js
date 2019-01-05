const { parsePathParameters }  = require('./utils');


describe('parsePathParameters', () => {
  test('should return an object', () => {
    expect(parsePathParameters('', '')).toBeDefined();
    expect(typeof parsePathParameters('', '')).toBe('object');
  });

  //
  // TODO: parsePathParameters のユニットテストを追加しよう
  //
  test('should return correct parameters', () => {
    const pathParameters = parsePathParameters('/posts/3/comments/4', '/posts/:postId/comments/:commentId');
    expect(pathParameters).toBeDefined();
    expect(pathParameters.postId).toBe(3);
    expect(pathParameters.commentId).toBe(4);
  });

  test('should return correct parameters', () => {
    const pathParameters = parsePathParameters('/post/33/comments/10', '/post/:postId/comments/:commentId');
    expect(pathParameters).toBeDefined();
    expect(pathParameters.postId).toBe(33);
    expect(pathParameters.commentId).toBe(10);
  });

  test('should return correct parameters', () => {
    const pathParameters = parsePathParameters('/post/test/comments/10', '/post/:postId/comments/:commentId');
    expect(pathParameters).toBeDefined();
    expect(pathParameters.postId).toBe(undefined);
  });
});
