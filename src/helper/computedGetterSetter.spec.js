import computedGetterSetter from './computedGetterSetter';

const myVar = computedGetterSetter('test');
test(`check for computed getter for path "test"` , () => {
  expect(typeof myVar.get).toBe('function');
});

test(`check for computed setter for path "test"` , () => {
  expect(typeof myVar.set).toBe('function');
});

test(`check if computed setter accepts one parameter"` , () => {
  expect(myVar.set.length).toBe(1);
});

