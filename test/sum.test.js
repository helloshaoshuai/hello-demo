import functions  from '../sum';
test('sum(2 + 2) 等于 4', () => {
    expect(functions.sum(2, 2)).toBe(4);
  });
  test('getAuthor()返回的对象深度相等', () => {
    expect(functions.getAuthor()).toEqual(functions.getAuthor());
  });
  test('getIntArray(3)返回的数组长度应该为3', () => {
    expect(functions.getIntArray(3)).toHaveLength(3);
  });
  test('fetchUser() 可以请求到一个含有name属性值为Leanne Graham的对象', () => {
    expect.assertions(1);
    return functions.fetchUser()
      .then(data => {
        expect(data.name).toBe('Leanne Graham');
      });
  })
