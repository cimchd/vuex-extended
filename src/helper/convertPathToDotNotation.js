export default function convertPathToDotNotation(path) {
  // convert slash syntax to dot syntax
  let pathModified = path.replace(/\//g, '.');
  // convert bracket syntax to dot syntax
  pathModified = pathModified.replace(/\["/g, '.');
  pathModified = pathModified.replace(/\['/g, '.');
  pathModified = pathModified.replace(/\[/g, '.');
  pathModified = pathModified.replace(/"]/g, '');
  pathModified = pathModified.replace(/']/g, '');
  pathModified = pathModified.replace(/]/g, '');

  return pathModified;
}