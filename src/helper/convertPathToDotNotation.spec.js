import convertPathToDotNotation from './convertPathToDotNotation';

const pathes = [
  {
    path: '',
    expectedResult: ''
  },
  {
    path: 'path.to.my.entry',
    expectedResult: 'path.to.my.entry'
  },
  {
    path: 'path/to/my/entry',
    expectedResult: 'path.to.my.entry'
  },
  {
    path: 'path["to"]["my"]["entry"]',
    expectedResult: 'path.to.my.entry'
  },
  {
    path: 'path/to["my"]/entry',
    expectedResult: 'path.to.my.entry'
  },
];

pathes.forEach(({ path, expectedResult}) => {
  test(`convert ${path}` , () => {
    expect(convertPathToDotNotation(path)).toBe(expectedResult);
  });
});