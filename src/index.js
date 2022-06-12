const {file, parse} = require('./globals');

function component() {
  const element = document.createElement('div');

  // element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.innerHTML = join(['Hello', 'webpack'], ' ');

  this.alert("Hmmm, this probably isn't a great idea...");

  console.log(file);
  parse();

  return element;
}

document.body.appendChild(component());